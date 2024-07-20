// Sat, 20/07/24

// technically a 7 kyu qn but hey.

// 36. Reverse Words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let strArr = str.split(" ");
  console.log(str);

  let reversedArr = [];
  for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
    let reversedWord = strArr[i].split("").reverse().join("");
    reversedArr.push(reversedWord);
  }

  let reversedStr = reversedArr.join(" ");
  return reversedStr;
}

console.log(reverseWords("This is an example!"));

console.log(reverseWords("double    spaces!"));
