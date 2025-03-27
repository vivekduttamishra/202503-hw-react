import { useLocation } from "react-router-dom";


const NotFoundScreen = ()=>{
    const location = useLocation();

    return (
        <div className="HomeScreen">
            <h2>Error 404 Not Found: {location.pathname}</h2>
            
        </div>
    )
}

export default NotFoundScreen;