import { myLibrary, Book, addBookToLibrary } from "./book.js";

// Get Input from Form
const addBookBtn = document.querySelector("#add-book");
const form = document.querySelector("form");

addBookBtn.addEventListener("click", (e) => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const read = form.elements.read.checked;
  const index = myLibrary.length;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
});
