// Day 3, Fri 19/04/24

// 3. Sorted Squared Array

// Write a function that takes in a non-empty array of integers that are sorted in ascending order and return a new array of the same length with the squares of the original integers also sorted in ascending order.

// Sample Input

// array = [1, 2, 3, 5, 6, 8, 9]

// Sample Output

// [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(arr) {
  let squaredArr = arr.map((elem) => elem * elem);
  squaredArr.sort((a, b) => a - b);

  return squaredArr;
}

// n is the length of the input array
// Time Complexity here is: O(nlog(n))
// Space Complexity here is: O(n)

// where n is the number of elements in the input array
// reason time is nlog(n), we need to sort array, and that takes min nlog(n)
// reason space is O(n), need to create new arr of squares, which increase as n increases

function sortedSquaredArrayTwo(arr) {
  const sortedSquares = [];

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let smallerValue = arr[leftIdx];
    let largerValue = arr[rightIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      leftIdx++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      rightIdx--;
    }
  }

  return sortedSquares;
}

// n is the length of the input array
// Time: O(n), loop through array once
// Space: O(n), increases as n increases
