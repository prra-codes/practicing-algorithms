// Day 10, Wed, 15/05/24

// 23. Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }
  let testArr = test.toLowerCase().split("");
  let originalArr = original.toLowerCase().split("");

  testArr.sort();
  originalArr.sort();

  for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] !== originalArr[i]) {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram("foefet", "toffee"));

console.log(isAnagram("Buckethead", "DeathCubeK"));
