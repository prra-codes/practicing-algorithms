//  Day 1, Sat, 25/05/24

// 21. Palindrome Check

// Write a function that takes in a non-empty string and that returns a booleand representing whether the string is a palindrome.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// Sample Input

// string = "abcdcba"

// Sample Output

// true // it's written the same forward and backward

function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");

  if (str === reverseStr) {
    return true;
  }
  return false;
}

// console.log(isPalindrome("hannah"));

function isPalindromeTwo(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str === reverseStr) {
    return true;
  }

  return false;
}

// Time Complexity: O(n^2), Space Complexity O(n)

// console.log(isPalindromeTwo("hannah"));

function isPalindromeThree(str) {
  const reversedChars = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversedChars.push(str[i]);
  }

  return str === reversedChars.join("");
}

// Time Complexity: O(n), Space Complexity O(n)

console.log(isPalindromeThree("hannah"));
