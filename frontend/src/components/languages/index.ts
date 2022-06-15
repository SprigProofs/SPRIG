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
}


import { defineComponent, DefineComponent } from "vue";
import { Challenge, ProofAttempt, Sprig } from "../../sprig";
import TicTacToe from "./TicTacToe";

const LANGS: Record<string, Language> = {
    Lean4: {
        name: "Lean4",
        description: "WIP: Mathematical proofs in Lean4.",
        StatementDisplay: null,
        ProofDisplay: null,
        title: (object: ProofAttempt | Challenge, instance: Sprig) => "Lean4 proof",
    },
    TicTacToe: TicTacToe as unknown as Language,
}

export default LANGS;