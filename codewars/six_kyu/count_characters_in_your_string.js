// Sat, 20/07/24

// technically a 7 kyu qn but hey.

// 38. Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let charCounts = {};

  for (let char of string) {
    if (!(char in charCounts)) {
      charCounts[char] = 0;
    }
    charCounts[char]++;
  }

  return charCounts;
}

console.log(count("aba"));
