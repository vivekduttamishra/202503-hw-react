
import { Link } from 'react-router-dom'
import { useState } from 'react'
const imageStyle = {
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px"

}
const membershipStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",

    //border:"1px solid red"

}

const DevMode = (props) => {

    const _users = {
        admin: {
            name: "Admin",
            image: "https://randomuser.me/api/portraits/men/9.jpg",
            roles: ["admin"]
        },
        user: {
            name: "User",
            image: "https://randomuser.me/api/portraits/women/26.jpg",
            roles: ["user"]
        }

    }

    const _login = (userType) => {
        props.login(_users[userType])
    }

    return (
        <div>
            <button className="dropdown-item" onClick={() => _login("admin")}>Login Admin</button>
            <button className="dropdown-item" onClick={() => _login("user")}>Login User</button>
            <hr className="dropdown-divider" />
        </div>
    )
}

const GuestMode = (props) => {
    return (
        <li className="nav-item dropdown d-flex">
            <a style={membershipStyle} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={imageStyle} src="https://avatars.githubusercontent.com/u/35440139?v=4" />
                Guest
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/user/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/user/register">Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <DevMode login={props.login} />
                <li><Link className="dropdown-item" to="/about" >About</Link></li>
            </ul>
        </li>
    )
}
const LoggedInMode = (props) => {
    // const image = "https://avatars.githubusercontent.com/u/9464908?v=4"
    // const name = "Vivek"


    return (
        <li className="nav-item dropdown d-flex">
            <a style={membershipStyle} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={imageStyle} src={props.user.image} alt={props.user.name} />
                {props.user.name}
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/user/favorites">Favourite</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={() => props.login(null)}>Logout</button></li>
            </ul>
        </li>
    )
}

const Membership = (props) => {

    const [user, login] = useState(null);

    return (
        <ul className="navbar-nav ms-auto">
            {user ? <LoggedInMode user={user} login={login} /> : <GuestMode login={login} />}
        </ul>
    )
}

export default Membership;