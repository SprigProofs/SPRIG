interface Language {
    name: string;
    description: string;
    // Components
    StatementDisplay: DefineComponent<{
        instance: Sprig;
        challengeHash: string | null;
    }>;
    ProofDisplay: DefineComponent<{
        instance: Sprig;
        attemptHash: string;
    }>;
    // Functions
    title: (object: ProofAttempt | Challenge, instance: Sprig) => string;
    // Text template for a new proof attempt that answers this challenge.
    attemptTemplate: (challenge: string, instance: Sprig) => string;
    // The number of challenges in a proof attempt. This proof attempt can be ill formed.
    challengeCount: (text: string) => number;
    // Full text to copy / download for a proof (including what's above in the tree)
    fullText?: (attempt: ProofAttempt, instance: Sprig) => string;
}


import type { DefineComponent } from "vue";
import type { Challenge, ProofAttempt, Sprig } from "../../sprig";
import TicTacToe from "./TicTacToe";
import Lean4 from "./Lean4"

const LANGS: Record<string, Language> = {
    Lean4: Lean4 as unknown as Language,
    TicTacToe: TicTacToe as unknown as Language,
}

export default LANGS;