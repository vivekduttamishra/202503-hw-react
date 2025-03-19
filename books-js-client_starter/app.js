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

//select element by Id
const searchOnSelector =document.getElementById("search-on");
const searchBox = document.getElementById("search");
const message=document.getElementById("message");
const bookList = document.getElementById("table-body");

const searchBooks=()=>{
    //read content from input
    let criteria = searchOnSelector.value
    let query = searchBox.value
    searchBox.value=''; //clear search box

    //update ui element
    message.innerHTML = `searching ${criteria}: ${query}`

    bookList.innerHTML = ''

    bookList.innerHTML =`
        <tr>
            <td>searching</td>
            <td>searchng</td>
            <td>searching</td>
            <td>searching</td>
        </tr>
    `


   


}

function updateListDomApproach(){
    let tr= document.createElement('tr');
    
    //set class    
    tr.classList.add('dark');
    //set id attribute for tr
    tr.setAttribute('id', 'search-tr');

    
    //add 4 td elements with content 'searching'
    for(let i=0; i<4; i++){
        let td=document.createElement('td');
        td.textContent='searching';
        tr.appendChild(td);
    }

    while(bookList.rows.length)
        bookList.deleteRow(0);

    while(bookList.firstChild){
        bookList.removeChild(bookList.firstChild);
    }

    bookList.appendChild(tr);
}


document.querySelector('body').onload=()=>{
    console.log('body loaded');
}

