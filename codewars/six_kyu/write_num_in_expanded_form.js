// Fri, 26/07/24

// 41. Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  let str = String(num);

  let strArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      continue;
    }

    let char = str[i];

    let zero = "0";

    let newStr = `${str[i] + zero.repeat(str.length - i - 1)}`;

    strArr.push(newStr);
  }

  let joinedStr = strArr.join(" + ");

  return joinedStr;
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
