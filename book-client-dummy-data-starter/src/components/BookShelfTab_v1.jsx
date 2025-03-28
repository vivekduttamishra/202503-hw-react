import React from "react";
import BookCard from "./BookCard";

export default function BookShelfTab({ title, books, changeStatus, removeBook }) {
  return (
    <div>
      <h4>{title}</h4>
      <div className="d-flex overflow-auto shelf">
        {books.map(book => (
          <BookCard key={book.id} book={book} changeStatus={changeStatus} removeBook={removeBook} />
        ))}
      </div>
    </div>
  );
}
