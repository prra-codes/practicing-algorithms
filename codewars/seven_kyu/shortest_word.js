//  Mon 22/04/24

// 11. Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let strArr = s.split(" ");

  let shortestWord = strArr[0];

  for (let i = 0; i < strArr.length; i++) {
    if (shortestWord.length > strArr[i].length) {
      shortestWord = strArr[i];
    }
  }

  return shortestWord.length;
}

console.log(findShort("Superman is the super"));
