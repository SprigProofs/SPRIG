/*
This contains all the logic of sprig, from the communication with the server
to the processing of the data.
*/

import * as _ from "lodash";
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';  // for .humanize()
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { ElNotification } from "element-plus";

/** 
 * Constants
*/

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

function humanize(date: dayjs.Dayjs, suffix = true) {
    return dayjs.duration(date.diff(dayjs())).humanize(suffix);
}

class Claim {
    statement: string;
    height: number;
    hash: string;
    instance_hash: string;
    parent: string;
    status: Status;
    open_until: dayjs.Dayjs;
    last_modification: dayjs.Dayjs;
    // created_at: dayjs.Dayjs;
    skeptic: string | null;

    constructor(claim: Record<string, any>) {
        this.statement = claim.statement;
        this.height = claim.height;
        this.hash = claim.hash;
        this.instance_hash = claim.instance_hash;
        this.parent = claim.parent;
        this.status = claim.status;
        this.open_until = dayjs(claim.open_until);
        this.last_modification = dayjs(claim.last_modification);
        // this.created_at = dayjs(claim.created_at);
        this.skeptic = claim.skeptic;
    }

    isRoot(): boolean {
        return this.parent === null;
    }
    decided() { return decided(this.status); }
    attempt(instance: Sprig): ProofAttempt | null {
        if (!this.parent) {
            return null;
        }
        const attempts = instance.proof_attempts[this.parent];
        return attempts.find(a => _.includes(a.claims, this.hash));
    }

    challengeBounty(params: Parameters): number {
        if (this.isRoot()) {
            return 0;
        } else if (this.status === Status.CHALLENGED) {
            return params.question_bounties[this.height];
        } else {
            return 0;
        }
    }
    possibleDownstake(instance: Sprig): number {
        if (this.decided()) {
            return 0;
        } else if (this.isRoot()) {
            return 0;
        } else if (this.attempt(instance)?.decided()) {
            return 0;
        } else {
            return instance.params.downstakes[this.height];
        }
    }
    possibleReward(instance: Sprig): number { 
        return this.status == Status.CHALLENGED 
            ? this.challengeBounty(instance.params)
            : this.possibleDownstake(instance);
    }
    costAddAttempt(params: Parameters): number | null {
        const attemptHeight = this.height - 1;
        if (attemptHeight == 0) {
            return params.verification_cost + params.upstakes[attemptHeight];
        } else if (this.height >= params.root_height || this.height <= 0) {
            return null;
        } else {
            return params.upstakes[attemptHeight] + params.downstakes[attemptHeight];
        }
    }

}

interface StatusCounts {
    challenged: number;
    unchallenged: number;
    validated: number;
    rejected: number;
}

interface SprigSummary {
    language: string;
    root_claim: Claim;
    counts: StatusCounts;
    hash: string;
    params: Parameters;
    author: string;
    bounties: number;
}

class ProofAttempt {
    claimer: string;
    claims: string[];
    height: number;
    // time: dayjs.Dayjs;
    status: Status;
    instance_hash: string;
    claim_hash: string;
    attemptNb: number;

    constructor(attempt: Record<string, any>) {
        this.claimer = attempt.claimer;
        this.claims = attempt.claims;
        this.height = attempt.height;
        // this.time = dayjs(attempt.time);
        this.status = attempt.status;
        this.instance_hash = attempt.instance_hash;
        this.claim_hash = attempt.hash;
        this.attemptNb = attempt.attemptNb;
    }

    decided() { return decided(this.status); }
    stakeHeld(params: Parameters): number {
        if (!decided(this.status)) {
            return params.upstakes[this.height] + params.downstakes[this.height];
        } else {
            return 0;
        }
    }
    /**
     * How much one can expect to win by challenging or submiting a proof.
     */
    possibleReward(params: Parameters): number {
        if (this.status === Status.CHALLENGED) {
            return params.question_bounties[this.height];
        } else if (this.status === Status.UNCHALLENGED) {
            return this.stakeHeld(params);
        } else {
            return 0;
        }
    }
    parentClaim(instance: Sprig): Claim { return instance.claims[this.claim_hash]; }
}

class Sprig {
    claims: Record<string, Claim>;
    language: string;
    proof_attempts: Record<string, ProofAttempt[]>;
    params: Parameters;
    hash: string;

    constructor(sprig: Record<string, any>) {
        this.hash = sprig.hash;
        this.claims = _.mapValues(sprig.claims, (claim) => {
            claim.instance_hash = this.hash;
            return new Claim(claim);
        });
        this.language = sprig.language;
        this.proof_attempts = _.mapValues(sprig.proof_attempts, (attempts, claimHash) => _.map(attempts, (attempt, attemptNb) => {
            attempt.instance_hash = this.hash;
            attempt.hash = claimHash;
            attempt.attemptNb = attemptNb;
            return new ProofAttempt(attempt);
        }));
        this.params = new Parameters(sprig.params);
    }

