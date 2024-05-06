// Day 1, Mon 6/05/24

// 18. Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let firstArray = [];
  let secondArray = [];
  for (let i = 0; i < numbers.length; i++) {
    let firstNum = numbers[0];

    if (firstNum === numbers[i]) {
      firstArray.push(numbers[i]);
    } else {
      secondArray.push(numbers[i]);
    }
  }

  console.log(firstArray);
  console.log(secondArray);

  if (firstArray.length === 1) {
    return firstArray[0];
  } else {
    return secondArray[0];
  }
}

console.log(stray([1, 1, 2]));
