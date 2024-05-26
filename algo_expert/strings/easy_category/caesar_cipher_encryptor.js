//  Day 2, Sun, 26/05/24

// 22. Caesar Cipher Encryptor

// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

// Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

// Sample Input

// string = "xyz"
// key = 2

// Sample Output

// "zab"

function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const char of string) {
    let newChar = char.charCodeAt() + newKey;

    if (newChar <= 122) {
      newLetters.push(String.fromCharCode(newChar));
    } else {
      newLetters.push(String.fromCharCode(96 + (newChar % 122)));
    }
  }

  return newLetters.join("");
}
