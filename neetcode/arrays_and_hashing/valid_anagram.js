// 2. Is Anagram, Mon, 8/7/24

// Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedsStr = s.split("").sort().join("");

  const sortedtStr = t.split("").sort().join("");

  for (let i = 0; i < s.length; i++) {
    if (sortedsStr[i] !== sortedtStr[i]) {
      return false;
    }
  }

  return true;
}

// Time: O(nlog(n)) because I'm sorting
// Space: O(n) I believe

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));
