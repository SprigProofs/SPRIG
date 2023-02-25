/*
This contains all the logic of sprig, from the communication with the server
to the processing of the data.
*/

import _ from "lodash";
import dayjs from "dayjs/esm";
import duration from "dayjs/esm/plugin/duration";
import relativeTime from "dayjs/esm/plugin/relativeTime"; // for .humanize(  / fromNow()
import calendar from "dayjs/esm/plugin/calendar"; // for .calendar()
import advancedFormat from "dayjs/esm/plugin/advancedFormat";
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(advancedFormat);

import { ElNotification } from "element-plus";

/**
 * Constants
 */

enum Unit {
  DAYS = "day",
  HOURS = "hour",
  MINUTES = "minute",
}

enum Status {
  CHALLENGED = "challenged",
  UNCHALLENGED = "unchallenged",
  VALIDATED = "validated",
  REJECTED = "rejected",
}

const STATUSES = [
  Status.VALIDATED,
  Status.REJECTED,
  Status.CHALLENGED,
  Status.UNCHALLENGED,
];
const STATUS_DISPLAY_NAME = {
  [Status.CHALLENGED]: "Challenged",
  [Status.UNCHALLENGED]: "Unchallenged",
  [Status.VALIDATED]: "Validated",
  [Status.REJECTED]: "Rejected",
};

function decided(status: Status) {
  return status === Status.VALIDATED || status === Status.REJECTED;
}

class Parameters {
  readonly rootHeight: number;
  readonly maxLength: number;
  readonly timeForQuestions: duration.Duration;
  readonly timeForAnswers: duration.Duration;
  readonly upstakes: number[];
  readonly downstakes: number[];
  readonly questionBounties: number[];
  readonly verificationCost: number;

  constructor(params: Record<string, any>) {
    this.rootHeight = params.rootHeight || params.root_height;
    this.maxLength = params.maxLength || params.max_length;
    this.timeForQuestions = dayjs.duration(
      params.timeForQuestions?.asMilliseconds() ||
      params.timeForQuestions ||
      params.time_for_questions
    );
    this.timeForAnswers =
      dayjs.duration(
        params.timeForAnswers?.asMilliseconds() ||
        params.timeForAnswers ||
        params.time_for_answers
      ) || params.timeForAnswers;
    this.upstakes = params.upstakes;
    this.downstakes = params.downstakes;
    this.questionBounties = params.questionBounties || params.question_bounties;
    this.verificationCost = params.verificationCost || params.verification_cost;
  }
  costToChallenge(attempt: ProofAttempt): number {
    if (attempt.height === 0) {
      return undefined;
    } else {
      return this.questionBounties[attempt.height];
    }
  }
  toServer() {
    return {
      root_height: this.rootHeight,
      max_length: this.maxLength,
      time_for_questions: this.timeForQuestions.asSeconds(),
      time_for_answers: this.timeForAnswers.asSeconds(),
      upstakes: this.upstakes,
      downstakes: this.downstakes,
      question_bounties: this.questionBounties,
      verification_cost: this.verificationCost,
    };
  }
}

class ProofAttempt {
  hash: string;
  parent?: string; // hash of the parent challenge, if any
  author: string;
  contract: string;
  proof: string;
  height: number;
  status: Status;
  createdAt: dayjs.Dayjs;
  challenges: string[];
  instanceHash: string;

  constructor(attempt: Record<string, any>) {
    this.hash = attempt.hash || attempt.contract;
    this.parent = attempt.parent;
    this.author = attempt.author;
    this.contract = attempt.contract;
    this.proof = attempt.proof;
    this.height = attempt.height;
    this.status = attempt.status;
    this.createdAt = dayjs(attempt.created_at || attempt.createdAt);
    this.challenges = attempt.challenges;
    this.instanceHash = attempt.instance_hash || attempt.instanceHash;
  }

