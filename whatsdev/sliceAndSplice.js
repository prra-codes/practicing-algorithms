// Fri, 21/06/24

// Slice and Splice

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const arr1Copy = arr1.slice(0);

  const arr2Copy = arr2.slice(0);
  arr2Copy.splice(n, 0, ...arr1Copy);
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//
