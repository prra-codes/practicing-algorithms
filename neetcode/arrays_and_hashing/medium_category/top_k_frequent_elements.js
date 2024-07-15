// 5. Top K Elements in List, Fri, 12/7/24

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

function topKFrequent(nums, k) {
  const counts = {};

  for (const elem of nums) {
    if (!(elem in counts)) {
      counts[elem] = 0;
    }

    counts[elem]++;
  }

  const sortedKeys = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  const numSortedKeys = sortedKeys.map((key) => Number(key));

  const finalArr = [];

  for (let i = 0; i < k; i++) {
    finalArr.push(numSortedKeys[i]);
  }

  return finalArr;
}

// Time Complexity: Onlog(n)) I believe, because of sorting
// Space Complexity: O(n) I believe

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log(topKFrequent([7, 7], 1));
