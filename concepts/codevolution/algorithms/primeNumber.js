// Thu, 27/06/24

// Prime Number

// Problem - Given a natural number 'n', determine if the number is prime or not

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Time: O(n)

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
// prime number: A whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
