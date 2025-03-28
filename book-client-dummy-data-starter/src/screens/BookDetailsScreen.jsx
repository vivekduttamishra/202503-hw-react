import React, { useEffect, useState } from "react";
import ScrollableList from "../components/ScrollableList";
import { FaBook, FaTimesCircle, FaBookmark, FaRegBookmark, FaSpinner } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import bookService from "../services/book-service";
import { useParams } from "react-router-dom";
import NotFoundScreen from './NotFoundScreen'
import Tags from "../components/Tags";
import { useStatus } from "../contexts/StatusContext";
import Async from "../components/Async";


const unknownAuthorPhoto = "https://avatars.githubusercontent.com/u/35440139?v=4"; // Use unknown author image

export default function BookDetailsScreen() {


  const { id } = useParams();

  const [book, setBook] = useState(null);
  const { setStatus } = useStatus();


  useEffect(() => {
    setStatus('pending')
    bookService
      .getById(id)
      .then(book => {
        setStatus('success')
        setBook(book)
      })
      .catch(error => {
        setStatus('error', error)
      })
  }, []);



  const [shelfStatus, setShelfStatus] = useState(null);
  const [reviews, setReviews] = useState(book?.reviews);
  const [review, setReview] = useState({ name: "", rating: "", title: "", details: "", photo: unknownAuthorPhoto });




  const handleShelfChange = (status) => {
    if (status === "Remove") {
      setShelfStatus(null);
      setBook((prev) => ({ ...prev, shelfCount: Math.max(0, prev.shelfCount - 1) }));
    } else {
      setShelfStatus(status);
      setBook((prev) => ({ ...prev, shelfCount: prev.shelfCount + 1 }));
    }
  };

  const handleInputChange = (e) => setReview({ ...review, [e.target.name]: e.target.value });
  const submitReview = () => {
    setReviews([...reviews, review]);
    setReview({ name: "", rating: "", title: "", details: "", photo: unknownAuthorPhoto });
  };

  //dummy tags
  //book.tags=["one"]

  return (

    <Async>
      {
        book &&
        <div className="container py-4">
        {/* Book Title */}
        <h1 className="mb-4">{book.title}</h1>

        <div className="row">
          {/* Book Cover & Shelf Icons */}
          <div className="col-12 col-md-4 text-center">
            <img src={book.cover} alt={book.title} className="img-fluid" style={{ maxWidth: "200px" }} />
            <div className="mt-2">
              <FaRegBookmark
                size={24}
                className={`me-2 ${shelfStatus === "Want to Read" ? "text-warning" : ""}`}
                onClick={() => handleShelfChange("Want to Read")}
                title="Want to Read"
              />
              <FaBook
                size={24}
                className={`me-2 ${shelfStatus === "Reading" ? "text-primary" : ""}`}
                onClick={() => handleShelfChange("Reading")}
                title="Reading"
              />
              <FaBookmark
                size={24}
                className={`me-2 ${shelfStatus === "Read" ? "text-success" : ""}`}
                onClick={() => handleShelfChange("Read")}
                title="Read"
              />
              <FaTimesCircle
                size={24}
                className="text-danger ms-2"
                onClick={() => handleShelfChange("Remove")}
                title="Remove from Shelf"
              />
            </div>
            <p className="mt-1"><FaSpinner /> {book.shelfCount} readers have this on their shelf</p>
          </div>

          {/* Book Details */}
          <div className="col-12 col-md-8">
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> {book.price}</p>
            <p><strong>Rating:</strong> ⭐ {book.rating}</p>

            <Tags tags={book.tags} visibility={book.tags !== undefined && book.tags.length > 0} />

            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
        </div>

        {/* Other Books by Author */}
        <h3 className="mt-4">Other Books by {book.author}</h3>
        <ScrollableList>
          {book.otherBooks?.map((b) => (
            <div key={b.id} className="scrollable-list-item text-center">
              <img src={b.cover} alt={b.title} className="img-fluid" />
              <p className="mt-1 small">{b.title}</p>
            </div>
          ))}
        </ScrollableList>

        {/* Review Form */}
        <h3 className="mt-4">Write a Review</h3>
        <div className="card p-3">
          <input type="text" name="name" className="form-control mb-2" placeholder="Your Name" value={review.name} onChange={handleInputChange} />
          <select name="rating" className="form-select mb-2" value={review.rating} onChange={handleInputChange}>
            <option value="">Select Rating</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
            <option value="4">⭐️⭐️⭐️⭐️</option>
            <option value="3">⭐️⭐️⭐️</option>
            <option value="2">⭐️⭐️</option>
            <option value="1">⭐️</option>
          </select>
          <input type="text" name="title" className="form-control mb-2" placeholder="Review Title" value={review.title} onChange={handleInputChange} />
          <textarea name="details" className="form-control mb-2" placeholder="Review Details" value={review.details} onChange={handleInputChange}></textarea>
          <button className="btn btn-primary" onClick={submitReview}>Submit</button>
        </div>

        {/* Reviews List */}
        <h3 className="mt-4">Reviews</h3>
        <ul className="list-group">
          {reviews?.map((rev, index) => (
            <li key={index} className="list-group-item d-flex align-items-start">
              <img src={rev.photo || unknownAuthorPhoto} alt={rev.name} className="rounded-circle me-3" width="50" height="50" />
              <div>
                <strong>{rev.name}</strong> - ⭐ {rev.rating}
                <h5>{rev.title}</h5>
                <p>{rev.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      }
    </Async>
  );
}