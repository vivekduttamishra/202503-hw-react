import SiteTitle from "./SiteTitle"

function SiteHeader(props) {

    return (
        <header>
            <SiteTitle color="brown" size={30} >
                {props.title}
            </SiteTitle>
            <p>World of books</p>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Authors</a></li>
                <li><a href=''>Books</a></li>
                <li>
                    Today is: {new Date().toDateString()}
                </li>
            </ul>
        </header>
    )
}

export default SiteHeader