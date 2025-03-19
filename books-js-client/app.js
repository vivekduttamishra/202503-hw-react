//import bookService from './books.js'


//select element by Id
const searchOnSelector = document.getElementById("search-on");
const searchBox = document.getElementById("search");
const message = document.getElementById("message");
const bookList = document.getElementById("table-body");


function range(query){
    let [min,max]= query.split('-').map(x=>parseFloat(x.trim()));
    return {min,max};
}

const text= query=>query;

//filter
const exact = field=> text => book=> book[field].toLowerCase()===text.toLowerCase()

//like
const like = field => text=> book=> book[field].toLowerCase().includes(text.toLowerCase())

//range
const inRange = field=> range=>book=> book[field]>=range.min && book[field]<range.max


//searchBuilder
let searchBuilder=(parser, matcher)=>({parser,matcher})

//searchOptions
let searchOptions={
    all: {parser:text, matcher:()=>(x)=>true},
    title: searchBuilder(text,like('title')),
    author: searchBuilder(text,like('authorId') ),
    price: searchBuilder(range, inRange('price')),
    rating: searchBuilder(range, inRange('rating')),
}



const searchBooks = () => {
    //read content from input
    let criteria = searchOnSelector.value
    let query = searchBox.value
    searchBox.value = ''; //clear search box

    if(searchOptions[criteria]){
        let {parser, matcher} = searchOptions[criteria]
        let q= parser(query)
        console.log('q',q)
        let books = bookService.getAll()
        let filteredBooks = books.findAll(matcher(q))
        showBookList(filteredBooks)
    }  

}

function updateListDomApproach() {
    let tr = document.createElement('tr');

    //set class    
    tr.classList.add('dark');
    //set id attribute for tr
    tr.setAttribute('id', 'search-tr');


    //add 4 td elements with content 'searching'
    for (let i = 0; i < 4; i++) {
        let td = document.createElement('td');
        td.textContent = 'searching';
        tr.appendChild(td);
    }

    while (bookList.rows.length)
        bookList.deleteRow(0);

    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    bookList.appendChild(tr);
}

function createElement(name, attributes = {}, ...children) {
    let element = document.createElement(name);
    if (attributes._class) {
        element.setAttribute('class', attributes._class);
        delete attributes._class;
    }
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    children.forEach(child =>{
        if(!(child instanceof Node)){
            let _content=child;
            child = document.createElement('span')
            child.textContent = _content
        }
        element.appendChild(child)
    });
    return element;
}

function showBookList(books){

    let  bookRows = books.map(b=>`
            <tr>
                <td><img src="${b.cover}"/></td>
                <td>${b.title}</td>
                <td>${b.authorId}</td>
                <td>
                    <button>details</button>
                </td>
            </tr>
        `).join('\n');

    let booksTable = document.querySelector('BooksTable');
    
    booksTable.innerHTML=
    ` <table class="table table-hover table-dark ">
        <thead>
            <tr class="theme-background">
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>                    
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="table-body">
            ${bookRows}
        </tbody>
        </table>    
    `
    console.log('booksTable',booksTable);
    

}



function showBookList_v1(books) {
    bookList.innerHTML = ''

    books.forEach(book => {
        const row = createElement('tr', 
            //row attribute
            {
            id: book.id
            },
            //td#1
            createElement('td', {},
                //img instide td
                createElement('img', {
                    src: book.cover,
                    alt: book.title
                })
            ),
            //td#2
            createElement('td', {}, book.title),
            //td#3
            createElement('td', {}, book.author),
            //td#4
            createElement('td', {},
                //button
                createElement('button',
                    { _class: 'btn btn-sm btn-danger' },
                    'delete'
                )                
            )
        )

        bookList.appendChild(row);
    })
}


document.querySelector('body').onload = () => {
    console.log('body loaded');
    let books =bookService.getAll();
   // showBookList(books);
}

