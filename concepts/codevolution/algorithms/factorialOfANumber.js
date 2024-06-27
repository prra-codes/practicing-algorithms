// Thu, 27/06/24

// Factorial of a Number

// Problem - Given an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

// Factorial of zero is 1.

// factorial(4) = 4 * 3 * 2 * 1 = 24
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let total = 1;

  for (let i = 1; i <= n; i++) {
    total *= i;
  }

  return total;
}

// Time: O(n)

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
