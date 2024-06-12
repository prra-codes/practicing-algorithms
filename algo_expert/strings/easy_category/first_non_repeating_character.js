//  Wed, 12/06/24

// 26. First Non-Repeating Character

// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that occurs only once.

// If the input string doesn't have any non-repeating characters, your function should return -1.

// Sample Input

// string = "abcdcaf"

// Sample Output

// 1 // The first non-repeating character is "b" and is found at index 1.

function firstNonRepeatingCharacter(string) {
  const characterFrequencies = {};

  for (const character of string) {
    if (!(character in characterFrequencies))
      characterFrequencies[character] = 0;
    characterFrequencies[character]++;
  }

  for (let idx = 0; idx < string.length; idx++) {
    const character = string[idx];
    if (characterFrequencies[character] === 1) return idx;
  }

  return -1;
}
console.log(firstNonRepeatingCharacter("SUPER"));
