// Sat, 25/05/24

// 27. Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// Note: keep the original order of the names in the output.

function friend(friends) {
  const realFriends = friends.filter((ally) => ally.length === 4);
  return realFriends;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
