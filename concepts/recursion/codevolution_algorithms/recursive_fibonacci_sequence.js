// Thu, 27/06/24

// Recursive Fibonacci Sequence

// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8...)

// recursiveFibonacci(0) = 0

// recursiveFibonacci(1) = 1

// recursiveFibonacci(6) = 8

function recursiveFibonacci(n) {
  if (n === 0) {
    return n;
  }

  if (n === 1) {
    return n;
  }

  let fibNum = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);

  return fibNum;
}

// Time: (2^n) (So really bad), so iterative solution is much better

console.log(recursiveFibonacci("TESTING 1 2 1 2"));
