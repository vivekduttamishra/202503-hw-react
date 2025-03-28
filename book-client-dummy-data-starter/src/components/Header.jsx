import { Link } from "react-router-dom"
import Membership from "./Membership"


const Header = ({ title }) => {
    let logoStyle={
        height:"40px",
        borderRadius:"50%",
        marginRight:"10px"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img style={logoStyle} src='/favicon.png' alt=''/>
                    {title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/authors">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                    <Membership/>
                </div>
            </div>
        </nav>
    )
}

export default Header