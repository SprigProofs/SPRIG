/*
This contains all the logic of sprig, from the communication with the server
to the processing of the data.
*/

import * as dayjs from 'dayjs'
import * as duration from 'dayjs/plugin/duration'
import * as relativeTime from 'dayjs/plugin/relativeTime'  // for .humanize()
dayjs.extend(duration)
dayjs.extend(relativeTime)

// TODO: to be removed
const NOW = 13;

type FetchCallback<T> = (data: T) => void

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
}

function decided(status: Status) {
    return status === Status.VALIDATED || status === Status.REJECTED;
}


function claimTitle(claim: Claim) {
    return claim.statement.split(":", 1)[0]
}

function claimStatement(claim: Claim) {
    return claim.statement.split(":=", 1)[0]
        .substring(claim.statement.indexOf(":") + 1)
}

function fmtDate(time: number, short=true) {
    const past = time <= NOW
    const dt = Math.abs(time - NOW)
    const hours = Math.floor(dt / 6)
    const minutes = dt % 6 * 9
    const hour_text = short ? "h" : hours > 1 ? " hours" : " hour"
    const min_text = short ? "m" : minutes > 1 ? " mins" : " min"
    var parts = ""
    if (hours > 0) {
        parts += hours + hour_text + " "
    }
    if (minutes > 0) {
        parts += minutes + min_text + " "
    }

    if (past) {
        return parts + "ago"
    } else {
        return parts
    }
}

const SECONDS = 1;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

const params: Parameters = {
    root_height: 4,
    max_length: 2000,
    time_for_questions: dayjs.duration(5, 'days'),
    time_for_answers: dayjs.duration(10, 'days'),
    upstakes: [0, 8, 12, 16],
    downstakes: [100, 200, 300, 400],
    question_bounties: [44, 43, 42, 41],
    verification_cost: 7
}

const claims: Claim[] = [
    {
        hash: "30fb30",
        statement: "theorem infinitude_of_primes: set.infinite { p | nat.prime p } := [big proof]",
        status: Status.CHALLENGED,
        parent: "a884ff2",
        last_modification: 12,
        open_until: 20,
        height: 4,
        skeptic: null,
    }, {
        hash: "9f4024",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.UNCHALLENGED,
        parent: "a884ff2",
        last_modification: 11,
        open_until: 18,
        height: 4,
        skeptic: null,
    }, {
        hash: "cccccc",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.VALIDATED,
        parent: "a884ff2",
        last_modification: 9,
        open_until: 22,
        height: 4,
        skeptic: null,
    }, {
        hash: "dddddd",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.REJECTED,
        parent: "a884ff2",
        last_modification: 7,
        open_until: 14,
        height: 4,
        skeptic: null,
    }
]

interface Claim {
    statement: string
    height: number
    hash: string
    parent: string
    status: Status
    open_until: number
    last_modification: number
    skeptic: string | null
}

interface StatusCounts {
    challenged: number
    unchallenged: number
    validated: number
    rejected: number
}

interface SprigSummary {
    language: string
    root_claim: Claim
    claim_count: number
    counts: StatusCounts
}

interface ProofAttempt {
    claimer: string
    claims: string[]
    height: number
    time: number
    status: Status
}

interface Sprig {
    claims: Record<string, Claim>
    language_data: Record<string, any> & { type: string }
    proof_attempts: Record<string, ProofAttempt[]>
    constraints: Record<string, any>
}

interface ChallengeRecord {
    balance: number
    claim: Claim
}

interface AnswerRecord {
    balance: number
}

class Parameters {
    readonly root_height: number
    readonly max_length: number
    readonly time_for_questions: duration.Duration
    readonly time_for_answers: duration.Duration
    readonly upstakes: number[]
    readonly downstakes: number[]
    readonly question_bounties: number[]
    readonly verification_cost: number
}

const API_BASE = "http://localhost:8600/"

const api = {
    get(path: string[], callback: FetchCallback<any>): void {
        const url = API_BASE + path.join("/")
        fetch(url).then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    callback(data)
                })
            }
        })
    },
    post(path: string[], query: Record<string, string>, body: any, callback: FetchCallback<any>) {
        const url = new URL(API_BASE + path.join("/"))
        for (const key of Object.keys(query)) {
            url.searchParams.append(key, query[key])
        }
        console.log("post url", url, "body", body)
        fetch(url.toString(), {
            method: "POST",
            body: body ? JSON.stringify(body) : "",
        }).then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    callback(data)
                })
            }
        })
    },
    fetchInstanceList(callback: FetchCallback<Record<string, SprigSummary>>) {
        this.get(["instances"], callback)
    },
    fetchInstance(hash: string, callback: FetchCallback<Sprig>) {
        this.get([hash], callback)
    },
    challenge(instance: string, claim: string, skeptic: string, callback: FetchCallback<ChallengeRecord>) {
        this.post([instance, claim, "challenge"], {skeptic: skeptic}, null, callback)
    },
    answer(instance: string, claim: string, claimer: string, claims: string[], lowLevel: boolean, callback: FetchCallback<AnswerRecord>) {
        this.post([instance, claim, "proof_attempts"], {}, {
            claimer, claims, machine_level: lowLevel
        }, callback)
    }


}

export {NOW, claimTitle, claimStatement, fmtDate,
    claims, params, api, STATUSES, STATUS_DISPLAY_NAME,
    decided, Claim, SprigSummary, Sprig, Status,
    StatusCounts, ProofAttempt};
