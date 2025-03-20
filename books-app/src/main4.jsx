import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.css'


let pageTitleStyle = {
    color: 'darkgreen'
}

const SiteTitle = (x) => {
    console.log('x', x)

    let style = {
        color: x.color || "gray",
        fontSize: x.size + 'px'
    }


    return <h1 style={style} >{x.children}</h1>
}



function BookSiteHeader() {

    return (
        <header>
            <SiteTitle color="brown" size={30} >
                BooksTube
            </SiteTitle>
            <p>World of books</p>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Authors</a></li>
                <li><a href=''>Books</a></li>
                <li>
                    Today is: {new Date().toDateString()}
                </li>
            </ul>
        </header>
    )
}



class BookList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2 style={pageTitleStyle}>
                    Recommended List of {this.props.books?.length} Books
                </h2>
                <div className='bookList'>
                    <div>The Accursed God</div>
                    <div>Manas</div>
                    <div>The Count of Monte Cristo</div>
                </div>
            </div>
        )
    }
}

let App = () => {
    let books=["The Accursed God", "Manas",
        "Discovery of India", "The Count of Monte Cristo"]

    return (
        <div>
            <BookSiteHeader />
            <BookList books={books} />
        </div>
    )

}


//step#2 add the react to your browser
let root = document.getElementById('root');
createRoot(root).render(<App />);