  uid(): string {
    return "#" + this.instanceHash + "/" + this.hash;
  }
  isRoot(): boolean {
    return this.parent === null;
  }
  decided() {
    return decided(this.status);
  }
  /**
   * Return the total stake on the attempt (up + down)
   * @param params Parameters of the sprig instance
   */
  stakeHeld(params: Parameters): number {
    if (!decided(this.status)) {
      return params.upstakes[this.height] + params.downstakes[this.height];
    } else {
      return 0;
    }
  }
  /**
   * How much one can expect to win by challenging or submiting a proof.
   * @param params Parameters of the sprig instance
   */
  possibleReward(params: Parameters): number {
    if (this.status === Status.CHALLENGED) {
      return params.questionBounties[this.height];
    } else if (this.status === Status.UNCHALLENGED) {
      return params.downstakes[this.height];
    } else {
      return 0;
    }
  }
  expires(instance: Sprig): dayjs.Dayjs {
    const challenges = this.challenges.map((c) => instance.challenges[c]);
    // If there are no challenges, it is a machine claim, decided as soon as it is created.
    // otherwise, we take the earliest deadline.
    return (
      _.minBy(challenges, (c) => c.openUntil.millisecond())?.openUntil ||
      this.createdAt
    );
  }
}

class Challenge {
  hash: string;
  parent: string; // hash of the parent proot attempt, if any
  author?: string;
  contract?: string;
  createdAt: dayjs.Dayjs;
  challengedAt?: dayjs.Dayjs;
  openUntil: dayjs.Dayjs;
  attempts: string[];
  status: Status;
  height: number;
  instanceHash: string;

  constructor(challenge: Record<string, any>) {
    this.hash = challenge.hash;
    this.parent = challenge.parent;
    this.author = challenge.author;
    this.contract = challenge.contract;
    this.createdAt = dayjs(challenge.created_at || challenge.createdAt);
    const challengedAt = challenge.challenged_at || challenge.challengedAt;
    this.challengedAt = challengedAt ? dayjs(challengedAt) : null;
    this.openUntil = dayjs(challenge.open_until || challenge.openUntil);
    this.attempts = challenge.attempts;
    this.status = challenge.status;
    this.height = challenge.height;
    this.instanceHash = challenge.instance_hash || challenge.instanceHash;
  }
  uid(): string {
    return "#" + this.instanceHash + "/" + this.hash;
  }
  decided(): boolean {
    return decided(this.status);
  }
  possibleReward(params: Parameters): number {
    return this.status === Status.CHALLENGED
      ? params.questionBounties[this.height]
      : 0;
  }
  costAddAttempt(
    params: Parameters,
    isMachine: boolean = false
  ): number | null {
    const attemptHeight = this.height - 1;
    if (this.status != Status.CHALLENGED) {
      return null;
    } else if (isMachine || attemptHeight == 0) {
      return params.verificationCost + params.upstakes[attemptHeight];
    } else if (this.height >= params.rootHeight || this.height <= 0) {
      return null;
    } else {
      return params.upstakes[attemptHeight] + params.downstakes[attemptHeight];
    }
  }
}

enum Action {
  ROOT_CREATED = "root_created",
  // PARENT_CHALLENGED = "parent_challenged",
  ATTEMPT_CREATED = "attempt_created",
  CHALLENGE_ACTIVATED = "challenge_activated",
  // CHALLENGE_ANSWERED = "challenge_answered",
  AUTO_VALIDATION = "auto_validation",
  CHALLENGE_REJECTED = "challenge_rejected",
  CHALLENGE_VALIDATED = "challenge_validated",
  ATTEMPT_VALIDATED = "attempt_validated",
  ATTEMPT_REJECTED = "attempt_rejected",
  MACHINE_VALIDATED = "machine_verified",
  MACHINE_REJECTED = "machine_rejected",
}

type ActionList = {
  time: dayjs.Dayjs;
  type: Action;
  author?: string;
  cost?: number;
  attempt?: ProofAttempt;
  challenge?: Challenge;
  challenges?: Challenge[];
}[];

class Sprig {
  hash: string;
  language: string;
  params: Parameters;
  proofs: Record<string, ProofAttempt>;
  challenges: Record<string, Challenge>;
  rootQuestion: string;
  rootHash: string;

  constructor(sprig: Record<string, any>) {
    this.hash = sprig.hash;
    this.language = sprig.language;
    this.params = new Parameters(sprig.params);
    this.proofs = _.mapValues(sprig.proofs, (proof) => {
      proof.instanceHash = sprig.hash;
      return new ProofAttempt(proof);
    });
    this.challenges = _.mapValues(sprig.challenges, (challenge) => {
      challenge.instanceHash = sprig.hash;
      return new Challenge(challenge);
    });
    this.rootQuestion = sprig.rootQuestion || sprig.root_question;
    this.rootHash = sprig.rootHash || sprig.root_hash;
  }

