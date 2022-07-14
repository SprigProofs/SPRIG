<template>
<div class="w-full
    bg-gradient-to-br from-blue-50 to-purple-50
    #bg-slate-100 flex flex-col p-8">
<article class="w-full max-w-[calc(65ch+2rem)] prose self-center space-y-4">

    <div class="docblock">
        <h1>Documentation</h1>

    </div>

    <div class="docblock">
        <h2>Sprig glossary</h2>
        <ul>
            <li v-for="word in glossaryOrder" :key="word" :id="word">
                <b class="mr-2">{{ word }}</b>
                {{ glossary[word] }}
            </li>
        </ul>

    </div>

    <div class="docblock">
        <h2>Lean 4</h2>
        <p>
            We introduce here the syntax and semantics used when providing Lean
            proofs. The version of Lean that is used is **Lean4**, though it could
            be adaptated for earlier versions. We impose certain restrictions on top
            of the Lean language in order to ease both the backend soundness checks
            and the understanding of the protocol by the users.
        </p>

        <h3>Root question</h3>

        <p>
            A root question should be a valid Lean 4 file, possibly introducing
            definitions and other useful elements in stating the desired
            property, and contain a single challengeable element (see format
            below), whose validity is claimed without being formally proven.
        </p>

        <h3>Claims</h3>

        <p>
            A proof attempt contain several propositions that aren't
            formally proven. These propositions whose proof isn't provided are
            the points of the proof attempt that can then be challenged by other
            users if they are skeptical.
            In order to ease the identification of
            these challenge points and the soundness checks, we impose the
            following format on these challengeable points.
        </p>
        <p>
            Claims whose proof is not provided must be valid Lean4 statements,
            whose proof uses the <code>sorry</code> Lean tactic. Furthermore, such a claim
            should:
            <ul>
                <li>
                    Be surrounded by <code>--! SPRIG Claim</code> before and <code>--! Claim end</code>
                    after Lean comments, each on a separate line.
                </li>
                <li>
                    Start with <code>theorem</code>, <code>lemma</code> or <code>example</code>
                    and end with sorry. More formally:
                    <pre>[theorem|lemma|example] name (arguments) : statement := sorry</pre>
                </li>

            </ul>

            Furthermore :
            <ul>
                <li>
                    Proof outside of marker pairs should be fully proven, i.e not use the `sorry` tactic
                </li>
                <li>
                    The space between a pair of markers should contain a single statement of the form above
                </li>
                <li>
                    Pairs of markers shouldn't be nested or crossed.
                </li>
            </ul>
        </p>

        <h3>Proof attempts</h3>

        <p>
            A proof attempt is a response to a challenged claim, whose goal is
            to provide more details towards the formal proof. A proof attempt is
            a valid piece of Lean4 code, that may rely on definitions and
            propositions introduced above it in the SPIG tree. A proof attempt
            may introduce new lemmas or propositions, possibly while leaving
            these new propositions unproven if the attempt isn't at the lowest
            level; but should prove the challenge it responds to : This means
            the proof attempt should prove the exact statement of its parent
            challenge, and the header string (from the type of proposotion to
            the `:=` separator) should appear exactly as is in the proof
            attempt.
        </p>

        <h3>Which claims can be used in proof attempts?</h3>
        <p>
            In order to reconstruct the full lean code of a proof attempt, the protocol
            explores the SPRIG tree from the root question to the proof attempt, collecting
            the code of each proof attempt until the challenged claim that leads to the
            branch we are looking at. Therefore, you can use anything that is in a proof
            attempt up in the tree, if it is before a challenge of the branch you are
            currently on. For instance, if the proof attempt above the one you are
            submitting contains 3 claims, and you are reponding to a challenge on the second
            one, you can use the first claim but not the third one.
        </p>

        <h3>Machine-level proof</h3>
        <p>
            Machine-level proofs are special types of proof attempts. They
            should still answer to the challenged claim, but this time they
            should be fully proven. They can still use previous definitions and
            lemmas, but any proposition introduced in the proof attempt should
            be fully proven, without resorting to the `sorry` tactic.
        </p>

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

<script setup lang="ts">
const glossary = {
    "Instance": `
        A SPRIG instance is the tree that contains the whole debate about a root question.
        It contains all the the related proof attempts, claim and challenges.
        Two different instances are always independed from each other.
    `,
    "Root question": `
        Every instance is started with a root question, which announcehat needs to be proven.
    `,
    "Proof Attempt": `
        A proof attempt answers a challenge or the root question by givin more details
        about why a given claim should be true.
        Proof attempts can be either be partial formal proofs and contain gaps
        that can be challenged, or they can be complete and are then called machine proofs.
    `,
    "Machine proof": `
        A machine proof is a complete proof attempt, whose
        truth value can be determined with certainty by a machine.
        Machine proofs can thus not be challenged.
    `,
    "Claim": `
        A claim is a part of a proof attempt that has not been formally proven,
        and can be challenged.
    `,
    "Challenge": "Alternative name for a claim, used when that claim has been challenged.",
    "SPRIG Tree": "Alternative name for a SPRIG instance, with emphasis on the tree structure.",
    "SPRIG": `
        Short for Smart Proofs via Recursive Information Gathering,
        it is the name of the protocol used on this website.
    `,

    "Challenged": `
        Status of a claim that has been challenged by locking a bounty.
        This bounty is either given to the first person that can prove
        the claim (i.e. submit a proof attempt that is ultimately validated),
        or is refunded to the challenger once every proof attempt have been rejected
        and the time for submiting them is over.
        A proof attempt is challenged when one of its claims is challenged
        and none is rejected.
    `,
    "Unchallenged": `
        Status of a claim that has not been challenged.
        An Unchallenged claim becomes validated once the time for
        starting challenges is over.
        A proof attempt is unchallenged when all its claims are unchallenged.
    `,
    "Validated": `
        A claim is considered true and has the status of validated
        either if it is a correct machine proof,
        if it was not challenged in the given time,
        or if it was challenged and the challenge was answered
        by a correct proof attempt.
        A proof attempt is validated when all its claims are validated.
    `,
    "Rejected": `
        A claim is considered false and has the status of rejected
        if is a incorrect machine proof or
        if is challenged and the challenge
        does not receive a correct proof attempt in the allowed time.
        A proof attempt is rejected when one of its claims is rejected.
    `,
    "Decided": `
        A claim, challenge or proof attempt is decided
        if it has the status of validated or rejected.
        Once decided, no more changes can be made to it.
    `,
};
const glossaryOrder = Object.keys(glossary).sort();
</script>

<style>
code::after, code::before {
    color: rgb(100 116 139);
}
</style>