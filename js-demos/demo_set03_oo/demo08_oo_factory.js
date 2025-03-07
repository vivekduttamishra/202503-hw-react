

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

let gandhi= createAuthor('Mahatma Gandhi', 'Father of the Nation');
gandhi.addBook('My Experiments with the truth');
var vivek = createAuthor('Vivek Dutta Mishra', 'Author of the Lost Epic Series');

vivek.addBook('The Accursed God')
vivek.addBook('Manas')

console.log('books by vivek')

for(let book of vivek.getBooks()){
    console.log(book);
}
