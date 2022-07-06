<template>
<div class="w-full bg-slate-100 flex flex-col p-8">
<article class="w-full max-w-[calc(65ch+2rem)] prose self-center space-y-4">

    <div class="docblock">
        <h1>Documentation</h1>
        <p> Wow such empty...  </p>
    </div>

    <div class="docblock">
        <h2>Sprig glossary</h2>
    </div>

    <div class="docblock">
        <h2>Lean</h2>
    </div>

    <div class="docblock">
        <h2>TicTacToe</h2>
        <p>
            We introduce here the syntax and sementics of the TicTacToe language.
            The purpose of this language is to debate recusively over the outcome
            of Tic-tac-toe (or noughts and crosses) games using the Sprig protocol.
        </p>
        <p>
            Informally, each claim correspond to a state of the board,
            and proof attempts correspond to the details of what one would play
            on each possible move of their adversary.
        </p>

        <h3>Root question</h3>
        <p>
            The questions that can be asked in this language correspond to the state of
            the 3×3 board, the data of the player supposed to win, and the which player plays next.
            The following text describes a board with a circle in the center and a cross in the top left corner.
            It is X's turn to play, and it is claimed that O wins.
            <pre>X..|.O.|... X plays O wins</pre>
        </p>
        <p>
            In all generality, the root question is a string of the form:
            <pre>123|456|789 A plays B wins</pre>
            in which:
            <ul>
                <li>
                    Each digit can be replaced by either an <code>O</code> or an <code>X</code>
                    to indicate that the corresponding player has played in this cell,
                    or by a dot, to indicate that the cell is empty.
                    Each digit correspong to the index of the cell, ordered from left to right, top to bottom.
                </li>
                <li>
                    The letter <code>A</code> can be replaced by either an <code>O</code> or an <code>X</code> to indicate which player plays next.
                    This player is considered as 'the adversary'.
                </li>
                <li>
                    The letter <code>B</code> can be replaced by either an <code>X</code> or an <code>O</code>
                    to claim that this player has a winning strategy in that position.
                    However it must be different from the adversary, so if the next player is <code>X</code>
                    one cannot claim that <code>X</code> wins. This was made so that proof attempts always corresponds
                    to all possible moves in the current position and that those move are those of the adversary.
                    <p>
                        If instead one wants to claim that this position is a draw,
                        then <code>B</code> can be replaced by a dot <code>.</code>.
                        In this case, the sementics are that "the next player does not have a winning strategy",
                        so it is still possible that you can win in this position.
                    </p>
                </li>
            </ul>
        </p>

        <h3>Proof attempts</h3>
        <p>
            Each proof attempt correspond all the possible moves
            of the adversary in the current position
            and our response.
            They are given as the data of function that
            associate their move to our move.
            For instance, in the setting of the root question above,
            there are 7 possible moves for X:
            <pre>
2 -> 3
3 -> 2
4 -> 7
6 -> 3
7 -> 4
8 -> 7
9 -> 2</pre>
            Every <code>A -> B</code> part indicates that
            if the adversary plays in cell <code>A</code>,
            we play in cell <code>B</code>.
            The is one subtilty as sometimes the second player cannot play,
            as there is only one empty cell in the board. In this case,
            we replace <code>B</code> by a dot <code>.</code>.
        </p>
        <p>
            In general, a proof attempt is composed of lines <code>A -> B</code>,
            so that <code>A</code> is replaced by the index of every empty cell once.
            In each line, <code>B</code> is remplaced either by a dot <code>.</code>
            if there is only one empty cell, otherwise by the index of an other empty cell.
        </p>
        <p>
            The claims of a proof attempt are each position obtained
            after playing the two moves <code>A -> B</code>.
            A proof attempt claims that each of those position is winning
            for the same player as the parent position, therefore it has as many
            possible challenges as there are arrows <code>-></code>.
        </p>

        <h3>Machine proofs</h3>
        <p>
            In the case of the Tic-Tac-Toe, a machine level proof
            is simply an indication of which sets of three symbols are aligned.
            There are therefore 9 possible machine proofs:
            <ul>
                <li>
                    <code>|1</code>, <code>|2</code> and <code>|3</code>
                    which indicate that there are three symbols aligned
                    in the first, second or third column respectively.
                </li>
                <li>
                    <code>-1</code>, <code>-2</code> and <code>-3</code>
                    which indicate that there are three symbols aligned
                    in the first, second or third row respectively.
                </li>
                <li>
                    <code>\</code> and <code>/</code>
                    which indicate that there are three symbols aligned
                    in the diagonal or the anti-diagonal respectively.
                </li>
                <li>
                    <code>.</code> which indicate that the grid is full and no-one won.
                </li>
            </ul>
        </p>

    </div>
</article>
</div>

</template>

<style>
code::after, code::before {
    color: rgb(100 116 139);
}
</style>