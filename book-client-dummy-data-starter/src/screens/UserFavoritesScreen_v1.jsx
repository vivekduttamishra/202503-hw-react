import React, { useState } from "react";
import BookShelfTab from "../components/BookShelfTab";
import AuthorShelfTab from "../components/AuthorShelfTab";

const mockBooks = [
  { id: 1, title: "The Great Gatsby", cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg", status: "Want to Read" },
  { id: 2, title: "Moby-Dick", cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg", status: "Want to Read" },
  { id: 3, title: "1984", cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg", status: "Reading" },
  { id: 4, title: "The Catcher in the Rye", cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg", status: "Read" },
];

const mockAuthors = [
  { id: 1, name: "Mahatma Gandhi", photo: "https://pbs.twimg.com/profile_images/185517358/mahatmagandhi_400x400.jpg" },
  { id: 2, name: "Jawaharlal Nehru", photo: "https://pbs.twimg.com/profile_images/1111631560288153602/3cWR8aK7_400x400.jpg" },
];

export default function UserFavorites() {
  const [books, setBooks] = useState(mockBooks);
  const [authors, setAuthors] = useState(mockAuthors);
  const [activeTab, setActiveTab] = useState("books");

  const changeStatus = (id, newStatus) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, status: newStatus } : book)));
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const removeAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <div className="container">
      <h2>My Favorites</h2>

      {/* Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "books" ? "active" : ""}`} onClick={() => setActiveTab("books")}>
            Favorite Books
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "authors" ? "active" : ""}`} onClick={() => setActiveTab("authors")}>
            Favorite Authors
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="mt-3">
        {activeTab === "books" && (
          <>
            <BookShelfTab title="Want to Read" books={books.filter((b) => b.status === "Want to Read")} changeStatus={changeStatus} removeBook={removeBook} />
            <BookShelfTab title="Reading" books={books.filter((b) => b.status === "Reading")} changeStatus={changeStatus} removeBook={removeBook} />
            <BookShelfTab title="Read" books={books.filter((b) => b.status === "Read")} changeStatus={changeStatus} removeBook={removeBook} />
          </>
        )}
        {activeTab === "authors" && <AuthorShelfTab authors={authors} removeAuthor={removeAuthor} />}
      </div>
    </div>
  );
}
