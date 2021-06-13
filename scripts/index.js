// Start with some dummy data
import books from "./dummyLibrary.js";
const myLibrary = books;

// Constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (...books) => {
  for (const book of books) {
    myLibrary.push(book);
  }
  console.log(myLibrary);
};

const tableBody = document.getElementById("table-body");

let count = 1;
let read;
for (const book of myLibrary) {
  const bookInfo = document.createElement("tr");
  // bookInfo.classList.add("box", "notification", "is-info", "is-light");
  if (book.read) {
    read = "Yes";
  } else {
    read = "No";
  }

  bookInfo.innerHTML = `
    <th>${count}</th>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${read}</td>
  `;

  tableBody.appendChild(bookInfo);
  count++;
}
