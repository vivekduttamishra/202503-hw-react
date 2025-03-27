import { Component } from 'react';

let pageTitleStyle = {
    color: 'darkgreen'
}

/*
    props={
        authors: [{},{},{}], //an array of authors
        onAuthorSelect: (author) => {} //a callback function to handle author selection event
    }
*/


const AuthorList = ({authors,onAuthorSelect,autoSelect=false, selectedAuthor=null}) => {

    return (
        <div className='AuthorList'>
            <h2>Author List</h2>
            {
                authors.map(author => (
                    <div key={author.id} className="authorName"
                        onClick={() => onAuthorSelect(author)}
                    >
                        {author.name}
                    </div>
                ))
            }
        </div>
    )
}


export default AuthorList