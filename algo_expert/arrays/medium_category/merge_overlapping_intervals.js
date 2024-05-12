// Day 7, Sun, 12/05/24 (Day 6 rest day for algo expert)

// 15. Merge Overlapping intervals

// Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

// Each interval interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of the interval.

// Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and [6, 7] are indeed overlapping.

// Also note that the start of any particular interval will always be less than or equal to the end of that interval.

// Sample Input

// intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

// Sample Output

// [[1, 2], [3, 8], [9, 10]]

// Merge the intervals [3, 5], [4, 7], and [6, 8].
// The intervals could be ordered differently.

function mergeOverlappingIntervals(array) {
  let sortedIntervals = array.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [];
  let currentInterval = sortedIntervals[0];

  mergedIntervals.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    let [_, currentEndInterval] = currentInterval;
    let [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentEndInterval >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentEndInterval, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// Time Complexity: O(nlog(n)), because we are sorting all the values in our input array

// Space Complexity: O(n), creating an output array that can contain up to n intervals

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
);