  equals(other: Sprig): boolean {
    // this reason we con't use _.isEqual is that the order
    // of proofs in Challenge.attempts is not specified
    // so we need to sort them before comparing.
    console.log("comparing", this, other);
    const hash = this.hash === other.hash;
    console.log("hash", hash);
    const language = this.language === other.language;
    console.log("language", language);
    const params = _.isEqual(this.params, other.params);
    console.log("params", params);
    const proofs = _.isEqual(this.proofs, other.proofs);
    console.log("proofs", proofs);
    const rootQuestion = this.rootQuestion === other.rootQuestion;
    console.log("rootQuestion", rootQuestion);
    const challenges = _.isEqual(
      _.mapValues(this.challenges, (c) => ({
        ...c,
        attempts: _.sortBy(c.attempts),
      })),
      _.mapValues(other.challenges, (c) => ({
        ...c,
        attempts: _.sortBy(c.attempts),
      }))
    );
    console.log("challenges", challenges);
    const rootHash = this.rootHash === other.rootHash;
    console.log("rootHash", rootHash);
    return hash && language && params && proofs && rootQuestion && challenges;
  }

  uid(): string {
    return "#" + this.hash;
  }
  totalBounties() {
    const openAttempts = _.sumBy(_.values(this.proofs), (proof) =>
      proof.stakeHeld(this.params)
    );
    const openChallenges = _.sumBy(_.values(this.challenges), (challenge) =>
      challenge.possibleReward(this.params)
    );
    return openAttempts + openChallenges;
  }
  rootAttempt() {
    console.log("rootHash", this.rootHash, this.proofs);
    return this.proofs[this.rootHash];
  }
  author() {
    return this.rootAttempt().author;
  }
  count(status: Status) {
    return _.sum(
      _.map(this.challenges, (challenge) =>
        challenge.status === status ? 1 : 0
      )
    );
  }
  counts() {
    return {
      [Status.CHALLENGED]: this.count(Status.CHALLENGED),
      [Status.UNCHALLENGED]: this.count(Status.UNCHALLENGED),
      [Status.VALIDATED]: this.count(Status.VALIDATED),
      [Status.REJECTED]: this.count(Status.REJECTED),
    };
  }
  actions(attempt: ProofAttempt): ActionData[] {
    const actions: ActionList = [];

    return this.allActions().filter((action) => {
      if (action.target instanceof ProofAttempt) {
        return (
          action.target.hash === attempt.hash ||
          attempt.challenges.includes(action.target.parent)
        );
      } else if (action.target instanceof Challenge) {
        return (
          action.target.hash === attempt.parent ||
          attempt.challenges.includes(action.target.hash)
        );
      } else if (action.target instanceof Sprig) {
        return action.target.rootAttempt().hash === attempt.hash;
      } else {
        return action.target[0].parent === attempt.hash;
      }
    });
  }
  /**
   * Return a list of all the actions that happened in the sprig instance.
   */
  allActions(): ActionData[] {
    const actions: ActionData[] = [];

    // Creation of the instance
    actions.push({
      time: this.rootAttempt().createdAt,
      depth: this.params.rootHeight,
      type: Action.ROOT_CREATED,
      target: this,
    });

    // Creation of attempts
    _.forEach(this.proofs, (proof) => {
      if (proof.parent) {
        // The root proof attempt uses ROOT_CREATED
        actions.push({
          time: proof.createdAt,
          depth: proof.height,
          type: Action.ATTEMPT_CREATED,
          target: proof,
        });
      }
    });

    // Activation of the challenges
    _.forEach(this.challenges, (challenge) => {
      if (challenge.author !== null) {
        actions.push({
          time: challenge.challengedAt,
          depth: challenge.height,
          type: Action.CHALLENGE_ACTIVATED,
          target: challenge,
        });
      }
    });

    // Challenge auto-validation
    _.forEach(this.proofs, (proof) => {
      const challenges = proof.challenges.map(
        (challenge) => this.challenges[challenge]
      );
      const autoValidated = challenges.filter(
        (challenge) =>
          challenge.author === null && challenge.status === Status.VALIDATED
      );
      if (autoValidated.length > 0) {
        actions.push({
          time: autoValidated[0].openUntil, // All should have the same openUntil
          depth: proof.height,
          type: Action.AUTO_VALIDATION,
          target: autoValidated,
        });
      }
    });

    // Challenge validation and rejection
    _.forEach(this.challenges, (challenge) => {
      if (challenge.author === null) return;

      if (challenge.status === Status.VALIDATED) {
        const validated = challenge.attempts
          .map((attempt) => this.proofs[attempt])
          .filter((proof) => proof.status === Status.VALIDATED);
        const validating = _.minBy(validated, (attempt) =>
          attempt.expires(this)
        );
        actions.push({
          time: validating.expires(this),
          depth: challenge.height,
          type: Action.CHALLENGE_VALIDATED,
          target: validating,
        });
      } else if (challenge.status === Status.REJECTED) {
        actions.push({
          time: challenge.openUntil,
          depth: challenge.height,
          type: Action.CHALLENGE_REJECTED,
          target: challenge,
        });
      }
    });

    // Attempt validation and rejection
    _.forEach(this.proofs, (proof) => {
      if (proof.height === 0) {
        actions.push({
          time: proof.createdAt,
          depth: proof.height,
          type:
            proof.status === Status.VALIDATED
              ? Action.MACHINE_VALIDATED
              : Action.MACHINE_REJECTED,
          target: proof,
        });
      } else {
        if (proof.status === Status.VALIDATED) {
          actions.push({
            time: proof.expires(this),
            depth: proof.height,
            type: Action.ATTEMPT_VALIDATED,
            target: proof,
          });
        } else if (proof.status === Status.REJECTED) {
          const rejected = proof.challenges
            .map((challenge) => this.challenges[challenge])
            .filter((challenge) => challenge.status === Status.REJECTED);
          const rejecting = _.minBy(
            rejected,
            (challenge) => challenge.openUntil
          );
          actions.push({
            time: rejecting.openUntil,
            depth: proof.height,
            type: Action.ATTEMPT_REJECTED,
            target: rejecting,
          });
        }
      }
    });

    return _.sortBy(actions, (action) => [action.time.unix(), action.depth]);
  }

