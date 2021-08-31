import { reactive } from "vue"
import {api, Claim, Sprig, SprigSummary, Status} from "@/sprig";


const store = {
    debug: true,
    error: "",
    state: reactive({
        instances: {} as Record<string, Sprig>,
    }),

    debugLog(msg: string) {
        if (this.debug){ console.log(msg) }
    },
    instance(hash: string): Sprig | undefined {
        if (!(hash in this.state.instances)) {
            this.debugLog(`Get instance ${hash}`)
            api.fetchInstance(hash, (sprig) => this.state.instances[hash] = sprig);
            return undefined
        }
        this.debugLog(`Return cached instance ${hash}`)
        return this.state.instances[hash];
    },
    claim(instance_hash: string, claim_hash: string): Claim | undefined {
        this.debugLog(`Get claim ${claim_hash} on instance ${instance_hash}.`)
        const sprig = this.instance(instance_hash)
        if (!sprig) return undefined;
        return sprig.claims[claim_hash]
    },
    challenge(instance: string, claim_hash: string, skeptic: string): void {
        const claim = this.claim(instance, claim_hash)
        if (!claim) return;
        api.challenge(instance, claim_hash, skeptic, (resp) => {
            this.state.instances[instance].claims[claim_hash] = resp.claim;
        })
    },
    allClaimsWithStatus(status: Status, instance: string): Claim[] {
        const sprig = this.instance(instance)
        if (!sprig) {
            return []
        }
        return Object.values(sprig.claims).filter(claim => claim.status === status)
    }
};

export { store };