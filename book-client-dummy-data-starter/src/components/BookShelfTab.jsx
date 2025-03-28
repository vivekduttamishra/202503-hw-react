import React, { useState } from "react";
import BookShelfRow from "./BookShelfRow";

export default function BookShelfTab({ books, changeStatus, removeBook }) {
  const [activeShelf, setActiveShelf] = useState("Want to Read");

  const filteredBooks = books.filter((book) => book.status === activeShelf);

  return (
    <div>
      {/* Sub-tabs for shelves */}
      <ul className="nav nav-tabs sub-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeShelf === "Want to Read" ? "active" : ""}`} onClick={() => setActiveShelf("Want to Read")}>
            Want to Read
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeShelf === "Reading" ? "active" : ""}`} onClick={() => setActiveShelf("Reading")}>
            Reading
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeShelf === "Read" ? "active" : ""}`} onClick={() => setActiveShelf("Read")}>
            Read
          </button>
        </li>
      </ul>

      {/* Display books based on active sub-tab */}
      <div className="shelf">
       
        <BookShelfRow books={filteredBooks} changeStatus={changeStatus} removeBook={removeBook} />
      </div>
    </div>
  );
}
