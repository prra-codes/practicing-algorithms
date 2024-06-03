// Wed, 29/05/24

// 4. Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  const strArr = str.split(" ");

  let maxStr = strArr[0];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxStr.length) {
      maxStr = strArr[i];
    }
  }

  return maxStr.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
