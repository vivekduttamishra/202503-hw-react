

const BookDetails = (props) => {

    let selectedBook = props.selectedBook;

    if (!selectedBook)
        return null; //no UI


    const getAuthorName = (id) => {
        return id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }


    return (
        <div className='BookDetails'>
            <h2>{selectedBook.title}</h2>
            <div className='columnwise'>
                <div className='left'>
                    <div className='info'>
                        <label>Author</label>
                        <p>{getAuthorName(selectedBook.authorId)}</p>
                    </div>
                    <div className='info'>
                        <label>Price</label>
                        <p> ₹ {selectedBook.price}</p>
                    </div>
                    <div className='info'>
                        <label>Rating</label>
                        <p>{selectedBook.rating}/5</p>
                    </div>
                    {
                        props.user && props.user.roles.includes('admin') &&
                        <button className= 'btn btn-sm btn-danger' onClick={props.onDelete}>
                            Delete
                        </button>
                    }
                </div>
                <div className='right'>
                    <img src={selectedBook.cover}
                        alt={selectedBook.title} />
                </div>
            </div>
        </div>
    )
}


export default BookDetails;