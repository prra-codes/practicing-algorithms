// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

// console.log(makeMatrix(3, 5, null));
// // [
// //   [ null, null, null, null, null ],
// //   [ null, null, null, null, null ],
// //   [ null, null, null, null, null ]
// // ]

// console.log(makeMatrix(4, 2, "x"));
// // [
// //   [ 'x', 'x' ],
// //   [ 'x', 'x' ],
// //   [ 'x', 'x' ],
// //   [ 'x', 'x' ]
// // ]

// console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]

// All 5 qns done Day 3, Fri 26/04/24

function makeMatrix(m, n, value) {
  let arr = [];
  for (let i = 0; i < m; i++) {
    let subArr = [];
    for (let j = 0; j < n; j++) {
      subArr.push(value);
    }
    arr.push(subArr);
  }

  return arr;
}

console.log(makeMatrix(3, 5, null));
console.log(makeMatrix(4, 2, "x"));
console.log(makeMatrix(2, 2, 0));
