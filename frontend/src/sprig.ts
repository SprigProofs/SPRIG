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
    language_data: Record<string, any> & {__class__: string}
    proof_attempts: Record<string, ProofAttempt[]>
    constraints: Record<string, any>
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
    fetchInstanceList(callback: FetchCallback<Record<string, SprigSummary>>) {
        this.get(["instances"], callback)
    },
    fetchInstance(hash: string, callback: FetchCallback<Sprig>) {
        this.get([hash], callback)
    }

}

export {api, Claim, SprigSummary, Sprig, Status, StatusCounts, ProofAttempt};