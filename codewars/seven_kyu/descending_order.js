//  Day 3, Fri 24/04/24 (Day 2 Rest Day for algorithms)

// 13.Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let str = n.toString();

  const strArr = str.split("");

  const numArr = strArr.map((elem) => {
    return Number(elem);
  });
  numArr.sort(function (a, b) {
    return b - a;
  });
  const backToStrArr = numArr.map((elem) => elem.toString());

  const backToStr = backToStrArr.join("");

  const descendingNum = Number(backToStr);

  return descendingNum;
}

console.log(descendingOrder(42145));
