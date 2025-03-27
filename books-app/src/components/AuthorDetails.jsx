

const AuthorDetails = ({ selectedAuthor, user, onDelete }) => {




    if (!selectedAuthor)
        return null; //no UI




    return (
        <div className='AuthorDetails'>
            <h2>{selectedAuthor.name}</h2>
            <div className='columnwise'>
                <div className='left'>
                    <img src={selectedAuthor.photo}
                        alt={selectedAuthor.name} />
                    {
                        user && user.roles.includes('admin') &&
                        <button className='btn btn-sm btn-danger' onClick={onDelete}>
                            Delete
                        </button>
                    }
                </div>
                <div className='right'>
                    <h3>Biography</h3>
                    <p>{selectedAuthor.bio}</p>
                </div>
            </div>
        </div>
    )
}


export default AuthorDetails;