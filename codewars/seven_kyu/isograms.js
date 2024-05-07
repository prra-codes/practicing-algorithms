// Day 2, Tue 6/05/24

// 19. Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  let lowercaseStr = str.toLowerCase();

  let arrOfRepeatingVals = [];

  const newSet = new Set();
  for (let val of lowercaseStr) {
    if (newSet.has(val)) {
      arrOfRepeatingVals.push(val);
    } else {
      newSet.add(val);
    }
  }

  if (arrOfRepeatingVals.length >= 1) {
    return false;
  } else {
    return true;
  }
}

console.log(isIsogram("mose"));
