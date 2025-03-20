import BookDetails from "./BookDetails";
import BookList from "./BookList";


const BookManage = (props) => {

    return (
        <div className='BookManage'>
            <h2>Book Manager</h2>
            <div className="columnwise">
                <div className='left'>
                    <BookList />
                </div>
                <div className='right'>
                    <BookDetails />
                </div>
            </div>
        </div>
    )
}


export default BookManage;