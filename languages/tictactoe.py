import re

from typing_extensions import TYPE_CHECKING

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

    def judge_low_level(self):
        return True  # todo

    def validate_subclaims(self, root: "Claim", *subclaims: "Claim"):
        move_covered = [False] * 9
        prev_grid, prev_turn, prev_win = self.parse_board(root.statement)
        for claim in subclaims:
            grid, turn, win = self.parse_board(claim.statement)

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

        # Check that all possibilites have been checked
        assert prev_grid.count(".") == sum(
            move_covered
        ), f"Not all possibilities for {prev_turn} have been covered."

    def validate_top_level(self, initial_claim: "Claim"):
        grid, turn, win = self.parse_board(initial_claim.statement)
        assert turn != win