  /**
   * Compute the maximum reward someone can get by interacting with a challenge (challenging or proving).
   * @param challenge The challenge hash on which an action might be taken.
   */
  maxRewardIfAction(challenge: string): number {
    const chal = this.challenges[challenge];
    if (chal.decided()) {
      return 0;
    } else if (chal.status === Status.CHALLENGED) {
      return this.params.questionBounties[chal.height];
    } else {
      // UNCHALLENGED
      const attempt = this.proofs[chal.parent];
      if (attempt.status == Status.CHALLENGED) {
        return this.params.downstakes[chal.height];
      } else {
        return 0;
      }
    }
  }
  static majority(instances: (Sprig | null)[]): Sprig | null {
    for (const result of instances) {
      var votes = 0;
      for (const other of instances) {
        if (result && other && result.equals(other)) {
          votes += 1;
        }
      }
      if (votes > instances.length / 2.0) {
        return result;
      }
    }
    return null;
  }
}

interface ActionData {
  time: dayjs.Dayjs;
  depth: number;
  type: Action;
  target: Challenge | ProofAttempt | Sprig | Challenge[];
}

class User {
  name: string;
  balance: number;
  challenges: Challenge[];
  attempts: ProofAttempt[];
  constructor(name: string, balance: number, instances: Record<string, Sprig>) {
    this.name = name;
    this.balance = balance;
    this.challenges = [];
    this.attempts = [];
    _.forEach(instances, (instance) => {
      _.forEach(instance.challenges, (challenge) => {
        if (challenge.author === name) {
          this.challenges.push(challenge);
        }
      });
      _.forEach(instance.proofs, (proof) => {
        if (proof.author === name) {
          this.attempts.push(proof);
        }
      });
    });
  }
  countAttempts(...status: Status[]): number {
    return _.sum(
      _.map(this.attempts, (attempt) =>
        status.includes(attempt.status) ? 1 : 0
      )
    );
  }
  countChallenges(...status: Status[]): number {
    return _.sum(
      _.map(this.challenges, (challenge) =>
        status.includes(challenge.status) ? 1 : 0
      )
    );
  }
}

