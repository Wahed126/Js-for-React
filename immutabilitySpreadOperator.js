const user = {
  name: "Wahed",
  age: 29,
};

// update the age as immutability with the spread operator
const newUser = {
  ...user,
  age: 30,
};

console.log(user);
console.log(newUser);
