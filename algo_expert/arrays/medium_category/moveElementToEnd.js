// Day 3, Wed 1/05/24

// 9. Move Element to End

// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perfom this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Sample Input

// array = [2, 1, 2, 2, 2, 3, 4, 2]
// toMove = 2

// Sample Output

// [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3 and 4 could be ordered differently

function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) --j;
    if (array[i] === toMove) {
      swap(i, j, array);
    }
    i++;
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

// Time O(n), where n is the length of the array (traverse through array)
// Space O(1), since we are sorting in place and not storing anything that increases as n increases
