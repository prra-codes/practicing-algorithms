// 9. Longest Consecutive Sequence, Mon, 22/7/24

// Longest Consecutive Sequence
// Given an array of integers nums, return the length of the longest consecutive sequence of elements.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:

// Input: nums = [0,3,2,5,4,6,1,1]

// Output: 7
// Constraints:

// 0 <= nums.length <= 1000
// -10^9 <= nums[i] <= 10^9

function longestConsecutive(nums) {
  if (nums.length === 1) {
    return 1;
  }
  const numsCopy = [...nums];
  console.log("NUMS", nums);

  const orderedNums = [];

  for (let i = 0; i < nums.length; i++) {
    let smallestVal = Math.min(...numsCopy);

    orderedNums.push(smallestVal);

    let indexOfSmallestVal = numsCopy.indexOf(smallestVal);

    numsCopy.splice(indexOfSmallestVal, 1);
  }

  console.log("ORDERED NUMS", orderedNums);

  let count = 1;
  let highestCount = 0;

  for (let i = 0; i < orderedNums.length - 1; i++) {
    let oneGreater = orderedNums[i] + 1;
    if (orderedNums[i + 1] === oneGreater) {
      count++;

      if (count > highestCount) {
        highestCount = count;
      }
    } else if (orderedNums[i + 1] === orderedNums[i]) {
      if (count > highestCount) {
        highestCount = count;
      }
    } else {
      count = 1;
    }
  }

  return highestCount;
}

// console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
