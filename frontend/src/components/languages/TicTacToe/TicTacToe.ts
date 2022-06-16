import { ProofAttempt, Challenge, Sprig } from "../../../sprig";

interface State {
    plays: string;
    wins: string;
    board: string[];
}


const MOVES_REGEX = /([1-9])\s*->\s*([1-9])/g;

/**
 * Get the n-th move of this attempt.
 * @returns A tuple of 0-based indices of the move.
 *  The second index can be null, when the second player cannot play.
 */
function getMove(challengeHash: string, instance: Sprig): [number, number | null] {
    const attempt = instance.proofs[instance.challenges[challengeHash].parent];
    const challengeNb = attempt.challenges.indexOf(challengeHash);
    const moves = [...attempt.proof.matchAll(MOVES_REGEX)];
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
function getState(challengeHash: string | null, instance: Sprig): State {
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
            newBoard[m2] = state.plays === "X" ? "O" : 'X';
        }
        return {
            plays: state.plays,
            wins: state.wins,
            board: newBoard,
        };
    }
}

function title(object: ProofAttempt | Challenge, instance: Sprig): string {
    const state =
        object instanceof ProofAttempt
            ? getState(object.parent, instance)
            : getState(object.hash, instance);

    const board = state.board[0] + state.board[1] + state.board[2] + "|" + state.board[3] + state.board[4] + state.board[5] + "|" + state.board[6] + state.board[7] + state.board[8];
    return `${board} ${state.plays} plays ${state.wins} wins`;
}

function attemptTemplate(challenge: string, instance: Sprig): string {
    const state = getState(challenge, instance);
    return state.board.map((player, i) => player == "." ? `${i+1} -> ?\n` : '').join('')
}

function challengeCount(text: string): number {
    return [...text.matchAll(MOVES_REGEX)].length;
}


export { getState, getMove, title, attemptTemplate, challengeCount };