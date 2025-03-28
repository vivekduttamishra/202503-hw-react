import {useParams, useNavigate} from 'react-router-dom'

const BookDetailsScreen = ({books})=>{

    const {id} = useParams();
    const navigator= useNavigate();
    let book= books.find(book => book.id === id);
    if(!book)
        return <h2>Invalid book Id: {id}</h2>

    const handleBackButton=()=>{
        navigator('/books');
    }

    return (
    <div className="BookDetailsScreen">
        <h2>{book.title}</h2>
        <h3>by {book.authorId}</h3>

        <button onClick={handleBackButton} className='btn btn-primary'>Back to List</button>
    </div>
    )
}

export default BookDetailsScreen;