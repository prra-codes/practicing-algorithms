// Day 3, Tue, 7/05/24

// 20. Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  const arrOfLengths = [];

  for (let i = 0; i < array.length; i++) {
    arrOfLengths.push(array[i].length);
  }

  arrOfLengths.sort((a, b) => a - b);

  const arrWords = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (arrOfLengths[i] === array[j].length) {
        arrWords.push(array[j]);
      }
    }
  }

  return arrWords;
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// Here is a one line solution I saw on Codewars after I figured it out with the above method...
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
