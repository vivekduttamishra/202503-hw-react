const fs = require('fs').promises;
const axios = require('axios');
const bcrypt = require('bcrypt');

//commands
async function validateImageUrl(url) {
    try {
        const response = await axios.head(url);
        //console.log(response.status);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function authorWithInvalidImages(dbPath, target) {
    if (!dbPath)
        throw new Error('No db path provided');

    let db = JSON.parse(await fs.readFile(dbPath, 'utf8'));

    let invalidAuthors = [];

    //if db is not array take authors property of db as db
    db = Array.isArray(db) ? db : db.authors;

    for (let author of db) {
        let result = await validateImageUrl(author.photo);
        if (!result) {
            invalidAuthors.push({ id: author.id, name: author.name, photo: author.photo });
        }
    }

    if (target)
        fs.writeFile(target, JSON.stringify(invalidAuthors, null, 2), 'utf8');
    else {
        console.log(invalidAuthors);
        console.log(`${invalidAuthors.length} /${db.length} missing`);
    }
}


async function booksWithInvalidCover(dbPath, target) {
    if (!dbPath)
        throw new Error('No db path provided');

    let db = JSON.parse(await fs.readFile(dbPath, 'utf8'));
    if (db.books)
        db = db.books;

    let invalidBooks = [];

    for (let book of db) {
        let result = await validateImageUrl(book.cover);
        if (!result) {
            invalidBooks.push({ id: book.id, title: book.title, cover: book.cover });
        }
    }

    if (target)
        fs.writeFile(target, JSON.stringify(invalidBooks, null, 2), 'utf8');
    else
        console.log(invalidBooks);
}

async function patchAuthors(src, dbPath, target) {
    if (!src || !dbPath) {
        console.error('src and dbPath are required');
        process.exit(1);
    }
    let authorsStr = await fs.readFile(src);
    let dbStr = await fs.readFile(dbPath);

    let { authors } = JSON.parse(authorsStr);
    let db = JSON.parse(dbStr);

    for (let author of db.authors) {
        let srcAuthor = authors.find(a => a.id === author.id);
        process.stdout.write(`processing... ${author.id}...`)
        if (srcAuthor) {

            if (srcAuthor.photo) {
                author.photo = srcAuthor.photo;
                process.stdout.write(`...photo updated...`);
            }
            // if (author.bio.length < srcAuthor.biography?.length) {
            //     author.bio = srcAuthor.biography;
            //     process.stdout.write(`...bio updated...`);
            // }
            process.stdout.write('done\n')
        } else {
            process.stdout.write(`skipping\n`);
        }
    }

    for (let author of authors) {
        let dbAuthor = db.authors.find(a => a.id === author.id);
        if (!dbAuthor) {
            db.authors.push(author);
            process.stdout.write(`added ${author.id}\n`);
        }
    }

    console.log(`writing to ${target}`);
    let data = JSON.stringify(db, null, 3)
    if (target)
        await fs.writeFile(target, JSON.stringify(db, null, 3));
    else
        await dbSummary(dbPath);
}
async function patchBooks(src, dbPath, target = dbPath, insertNew = true) {
    if (!src || !dbPath) {
        console.error('src and dbPath are required');
        process.exit(1);
    }
    let booksStr = await fs.readFile(src);
    let dbStr = await fs.readFile(dbPath);

    let books = JSON.parse(booksStr);
    //to handle both kind of files
    if (!Array.isArray(books))
        books = books.books;
    let db = JSON.parse(dbStr);

    //delete books that are marked for deletion
    let idsToDelete = books.filter(book=>book._delete).map(book=>book.id);
    //delete from db.books and books
    db.books = db.books.filter(book=>!idsToDelete.includes(book.id));
    books = books.filter(book=>!idsToDelete.includes(book.id));

    for (let book of db.books) {
        let srcBook = books.find(a => a.id === book.id);
        let bookDetails = db.book_details.find(b => b.bookId === book.id);
        process.stdout.write(`processing... ${book.id}...`)
       

        if (srcBook) {

            if (srcBook.cover) {
                book.cover = srcBook.cover;
                process.stdout.write(`...cover updated...`);
            }
            if (bookDetails && srcBook.description && (!bookDetails.description || bookDetails.description.length < srcBook.description.length)) {
                bookDetails.description = srcBook.description;
                process.stdout.write(`...description updated...`);
            }
            process.stdout.write('done\n')
        } else {
            process.stdout.write(`skipping\n`);
        }
    }

    //parse insertNew string to bool if it exists else false
    insertNew = insertNew === 'true' || insertNew === true;

    if (insertNew) {
        var insertCount=0;
        
        for (let book of books) {
            let dbBook = db.books.find(a => a.id === book.id);
            if (!dbBook) {
                dbBook = {
                    id: book.id,
                    title: book.title,
                    cover: book.cover,
                    authorId: book.authorId,
                    rating: book.rating,
                    price: book.price
                }
                db.books.push(dbBook);
                let bookDetails = { bookId: book.id };
                //push all other values
                for (let key in book) {
                    if (!dbBook[key])
                        bookDetails[key] = book[key];
                }
                ++insertCount;
                db.book_details.push(bookDetails);

                process.stdout.write(`added... ${book.id} book:${Object.keys(dbBook)},book_details:${Object.keys(bookDetails)}\n`);
            }

        }

        console.log(`inserted ${insertCount} books`)
    }

    console.log(`writing to ${target}`);
    let data = JSON.stringify(db, null, 3)

    await fs.writeFile(target, JSON.stringify(db, null, 3));

}

async function duplicateAuthors(dbPath, target = dbPath) {
    if (!dbPath) {
        console.error('dbPath is required');
        process.exit(1);
    }

    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);
    let processed = {}
    let count = 0;
    let duplicates = 0;
    for (let author of db.authors) {
        count++;
        if (processed[author.id]) {
            console.log(`overwriting ${author.id}`);
            duplicates++;
        }
        processed[author.id] = author
    }

    console.log(`Total authors: ${count}\t duplicates: ${duplicates}`);
}

