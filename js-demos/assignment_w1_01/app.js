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

    //update ui element
    message.innerHTML = `searching ${criteria}: ${query}`
    bookList.innerHTML =`
        <tr>
            <td>searching</td>
            <td>searchng</td>
            <td>searching</td>
            <td>searching</td>
        </tr>
    `
}