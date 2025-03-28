import React from "react";
import AuthorCard from "./AuthorCard";

export default function AuthorShelfTab({ authors, removeFavorite }) {
  return (
    <div>
      <h4>Favorite Authors</h4>
      <div className="d-flex overflow-auto">
        {authors.map(author => (
          <AuthorCard key={author.id} author={author} removeFavorite={removeFavorite} />
        ))}
      </div>
    </div>
  );
}