async function removeDuplicateCoverUrls(dbPath, target, duplicateLog) {
    if (!dbPath) {
        console.error('dbPath is required');
        process.exit(1);
    }
    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);
    let uniqueImages = {};
    let duplicates = [];
    for (let book of db.books) {
        if (book.cover) {
            if (uniqueImages[book.cover]) {
                console.log(`removing duplicate cover url for ${book.id}`);
                book.cover = '';
                duplicates.push(book);
                uniqueImages[book.cover]++;
            } else {
                uniqueImages[book.cover] = 1;
            }
        }
    }
    console.log(`Total duplicates removed: ${duplicates.length}`);
    if (target)
        await fs.writeFile(target, JSON.stringify(db, null, 3));
    if (duplicateLog)
        await fs.writeFile(duplicateLog, JSON.stringify(duplicates, null, 3));

}

async function updateUserPassword(dbPath, password, email) {
    if (!dbPath) {
        throw new Error('dbPath must be specified');
    }
    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);
    if (!db.users)
        throw new Error('No user found');
    if (!password)
        throw new Error('Password must be specified');

    password = await bcrypt.hash(password, 10);
    let users = db.users;
    if (email)
        users = users.filter(u => u.email === email);

    users.forEach(user => user.password = password);

    await fs.writeFile(dbPath, JSON.stringify(db, null, 3));
    return `Password updated for ${users.length} users`;


}

async function findBooksWithMissingBookDetails(dbPath, logFile) {
    if (!dbPath)
        throw new Error('dbPath must be specified');
    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);

    let missingDetails = [];
    for (let book of db.books) {
        if (!db.book_details.find(b => b.bookId === book.id))
            missingDetails.push({ id: book.id, title: book.title });
    }

    // console.log(`Total books: ${db.books.length}\tTotal book details: ${bookDetails.length}`);
    console.log(`Books with missing book_details: ${missingDetails.length}`);
    if (logFile)
        await fs.writeFile(logFile, JSON.stringify(missingDetails, null, 3));
    else
        console.log(missingDetails);
}

async function dbSummary(dbPath) {
    if (!dbPath)
        throw new Error('dbPath must be specified');
    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);

    for (let key in db) {
        console.log(key + ": " + db[key].length);
    }
}


async function validateAuthorId(dbPath = 'db.json', logFile) {
    if (!dbPath)
        throw new Error('dbPath must be specified');
    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);
    let invalidBooks = [];
    for (let book of db.books) {
        if (!db.authors.find(a => a.id === book.authorId))
            invalidBooks.push({ id: book.id, title: book.title, authorId: book.authorId });
    }
    console.log(`books with invalid author id: ${invalidBooks.length}`);
    console.log(`total books validated: ${db.books.length}`);
    if (invalidBooks.length) {
        console.log(invalidBooks.map(n => b.authorId));
        return false;
    } else {
        console.log('No invalid author ids found');
        return true;
    }
}

async function arrayLength(dbPath) {
    if (!dbPath)
        throw new Error('dbPath must be specified');
    let dbStr = await fs.readFile(dbPath);
    let db = JSON.parse(dbStr);

    return db.length;
}

module.exports = {
    validateImageUrl,
    authorWithInvalidImages,
    booksWithInvalidCover,
    removeDuplicateCoverUrls,
    updateUserPassword,
    patchAuthors,
    patchBooks,
    duplicateAuthors,
    findBooksWithMissingBookDetails,
    dbSummary,
    validateAuthorId,
    arrayLength

}
