from languages import TicTacToe
from sprig import *

MICHAEL = Address("Michael")
DIEGO = Address("Diego")
CLEMENT = Address("Clément")


# Until I have a way to handle the context...
ctx = " O plays X wins"


def sprig_started():
    level = 6
    recommended_constraints = Constraints(
        root_height=level - 1,
        max_length=1000,
        time_for_questions=2,
        time_for_answers=2,
        upstakes=list(range(level)),
        downstakes=list(range(level)),
        question_bounties=list(range(level)),
        verification_cost=1,
    )

    return Sprig.start(
        TicTacToe().dump(),
        recommended_constraints,
        Address("Diego"),
        "...|XX.|... O plays X wins",
        "O..|XXX|..." + ctx,
        ".O.|XXX|..." + ctx,
        "..O|XXX|..." + ctx,
        "X..|XXO|..." + ctx,
        "...|XXX|O.." + ctx,
        "...|XXX|.O." + ctx,
        "...|XXX|..O" + ctx,
    )


def sprig_challenged():
    sprig = sprig_started()
    now(1)

    sprig.challenge(MICHAEL, "4")
    sprig.challenge(MICHAEL, "2")

    sprig.distribute_all_bets()
    return sprig


def sprig_answer():
    sprig = sprig_challenged()
    now(1)

    sprig.answer(
        "4",
        DIEGO,
        "XO.|XXO|X.." + ctx,
        "XXO|XXO|..." + ctx,
        "X..|XXO|O.X" + ctx,
        "X..|XXO|XO." + ctx,
        "X..|XXO|X.O" + ctx,
    )
    sprig.distribute_all_bets()
    now(1)

    sprig.answer_low_level("2", DIEGO, "-2")
    sprig.distribute_all_bets()
    return sprig


def sprig_challenged_2():
    sprig = sprig_answer()
    now(1)

    sprig.challenge(MICHAEL, "9")
    now(1)
    sprig.distribute_all_bets()

    sprig.answer(
        "4",
        CLEMENT,
        "XO.|XXO|X.." + ctx,
        "X.O|XXO|X.." + ctx,
        "X..|XXO|O.X" + ctx,
        "X..|XXO|XO." + ctx,
        "X..|XXO|X.O" + ctx,
    )

    now(3)
    sprig.distribute_all_bets()
    return sprig
