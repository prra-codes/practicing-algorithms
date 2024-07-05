//  Fri, 05/07/24

// 37. Powerset

// Write a function that takes in an array of unique integers and returns its powerset.

// The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of [1, 2] is [[], [1], [2], [1,2]]

function powerset(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  }

  if (idx < 0) {
    return [[]];
  }
  const ele = array[idx];
  const subsets = powerset(array, idx - 1);
  const length = subsets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i];
    subsets.push(currentSubset.concat(ele));
  }
  return subsets;
}

console.log(powerset("TAKE OVER THE WORLD"));

// Time: O(2^n * n)
// Space: O(2^N * n)
