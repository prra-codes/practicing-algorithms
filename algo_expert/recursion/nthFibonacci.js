//  Mon, 01/07/24

// 34. Nth Fibonacci

// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; there, getNthFib(1) is equal to to F0, getNthFib(2) is equal to F1, etc..

// Sample Input #1

// n = 2

// Sample Output #1

// 1 // 0, 1

// Sample Input #2

// n = 6

// Sample Output #2

// 5 // 0, 1, 1, 2, 3, 5

function getNthFib(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  let fibArr = [0, 1];

  for (let i = 2; i < n; i++) {
    let newFibSum = fibArr[i - 1] + fibArr[i - 2];
    console.log(fibArr);
    fibArr.push(newFibSum);
  }

  let newFib = fibArr[fibArr.length - 1];

  return newFib;
}

// iterative solution

// Time Complexity: O(n)

// console.log(getNthFib(4));

function getNthFibRecursive(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  let newFib = getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2);
  return newFib;
}

// Time Complexity: O(2^n), so a really bad time complexity
// Space Complexity: O(n), because it's a recursive function, so we're going to be using the function call stack which is going to be using up memory

console.log(getNthFibRecursive(6));
