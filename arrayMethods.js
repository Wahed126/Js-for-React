const notes = [
  {
    title: "Meeting Notes",
    content: "Discuss project roadmap.",
    isPinned: false,
  },
  { title: "Grocery List", content: "milk, egg, bread", isPinned: true },
  {
    title: "Workout Plan",
    content: "Push Day: Bench, Shoulder Press",
    isPinned: true,
  },
  { title: "Recipe Ideas", content: "Pasta, Salad, Tacos", isPinned: false },
];
// ### map method
const noteTilte = notes.map((note, index) => `${index + 1}. note.title`);
// console.log(noteTilte);

// ### filter method
const pinnedNotes = notes
  .filter((note) => note.isPinned)
  .map((note) => note.title);
console.log(pinnedNotes);

// // ### Reduce method; usecase: Mostly used for the shoping card to calculate the total price
// // first do it with regular for loop
// const numbers = [1, 2, 3, 4, 5];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log(total);

// // now reduce function
// const totalReduce = numbers.reduce(
//   (totalReduceNumber, currentValue) => totalReduceNumber + currentValue,
//   0
// ); // the last parameter 0 means like total in the for loop.
// console.log(totalReduce);

const totalContentCharacters = notes.reduce(
  (total, note) => total + note.content.length,
  0
);
// console.log(totalContentCharacters);

// forEach: does not return and new array oposit like map and filter that return an new array
notes.forEach((note) => console.log(note.title));
