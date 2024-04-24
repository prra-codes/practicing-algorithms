// Thu 18/04/24

// 7. Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array == []) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  if (total == 0) {
    return 0;
  }

  let average = total / array.length;

  return average;
}
