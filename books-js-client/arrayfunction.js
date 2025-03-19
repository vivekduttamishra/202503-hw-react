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

// for(let book of books){
//     console.log(book.title,book.price);
// }

// books.forEach(book=>{
//     console.log(book.title,book.price)
// });

// let result=[];
// for(let book of books){
//     if(book.price>400)
//         result.push(book);
// }

// let result = books.filter(b=>b.price>400);
// result.forEach(b=>console.log(b.title,b.price));


// books
//     .filter(b=>b.price>400)
//     .forEach(b=>console.log(b))


//what if we want to extract price and title from a book.
// let result =[];
// for(let book of books){
//     result.push({title:book.title, price:book.price});
// }

// result.forEach(b=>console.log(b))


books.filter(b=>b.authorId.includes('vivek')).map(b=>b.title).forEach(t=>console.log(t));