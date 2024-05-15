// Day 10, Wed, 15/05/24

// 17. Zero Sum Subarray

// You're given a list of integers nums. Write a function that returns a boolean representing whether ther exists a zero-sum subarray of nums.

// A zero-sum subarray is any subarray where all the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.

// Sample Input

// nums = [-5, -5, 2, 3, -2]

// Sample Output

// True // The subarray [-5, 2, 3] has a sum of 0

function zeroSumSubarray(nums) {
  let currentSum = 0;
  let set = new Set([0]);

  for (let num of nums) {
    currentSum += num;

    if (set.has(currentSum)) {
      return true;
    } else {
      set.add(currentSum);
    }
  }

  return false;
}

// Time Complexity: O(n), iterate over array

// Space Complexity: O(n), because of set we create

console.log(zeroSumSubarray([-5, -5, 2, 3, -2]));
