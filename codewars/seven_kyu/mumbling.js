// 15. Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  const lowercaseStr = s.toLowerCase();

  let str = "";

  let strArr = lowercaseStr.split("");

  let newStrArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let firstLetter = strArr[i].toUpperCase();
    let repeatedChar = "" + strArr[i].repeat(i);
    let hyphen = "-";

    newStr = firstLetter + repeatedChar + hyphen;
    newStrArr.push(newStr);
  }

  let testing = newStrArr[newStrArr.length - 1].replace("-", "");

  newStrArr[newStrArr.length - 1] = testing;

  str = newStrArr.join("");

  return str;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
