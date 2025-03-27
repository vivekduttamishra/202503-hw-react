import { Link } from "react-router-dom";


const HomeScreen = ()=>{
    return (
        <div className="HomeScreen">
            <h2>Home Screen</h2>
            <Link to="/authors">Authors</Link>
        </div>
    )
}

export default HomeScreen;