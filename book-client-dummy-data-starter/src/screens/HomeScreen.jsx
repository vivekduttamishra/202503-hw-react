import BookCarousel from "../components/BookCarousel"


const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
        description: "A novel about the Jazz Age and the pursuit of the American Dream.",
        reviews: ["A timeless classic!", "Beautifully written and deeply moving."]
    },
    {
        id: 2,
        title: "Moby-Dick",
        author: "Herman Melville",
        cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
        description: "The epic tale of obsession and revenge at sea.",
        reviews: ["A masterpiece of literature!", "Deep and thought-provoking."]
    }
];

const HomeScreen=(props)=>{

    return (
        <div className="HomeScreen">
            <h2>Welcome to Book's Web</h2>
            <BookCarousel books={books} />
        </div>
    )
}

export default HomeScreen
