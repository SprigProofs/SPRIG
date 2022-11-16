import StatementDisplay from './StatementDisplay.vue';
import ProofDisplay from './ProofDisplay.vue';
import { title, attemptTemplate, challengeCount, fullText } from './Lean4';

export default {
    name: "Lean4",
    description: "WIP: Mathematical proofs in Lean4.",
    title,
    attemptTemplate,
    challengeCount,
    StatementDisplay,
    ProofDisplay,
    fullText,
};