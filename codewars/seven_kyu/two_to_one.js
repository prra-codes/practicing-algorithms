// Wed 1/05/24

// 16. Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let strArrOne = s1.split("");
  let strArrTwo = s2.split("");
  let newArr = [...strArrOne, ...strArrTwo];
  newArr.sort();

  let mergedArr = [...new Set(newArr)];

  let joinedStr = mergedArr.join("");

  return joinedStr;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
