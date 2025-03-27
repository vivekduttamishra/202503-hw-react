import React from "react";
import BookDetails from "./BookDetails";

const books = [
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
    {
        "id": "kane-and-abel",
        "title": "Kane and Abel",
        "authorId": "jeffrey-archer",
        "price": 399,
        "rating": 4.6,
        "cover": "https://images-eu.ssl-images-amazon.com/images/I/51Io01xRjsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        "id": "rashmirathi",
        "title": "Rashmirathi",
        "authorId": "ramdhari-singh-dinkar",
        "price": 199,
        "rating": 4.8,
        "cover": "https://rukminim1.flixcart.com/image/416/416/kcf4lu80/regionalbooks/h/s/w/rashmirathi-jnanpith-award-winner-1972-hindi-original-imaftjbmp73rjcfb.jpeg?q=70"
    }
]

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedBook: books[0],
            likes: 0,

        }
        console.log('HomeScreen constructor called');
        this.ids = [];
    }

    handleLike = () => {
        console.log('handleLike called and update like state')
        this.setState({ likes: this.state.likes + 1 })
    }




    render() {
        const bannerStyle = {
            margin: "20px",
            border: "2px solid gray"
        }
        console.log('HomeScreen render() called');



        return (
            <div>
                <h1>Welcome to our Book's Web</h1>

                <button onClick={this.handleLike} className='btn btn-sm btn-success'>Like</button> {this.state.likes} likes

                <h2>Recommended Book</h2>
                <div style={bannerStyle}>
                    <BookDetails selectedBook={this.state.selectedBook} />
                </div>
                <p>Total intervals running: {this.ids.length}</p>

            </div>
        )
    }

    componentDidMount() {
        console.log('HomeScreen componentDidMount() called');
        this. iid=setInterval(()=>{
            const randomBookIndex= Math.floor(Math.random()* books.length)
            const randomBook = books[randomBookIndex]
            console.log('selected random book:', randomBook.title)
            this.setState({selectedBook:randomBook})
        },2000)
        this.ids.push(this.iid)
    }

    componentDidUpdate() {
        console.log('HomeScreen componentDidUpdate() called');
        
    }

    componentWillUnmount() {
        console.log('HomeScreen componentWillUnmount() called');
        if(this.iid)
            clearInterval(this.iid)
    
    }

}

export default HomeScreen;