    totalBounties() {
        const open_challenges = _.sumBy(_.values(this.claims),
            (claim) => claim.challengeBounty(this.params));
        const open_attempts = _.sumBy(_.values(this.proof_attempts),
            (attempts) => _.sumBy(attempts, a => a.stakeHeld(this.params)));

        return open_challenges + open_attempts;
    }
    rootClaim() {
        return this.claims['0'];
    }
    author() {
        return this.proof_attempts['0'][0].claimer;
    }
    count(status: Status) {
        return _.sum(_.map(this.claims, (claim) => claim.status === status ? 1 : 0));
    }
    counts() {
        return {
            [Status.CHALLENGED]: this.count(Status.CHALLENGED),
            [Status.UNCHALLENGED]: this.count(Status.UNCHALLENGED),
            [Status.VALIDATED]: this.count(Status.VALIDATED),
            [Status.REJECTED]: this.count(Status.REJECTED),
        };
    }
}

interface ChallengeRecord {
    balance: number;
    claim: Claim;
}

interface AnswerRecord {
    balance: number;
}

class Parameters {
    readonly root_height: number;
    readonly max_length: number;
    readonly time_for_questions: duration.Duration;
    readonly time_for_answers: duration.Duration;
    readonly upstakes: number[];
    readonly downstakes: number[];
    readonly question_bounties: number[];
    readonly verification_cost: number;

    constructor(params: Record<string, any>) {
        this.root_height = params.root_height;
        this.max_length = params.max_length;
        this.time_for_questions = dayjs.duration(params.time_for_questions);
        this.time_for_answers = dayjs.duration(params.time_for_answers);
        this.upstakes = params.upstakes;
        this.downstakes = params.downstakes;
        this.question_bounties = params.question_bounties;
        this.verification_cost = params.verification_cost;
    }
}

interface Language {
    name: string;
    title: (claim: Claim) => string;
    shortDescription: (claim: Claim) => string;
    longDescription: (claim: Claim) => string;
}


const LANGUAGES: Record<string, Language> = {
    Lean: {
        name: "Lean",
        title(claim: Claim) {
            const m = claim.statement.match(/theorem \S+\s/ms);
            if (m) {
                return m[0].trim();
            } else {
                return "Cannot parse title";
            }
        },
        shortDescription(claim: Claim) {
            const m = claim.statement.match(/theorem \S+\s(.*):=/ms);
            if (m) {
                return m[1].trim();
            } else {
                return "Cannot parse statement";
            }
        },
        longDescription(claim: Claim) {
            return claim.statement;
        }
    },
    TicTacToe: {
        name: "TicTacToe",
        title(claim: Claim) {
            return claim.statement;
        },
        shortDescription(claim: Claim) {
            return claim.statement;
        },
        longDescription(claim: Claim) {
            return claim.statement;
        }
    }
};

const API_BASE = "http://localhost:8601/";

const convert = {
    sprigSummary(summary: Record<string, any>): SprigSummary {
        return {
            language: summary.language,
            params: summary.params,
            root_claim: new Claim(summary.root_claim),
            counts: summary.counts,
            hash: summary.hash,
            author: summary.author,
            bounties: summary.bounties,
        };
    }
};
function logFail(title: string, data: Object) {
    console.error(title, data);
    ElNotification.error({
        title: title,
        message: JSON.stringify(data, null, 2),
    });
}
const api = {
    async get(path: string[]) {
        const url = API_BASE + path.join("/");
        const resp = await fetch(url)
            .catch(err => {
                logFail("Error fetching data", { url, err });
                return Promise.reject(err);
            });
        if (resp.ok) {
            return await resp.json()
                .catch(err => {
                    logFail("Failed to parse JSON", { url, err, resp });
                    return Promise.reject(err);
                });
        } else {
            logFail("Server returned error", { url, resp });
            throw new Error(`Server returned error ${resp.status}`);
        }
    },
    async fetchInstanceList(): Promise<Record<string, SprigSummary>> {
        return await this.get(["instances"])
            .then(data => _.mapValues(data, convert.sprigSummary));
    },
    async fetchInstance(hash: string): Promise<Sprig> {
        return await this.get([hash])
            .then(data => new Sprig(data));
    },
    async fetchAllInstances(): Promise<Record<string, Sprig>> {
        return await this.get(["everything"])
            .then(data => _.mapValues(data, s => new Sprig(s)));
    },

    // post(path: string[], query: Record<string, string>, body: any, callback: FetchCallback<any>) {
    //     const url = new URL(API_BASE + path.join("/"))
    //     for (const key of Object.keys(query)) {
    //         url.searchParams.append(key, query[key])
    //     }
    //     console.log("post url", url, "body", body)
    //     fetch(url.toString(), {
    //         method: "POST",
    //         body: body ? JSON.stringify(body) : "",
    //     }).then(resp => {
    //         if (resp.ok) {
    //             resp.json().then(data => {
    //                 callback(data)
    //             })
    //         }
    //     })
    // },
    // challenge(instance: string, claim: string, skeptic: string, callback: FetchCallback<ChallengeRecord>) {
    //     this.post([instance, claim, "challenge"], {skeptic: skeptic}, null, callback)
    // },
    // answer(instance: string, claim: string, claimer: string, claims: string[], lowLevel: boolean, callback: FetchCallback<AnswerRecord>) {
    //     this.post([instance, claim, "proof_attempts"], {}, {
    //         claimer, claims, machine_level: lowLevel
    //     }, callback)
    // }


};


export {
    humanize,
    api, STATUSES, STATUS_DISPLAY_NAME, LANGUAGES, Language,
    decided, Claim, SprigSummary, Sprig, Status,
    StatusCounts, ProofAttempt, Parameters
};
