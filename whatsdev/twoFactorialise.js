// Mon, 27/05/24

// 2. Reverse a String

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  let total = 1;

  for (let i = num; i >= 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorialize(5));
