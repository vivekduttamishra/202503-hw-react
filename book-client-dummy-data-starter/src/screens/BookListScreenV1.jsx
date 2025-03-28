import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookService from '../services/book-service'
import withMrIndiaWatch from "../hoc/withMrIndiaWatch";
import withTitle from "../hoc/withTitle";

let count = 0;

const BookListScreen = () => {

  let [books, setBooks] = useState(null);
  const [status,setStatus]=useState('pending');
  const [error,setError]=useState(null)

  const fetchData=()=>{
    setStatus('pending')
    setError(null);
    bookService
        .getAll()
        .then(b => {
          setBooks(b)
          setStatus('success')
        })
        .catch(e=>{
          setStatus('error')
          setError(e.message)
        })
  }

  useEffect(fetchData, []) //one time only

  if (status==='pending')
    return <div>Loading...</div>

  if(status==='error'){
    if(error.includes("Network Error")){
      return <div>
        <h2 className='text-danger'>Server Unavailable</h2>
        <button onClick={fetchData} className='btn btn-default'>Retry</button>
      </div>
    } else{
      return <div>
        <h2 className='text-danger'>Unknown Error</h2>
        <p classNamae='text-danger'>{error}</p>
      </div>
    }
  }
  // count++;
  // console.log('loaded', books.length, 'books for', count, 'time')


  return (
    <div className="container mt-4">
      <div className="row">
        {books.map((book) => {
          // Convert authorId to formatted name
          const authorName = book.authorId
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <div key={book.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100">
                <Link to={`/books/${book.id}`} className="text-decoration-none">
                  <img src={book.cover} className="card-img-top" alt={book.title} />
                  <div className="card-body">
                    <h5 className="card-title text-black">{book.title}</h5>
                    <p className="card-text text-black">by {authorName}</p>
                    <p className="card-text text-black">Price: ₹{book.price}</p>
                    <p className="card-text text-black">Rating: {book.rating}</p>
                    <div>
                      {book.tags?.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-1">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


//letus apply the hoc
export default withTitle(BookListScreen, 'Book List',false);