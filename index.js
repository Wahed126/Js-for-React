// Normal Function
function getRegtangleArea(width, height) {
  return width * height;
}

// the arrow Function for the above function
const getArrRegtangleArea = (width, height) => width * height;

// console.log(getArrRegtangleArea(12, 10));

// Arrow As Callback
// # Normal Callback
const numbers = [1, 2, 3, 4, 5, 6];
const double = numbers.map(function (number) {
  return number * 2;
});

// # Arrow callback
const arrDouble = numbers.map((number) => number * 3);

// console.log(arrDouble);

// #### Note: Arrow function can't be used before initialization.

// But here it is not working. it will cause ReferenceError: Cannot access 'Arrow' before initialization
// Normal();
// Arrow();

function Normal() {
  console.log("Normal Function!");
}

const Arrow = () => console.log("Arrow");
// it works after initialization but 👆🏻 not working
// Normal();
// Arrow();

// ### Note: Arrow function does not define this variable. The this variable noly return an empty Object {}.
const person = {
  name: "Wahed",
  getName: function () {
    console.log("My Name is: " + this.name);
  },
  getArrName: () => console.log("My name is: " + this.name), // This line return "My Name is: undefined"
};

person.getArrName();
