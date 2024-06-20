//  Thu, 20/06/24

// 31. Reverse Words In String

// Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order. For example, given the string"tim is great", your function should return "great is tim".

// For this problem, a word can contain special characters, punctuation, and numbers. The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. For example, given the string "whitespaces      4" you would be expected to return "4     whitespaces".

// Note that you're not allowed to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/function.

// Also note that the input string isn't guaranteed to always contains words.

// Sample Input

// string = "AlgoExpert is the best!"

// Sample Output

// "best! this is AlgoExpert"

function reverseWordsInString(string) {
  const strArr = [];

  let word = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      word += string[i];
    } else if (string[i] === " ") {
      strArr.push(word);
      word = "";
    }
  }

  strArr.push(word);

  const reversedArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }

  const reversedStr = reversedArr.join(" ");
  return reversedStr;
}

// Create the array, reverse the array, then make a string out of it

// Time: O(n), loop through all the elements in an array
// Space: O(n), through word array we create

console.log(reverseWordsInString("AlgoExpert is the best!"));
