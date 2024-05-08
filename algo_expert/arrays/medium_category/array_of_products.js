// Day 3, Wed, 8/05/24

// 13. Array Of Products

// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

// In other words, the value at output[i] is equal to the product of every number in the input array other input[i].

// Noter that you're expected to solve this problem without using division.

// Sample Input

// array = [5, 1, 4, 2]

// Sample Output

// [8, 40, 10, 20]

// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

function arrayOfProducts(array) {
  const productArr = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    productArr.push(product);
  }
  return productArr;
}

// n is the length of the input array

// Time Complexity: O(n^2), two for loops

// Space Complexity: O(n), store another array of products that increases as N increases

console.log(arrayOfProducts([5, 1, 4, 2]));

function arrayOfProductsTwo(array) {
  let products = new Array(array.length).fill(1);
  let leftProducts = new Array(array.length).fill(1);
  let rightProducts = new Array(array.length).fill(1);

  let leftRunningProduct = 1;

  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}

// more optimal solution

// Time Complexity: O(n)
// Space Complexity: O(n)
