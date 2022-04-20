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
    return claim.statement.match(/theorem \S+\s/ms)[0];
}

function claimStatement(claim: Claim) {
    console.log(claim.statement)
    return claim.statement.match(/theorem \S+\s(.*):=/ms)[1]
}

function humanize(date: dayjs.Dayjs, suffix=true) {
    return dayjs.duration(date.diff(dayjs())).humanize(suffix);
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

const params: Parameters = {
    root_height: 4,
    max_length: 2000,
    time_for_questions: dayjs.duration(5, 'days'),
    time_for_answers: dayjs.duration(10, 'days'),
    upstakes: [16, 12, 8, 0],
    downstakes: [0, 300, 200, 100],
    question_bounties: [0, 43, 42, 41],
    verification_cost: 7
}

const claims: Claim[] = [
    {
        hash: "30fb30",
        statement: `theorem euclidean_geometry.dist_sq_eq_dist_sq_add_dist_sq_iff_angle_eq_pi_div_two 
    {V : Type u_1} {P : Type u_2} [inner_product_space ℝ V] [metric_space P] [normed_add_torsor V P] (p1 p2 p3 : P) :
    (dist p1 p3) * dist p1 p3 = (dist p1 p2) * dist p1 p2 + (dist p3 p2) * dist p3 p2 ↔ ∠ p1 p2 p3 = real.pi / 2 := 
    [big proof]`,
        status: Status.CHALLENGED,
        parent: "a884ff2",
        last_modification: dayjs().subtract(1, 'day'),
        created_at: dayjs().subtract(1, 'day'),
        open_until: dayjs().add(9, 'day'),
        height: 3,
        skeptic: null,
    }, {
        hash: "9f4024",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.UNCHALLENGED,
        parent: "a884ff2",
        last_modification: dayjs().subtract(3, 'day'),
        created_at: dayjs().subtract(3, 'day'),
        open_until: dayjs().add(7, 'day'),
        height: 2,
        skeptic: null,
    }, {
        hash: "cccccc",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.VALIDATED,
        parent: "a884ff2",
        last_modification: dayjs().subtract(2, 'day'),
        created_at: dayjs().subtract(2, 'day'),
        open_until: dayjs().add(8, 'day'),
        height: 3,
        skeptic: null,
    }, {
        hash: "dddddd",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.REJECTED,
        parent: "a884ff2",
        last_modification: dayjs().subtract(4, 'day'),
        created_at: dayjs().subtract(4, 'day'),
        open_until: dayjs().add(7, 'day'),
        height: 0,
        skeptic: null,
    }
]

interface Claim {
    statement: string
    height: number
    hash: string
    parent: string
    status: Status
    open_until: dayjs.Dayjs
    last_modification: dayjs.Dayjs
    created_at: dayjs.Dayjs
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
    humanize, 
    claims, params, api, STATUSES, STATUS_DISPLAY_NAME,
    decided, Claim, SprigSummary, Sprig, Status,
    StatusCounts, ProofAttempt};
