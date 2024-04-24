//  Wed 17/04/24

// 3. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  const nameArr = name.split(" ");

  let intials = nameArr[0][0].toUpperCase() + "." + nameArr[1][0].toUpperCase();

  return intials;
}

console.log(abbrevName("patrick feeney"));
