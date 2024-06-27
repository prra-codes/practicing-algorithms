// Wed, 26/06/24

// Fibonacci Sequence

// Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence

// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// The first two numbers in the sequence are 0 and 1.

// fibonacci(2) = [0, 1]
// fibonacci(3) = [0, 1, 1]
// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

function fibonacci(n) {
  const fibSeq = [0, 1];

  for (let i = 2; i < n; i++) {
    let newFibNum = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(newFibNum);
  }
  return fibSeq;
}

// ALTERNATE METHOD

function fibonacciTwo(n) {
  const fibSeq = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  return fibSeq;
}

console.log(fibonacciTwo(3));
console.log(fibonacciTwo(4));
console.log(fibonacciTwo(5));
console.log(fibonacciTwo(6));
console.log(fibonacciTwo(7));
