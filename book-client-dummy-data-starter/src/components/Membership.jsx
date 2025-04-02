
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
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

const GuestMode = () => {
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
                <li><Link className="dropdown-item" to="/about" >About</Link></li>
            </ul>
        </li>
    )
}
const LoggedInMode = (props) => {
    // const image = "https://avatars.githubusercontent.com/u/9464908?v=4"
    // const name = "Vivek"

    const {logout}= useUserContext();
    const navigate=useNavigate();
   

    const handleLogout=()=>{
        logout();
        navigate("/")
    }

    return (
        <li className="nav-item dropdown d-flex">
            <a style={membershipStyle} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img style={imageStyle} src={props.user.photo} alt={props.user.name} />
                {props.user.name}
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/user/favorites">Favourite</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button onClick={handleLogout} className="dropdown-item" >Logout</button></li>
            </ul>
        </li>
    )
}

const Membership = (props) => {

    const {user,loadCurrentLogin}=useUserContext();
    const navigate= useNavigate();

    useEffect(()=>{
        loadCurrentLogin();
    },[])

    

    return (
        <ul className="navbar-nav ms-auto">
            {user ? <LoggedInMode user={user}  /> : <GuestMode  />}
        </ul>
    )
}

export default Membership;