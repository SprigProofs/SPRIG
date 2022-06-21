/*
This contains all the logic of sprig, from the communication with the server
to the processing of the data.
*/

import _, { at } from "lodash";
import dayjs, { Dayjs } from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import relativeTime from 'dayjs/esm/plugin/relativeTime';  // for .humanize(  / fromNow()
import calendar from 'dayjs/esm/plugin/calendar';  // for .calendar()
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';
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

const ROOT_HASH = "0";
enum Status {
    CHALLENGED = "challenged",
    UNCHALLENGED = "unchallenged",
    VALIDATED = "validated",
    REJECTED = "rejected",
}

const STATUSES = [Status.VALIDATED, Status.REJECTED, Status.CHALLENGED, Status.UNCHALLENGED];
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
        this.timeForQuestions = dayjs.duration(params.timeForQuestions?.asMilliseconds() || params.timeForQuestions || params.time_for_questions)
        this.timeForAnswers = dayjs.duration(params.timeForAnswers?.asMilliseconds() || params.timeForAnswers || params.time_for_answers) || params.timeForAnswers;
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
    parent?: string;  // hash of the parent challenge, if any
    author: string;
    proof: string;
    height: number;
    status: Status;
    createdAt: dayjs.Dayjs;
    challenges: string[];
    instanceHash: string;

    constructor(attempt: Record<string, any>) {
        this.hash = attempt.hash;
        this.parent = attempt.parent;
        this.author = attempt.author;
        this.proof = attempt.proof;
        this.height = attempt.height;
        this.status = attempt.status;
        this.createdAt = dayjs(attempt.created_at || attempt.createdAt);
        this.challenges = attempt.challenges;
        this.instanceHash = attempt.instance_hash || attempt.instanceHash;
    }

    uid(): string { return '#' + this.instanceHash + '/' + this.hash; }
    isRoot(): boolean { return this.parent === null; }
    decided() { return decided(this.status); }
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
        const challenges = this.challenges.map(c => instance.challenges[c]);
        // If there are no challenges, it is a machine claim, decided as soon as it is created.
        // otherwise, we take the earliest deadline.
        return _.minBy(challenges, c => c.openUntil.millisecond())?.openUntil || this.createdAt;
    }
}

class Challenge {
    hash: string;
    parent: string;  // hash of the parent proot attempt, if any
    author?: string;
    createdAt: dayjs.Dayjs;
    challengedAt: dayjs.Dayjs;
    openUntil: dayjs.Dayjs;
    attempts: string[];
    status: Status;
    height: number;
    instanceHash: string;

