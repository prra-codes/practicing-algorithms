// Tue, 30/07/24

// 42. Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    let upperCase = string[i].toUpperCase();

    if (string[i] === upperCase) {
      newStr = newStr + ` ${string[i]}`;
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}

console.log(solution("camelCasing"));
