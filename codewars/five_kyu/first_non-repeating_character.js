// Tue, 06/08/24

// 46. First non-repeating character

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  let lowerCaseStr = s.toLowerCase("");

  const counts = {};

  for (let char of lowerCaseStr) {
    if (!(char in counts)) {
      counts[char] = 0;
    }
    counts[char]++;
  }

  let nonRepeatingCharArr = [];
  for (const [key, value] of Object.entries(counts)) {
    if (value === 1) {
      nonRepeatingCharArr.push(key);
    }
  }

  if (nonRepeatingCharArr.length === 0) {
    return "";
  }

  let lowestIndex = Infinity;

  let lowercaseStrArr = lowerCaseStr.split("");

  for (let i = 0; i < nonRepeatingCharArr.length; i++) {
    let charIndex;
    let nonRepeatingChar = nonRepeatingCharArr[i];

    charIndex = lowercaseStrArr.indexOf(nonRepeatingChar);

    if (charIndex < lowestIndex) {
      lowestIndex = charIndex;
    }
  }

  let lowestChar = s[lowestIndex];

  return lowestChar;
}

console.log(firstNonRepeatingLetter("sTreSS"));
