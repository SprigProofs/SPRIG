/*
This contains all the logic of sprig, from the communication with the server
to the processing of the data.
*/

import _, { at } from "lodash";
import dayjs, { Dayjs } from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';  // for .humanize(  / fromNow()
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { ElNotification } from "element-plus";

/**
 * Constants
*/

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
    costToChallenge(attempt: ProofAttempt): number {
        if (attempt.height === 0) {
            return undefined;
        } else {
            return this.question_bounties[attempt.height];
        }
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
            return params.question_bounties[this.height];
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
            ? params.question_bounties[this.height]
            : 0;
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
    root_question: string;

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
        this.root_question = sprig.root_question;
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

        if (attempt.parent) {
            // The first action is the creation of the parent challenge, if any
            const challenge = this.challenges[attempt.parent];
            actions.push({
                time: challenge.createdAt,
                type: Action.PARENT_CHALLENGED,
                author: challenge.author,
                cost: this.params.question_bounties[challenge.height],
            });

            // The second action is the creation of the attempt
            actions.push({
                time: attempt.createdAt,
                type: Action.ATTEMPT_CREATED,
                author: attempt.author,
                cost: this.params.upstakes[attempt.height] + this.params.downstakes[attempt.height],
            });
        } else {
            // This attempt is the root, so the first action is just the creation of the attempt
            actions.push({
                time: attempt.createdAt,
                type: Action.ROOT_CREATED,
                author: attempt.author,
                cost: this.params.downstakes[attempt.height],
            });
        }

        // If it is machine attempt, it is then validated or rejected immediately
        if (attempt.challenges.length === 0) {
            actions.push({
                time: attempt.createdAt,
                type: attempt.status === Status.VALIDATED
                    ? Action.MACHINE_VALIDATED
                    : Action.MACHINE_REJECTED,
            });
            return actions;
        }

        // Then there are all the activated challenges
        const challenges = attempt.challenges.map((challenge) => this.challenges[challenge]);
        const activatedChallenges = challenges.filter((challenge) => challenge.author !== null);
        actions.push(...activatedChallenges.map((challenge) => ({
            time: challenge.challengedAt,
            type: Action.CHALLENGE_ACTIVATED,
            author: challenge.author,
            cost: this.params.question_bounties[challenge.height],
            challenge,
        })));

        // Then some challenges have been answered
        activatedChallenges.forEach((challenge) => {
            challenge.attempts.forEach((attempt) => {
                actions.push({
                    time: this.proofs[attempt].createdAt,
                    type: Action.CHALLENGE_ANSWERED,
                    author: this.proofs[attempt].author,
                    cost: this.params.downstakes[this.proofs[attempt].height] + this.params.upstakes[this.proofs[attempt].height],
                    challenge,
                    attempt: this.proofs[attempt],
                });
            });
        });

        // Then some challenges have been validated without being activated
        const autoValidated = challenges.filter((challenge) => challenge.status === Status.VALIDATED && challenge.author === null);
        if (autoValidated.length > 0) {
            actions.push({
                time: autoValidated[0].openUntil,
                type: Action.AUTO_VALIDATION,
                challenges: autoValidated,
            });
        }

        // Some challenges might have been validated
        const validated = challenges.filter((challenge) => challenge.status === Status.VALIDATED && challenge.author !== null);
        actions.push(...validated.map((challenge) => ({
            time: dayjs(),  // TODO: find a way to get the time of the validation
            type: Action.CHALLENGE_VALIDATED,
            author: challenge.author,
            cost: this.params.question_bounties[challenge.height],
            challenge,
        })));

        // Some challenges have been rejected
        const rejected = challenges.filter((challenge) => challenge.status === Status.REJECTED);
        actions.push(...rejected.map((challenge) => ({
            time: challenge.openUntil,
            type: Action.CHALLENGE_REJECTED,
            author: null,
            cost: this.params.question_bounties[challenge.height],
            challenge,
        })));

        // Finally the attempt can be validated or rejected
        if (attempt.status === Status.VALIDATED) {
            actions.push({
                time: dayjs(),  // TODO: find a way to get the time of the validation
                type: Action.ATTEMPT_VALIDATED,
                author: attempt.author,
                cost: 0,  // TODO: handle the non-root case
            });
        } else if (attempt.status === Status.REJECTED) {
            const rejecting = _.minBy(rejected, (challenge) => challenge.openUntil);
            actions.push({
                time: rejecting.openUntil,
                type: Action.ATTEMPT_REJECTED,
                author: rejecting.author,
                cost: 0,  // TODO: handle the non-root casAe
                challenge: rejecting,
            });
        }

        return _.sortBy(actions, (action) => action.time);
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


enum Descr {
    TITLE = -1,
    SHORT = 0,
    LONG = 1
}

interface Language {
    name: string;
    describe: (object: ProofAttempt | Challenge, instance: Sprig, details: Descr) => string;
}


const TicTacToe = {
    name: 'TicTacToe',
    describe(object: ProofAttempt | Challenge, instance: Sprig, details: Descr) {
        const state =
            object instanceof ProofAttempt
                ? TicTacToe.getState(object.parent, instance)
                : TicTacToe.getState(object.hash, instance);

        switch (details) {
            case Descr.TITLE:
                const board = state.board[0] + state.board[1] + state.board[2] + "|" + state.board[3] + state.board[4] + state.board[5] + "|" + state.board[6] + state.board[7] + state.board[8];
                return `${board} ${state.plays} plays ${state.wins} wins`;
            case Descr.SHORT:
                return state;
            case Descr.LONG:
                return state;
        }
    },
    getState(challengeHash: string | null, instance: Sprig) {
        if (challengeHash === null) {
            const m = instance.root_question.match(/([XO.]{3})\|([XO.]{3})\|([XO.]{3}) ([XO]) plays ([XO.]) wins/);
            return {
                plays: m[4],
                wins: m[5],
                board: [...m[1], ...m[2], ...m[3]],
            };
        } else {
            const attempt = instance.proofs[instance.challenges[challengeHash].parent];
            const state = TicTacToe.getState(attempt.parent, instance);
            const challengeNb = attempt.challenges.indexOf(challengeHash);
            const moves = [...attempt.proof.matchAll(/([1-9])\s*->\s*([1-9])/g)];
            const move = moves[challengeNb];

            const newBoard = state.board;
            newBoard[+move[1] - 1] = state.plays;
            if (move[2] !== '.') {
                newBoard[+move[2] - 1] = "XO"[state.plays === "X" ? 1 : 0];
            }
            return {
                plays: state.plays,
                wins: state.wins,
                board: newBoard,
            };
        }
    }
};

const LANGUAGES: Record<string, Language> = { TicTacToe };
// Lean: {
// name: "Lean",
// describe: (object: ProofAttempt | Challenge, instance: Sprig, details: Descr) => {
//     if (details === Descr.TITLE) {
//         return object.uid();
//     } else if (details === Descr.SHORT) {
//         return object.uid();
//     } else {
//         return object.uid();
//     }
// },
// title(claim: ProofAttempt) {
//     const m = claim.statement.match(/(theorem|lemma) \S+\s/m,);
//     if (m) {
//         return m[0].trim();
//     } else {
//         console.warn("Cannot parse title", claim);
//         return "Cannot parse title";
//     }
// },
// shortDescription(claim: Claim) {
//     return claim.statement;
//     const m = claim.statement.match(/(?:theorem|lemma) \S+\s(.*):=/m);
//     if (m) {
//         return m[1].trim();
//     } else {
//         console.warn("Cannot make shortDescription", claim);
//         return "Cannot parse statement";
//     }
// },
// longDescription(claim: Claim) {
//     return claim.statement;
// }
// }

const API_BASE = "http://localhost:8601/";

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
    async fetchAllInstances(): Promise<Record<string, Sprig>> {
        return await this.get(["everything"])
            .then(data => _.mapValues(data, s => new Sprig(s)));
    },

    // async fetchInstance(hash: string): Promise<Sprig> {
    //     return await this.get([hash])
    //         .then(data => new Sprig(data));
    // },
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

function linkTo(obj: ProofAttempt | Challenge | Sprig) {
    if (obj instanceof Sprig) {
        return { name: "instance", params: { instanceHash: obj.hash } };
    } else if (obj instanceof ProofAttempt) {
        return { name: "proofAttempt", params: { instanceHash: obj.instanceHash, hash: obj.hash } };
    } else {
        return { name: "proofAttempt", params: { instanceHash: obj.instanceHash, hash: obj.parent } };
    }
}

export {
    api, STATUSES, STATUS_DISPLAY_NAME, LANGUAGES, Language,
    decided, Challenge, Sprig, Status, Descr,
    ProofAttempt, Parameters, Action, ActionData, linkTo,
};
