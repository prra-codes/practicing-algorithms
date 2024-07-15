// 4. Two Integer Sum, Fri, 12/7/24

// Anagram Groups

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]

// Constraints:

// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

function groupAnagrams(strs) {
  const strObj = {};

  for (let str of strs) {
    let sorted = str.split("").sort().join("");

    if (!(sorted in strObj)) {
      strObj[sorted] = [];
    }

    strObj[sorted].push(str);
  }

  return Object.values(strObj);
}

// Time: O(w * n * log(n)) time
// Space: O(wn) space - where w is the number of words and n is the length of the longest word

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
console.log(groupAnagrams(["x"]));
