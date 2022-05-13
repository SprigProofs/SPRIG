import { ProofAttempt, Challenge, Sprig, Descr } from "../../../sprig";

interface State {
    plays: string;
    wins: string;
    board: string[];
}


/**
 * Get the n-th move of this attempt.
 * @returns A tuple of 0-based indices of the move.
 *  The second index can be null, when the second player cannot play.
 */
function getMove(challengeHash: string, instance: Sprig): [number, number | null] {
    const attempt = instance.proofs[instance.challenges[challengeHash].parent];
    const challengeNb = attempt.challenges.indexOf(challengeHash);
    const moves = [...attempt.proof.matchAll(/([1-9])\s*->\s*([1-9])/g)];
    const move = moves[challengeNb];

    return [+move[1] - 1, move[2] === '.' ? null : +move[2] - 1];
}

/**
 * Compute the state of the game.
 *
 * @param challengeHash Position in the tree to get the state from
 * @param instance The whole sprig instance containing the challenge
 * @returns The state at the challenge.
 */
function getState(challengeHash: string | null, instance: Sprig) {
    if (challengeHash === null) {
        const m = instance.rootQuestion.match(/([XO.]{3})\|([XO.]{3})\|([XO.]{3}) ([XO]) plays ([XO.]) wins/);
        return {
            plays: m[4],
            wins: m[5],
            board: [...m[1], ...m[2], ...m[3]],
        };
    } else {
        const attempt = instance.proofs[instance.challenges[challengeHash].parent];
        const state = getState(attempt.parent, instance);
        const [m1, m2] = getMove(challengeHash, instance);

        const newBoard = state.board;
        newBoard[m1] = state.plays;
        if (m2 !== null) {
            newBoard[m2] = "XO"[state.plays === "X" ? 1 : 0];
        }
        return {
            plays: state.plays,
            wins: state.wins,
            board: newBoard,
        };
    }
}

export { getState, getMove };