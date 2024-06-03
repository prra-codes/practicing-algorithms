//  Tue, 28/05/24

// 24. Common Characters

// Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.

// Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

// Sample Input

// strings = ["abc", "bcd", "cbaccd"]

// Sample Output

// ["b", "c"] // The characters could be ordered differently.

function commonCharacters(strings) {
  const characterCounts = {};

  for (const string of strings) {
    const uniqueCharacterSet = new Set(string);

    for (const uniqueChar of uniqueCharacterSet) {
      if (!(uniqueChar in characterCounts)) {
        characterCounts[uniqueChar] = 0;
      }
      characterCounts[uniqueChar]++;
    }
  }

  const finalCharacters = [];

  for (const [character, count] of Object.entries(characterCounts)) {
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }

  return finalCharacters;
}

// Time Complexity: O(n x m)
//  O(n) where n is the number of strings, because we have to iterate through every string
// but for every string, we have to generate a set and then iterate through the set. generating the set will be a O(m) operation where m where m is the length of that string and we iterate through that set
// So O(n) to go through the whole string, O(m) per string to go through each character
// O(m) will be the length of the longest string

// Space Complexity: O(c) space, total number of entries in character counts, or the total number of uniques across all the different strings

console.log(commonCharacters(["abc", "bcd", "cbaccd"]));