const isLocalhost =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

const API_BASES = isLocalhost
  ? [
    "http://localhost:8601/",
    "http://localhost:8602/",
    "http://localhost:8603/",
  ]
  : [
    "https://sprig.therandom.space/api/",
    "https://sprig2.therandom.space/api/",
    "https://sprig3.therandom.space/api/",
  ];

console.log(location.hostname, isLocalhost, API_BASES);

/**
 * Inform about an error.
 * @param title Title of the notification to send.
 * @param message Content of the notification to send.
 * @param data More data to log to the console.
 */
function logFail(title: string, message: string, data: any) {
  console.error(title, message, data);
  ElNotification.error({ title, message, duration: 0 });
}
const api = {
  async get(path: string[], apiBase: string): Promise<any> {
    const url = apiBase + path.join("/");
    const resp = await fetch(url).catch((err) => {
      logFail(
        "Error while fetching data",
        "One backend may be down. This is fine as long as " + Math.ceil(API_BASES.length / 2 + 0.5) + " out of " + API_BASES.length + " are up.",
        { url, err }
      );
      return Promise.reject(err);
    });
    if (resp.ok) {
      return await resp.json().catch((err) => {
        logFail(
          "Failed to parse JSON",
          "This a website internal error, please report it.",
          { url, err, resp }
        );
        return Promise.reject(err);
      });
    } else {
      const data = await resp.json();
      logFail(data.detail, "", data);
      throw new Error(data);
    }
  },
  async fetchAllInstances(): Promise<Record<string, Sprig>> {
    const results = await Promise.all(
      API_BASES.map((apiBase) =>
        this.get(["everything"], apiBase)
          .then((data) => _.mapValues(data, (s) => new Sprig(s)))
          .catch((err) => ({} as Record<string, Sprig>))
      ));

    console.log("fetchAllInstances (before majority)", results);
    const all_keys = _.uniq(_.flatten(results.map((r) => Object.keys(r))));
    const all_instances = all_keys.map((k) =>
      Sprig.majority(results.map((r) => r[k]))
    );
    const record = _.zipObject(all_keys, all_instances);
    console.log("fetchAllInstances (after majority)", record);
    // Filter out nulls
    return _.pickBy(record, (v) => v !== null);

  },

  // async fetchInstance(hash: string): Promise<Sprig> {
  //     return await this.get([hash])
  //         .then(data => new Sprig(data));
  // },
  async post(
    path: string[],
    query: Record<string, string>,
    body: any,
    apiBase: string
  ): Promise<any> {
    const url = new URL(apiBase + path.join("/"));
    for (const key of Object.keys(query)) {
      url.searchParams.append(key, query[key]);
    }
    console.log("post url", url, "body", body);
    const resp = await fetch(url.toString(), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: body ? JSON.stringify(body) : "",
    }).catch((err) => {
      logFail(
        "Error with posting data",
        "One backend may be down. This is fine as long as " + Math.ceil(API_BASES.length / 2 + 0.5) + " out of " + API_BASES.length + " are up.",
        { url, err, body }
      );
      return Promise.reject(err);
    });

    if (resp.ok) {
      return await resp.json().catch((err) => {
        logFail(
          "Failed to parse JSON",
          "This a website internal error, please report it.",
          { url, err, resp }
        );
        return Promise.reject(err);
      });
    } else {
      const data = await resp.json();
      logFail(data.detail, "", data);
      throw new Error(data);
    }
  },

  async challenge(
    instanceHash: string,
    challengeHash: string,
    skeptic: string,
    contract: string,
    createdAt: dayjs.Dayjs
  ): Promise<void> {
    const results = API_BASES.map((apiBase) =>
      this.post(
        ["challenge", instanceHash, challengeHash],
        {
          skeptic,
          contract,
          created_at: createdAt.valueOf().toString(),
        },
        null,
        apiBase
      )
    );
    return await Promise.all(results).then(() => null);
    // We don't return anything here,
    // challenges reload the whole store anyway
    // and the server doesn't return anything we did not already know.
  },

  async newInstance(
    language: string,
    params: Parameters,
    author: string,
    rootClaim: string,
    proof: string,
    contract: string,
    createdAt: dayjs.Dayjs
  ): Promise<Sprig> {
    const results: (Sprig | null)[] = await Promise.all(
      API_BASES.map((apiBase) =>
        this.post(
          ["instances"],
          {},
          {
            language: language,
            author: author,
            params: {
              root_height: params.rootHeight,
              max_length: params.maxLength,
              time_for_questions: params.timeForQuestions.asMilliseconds(),
              time_for_answers: params.timeForAnswers.asMilliseconds(),
              upstakes: params.upstakes,
              downstakes: params.downstakes,
              question_bounties: params.questionBounties,
              verification_cost: params.verificationCost,
            },
            root_claim: rootClaim,
            proof: proof,
            contract: contract,
            created_at: createdAt.valueOf(),
          },
          apiBase
        )
          .then((data) => new Sprig(data))
          .catch((err) => null)
      ) // We don't want to fail if one of the API fails
    );

    // return the majority result
    const majority = Sprig.majority(results);

    if (majority) {
      return majority;
    } else {
      logFail("Failed to create instance, backends disagree", "", { results });
      throw new Error("Failed to create instance, backends disagree");
    }
  },
  async newProofAttempt(
    instanceHash: string,
    challengeHash: string,
    isMachineLevel: boolean,
    proof: string,
    author: string,
    contract: string,
    createdAt: dayjs.Dayjs
  ): Promise<ProofAttempt> {
    const results = await Promise.all(
      API_BASES.map((apiBase) =>
        this.post(
          ["proof", instanceHash, challengeHash],
          {},
          {
            contract,
            author,
            statement: proof,
            machine_level: isMachineLevel,
            created_at: createdAt.valueOf(),
          },
          apiBase
        ).then((data) => new ProofAttempt({ instanceHash, ...data }))
          .catch((err) => null)
      )
    );

    // return the majority result
    for (const result of results) {
      var votes = 0;
      for (const other of results) {
        if (result && other && _.isEqual(result, other)) {
          votes += 1;
        }
      }
      if (votes > results.length / 2) {
        return result;
      }
    }

    logFail("Failed to create proof attempt, backends disagree", "", { results });
    throw new Error("Failed to create proof attempt, backends disagree");
  },
};

