/*
Interface with the SPRIG server.
 */

type FetchCallback<T> = (data: T) => void

enum Status {
    CHALLENGED = "challenged",
    UNCHALLENGED = "unchallenged",
    VALIDATED = "validated",
    REJECTED = "rejected",
}

const STATUSES = [Status.VALIDATED, Status.REJECTED, Status.CHALLENGED, Status.UNCHALLENGED];

interface Claim {
    statement: string
    height: number
    hash: string
    status: Status
    skeptic: string | null
    challenged_time: number
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
    language_data: Record<string, any> & { __class__: string }
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

export {api, STATUSES, Claim, SprigSummary, Sprig, Status, StatusCounts, ProofAttempt};