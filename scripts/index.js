import { myLibrary } from "./library.js";

const tableBody = document.body.querySelector("#table-body");

// Delete books from database and table
const InitializeDeleteButtons = () => {
  const deleteBtns = document.body.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = btn.dataset.indexNumber;
      delete myLibrary[index];
      const elem = document.querySelector(`tr[data-index-number="${index}"]`);
      if (elem) {
        elem.remove();
      }
    });
  });
};

const createNewRow = (book, index) => {
  const bookInfo = document.createElement("tr");
  bookInfo.setAttribute("data-index-number", index);

  bookInfo.innerHTML = `
      <th>${index + 1}</th>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read ? "Yes" : "No"}</td>
      <td>
        <button class='delete' data-index-number="${index}"></button>
      </td>
    `;

  tableBody.appendChild(bookInfo);
  InitializeDeleteButtons();
};

myLibrary.forEach((book, index) => {
  createNewRow(book, index);
});

InitializeDeleteButtons();

export { tableBody, createNewRow };
