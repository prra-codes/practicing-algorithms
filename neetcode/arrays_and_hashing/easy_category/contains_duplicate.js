// 1. Duplicate Integer, Mon, 8/7/24

//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

function hasDuplicate(nums) {
  const set = new Set([]);

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }

  return false;
}

// Time: O(n), because you have to loop through the whole array to find the duplicates
// Space: O(n), because I am adding in values into the set up to n values, where n is the number of elements in the array nums

console.log(hasDuplicate([1, 2, 3, 3]));
console.log(hasDuplicate([1, 2, 3, 4]));
