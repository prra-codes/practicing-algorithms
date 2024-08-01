// Thu, 01/08/24

// 44. Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
  let uniqueOrder = [];
  let itemToCheck = null;

  for (let i = 0; i < iterable.length; i++) {
    if (i === 0) {
      uniqueOrder.push(iterable[i]);
      itemToCheck = iterable[i];
      continue;
    }

    if (iterable[i] === itemToCheck) {
      continue;
    } else {
      uniqueOrder.push(iterable[i]);
      itemToCheck = iterable[i];
    }
  }

  return uniqueOrder;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
