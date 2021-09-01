import re

from languages.base import Language


class TicTacToe(Language):
    """
    Language that represents a game of Tic-Tac-Toe.

    A claim has the form
        xxx|xxx|xxx A plays x wins
    With x any character in "X", "O" or ".".
    The X and O represents the two players, and the "."
    is either an empty square or indicates a tie.

    A machine level proof that a claim is indeed a draw is ".".
    A machine level proof that a claim is winning for one of the
    two players is of the form:
        - "\" if the win is in the diagonal.
        - "/" if the win is in the antidiagonal.
        - "|1", "|2" or "|3" of the win is in the 1st, 2nd or 3rd column.
        - "-1", "-2" or "-3" similarly for the lines.
    """

    RE_BOARD = re.compile(r"[.XO]{3}\|[.XO]{3}\|[.XO]{3} ([XO]) plays ([.XO]) wins")
    RE_MACHINE_LEVEL = re.compile(r"[./\\]|[|-][123]")

    def parse_board(self, board):
        match = self.RE_BOARD.match(board)

        assert match, "Invalid board format."

        turn = match.group(1)
        wins = match.group(2)
        grid = board[:3] + board[4:7] + board[8:11]

        return grid, turn, wins

    def _all_same(self, s: str):
        if set(s) == {s[0]}:
            return s[0]
        else:
            return "."

    def _winner(self, grid: str, to_check="."):
        lines = (
            [(grid[i::4]) for i in range(3)]
            + [(grid[4 * i : 4 * i + 3]) for i in range(3)]
            + [(grid[::5]), (grid[2::3])]
        )

        for l in lines:
            assert len(l) == 3
            result = self._all_same(l)
            if result != ".":
                if to_check == ".":
                    return False
                elif to_check == result:
                    return True

        if to_check == ".":
            return True
        return False

    def judge_low_level(self, statement: str, machine_proof: str) -> bool:
        if not self.RE_MACHINE_LEVEL.match(machine_proof):
            return False

        grid, turn, win = self.parse_board(statement)

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
                return set(grid[3 * i : 3 * i + 3]) == {win}

    def validate_subclaims(self, root_statement: str, *sub_claim_statements: str):
        move_covered = [False] * 9
        prev_grid, prev_turn, prev_win = self.parse_board(root_statement)
        for claim in sub_claim_statements:
            grid, turn, win = self.parse_board(claim)

            assert turn == prev_turn, "The turn has changed."
            assert win == prev_win, "The winner has changed."

            # Check that it correspond to a move from both players
            assert grid.count("X") == prev_grid.count("X") + 1, "X did not play exactly once."
            assert grid.count("O") == prev_grid.count("O") + 1, "Y did not play exactly once."

            for cell, (a, b) in enumerate(zip(prev_grid, grid)):
                # The new board extend the previous
                if a in "XO":
                    assert a == b, "New grid is incompatible with previous grid."

                # Find if the other player played here
                if a == "." and b == turn:
                    assert not move_covered[
                        cell
                    ], f"Two claims cover the same move for {prev_turn}."
                    move_covered[cell] = True

            # The other player did not win
            assert not self._winner(grid, to_check="XO"[win == "X"]), "The other player won."

        # Check that all possibilites have been checked
        assert prev_grid.count(".") == sum(
            move_covered
        ), f"Not all possibilities for {prev_turn} have been covered."

    def validate_top_level(self, initial_statement: str):
        grid, turn, win = self.parse_board(initial_statement)
        assert turn != win
