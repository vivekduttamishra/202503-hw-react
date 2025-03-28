import React from "react";
import BookCard from "./BookCard";

export default function BookShelfRow({ books, changeStatus, removeBook }) {
  return (
    <div className="book-shelf-row">
      {books.length === 0 ? (
        <p>No books in this category</p>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} onChangeStatus={changeStatus} onRemove={removeBook}/>
        ))
      )}
    </div>
  );
}
