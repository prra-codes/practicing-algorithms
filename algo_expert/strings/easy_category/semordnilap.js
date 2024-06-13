//  Thu, 13/06/24

// 27. Semordnilap

// Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

// A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".

// The order of the returned pairs and the order of the strings within each pair does not matter.

// Sample Input

// words = ["diaper", "abc", "test", "cba", "repaid"]

// Sample Output

// [["diaper", "repaid"], ["abc", "cba"]]

function semordnilap(words) {
  const set = new Set(words);
  const semordnilapPairs = [];

  for (const word of words) {
    const reverse = word.split("").reverse().join("");
    if (set.has(reverse) && word !== reverse) {
      semordnilapPairs.push([word, reverse]);
    }

    set.delete(word);
    set.delete(reverse);
  }

  return semordnilapPairs;
}

// Time: O(n x m), where n being the original number of words in the words array, m being the length of the longest word
// Space: O(n x m), because of the word set n is the number of words we add to the word set and m is going to be the length of the longest word in that word set.

console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid"]));
