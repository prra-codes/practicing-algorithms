// Day 4, Thu 2/05/24

// 10. Move Element to End

// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily necessarily exclusively increasing; they simply don't decrease.

// Note that empty arrays and arrays of one element are monotonic.

// Note that empty arrays and arrays of one element are monotonic.

// Sample Input

// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

// Sample Output

// true

function isMonotonic(array) {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }

    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));

// non-decreasing: trending upwards
// non-increasing: trending downwards

// Time Complexity: O(n) (for loop)
// Space Complexity: O(1) (just keep track of two variables, nothing that increase as n increases)
