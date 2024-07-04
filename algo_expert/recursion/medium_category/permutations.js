//  Thu, 04/07/24

// 36. Permutations

// Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.

// If the input array is empty, the function should return an empty array.

// Sample Input

// array = [1, 2, 3]

// Sample Output

// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// O(n*n!) time | O(n*n!) space

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(getPermutations([1, 2, 3]));
