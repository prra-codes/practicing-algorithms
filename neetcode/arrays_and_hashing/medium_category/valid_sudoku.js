// 8. Valid Sudoku, Tue, 23/7/24

// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Example 1:

// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","8",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]

// Output: true
// Example 2:

// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","1",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]

// Output: false
// Explanation: There are two 1's in the top-left 3x3 sub-box.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

function isValidSudoku(board) {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === ".") {
        continue;
      }
      if (
        rows.get(r)?.has(cell) ||
        cols.get(c)?.has(cell) ||
        squares.get(Math.floor(r / 3) * 3 + Math.floor(c / 3))?.has(cell)
      ) {
        return false;
      }
      cols.set(c, new Set(cols.get(c)).add(cell));
      rows.set(r, new Set(rows.get(r)).add(cell));
      squares.set(
        Math.floor(r / 3) * 3 + Math.floor(c / 3),
        new Set(squares.get(Math.floor(r / 3) * 3 + Math.floor(c / 3))).add(
          cell
        )
      );
    }
  }
  return true;
}
