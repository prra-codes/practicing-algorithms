//  Day 3, Fri 26/04/24 (Day 2 rest day for algorithms)

// 6. Transpose Matrix

// You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.

// The transpose of a matrix is a flipped version of the original matrix across it's maind diagonal (which runs from top-left ot bottom-right); it switches the row and column indices of the original matrix.

// You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

// Sample Input #1

// matrix = [
// [1, 2],
//]

// Sample Output # 1

//  [
//   [1],
//   [2]
//]

// Sample Input #2

// matrix = [
//  [1, 2],
//  [3, 4],
//  [5, 6]
//]

// Sample Output #2

// matrix = [
// [1, 3, 5],
// [2, 4, 6]
//]

// Sample Input #3

// matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
//]

// Sample Output #3

// [
//  [1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9]
// ]

function transposeMatrix(matrix) {
  const transposedMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
}

console.log(transposeMatrix([1, 2]));

// Time: O(w x h), where w and h are the width and the height of the matrix, respectively
// Reason w x h is the number of elements in the matrix, and we need to traverse through the whole matrix
// Space: O(w x h), since we store the elements into an entirely new matrix

// want to iterate through the matrix column by column, because the columns are going to represent the new rows
