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

// person.getArrName();

// Template literals
const name = "Wahed";
const age = 29;

const greeting = `Hello ${name} with ${age} years old.`;

// console.log(greeting);

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

const note = {
  title: "Discuss project",
  timestamp: Date.now(),
};

// console.log(`Last Edited: ${formatDate(note.timestamp)}`);

// Ternary Short Cirtuit Rendering
const number = 5;
const message = number % 2 === 0 ? "Even Number" : "Odd Number";
// console.log(`${number} is an ${message}`);

// example
const stickerNote = {
  title: "Meeting notes",
  content: "Discuss project roadmap",
  timestamp: Date.now(),
  isPinned: true,
};

const noteText = `
    Title: ${stickerNote.title}
    Status: ${stickerNote.isPinned ? "📌 Pinned Note" : "Regular note"}
    Last Edited: ${new Date(stickerNote.timestamp).toLocaleString()}
`;

// console.log(noteText);

// Short Circuiting
const isLogedIn = true;
const welcome = () => isLogedIn && "Welcome, User01";

console.log(welcome());