/**
 * Link object to pass to router-link corresponding to an object.
 * If obj is a string, it corresponds to a username.
 */
function linkTo(obj: ProofAttempt | Challenge | Sprig | string) {
  if (obj instanceof Sprig) {
    return { name: "instance", params: { instanceHash: obj.hash } };
  } else if (obj instanceof ProofAttempt) {
    return {
      name: "proofAttempt",
      params: { instanceHash: obj.instanceHash, hash: obj.hash },
    };
  } else if (obj instanceof Challenge) {
    return {
      name: "proofAttempt",
      params: { instanceHash: obj.instanceHash, hash: obj.parent },
    };
  } else {
    return { name: "user", params: { name: obj } };
  }
}

interface SprigObject {
  instance: Sprig;
  challenge?: Challenge;
  attempt?: ProofAttempt;
  user?: string;
  key: string;
}

function copy(text: string): void {
  // TODO: What is the best way to copy stuff ?
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

function download(filename: string, text: string) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/**
 * Remove common indentation and leading/trailing whitespace from a string.
 * @param text String to clean.
 */
function dedent(text: string): string {
  // find common indentation, ignoring blank lines
  const lines = text.split("\n");
  const indent = _.chain(lines)
    .filter((l) => l.trim().length > 0)
    .map((l) => l.match(/^\s*/)[0].length)
    .min()
    .value();
  return lines
    .map((l) => l.slice(indent))
    .join("\n")
    .trim();
}

export {
  Action,
  api,
  Challenge,
  copy,
  dayjs,
  decided,
  dedent,
  download,
  isLocalhost,
  linkTo,
  logFail,
  Parameters,
  ProofAttempt,
  Sprig,
  STATUS_DISPLAY_NAME,
  Status,
  STATUSES,
  type ActionData,
  type SprigObject,
  Unit,
  User,
};

// ok
