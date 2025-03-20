import { Component } from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";

class BookManager extends Component {

    constructor(props) {
        super(props);
        this.state = {            
            selectedBook: null
        };
    }


   render = () => {
        
    
        const handleBookSelect= book=>{
            //selectedBook=book;
            this.setState({selectedBook:book})
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
                            this.state.selectedBook
                                ?<BookDetails selectedBook={this.state.selectedBook} />
                                :<h3>Select a book to view details.</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}



export default BookManager;