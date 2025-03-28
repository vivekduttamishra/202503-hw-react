import { Link } from "react-router-dom";



const BookListScreen = ({ books}) => {

    const imgStyle = {
        width: "80px",
        marginRight: "10px"
    }

    const liStyle = {
        display: "flex",
        listStyle: "none",
        alignItems: "center",
        marginBottom: "10px"
    }

    console.log('rending booklist')

    return (
        <div className="BookListScreen">
            <h2>Author List Screen</h2>

            <ul>
                {books.map((book, index) => (

                    <li key={index} style={liStyle} >
                        <Link to={`/books/${book.id}`} style={{ color: "inherit", textDecoration: "none" }} >
                            <img src={book.cover} alt={book.title} style={imgStyle} />
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default BookListScreen;