import BookDetails from "./BookDetails";
import BookList from "./BookList";


const BookManager = (props) => {
    let selectedBook={
        "id": "the-accursed-god",
        "title": "The Accursed God",
        "authorId": "vivek-dutta-mishra",
        "price": 349,
        "rating": 4.5,
        "cover": "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg"
    }

    const handleBookSelect= book=>{
        selectedBook=book;
        console.log('selected book is ',selectedBook);
    }

    return (
        <div className='BookManage'>
            <h2>Book Manager</h2>
            
            <div className="columnwise">
                <div className='left'>
                    <BookList  onBookSelect={handleBookSelect} />
                </div>
                <div className='right'>
                        <h3>Currently selected: {selectedBook.title}</h3>
                </div>
            </div>
        </div>
    )
}


export default BookManager;