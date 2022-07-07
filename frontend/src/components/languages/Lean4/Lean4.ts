import dedent from 'dedent';
import _ from 'lodash';
import { ProofAttempt, Challenge, Sprig } from "../../../sprig";

const CHALENGE_START = "-- chal";
const CHALENGE_END = "-- endchal";
interface Block {
    start: number,
    end: number,
    challenge: boolean,
    challengeNb?: number,
    content: string;
}

function getBlocks(proof: string): Block[] {
    const blocks = [];
    let challengeNb = -1;
    let i = 0;
    while (i < proof.length) {
        if (proof.startsWith(CHALENGE_START, i)) {
            const start = i + CHALENGE_START.length;
            let end = proof.indexOf(CHALENGE_END, start);
            if (end === -1) end = proof.length;

            const content = dedent(proof.substring(start, end));
            if (content.length > 0) {
                blocks.push({
                    start,
                    end,
                    content,
                    challenge: true,
                    challengeNb: ++challengeNb
                });
            }
           i = end + CHALENGE_END.length;
        } else {
            let end = proof.indexOf(CHALENGE_START, i);
            if (end === -1) end = proof.length;

            const content =dedent(proof.substring(i, end));
            if (content.length > 0) {
                blocks.push({
                    start: i,
                    end,
                    challenge: false,
                    content,
                });
            }
            i = end;
        }
    }
    return blocks;
}

function getChallenges(proof: string): Block[] {
    return getBlocks(proof).filter(b => b.challenge);
}

function extractTitle(proofAttempt: string, challengeNb: number): string {
    const challenges = getChallenges(proofAttempt);
    const claim = challenges[challengeNb].content;
    return claim.trim().match(/((theorem|lemma|example)\s*\S+)/m)[0];
}

function collectPreviousDefs(instance: Sprig, start: string | null, removeChallengeTags: boolean = true): string {
    if (start === undefined || start === null) return '';
    console.log(start, instance.challenges)
    const challenge = instance.challenges[start];
    const parent = instance.proofs[challenge.parent];
    const challengeNb = parent.challenges.indexOf(challenge.hash);
    const blocks = getBlocks(parent.proof);
    const lastBlock = blocks.findIndex(b => b.challengeNb === challengeNb);

    let previousDefs: string;
    if (removeChallengeTags) {
        previousDefs = blocks.slice(0, lastBlock).map(b => b.content).join('\n\n');
    } else {
        previousDefs = parent.proof.substring(0, blocks[lastBlock].start);
    }

    if (!parent.isRoot()) {
        return collectPreviousDefs(instance, parent.parent) + '\n\n' + previousDefs;
    } else {
        return previousDefs;
    }
}

function title(object: ProofAttempt | Challenge, instance: Sprig): string {
    if (object instanceof ProofAttempt) {
        if (!object.isRoot())
            return title(instance.challenges[object.parent], instance);
        else
            return extractTitle(object.proof, getChallenges(object.proof).length - 1);

    } else {
        const parent = instance.proofs[object.parent];
        const challengeNb = parent.challenges.indexOf(object.hash);
        return extractTitle(parent.proof, challengeNb);
    }

}


function attemptTemplate(challenge: string, instance: Sprig): string {
    const attempt = instance.proofs[instance.challenges[challenge].parent];
    const separator = `

-- You can use every statement above in your proof,
-- they come from the previous claims.
-- However, modify and submit only what is below this line --

`;
    const challengeStatement = getChallenges(attempt.proof)[attempt.challenges.indexOf(challenge)].content;
    return collectPreviousDefs(instance, challenge, true) + separator + challengeStatement;
}

function challengeCount(text: string): number {
    return getChallenges(text).length;
}

export { title, attemptTemplate, challengeCount, getBlocks, getChallenges, extractTitle, collectPreviousDefs };