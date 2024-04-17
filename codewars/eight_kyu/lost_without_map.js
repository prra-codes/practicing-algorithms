// Day 1, Wed 17/04/24

// 4. Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  const doubledArr = x.map((x) => x * 2);

  return doubledArr;
}

console.log(maps([1, 2, 3]));