    constructor(challenge: Record<string, any>) {
        this.hash = challenge.hash;
        this.parent = challenge.parent;
        this.author = challenge.author;
        this.createdAt = dayjs(challenge.created_at || challenge.createdAt);
        this.challengedAt = dayjs(challenge.challenged_at || challenge.challengedAt);
        this.openUntil = dayjs(challenge.open_until || challenge.openUntil);
        this.attempts = challenge.attempts;
        this.status = challenge.status;
        this.height = challenge.height;
        this.instanceHash = challenge.instance_hash || challenge.instanceHash;
    }
    uid(): string { return '#' + this.instanceHash + '/' + this.hash; }
    decided(): boolean { return decided(this.status); }
    possibleReward(params: Parameters): number {
        return this.status === Status.CHALLENGED
            ? params.questionBounties[this.height]
            : 0;
    }
    costAddAttempt(params: Parameters): number | null {
        const attemptHeight = this.height - 1;
        if (attemptHeight == 0) {
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
    time: Dayjs,
    type: Action,
    author?: string,
    cost?: number,
    attempt?: ProofAttempt;
    challenge?: Challenge,
    challenges?: Challenge[];
}[];

class Sprig {
    hash: string;
    language: string;
    params: Parameters;
    proofs: Record<string, ProofAttempt>;
    challenges: Record<string, Challenge>;
    rootQuestion: string;

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
    }

    uid(): string { return '#' + this.hash; }
    totalBounties() {
        const openAttempts = _.sumBy(_.values(this.proofs),
            (proof) => proof.stakeHeld(this.params));
        const openChallenges = _.sumBy(_.values(this.challenges),
            (challenge) => challenge.possibleReward(this.params));
        return openAttempts + openChallenges;
    }
    rootAttempt() {
        return this.proofs[ROOT_HASH];
    }
    author() {
        return this.rootAttempt().author;
    }
    count(status: Status) {
        return _.sum(_.map(this.challenges, (challenge) => challenge.status === status ? 1 : 0));
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

        return this.allActions().filter(action => {
            if (action.target instanceof ProofAttempt) {
                return action.target.hash === attempt.hash
                    || action.target.parent === attempt.hash;
            } else if (action.target instanceof Challenge) {
                return action.target.hash === attempt.parent
                    || attempt.challenges.includes(action.target.hash);
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
            type: Action.ROOT_CREATED,
            target: this,
        });

        // Creation of attempts
        _.forEach(this.proofs, (proof) => {
            if (proof.parent) {  // The root proof attempt uses ROOT_CREATED
                actions.push({
                    time: proof.createdAt,
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
                    type: Action.CHALLENGE_ACTIVATED,
                    target: challenge,
                });
            }
        });

        // Challenge auto-validation
        _.forEach(this.proofs, (proof) => {
            const challenges = proof.challenges.map((challenge) => this.challenges[challenge]);
            const autoValidated = challenges.filter((challenge) => challenge.author === null && challenge.status === Status.VALIDATED);
            if (autoValidated.length > 0) {
                actions.push({
                    time: autoValidated[0].openUntil,  // All should have the same openUntil
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
                const validating = _.minBy(validated, (attempt) => attempt.expires(this));
                actions.push({
                    time: validating.expires(this),
                    type: Action.CHALLENGE_VALIDATED,
                    target: validating,
                });
            } else if (challenge.status === Status.REJECTED) {
                actions.push({
                    time: challenge.openUntil,
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
                    type: proof.status === Status.VALIDATED
                        ? Action.MACHINE_VALIDATED
                        : Action.MACHINE_REJECTED,
                    target: proof,
                });
            } else {
                if (proof.status === Status.VALIDATED) {
                    actions.push({
                        time: proof.expires(this),
                        type: Action.ATTEMPT_VALIDATED,
                        target: proof,
                    });
                } else if (proof.status === Status.REJECTED) {
                    const rejected = proof.challenges.map((challenge) => this.challenges[challenge])
                        .filter((challenge) => challenge.status === Status.REJECTED);
                    const rejecting = _.minBy(rejected, (challenge) => challenge.openUntil);
                    actions.push({
                        time: rejecting.openUntil,
                        type: Action.ATTEMPT_REJECTED,
                        target: rejecting,
                    });
                }
            }
        });

        // Machine validation and rejection
        _.forEach(this.proofs, (proof) => {
        });

        return _.sortBy(actions, (action) => action.time);
    }
}

interface ActionData {
    time: dayjs.Dayjs;
    type: Action;
    target: Challenge | ProofAttempt | Sprig | Challenge[];
}


const isLocalhost = (location.hostname === "localhost" || location.hostname === "127.0.0.1");
const API_BASE = isLocalhost ? "http://localhost:8601/" : "https://sprig.therandom.space/api/";

console.log(location.hostname, isLocalhost, API_BASE);

/**
 * Inform about an error.
 * @param title Title of the notification to send.
 * @param message Content of the notification to send.
 * @param data More data to log to the console.
 */
function logFail(title: string, message: string, data: any) {
    console.error(title, message, data);
    ElNotification.error({ title, message, });
}
const api = {
    async get(path: string[]) {
        const url = API_BASE + path.join("/");
        const resp = await fetch(url)
            .catch(err => {
                logFail("Error while fetching data", "The backend may be down. Are you online ?", { url, err });
                return Promise.reject(err);
            });
        if (resp.ok) {
            return await resp.json()
                .catch(err => {
                    logFail("Failed to parse JSON", "This a website internal error, please report it.", { url, err, resp });
                    return Promise.reject(err);
                });
        } else {
            const data = await resp.json()
            logFail(data.detail, "", data)
            throw new Error(data);
        }
    },
    async fetchAllInstances(): Promise<Record<string, Sprig>> {
        return await this.get(["everything"])
            .then(data => _.mapValues(data, s => new Sprig(s)));
    },
    async fetchBank(): Promise<Record<string, number>> {
        return await this.get(["users"]);
    },

    // async fetchInstance(hash: string): Promise<Sprig> {
    //     return await this.get([hash])
    //         .then(data => new Sprig(data));
    // },
    async post(path: string[], query: Record<string, string>, body: any): Promise<any> {
        const url = new URL(API_BASE + path.join("/"));
        for (const key of Object.keys(query)) {
            url.searchParams.append(key, query[key]);
        }
        console.log("post url", url, "body", body);
        const resp = await fetch(url.toString(), {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: body ? JSON.stringify(body) : "",
        }).catch(err => {
            logFail("Error with posting data", "The backend may be down. Are you online ?", { url, err, body });
            return Promise.reject(err);
        });

        if (resp.ok) {
            return await resp.json()
                .catch(err => {
                    logFail("Failed to parse JSON", "This a website internal error, please report it.", { url, err, resp });
                    return Promise.reject(err);
                });
        } else {
            const data = await resp.json()
            logFail(data.detail, "", data)
            throw new Error(data);
        }
    },

    async challenge(instanceHash: string, challengeHash: string, skeptic: string): Promise<void> {
        return await this.post(['challenge', instanceHash, challengeHash], { skeptic }, null);
    },

    async newInstance(language: string, params: Parameters, author: string,
        rootClaim: string, proof: string): Promise<Sprig> {
        return await this.post(['instances'], {}, {
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
        }).then(data => new Sprig(data));
    },
    async newProofAttempt(instanceHash: string, challengeHash: string, isMachineLevel: boolean, proof: string, author: string): Promise<ProofAttempt> {
        return this.post(['proof', instanceHash, challengeHash], {},
            { author, statement: proof, machine_level: isMachineLevel }).then((data) => new ProofAttempt({ instanceHash, ...data}));
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
        return { name: "proofAttempt", params: { instanceHash: obj.instanceHash, hash: obj.hash } };
    } else if (obj instanceof Challenge) {
        return { name: "proofAttempt", params: { instanceHash: obj.instanceHash, hash: obj.parent } };
    } else {
        return { name: "user", params: { user: obj } };
    }
}

function copy(text): void {  // TODO: What is the best way to copy stuff ?
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy')
    document.body.removeChild(textArea)
}

export {
    api, STATUSES, STATUS_DISPLAY_NAME, Unit,
    decided, Challenge, Sprig, Status,
    ProofAttempt, Parameters, Action, ActionData, linkTo,
    dayjs, copy,
};

// ok