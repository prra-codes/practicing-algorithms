// Mon, 03/06/24

// 5. Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  const strArr = str.toLowerCase().split(" ");

  const capitalisedStrArr = strArr.map((word) => {
    let capitalisedWord = word[0].toUpperCase() + word.slice(1);
    return capitalisedWord;
  });

  let capitalisedStr = capitalisedStrArr.join(" ");
  return capitalisedStr;
}

console.log(titleCase("I'm a little tea pot"));
