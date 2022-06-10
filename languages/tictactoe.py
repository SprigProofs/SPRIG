from logging import root
import re

from languages.base import Language


class TicTacToe(Language):
    r"""
    Language that represents a game of Tic-Tac-Toe.

    The root claim is of the form:
        xxx|xxx|xxx [XO] plays [XO.] wins
    where each 'x' is either 'X', 'O' or '.'. The X and O represents the two
    players, and the "." an empty cell or a tie.

    A proof attempt has the form contains many lines of the form
        [1-9] -> [1-9.]
    Where the brackets corresponds to any of the characters described. This
    describes a function that takes the move of the first player as input and
    output the second's player move, or a dot '.' if it cannot move.
    The position in the grid are as follows:
        1|2|3
        -+-+-
        4|5|6
        -+-+-
        7|8|9

    A machine level proof that a claim is indeed a draw is ".".
    A machine level proof that a claim is winning for one of the
    two players is of the form:
        - '\' if the win is in the diagonal.
        - '/' if the win is in the antidiagonal.
        - "|1", "|2" or "|3" if the win is in the 1st, 2nd or 3rd column.
        - "-1", "-2" or "-3" similarly for the lines.
    """

    name = "TicTacToe"

    RE_BOARD = re.compile(r"[.XO]{3}\|[.XO]{3}\|[.XO]{3} ([XO]) plays ([.XO]) wins")
    RE_ATTEMPT = re.compile(r"([1-9])\s*->\s*([1-9.])", re.M)
    RE_MACHINE_LEVEL = re.compile(r"[./\\]|[|-][123]")

    def judge_low_level(self, root_question: str, branch: list[tuple[str, int]],
                        machine_proof: str) -> bool:
        """Perform the machine level verification.

        Arguments:
            root_question: the initial claim.
            branch: A list of (proof_attempt, challenge_nb) tuples.
                This list gives all information about the branch of the
                sprig tree. The first element is the initial proof attempt,
                followed by the number of the challenge that was activated,
                and so on until the number of the challenge above the machine proof.
            machine_proof: the low-level proof.

        Returns:
            True if the proof is correct, False otherwise.
        """

        if not self.RE_MACHINE_LEVEL.match(machine_proof):
            return False

        grid, turn, win = self.get_board(root_question, branch)

        if (machine_proof == ".") != (win == "."):
            return False
        elif machine_proof == ".":
            return self._winner(grid, ".")
        elif machine_proof == "/":
            return set(grid[2::2]) == {win}
        elif machine_proof == "\\":
            return set(grid[::4]) == {win}
        else:
            i = int(machine_proof[1]) - 1
            if machine_proof[0] == "|":
                return set(grid[i::3]) == {win}
            else:
                return set(grid[3 * i:3 * i + 3]) == {win}

    def validate_attempt(self, root_question: str, branch: list[tuple[str, int]],
                         attempt: str) -> bool:
        """Check that a proof attempt is coherent. Raises AssertionError if not.

        Arguments:
            root_question: the initial claim.
            branch: A list of (proof_attempt, challenge_nb) tuples.
                This list gives all information about the branch of the
                sprig tree. The first element is the initial proof attempt,
                followed by the number of the challenge that was activated,
                and so on until the number of the challenge above the machine proof.
            attempt: the attempt to check for (syntaxic) validity.
        """
        prev_grid, turn, win = self.get_board(root_question, branch)
        second_player = "XO"[turn == "X"]

        strategy = self.parse_attempt(attempt)
        move_covered = {first for first, second in strategy}
        moves_possible = {i + 1 for i in range(9) if prev_grid[i] == "."}
        assert move_covered == moves_possible, "The strategy does not cover the available moves."

        for move, response in strategy:
            grid = list(prev_grid)
            grid[move - 1] = turn
            # The first player did not win already
            assert not self._winner(''.join(grid), turn), "The first player already won."
            if response is None:
                assert "." not in grid, f"There are still available moves for {second_player}."
            else:
                assert grid[response - 1] == ".", f"{second_player} played in an occupied cell."

        return True

    def validate_top_level(self, root_question: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""
        grid, turn, win = self.parse_board(root_question)
        assert turn != win

        return True

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points that a proof can be challenged."""
        return proof.count("->")

    # Utilities

    def get_board(self, root_question: str, branch: list[tuple[str, int]]) -> tuple[str, str, str]:
        """Return the board at the leaf of the branch"""
        grid, turn, win = self.parse_board(root_question)

        board = list(grid)
        for proof_attempt, challenge_nb in branch:
            next_move = self.parse_attempt(proof_attempt)[challenge_nb]
            board[int(next_move[0]) - 1] = turn
            if next_move[1] is not None:
                board[int(next_move[1]) - 1] = "XO"[turn == "X"]

        return ''.join(board), turn, win

    def parse_board(self, root_question: str) -> tuple[str, str, str]:
        match = self.RE_BOARD.match(root_question)

        assert match, "Invalid board format."

        turn = match.group(1)
        wins = match.group(2)
        grid = root_question[:3] + root_question[4:7] + root_question[8:11]

        return grid, turn, wins

    def parse_attempt(self, attempt: str) -> list[tuple[int, int | None]]:
        """Parse an attempt into a list of (first_move, second_move) tuples of integers between 1 and 9."""

        return [(int(match[0]), int(match[1]) if match[1] != "." else None)
                for match in self.RE_ATTEMPT.findall(attempt)]

    def _all_same(self, s: str) -> str:
        if set(s) == {s[0]}:
            return s[0]
        else:
            return "."

    def _winner(self, grid: str, to_check: str = ".") -> bool:
        assert len(grid) == 9
        lines = ([(grid[i::3]) for i in range(3)]  # vertical
                 + [(grid[3 * i:3 * i + 3]) for i in range(3)]  # horizontal
                 + [(grid[::4]), (grid[2:7:2])]  # diagonal
                 )

        for l in lines:
            result = self._all_same(l)
            if result != ".":
                if to_check == ".":
                    return False
                elif to_check == result:
                    return True

        if to_check == ".":
            return True
        return False
