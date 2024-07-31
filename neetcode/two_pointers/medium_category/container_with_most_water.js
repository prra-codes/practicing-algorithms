// 13. Container With Most Water, Wed, 31/07/24

// Max Water Container
// You are given an integer array heights where heights[i] represents the height of the i-th bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:

// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4
// Constraints:

// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000

function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let res = 0;

  while (left < right) {
    const containerLength = right - left;
    const area = containerLength * Math.min(heights[left], heights[right]);
    res = Math.max(res, area);
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

console.log(maxArea(2));
