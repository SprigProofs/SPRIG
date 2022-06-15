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
import Lean4 from "./Lean4"

const LANGS: Record<string, Language> = {
    Lean4: Lean4 as unknown as Language,
    TicTacToe: TicTacToe as unknown as Language,
}

export default LANGS;