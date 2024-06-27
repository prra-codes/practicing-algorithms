// Thu, 27/06/24

// Recursive Factorial of a number

// Problem - Given an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

// Factorial of zero is 1.

// factorial(4) = 4 * 3 * 2 * 1 = 24
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }

  let factorial = n * recursiveFactorial(n - 1);

  return factorial;
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Time: O(n)
