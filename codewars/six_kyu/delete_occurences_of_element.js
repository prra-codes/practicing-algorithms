// Mon, 15/07/24

// 31. Delete occurrences of an element if it occurs more than n times

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  const counts = {};

  for (const elem of arr) {
    if (!(elem in counts)) {
      counts[elem] = 0;
    }

    counts[elem]++;
  }

  for (let [key, value] of Object.entries(counts)) {
    // remove an element for that key in the array from the end
    // if I know the index of where the element is, I can delete that element with splice
    // then reduce the object value by one whilst the value is less than n

    while (counts[key] > n) {
      const indexOfElemToRemove = arr.findLastIndex(
        (element) => element === Number(key)
      );

      arr.splice(indexOfElemToRemove, 1);

      counts[key]--;
    }
  }

  return arr;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));

console.log(deleteNth([20, 37, 20, 21], 1));

console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1));
// [12, 39, 19]
// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
