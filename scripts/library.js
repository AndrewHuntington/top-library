import { Book } from "./book.js";

function stringifyLibrary(library) {
  if (library.every((e) => e === null)) {
    return localStorage.setItem("book", JSON.stringify([]));
  } else {
    return localStorage.setItem("book", JSON.stringify(library));
  }
}

export { stringifyLibrary };

// Dummy data using object w/an array value
// export default {
//   books: [
//     new Book("The Hobbit", "J.R.R. Tolkien", "295", true),
//     new Book("The Fellowship of the Ring", "J.R.R. Tolkien", "455", true),
//     new Book("The Two Towers", "J.R.R. Tolkien", "398", true),
//     new Book("The Return of the King", "J.R.R. Tolkien", "421", false),
//   ],
// };

// Dummy data using array of Book objects
// export default [
//   new Book("The Hobbit", "J.R.R. Tolkien", "295", true),
//   new Book("The Fellowship of the Ring", "J.R.R. Tolkien", "455", true),
//   new Book("The Two Towers", "J.R.R. Tolkien", "398", true),
//   new Book("The Return of the King", "J.R.R. Tolkien", "421", false),
// ];
