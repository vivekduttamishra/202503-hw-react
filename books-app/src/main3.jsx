import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.css'


let pageTitleStyle = {
    color: 'darkgreen'
}

let BookSiteHeader = (
    <header>
        <h1>Book's App</h1>
        <p>World of books</p>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Authors</a></li>
            <li><a href=''>Books</a></li>
            <li>Today is: {new Date().toDateString()}</li>
        </ul>
    </header>
)


let BookList = (
    <div>
        <h2 style={pageTitleStyle}>
            Recommended Book List
        </h2>
        <div className='bookList'>
            <div>The Accursed God</div>
            <div>Manas</div>
            <div>The Count of Monte Cristo</div>
        </div>
    </div>
)

let app = (
    <div>
        {BookSiteHeader}
        {BookList}
    </div>
)


//step#2 add the react to your browser
let root = document.getElementById('root');
createRoot(root).render(app);