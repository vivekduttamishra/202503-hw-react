import React, { useState } from "react";
import withTitle from "../hoc/withTitle";

const authors = [
  { id: "1", name: "Vyasa" },
  { id: "2", name: "Kalidasa" },
  { id: "3", name: "Tulsidas" },
  { id: "4", name: "Rabindranath Tagore" },
  { id: "5", name: "Premchand" },
  { id: "6", name: "R.K. Narayan" },
  { id: "7", name: "Ruskin Bond" },
];

const formatsList = ["Paperback", "Hardbound", "Kindle", "Ebook", "Audiobook"];

const BookAddScreen = () => {
  const defaultCover = "/book-cover.webp";

  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    authorName: "",
    price: "",
    rating: "",
    description: "",
    bookCover: "",
    formats: [],
    tags: "",
    social: [{ key: "", value: "" }],
  });

  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));

    if (name === "title" && !slugManuallyEdited) {
      setBook((prev) => ({ ...prev, id: slugify(value) }));
    }
  };

  const handleSlugChange = (e) => {
    setBook((prev) => ({ ...prev, id: e.target.value }));
    setSlugManuallyEdited(true);
  };

  const handleAuthorChange = (e) => {
    const name = e.target.value;
    const selectedAuthor = authors.find((a) => a.name === name);
    setBook((prev) => ({
      ...prev,
      authorName: name,
      authorId: selectedAuthor ? selectedAuthor.id : "",
    }));
  };

  const handleFormatChange = (format) => {
    setBook((prev) => {
      const updatedFormats = prev.formats.includes(format)
        ? prev.formats.filter((f) => f !== format)
        : [...prev.formats, format];

      return { ...prev, formats: updatedFormats };
    });
  };

  const handleSocialChange = (index, field, value) => {
    setBook((prev) => {
      const updatedSocial = [...prev.social];
      updatedSocial[index][field] = value;
      return { ...prev, social: updatedSocial };
    });
  };

  const addSocialField = () => {
    setBook((prev) => ({ ...prev, social: [...prev.social, { key: "", value: "" }] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Book:", book);
    alert("Book submitted! (Check console for data)");
    // TODO: Replace with API call to save the book
  };

  return (
    <div className="container mt-4">
      

      {/* Background Preview */}
      <div
        className="p-4 rounded"
        style={{
          backgroundImage: `url(${book.bookCover || defaultCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px",
          borderRadius: "10px",
          minHeight: "300px",
        }}
      >
        <form className="p-3 bg-white bg-opacity-75 rounded" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" name="title" value={book.title} onChange={handleChange} required />
          </div>

          {/* Editable Slug ID */}
          <div className="mb-3">
            <label className="form-label">Book ID (Slug)</label>
            <input type="text" className="form-control" name="id" value={book.id} onChange={handleSlugChange} required />
          </div>

          {/* Author Selection */}
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" value={book.authorName} onChange={handleAuthorChange} list="authorList" required />
            <datalist id="authorList">
              {authors.map((author) => (
                <option key={author.id} value={author.name} />
              ))}
            </datalist>
          </div>

          {/* Price & Rating */}
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" name="price" value={book.price} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <input type="number" className="form-control" name="rating" value={book.rating} onChange={handleChange} step="0.1" min="0" max="5" />
          </div>

          {/* Book Cover */}
          <div className="mb-3">
            <label className="form-label">Book Cover URL</label>
            <input type="text" className="form-control" name="bookCover" value={book.bookCover} onChange={handleChange} />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" value={book.description} onChange={handleChange} rows="3"></textarea>
          </div>

          {/* Formats */}
          <div className="mb-3">
            <label className="form-label">Formats</label>
            <div>
              {formatsList.map((format) => (
                <div key={format} className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={book.formats.includes(format)}
                    onChange={() => handleFormatChange(format)}
                  />
                  <label className="form-check-label">{format}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-3">
            <label className="form-label">Tags (CSV)</label>
            <input type="text" className="form-control" name="tags" value={book.tags} onChange={handleChange} />
          </div>

          {/* Social Links */}
          <div className="mb-3">
            <label className="form-label">Social Links</label>
            {book.social.map((entry, index) => (
              <div key={index} className="d-flex mb-2">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Key (e.g., Twitter)"
                  value={entry.key}
                  onChange={(e) => handleSocialChange(index, "key", e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Value (URL)"
                  value={entry.value}
                  onChange={(e) => handleSocialChange(index, "value", e.target.value)}
                />
              </div>
            ))}
            <button type="button" className="btn btn-sm btn-secondary" onClick={addSocialField}>
              + Add Social Link
            </button>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default withTitle(BookAddScreen);
