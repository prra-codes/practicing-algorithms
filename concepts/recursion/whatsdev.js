// function factorial(num) {
//   let total = 1;

//   for (let i = 1; i <= num; i++) {
//     total *= i;
//   }

//   return total;
// } // non-recursive way

// 1.
function factorial(num) {
  if (num === 1) return 1; // base case
  return num * factorial(num - 1); // recursive call
} // recursive way
// using recursion is just a function calling itself within itself,
// so recursion is basically a calling of a function inside of it's own body

// base case, where do you stop your code
// recursive function call itself
// console.log(factorial(5));

// Tracing the execution

// 5 * factorial(4)
//     4 * factorial(3)
//         3 * factorial(2)
//             2 * factorial(1)
//                  1

// 120, so when num = 5, answer = 120
// 5 * 24
//     4 * 6
//         3 * 2
//             2 * 1
//                  1

// console.log(factorial(5));

// If I don't understand a recursive solution, trace it

/////////////////////////////////////

//  summing all of the numbers in an array
// function sumList(arr) {
//   let total = 0;
//   for (let item of arr) {
//     total += item;
//   }
//   return total;
// } // non-recursive method

// 2.
function sumList(arr) {
  if (arr.length === 0) return 0; // base case
  return arr[0] + sumList(arr.slice(1)); // recursive call
} // recursive method

// the base case is the statement that determines when your recursive function stops

// Tracing the execution, when arr = [1, 2, 3]

// 1 + sumList([2, 3])
//     2 + sumList([3])
//         3 + sumList([])
//               0

// so when arr = [1, 2, 3], answer = 6
// 6
// 1 + 5
//     2 + 3
//         3 + 0
//               0
// console.log(sumList([1, 2, 3])); // 6

///////////////////////////////////////
