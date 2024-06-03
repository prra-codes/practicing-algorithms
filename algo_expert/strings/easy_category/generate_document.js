//  Mon, 03/06/24

// 25. Generate Document

// You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

// You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbcc" you cannot generate the document because you're missing one c.

// The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

// Note: you can always generate the empty string ("").

// Sample Input

// characters = "Bste!hetsi ogEAxpelrt x "
// document = "AlgoExpert is the Best!"

// Sample Output

// true

// Time Complexity: O(n + m), need to loop through the characters string and the document string.

// Space Complexity: O(c), where c is the number of unique characters in our characters string.

function generateDocument(characters, document) {
  const characterCounts = {};
  for (const char of characters) {
    if (!(char in characterCounts)) {
      characterCounts[char] = 0;
    }

    characterCounts[char]++;
  }

  for (const char of document) {
    if (!(char in characterCounts) || characterCounts[char] === 0) {
      return false;
    }

    characterCounts[char]--;
  }

  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
