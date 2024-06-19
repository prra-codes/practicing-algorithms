//  Wed, 17/06/24

// 29. Group Anagrams

// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similar, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Sample Input

/// words =["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

// Sample Output

// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

function groupAnagrams(words) {
  const anagrams = {};

  for (const word of words) {
    let sortedWord = word.split("").sort().join("");

    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
);

// Explanation: Create an empty object that will contain the groups of all the anagrams.
// Loop through the words
// At each word, sort the word in alphabetical order
// Check if the sorted word is in the object
// If it is, append the word we looped through in the object, to an array for that sorted word
// If not, add that sorted word and array to the group
// At the end return the values of the object, using Object.values(object), to get an array of all the grouped anagrams

// Time O(wnlog(n)), iterating through w words, then for each word sort the letters in the strings, which is most log(n), where n is the length of the longest string

// Space O(wn), creating an hash table that is gonna eventually store all of the grops of anagrams
