// Day 1, Mon 29/04/24

// 7. Three Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an empty array.

// Sample Input

// array = [12, 3, 1, 2, -6, 4, -8, 6]
// targetSum = 0

// Sample Output

// [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let leftIdx = i + 1;
    let rightIdx = array.length - 1;

    while (leftIdx < rightIdx) {
      let currentSum = array[i] + array[leftIdx] + array[rightIdx];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[leftIdx], array[rightIdx]]);
        leftIdx++;
        rightIdx--;
      } else if (currentSum < targetSum) {
        leftIdx++;
      } else if (currentSum > targetSum) {
        rightIdx--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

// Time Complexity: O(N^2), where n is the length of our input array. for loop + while loop

// Space Complexity: O(n), Storing triplets
