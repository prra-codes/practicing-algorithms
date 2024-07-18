// Thu, 18/07/24

// 34. Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  if (words.length === 0) {
    return "";
  }

  const wordsArr = words.split(" ");

  const wordsAndNumbers = {};

  for (let i = 0; i < wordsArr.length; i++) {
    for (let j = 0; j < wordsArr[i].length; j++) {
      if (Number(wordsArr[i][j] % 1 === 0)) {
        wordsAndNumbers[wordsArr[i]] = Number(wordsArr[i][j]);
      }
    }
  }

  let arr = [1, 3, 2, 4];

  arr.sort((a, b) => a - b);

  const objectKeys = Object.keys(wordsAndNumbers);

  const sortedKeys = objectKeys.sort(
    (a, b) => wordsAndNumbers[a] - wordsAndNumbers[b]
  );

  return sortedKeys.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
