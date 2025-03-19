let books=[
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
]

class BookService{
    getAll(){
        return books;
    }

    getById(bookId){
        return books.find(book => book.id === bookId);
    }

    getAllByAuthor(authorId){
        return books.filter(book => book.authorId === authorId);
    }

    remove(bookId){
        books = books.filter(book => book.id!== bookId);
    }

    filter(match){
        return books.filter(match);
    }

    search(term){
        return books.filter(book =>
            book.title.toLowerCase().includes(term.toLowerCase()) ||
            book.authorId.toLowerCase().includes(term.toLowerCase())
        );
    }
}

const bookService = new BookService();