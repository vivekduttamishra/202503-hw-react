import React from 'react';
import { createRoot } from 'react-dom/client';


let titleStyle = {
    color: 'gray'
}

let headerStyle = {
    margin: 0,
    borderBottom: '1px solid gray'
}


let bookStyle = {
    font: '1.2em',
    borderBottom: '1px solid grey',
    marginBottom: '5px',
    padding: '10px'
}

let logo = React.createElement('img', 
    { src: '/vite.svg' }
    )

//step#1 create react application
let title = React.createElement('h1', {
    style: titleStyle

    },
    logo,
    'Hello From React');

let header = React.createElement('div', {
    style: headerStyle
},
    title
)


let books = ['The Accursed God', 'Manas', 'The Count of Monte Cristo'];

let bookItems = books.map(book => React.createElement('div', { style: bookStyle }, book))

let app = React.createElement('div', null,
    header,
    React.createElement('h2',null, 'Book List'),
    React.createElement('div', null,
        ...bookItems
    )
)




//step#2 add the react to your browser
let root = document.getElementById('root');
createRoot(root).render(app);