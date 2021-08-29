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

interface SprigSummary {
    claim_count: number
    challenge_count: number
    unchallenged_count: number
    root_claim: Claim
    language: string
}

interface Sprig {
    claims: Claim[]
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
    fetchInstanceList(callback: FetchCallback<SprigSummary[]>) {
        this.get(["instances"], callback)
    },
    fetchInstance(hash: string, callback: FetchCallback<Sprig>) {
        this.get([hash], callback)
    }

}

export {api, Claim, SprigSummary, Sprig, Status};