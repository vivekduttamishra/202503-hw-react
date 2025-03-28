import React from "react";
import { FaTimes } from "react-icons/fa";

export default function AuthorCard({ author, removeFavorite }) {
  return (
    <div className="card text-center m-2" style={{ width: "120px" }}>
      <img src={author.photo} className="card-img-top" alt={author.name} />
      <div className="card-body">
        <h6 className="card-title">{author.name}</h6>
        <button className="btn btn-sm btn-danger" onClick={() => removeFavorite(author.id)}>
          <FaTimes /> Unfavorite
        </button>
      </div>
    </div>
  );
}
