// Sun, 26/05/24

// 1. Reverse a String

// Reverse a String
// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

function reverseString(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

// console.log(reverseString("hello"));

function reverseStringTwo(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseStringTwo("hello"));
