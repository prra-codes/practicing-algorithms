// 6. String Encode and Decode, Wed, 17/7/24

// String Encode and Decode
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

function encode(strs) {
  let result = "";
  for (let s of strs) {
    result += `${s.length}#${s}`;
  }
  return result;
}

function decode(str) {
  let result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j), 10);
    i = j + 1;
    j = i + length;
    result.push(str.substring(i, j));
    i = j;
  }

  return result;
}

// Time Complexity O(n) Total numbers of characters given to us in the list of words
