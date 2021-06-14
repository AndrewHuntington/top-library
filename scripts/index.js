import { myLibrary } from "./library.js";

const tableBody = document.body.querySelector("#table-body");

let count = 1;
let read;
for (const book of myLibrary) {
  const bookInfo = document.createElement("tr");
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
