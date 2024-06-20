//  Thu, 20/06/24

// 32. Minimum Characters For Words

// Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.

// For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you", "or", "yo"].

// Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.

// Sample Input

// words = ["this", "that", "did", "deed", "them!", "a"]

// Sample Output

// ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.

function minimumCharactersForWords(words) {
  const maximumFrequencies = {};

  for (const word of words) {
    const characterFrequencyObj = countCharacterFrequency(word);
    updateMaxFrequency(characterFrequencyObj, maximumFrequencies);
  }

  return maximumFrequenciesArr(maximumFrequencies);
}

function countCharacterFrequency(word) {
  const characterFrequency = {};

  for (const character of word) {
    if (!(character in characterFrequency)) {
      characterFrequency[character] = 0;
    }

    characterFrequency[character]++;
  }

  return characterFrequency;
}

function updateMaxFrequency(characterFrequencyObj, maximumFrequencies) {
  for (const character in characterFrequencyObj) {
    if (!(character in maximumFrequencies)) {
      maximumFrequencies[character] = characterFrequencyObj[character];
    } else {
      maximumFrequencies[character] = Math.max(
        maximumFrequencies[character],
        characterFrequencyObj[character]
      );
    }
  }
}

function maximumFrequenciesArr(maximumFrequencies) {
  const maxFrequencyArr = [];
  for (const character in maximumFrequencies) {
    const frequency = maximumFrequencies[character];

    for (let i = 0; i < frequency; i++) {
      maxFrequencyArr.push(character);
    }
  }

  return maxFrequencyArr;
}

// Time Complexity: O(n x l), where l is the length of the longest word and n is the number of words that we have. Since we need to loop through all of our word (n), for every single word, we need to loop through all of their characters and count

// Space Complexity: O(c) where c is the number of unique characters in all of the words that we have
