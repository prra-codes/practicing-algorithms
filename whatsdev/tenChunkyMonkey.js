// Thu, 20/06/24

// 10. Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let arrCopy = [...arr];

  let arrGroups = [];

  while (arrCopy.length > 0) {
    let sliced = arrCopy.slice(0, size);
    arrGroups.push(sliced);
    arrCopy.splice(0, size);
  }

  return arrGroups;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
