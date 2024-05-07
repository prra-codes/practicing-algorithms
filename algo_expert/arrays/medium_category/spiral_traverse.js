// Day 1, Mon, 6/05/24

// 11. Spiral Traverse

// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.

// Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

// Sample Input

// array = [
// [1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10. 9, 8, 7],
//]

// Sample Output

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function spiralTraverse(array) {
  let output = [];

  let startRow = 0;
  let endRow = array.length - 1; // the length of a 2D array is also the number of rows in the 2D arrays
  let startCol = 0;
  let endCol = array[0].length - 1; // the inner arrays length would be the number of columns

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      output.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      output.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      output.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startCol === endCol) break;
      output.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return output;
}

console.log(
  spiralTraverse([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
);

// Time Complexity: O(N), where n is the total number of elements in the entire 2D array
// Space Complexity: O(N), we are storing all N values in another array

// the length of a 2D array is also the number of rows in the 2D arrays

// the inner arrays length would be the number of columns
