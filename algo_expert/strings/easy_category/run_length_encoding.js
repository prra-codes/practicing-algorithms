//  Mon, 27/05/24

// 23. Run-Length Encoding

// Write a function that takes in a non-empty string and returns its run-length encoding.

// From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

// To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-leng-encode long runs. For example, the run "AAAAAAAAAAAA",(12 As) can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A".

// Sample Input

// string = "AAAAAAAAAAAAABBCCCCDD"

// Sample Output

// "9A4A2B4C2D"

function runLengthEncoding(string) {
  const encodedStringArr = [];
  let currentLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentElem = string[i];
    const previousElem = string[i - 1];

    if (currentElem !== previousElem || currentLength === 9) {
      encodedStringArr.push(currentLength.toString());
      encodedStringArr.push(previousElem);
      currentLength = 0;
    }

    currentLength++;
  }

  encodedStringArr.push(currentLength.toString());
  encodedStringArr.push(string[string.length - 1]);

  const finalStr = encodedStringArr.join("");

  return finalStr;
}

// where n is the length of the input string
// Time Complexity: O(n), for loop
// Space Complexity: O(n), add pairs into array

console.log(runLengthEncoding("SUPER"));
