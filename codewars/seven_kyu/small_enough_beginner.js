// Day 5, Fri, 10/05/24

// 22. Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  const upperLimit = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      upperLimit.push(a[i]);
    }
  }

  if (upperLimit.length === 0) {
    return true;
  }

  return false;
}

console.log(smallEnough([1, 2, 3, 4, 5], 3));
