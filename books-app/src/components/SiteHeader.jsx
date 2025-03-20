import SiteTitle from "./SiteTitle"

function SiteHeader(props) {

    return (
        <header>
            <SiteTitle color="brown" size={30} >
                {props.title}
            </SiteTitle>
            <p>World of books</p>
            <ul>
                <li>
                    <button className="btn btn-default">Home</button>                    
                </li>
                <li>
                    <button className="btn btn-default">Authors</button>                    
                </li>
                <li>
                    <button className="btn btn-default">Books</button>                    
                </li>
                <li>
                    <button className="btn btn-default">Welcome Vivek | Logout</button>                    
                </li>
               
            </ul>
        </header>
    )
}

export default SiteHeader