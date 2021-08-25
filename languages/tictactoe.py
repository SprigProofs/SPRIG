import re

from sprig import Claim, Language


class TicTacToe(Language):

    RE_BOARD = re.compile(r"[.XO]{3}\|[.XO]{3}\|[.XO]{3} ([XO]) plays ([.XO]) wins")

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
            [self._all_same(grid[i::3]) for i in range(3)]
            + [self._all_same(grid[3 * i : 3 * i + 3]) for i in range(3)]
            + [self._all_same(grid[::4]), self._all_same(grid[2::2])]
        )

        for result in lines:
            if result != ".":
                if to_check == ".":
                    return False
                else:
                    return result == to_check

        if to_check == ".":
            return True

    def judge_low_level(self, statement: str):
        grid, turn, win = self.parse_board(statement)

        return self._winner(grid, to_check=win)

    def validate_subclaims(self, root_statement: str, *sub_claim_statements: str):
        move_covered = [False] * 9
        prev_grid, prev_turn, prev_win = self.parse_board(root_statement)
        for claim in sub_claim_statements:
            grid, turn, win = self.parse_board(claim)

            assert turn == prev_turn, "The turn has changed."
            assert win == prev_win, "The winner has changed."

            # Check that it correspond to a move from both players
            assert (
                grid.count("X") == prev_grid.count("X") + 1
            ), "X did not play exactly once."
            assert (
                grid.count("O") == prev_grid.count("O") + 1
            ), "Y did not play exactly once."

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
            assert not self._winner(
                grid, to_check="XO"[win == "X"]
            ), "The other player won."

        # Check that all possibilites have been checked
        assert prev_grid.count(".") == sum(
            move_covered
        ), f"Not all possibilities for {prev_turn} have been covered."

    def validate_top_level(self, initial_statement: str):
        grid, turn, win = self.parse_board(initial_statement)
        assert turn != win
