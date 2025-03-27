import { Link } from "react-router-dom";


const AppHeader = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/authors">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/authors/add">New Authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/books">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/books/add">New Book</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Guest/User Name
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/user/login">Login</a></li>
                                <li><a className="dropdown-item" href="/user/register">Register</a></li>
                                <li><a className="dropdown-item" href="/user/profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/user/favorites">Favorites</a></li>
                                <li><hr className="dropdown-sep" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AppHeader;