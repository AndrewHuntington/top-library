import books from "./dummyLibrary.js";
import { tableBody, createNewRow } from "./index.js";
import * as library from "./library.js";

// Get Input from Form
const addBookBtn = document.body.querySelector("#add-book");
const form = document.body.querySelector("form");

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const read = form.elements.read.checked;

  const book = new library.Book(title, author, pages, read);
  library.addBookToLibrary(book);

  createNewRow(book, library.myLibrary.length);
});
