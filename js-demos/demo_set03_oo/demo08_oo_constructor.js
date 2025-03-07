

function createAuthor(name,biography){
    let author = new Object();

    author.name=name;
    author.biography=biography;
    author.books=[];
    author.addBook=function(book){
        this.books.push(book);
    }
    author.getBooks=function(){
        return this.books;
    }

    author.toString =function(){
        return `Author: ${this.name}, Biography: ${this.biography}, Books Written: ${this.books.length}`;
    }
    return author;
}






function Book(title,author,price){
    //let book = new Object();
    this.title=title;
    this.author=author;
    this.price=price;
    this.author.addBook(this);
    this.reviews=[];
    this.toString=function(){
        return`Book: ${this.title}, Author: ${this.author.name}, price:${this.price}`
    }

    //return book
}

let author= createAuthor('Vivek');
let book = new Book('The Accursed God',author,399)
