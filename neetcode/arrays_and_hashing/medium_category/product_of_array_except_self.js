// 7. Products of Array Discluding Self, Thu, 18/7/24

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in
// 𝑂
// (
// 𝑛
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]

// Constraints:

// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

function productExceptSelf(nums) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        sum = sum * nums[j];
      }
    }

    output.push(sum);
  }

  return output;
}

// Time: O(n^2), two for loops
// Space: O(n), output array increases as n increases
console.log(productExceptSelf([1, 2, 4, 6]));
console.log(productExceptSelf([-1, 0, 1, 2, 3]));

console.log(productExceptSelf([0, 0])); // should be [0, 0]
