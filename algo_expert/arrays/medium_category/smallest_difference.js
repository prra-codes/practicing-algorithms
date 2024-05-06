// Tue 30/04/24

// 8. Smallest Difference

// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// Sample Input

// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// Sample Output

// [28, 26]

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b); // sorting the first array
  arrayTwo.sort((a, b) => a - b); // sorting the second array
  let arrIdxOne = 0;
  let arrIdxTwo = 0;
  let smallestPair = []; // smallest pair to return at end of function
  let smallestDif = Infinity; // num that we update when is it the smallest difference that we have found. Set to Infinity so that we can update it will any number
  let currentDif = Infinity; // num that we keep updating. The current difference between the array pairs that we compare Set to Infinity so that we can set any number to it

  while (arrIdxOne < arrayOne.length && arrIdxTwo < arrayTwo.length) {
    let valOne = arrayOne[arrIdxOne];
    let valTwo = arrayTwo[arrIdxTwo];

    if (valOne === valTwo) {
      return [valOne, valTwo]; // the  case is where firstNum = secondNum, which means the smallest difference is 0, and that is smallest difference possible. We know there is only one smallest difference so we can just return the pair
    } else if (valOne > valTwo) {
      arrIdxTwo++; // move index of second array to right to find smaller difference
      currentDif = valOne - valTwo;
    } else if (valTwo > valOne) {
      arrIdxOne++; // move index of first array to right to find smaller difference
      currentDif = valTwo - valOne; // we set the smallest pair to be the firstNum and secondNum that has the smallest difference
    }

    if (smallestDif > currentDif) {
      smallestDif = currentDif; // so that we can regular update the smallest dif;
      smallestPair = [valOne, valTwo]; // after all the loops are done, we return the smallest pair
    }
  }

  return smallestPair;
}

// Time Complexity: O(Nlog(N) + Mlog(M)), where N is the length of the first array and M is the length of the second array, and we are sorting both arrays

// Space Complexity: O(1) because we are sorting the arrays in place and not storing much extra, we are storing things that are constant space (O(1))

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
