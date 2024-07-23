// Tue, 23/07/24

// 39. Sort the odd

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let oddArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }

  oddArray.sort((a, b) => a - b);

  let arrCopy = [...array];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      arrCopy.splice(i, 1, oddArray[0]);
      oddArray.shift();
    }
  }

  return arrCopy;
}

// console.log(sortArray([7, 1]));

// console.log(sortArray([5, 8, 6, 3, 4]));

// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));

// Idea: Get array of odd nums
// Go through original array (or copy), then whenever there is an odd number, replace it with a number from that odd nums arr, then remove first num of array  (oddNum[0], (shift?))
