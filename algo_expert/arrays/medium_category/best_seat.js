// Day 9, Tue, 14/05/24 (Day 8 rest day for algo expert)

// 16. Best Seat

// You walk into a theatre you're about to see a show in. The usher within the theatre walks you to your row and mentions you're allowed to sit anywhere within the given row. Naturally you'd like to sit in the seat that gives you the most space. You also would prefer this space to be evenly distributed on either side of you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three seats).

// Given the theatre row represented as an integer array, return the seat index of where you should sit. Ones represent occupied seats and zeroes represent empty seats.

// You may assume that someone is always sitting in the first and last seat of the row. Whenever there are two equally good seats, you should sit in the seat with the lower index. If there is no seat to sit in, return -1. The given array will always have a length of at least one and contain only ones and zeroes.

// Sample Input

// seats = [1, 0, 1, 0, 0, 0, 1]

// Sample Output

// 4

function bestSeat(seats) {
  let bestSeat = -1;
  let bestSpace = 0;

  let leftIdx = 0;

  while (leftIdx < seats.length) {
    let rightIdx = leftIdx + 1;

    while (rightIdx < seats.length && seats[rightIdx] === 0) {
      rightIdx++;
    }

    let availableSpace = rightIdx - leftIdx - 1;

    if (availableSpace > bestSpace) {
      bestSpace = availableSpace;
      bestSeat = Math.floor((leftIdx + rightIdx) / 2);
    }

    leftIdx = rightIdx;
  }
  return bestSeat;
}

// Time Complexity: O(n), where n is the length of the array. Reason O(n), we iterate over the entire array.
// Space Complexity: O(1), the space doesn't increase as n increases

console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]));
