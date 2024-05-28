// Tue, 28/05/24

// 3. Reverse a String

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  let lowercaseStr = str.toLowerCase();

  let reversedStr = lowercaseStr.split("").reverse().join("");

  if (lowercaseStr === reversedStr) {
    return true;
  }

  return false;
}

console.log(palindrome("hanna"));
