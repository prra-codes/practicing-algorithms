// Fri, 12/07/24

// 29.(2) Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  const counts = {};

  for (const elem of arr) {
    if (!(elem in counts)) {
      counts[elem] = 0;
    }

    counts[elem]++;
  }

  for (const [key, value] of Object.entries(counts)) {
    if (value === 1) {
      return Number(key);
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
