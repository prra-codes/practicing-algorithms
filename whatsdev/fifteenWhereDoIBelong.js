// Mon, 01/07/24

// 15. Where do I belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  const sortedList = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedList.length; i++) {
    if (num <= sortedList[i]) {
      return sortedList.indexOf(sortedList[i]);
      // or just return i because that's the index
    }
  }

  let lastValSortedList = sortedList[sortedList.length - 1];

  let lastValueIndex = sortedList.indexOf(lastValSortedList);

  return lastValueIndex + 1;

  // or just return arr.length
}

console.log(getIndexToIns([40, 60], 50));

console.log(getIndexToIns([2, 5, 10], 15));

console.log(getIndexToIns([], 1));
