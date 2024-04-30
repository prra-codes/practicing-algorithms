//   Day 1, Mon 29/04/24

// 14. Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let lowercaseStr = str.toLowerCase();

  let xArr = [];
  let oArr = [];

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr[i] === "x") {
      xArr.push(lowercaseStr[i]);
    }

    if (lowercaseStr[i] === "o") {
      oArr.push(lowercaseStr[i]);
    }
  }

  return xArr.length === oArr.length;
}

console.log(XO("ooxXxm"));
