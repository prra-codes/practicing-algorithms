let array = [
  ["a", "b"],
  ["c", "d", "e"],
  ["f", "g", "h"],
];

// let subarray = array[1];
// console.log(subarray[2]);

// console.log(array[1][2]);

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
// }

let str = "";

// for (let i = 0; i < array.length; i++) {
//   let subarray = array[i];
//   for (let j = 0; j < subarray.length; j++) {
//     console.log(subarray[j]);
//   }
// }

for (let i = 0; i < array.length; i++) {
  let subarray = array[i];
  for (let j = 0; j < subarray.length; j++) {
    str += subarray[j];
  }
}

console.log(str);
