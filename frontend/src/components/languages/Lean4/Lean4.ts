import _ from 'lodash';
import { ProofAttempt, Challenge, Sprig } from "../../../sprig";


interface Block {
    start: number,
    end: number,
    challenge: boolean,
    content: string
}

function blocks(proof: string): Block[] {
    const blocks = [];
    let i = 0;
    while (i < proof.length) {
        if (proof.startsWith("-- chal", i)) {
            const start = i + "-- chal".length;
            let end = proof.indexOf("-- endchal", start);
            if (end === -1) end = proof.length;

            blocks.push({
                start,
                end,
                challenge: true,
                content: proof.substring(start, end)
            });
            i = end + "-- endchal".length;
        } else {
            let end = proof.indexOf("-- chal", i);
            if (end === -1) end = proof.length;

            blocks.push({
                start: i,
                end,
                challenge: false,
                content: proof.substring(i, end)
            });
            i = end;
        }
    }
    return blocks;
}

function getChallenges(proof: string): Block[] {
    return blocks(proof).filter(b => b.challenge);
}

function extractTitle(proofAttempt: string, challengeNb: number): string {
    const challenges = getChallenges(proofAttempt);
    const claim = challenges[challengeNb].content;
    return claim.match(/(theorem|lemma|example)\s*(\S+)/m)[2];
}

function title(object: ProofAttempt | Challenge, instance: Sprig): string {
    if (object instanceof ProofAttempt) {
        if (!object.isRoot())
            return 'root' + title(instance.challenges[object.parent], instance);
        else
            return extractTitle(object.proof, getChallenges(object.proof).length - 1);

    } else {
        const parent = instance.proofs[object.parent];
        const challengeNb = parent.challenges.indexOf(object.hash);
        return extractTitle(parent.proof, challengeNb);
    }

}

export { title, blocks, getChallenges, extractTitle };