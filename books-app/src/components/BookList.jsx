import { Component } from 'react';

let pageTitleStyle = {
    color: 'darkgreen'
}

class BookList extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
       
        return (
            <div className='BookList'>
                <h2>Book List</h2>
                {
                   this.props.books.map(book=>(
                   <div key={book.id} className="bookTitle"
                        onClick={()=>this.props.onBookSelect(book)}
                    >
                        {book.title}
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default BookList