// Day 11, Thu, 16/05/24

// 24. Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let strArr = numbers.split(" ");

  let numArr = strArr.map((str) => Number(str));

  let minNum = Math.min(...numArr);
  let maxNum = Math.max(...numArr);

  let minNumtoStr = minNum.toString();
  let maxNumtoStr = maxNum.toString();

  let highestAndLowest = `${maxNumtoStr} ${minNumtoStr}`;

  return highestAndLowest;
}

console.log(highAndLow("1 2 3 4 5"));
