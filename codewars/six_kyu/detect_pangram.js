// Sat, 13/07/24

// 30.(3) Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    h: 1,
    i: 1,
    j: 1,
    k: 1,
    l: 1,
    m: 1,
    n: 1,
    o: 1,
    p: 1,
    q: 1,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 1,
    w: 1,
    x: 1,
    y: 1,
    z: 1,
  };

  let onlyLettersArray = string
    .split("")
    .filter((char) => /[a-zA-Z]/.test(char));
  console.log(onlyLettersArray);

  let lowerCaseLetters = onlyLettersArray.join("").toLowerCase();

  console.log(lowerCaseLetters);

  for (let letter of lowerCaseLetters) {
    if (letter in alphabet) {
      if (alphabet[letter] > 0) {
        alphabet[letter]--;
      }
    }
  }

  for (const [key, value] of Object.entries(alphabet)) {
    if (alphabet[key] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
