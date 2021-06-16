import { myLibrary, Book } from "./book.js";
import { stringifyLibrary } from "./library.js";

const filteredLibrary = myLibrary.filter((e) => e !== null);

// Delete books from database and table
// Finds uninitialized delete buttons and adds delete functionality
const InitializeDeleteButtons = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    if (btn.classList.contains("uninitialized")) {
      btn.classList.remove("uninitialized");

      btn.addEventListener("click", (e) => {
        const index = btn.dataset.indexNumber;
        delete filteredLibrary[index];
        stringifyLibrary(filteredLibrary);
        const elem = document.querySelector(`tr[data-index-number="${index}"]`);
        if (elem) {
          elem.remove();
        }
      });
    }
  });
};

// Change book read status on button click
// Finds uninitialized read buttons and adds functionality
const InitializeReadButtons = () => {
  const readBtns = document.querySelectorAll(".read");
  readBtns.forEach((btn) => {
    if (btn.classList.contains("uninitialized")) {
      btn.classList.remove("uninitialized");

      btn.addEventListener("click", (e) => {
        const index = btn.dataset.indexNumber;
        let book = filteredLibrary[index];
        book.__proto__ = Object.create(Book.prototype);
        book.changeReadStatus();
        stringifyLibrary(filteredLibrary);
        btn.classList.toggle("is-success");
        btn.classList.toggle("is-danger");
        btn.innerHTML = `${btn.innerHTML === "Yes" ? "No&emsp13;" : "Yes"}`;
      });
    }
  });
};

// Adds new rows to your library table for each book
const createNewRow = (book, index) => {
  const tableBody = document.querySelector("#table-body");
  const bookInfo = document.createElement("tr");
  bookInfo.setAttribute("data-index-number", index);

  bookInfo.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${
        book.read
          ? `<button class='uninitialized read button is-small is-success' data-index-number="${index}">Yes</button>`
          : `<button class='uninitialized read button is-small is-danger' data-index-number="${index}">No&emsp13;</button>`
      }</td>
      <td>
        <button class='uninitialized delete' data-index-number="${index}"></button>
      </td>
    `;

  tableBody.appendChild(bookInfo);
  InitializeDeleteButtons();
  InitializeReadButtons();
};

stringifyLibrary(filteredLibrary);
if (filteredLibrary.length > 0) {
  filteredLibrary.forEach((book, index) => {
    createNewRow(book, index);
  });
}

export { createNewRow };
