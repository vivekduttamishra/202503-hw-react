//const CLI = require('./cli');
const CLI = require('conceptarchitect-cli')
const batch = require('./batch')
//console.log('batch',batch);


const cli=new CLI();

cli.addCommand(batch.patchBooks, 'books-update', 'update database with additional book info', 'bu','bp', 'update-books')
cli.addCommand(batch.patchAuthors, 'authors-update', 'update author info in database', 'au','up', 'update-authors');
cli.addCommand(batch.findBooksWithMissingBookDetails,'missing-book-details', 'check books with missing book details', 'mbd');
cli.addCommand(batch.dbSummary, 'db-summary', 'Shows total nodes', 'show', 'info','i');
cli.addCommand(batch.validateAuthorId, 'books-validate-author-id','Validate that all books have valid author id', 'books-validate-author')
cli.addCommand(batch.authorWithInvalidImages, 'authors-invalid-image','Find autohrs with invalid images','a-invalid-images')
cli.addCommand(batch.booksWithInvalidCover, 'books-invalid-image','Find books with invalid images','b-invalid-images')
cli.addCommand(batch.arrayLength, 'array-length','Find array length', 'length','size', 'len')


cli.run();