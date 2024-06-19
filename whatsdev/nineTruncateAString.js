// Wed, 19/06/24

// 9. Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let sliced = str.slice(0, num);
  console.log(sliced);

  let truncated = sliced + "...";

  if (str.length > num) {
    return truncated;
  } else {
    return str;
  }
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
