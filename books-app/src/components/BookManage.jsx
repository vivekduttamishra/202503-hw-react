import { useState } from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";

let booksDb=[
    {
        "id": "the-accursed-god",
        "title": "The Accursed God",
        "authorId": "vivek-dutta-mishra",
        "price": 349,
        "rating": 4.5,
        "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
     },
     {
        "id": "harry-potter-and-the-philosophers-stone",
        "title": "Harry Potter and the Philosopher's Stone",
        "authorId": "jk-rowling",
        "price": 450,
        "rating": 4.8,
        "cover": "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg"
     },
     {
        "id": "harry-potter-and-the-chamber-of-secrets",
        "title": "Harry Potter and the Chamber of Secrets",
        "authorId": "jk-rowling",
        "price": 450,
        "rating": 4.7,
        "cover": "https://m.media-amazon.com/images/I/81S0LnPGGUL._AC_UF1000,1000_QL80_.jpg"
     },
     {
        "id": "kane-and-abel",
        "title": "Kane and Abel",
        "authorId": "jeffrey-archer",
        "price": 399,
        "rating": 4.6,
        "cover": "https://images-eu.ssl-images-amazon.com/images/I/51Io01xRjsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
     },
     {
        "id": "rashmirathi",
        "title": "Rashmirathi",
        "authorId": "ramdhari-singh-dinkar",
        "price": 199,
        "rating": 4.8,
        "cover": "https://rukminim1.flixcart.com/image/416/416/kcf4lu80/regionalbooks/h/s/w/rashmirathi-jnanpith-award-winner-1972-hindi-original-imaftjbmp73rjcfb.jpeg?q=70"
     }
]

   const BookManager = (props) => {
        const [selectedBook,selectBook] = useState(null);
        const [books,updateBooks]=useState(booksDb)
    
        const handleBookSelect= book=>{
            //selectedBook=book;
            //this.setState({selectedBook:book})
            selectBook(book);
        }
        const deleteBook=book=>{
            let restOfBooks = books.filter(b=> b.id!==book.id)
            updateBooks(restOfBooks)
            selectBook(restOfBooks.length?restOfBooks[0]:null);
        }
    
        return (
            <div className='BookManage'>
                <h2>Book Manager</h2>
                
                <div className="columnwise">
                    <div className='left'>
                        <BookList books={books} onBookSelect={handleBookSelect} />
                    </div>
                    <div className='right'>
                        {
                            selectedBook
                                ?<BookDetails selectedBook={selectedBook} onDelete={()=>deleteBook(selectedBook)}
                                    user={props.user} />
                                :<h3>Select a book to view details.</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
    




export default BookManager;