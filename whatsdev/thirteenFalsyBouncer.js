// Mon, 23/06/24

// 13. Falsy Bouncer

// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  const filteredArr = arr.filter((elem) => Boolean(elem) === true);
  return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
