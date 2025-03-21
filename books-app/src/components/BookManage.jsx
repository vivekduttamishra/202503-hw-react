import { useState } from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";


   const BookManager = () => {
        const [selectedBook,selectBook] = useState(null);
    
        const handleBookSelect= book=>{
            //selectedBook=book;
            //this.setState({selectedBook:book})
            selectBook(book);
        }
    
        return (
            <div className='BookManage'>
                <h2>Book Manager</h2>
                
                <div className="columnwise">
                    <div className='left'>
                        <BookList  onBookSelect={handleBookSelect} />
                    </div>
                    <div className='right'>
                        {
                            selectedBook
                                ?<BookDetails selectedBook={selectedBook} />
                                :<h3>Select a book to view details.</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
    




export default BookManager;