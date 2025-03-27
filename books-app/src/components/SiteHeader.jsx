import { useState } from "react";
import SiteTitle from "./SiteTitle"

function SiteHeader(props) {

    const vivek={name:'Vivek', roles:['admin']}
    const sanjay={name:'Sanjay', roles:['user']}
    
    const handleLogin=(newUser)=>{
        props.onLogin(newUser)
    }

    const handleLogout=()=>{
        props.onLogin(null);
    }


    return (
        <header>
            <SiteTitle color="brown" size={30} >
                {props.title}
            </SiteTitle>
            <p>World of books</p>
            <ul>
                <li>
                    <button className="btn btn-default" onClick={()=>props.onNavigate('home')} >Home</button>                    
                </li>
                <li>
                    <button className="btn btn-default" onClick={()=>props.onNavigate('authors')}>Authors</button>                    
                </li>
                <li>
                    <button className="btn btn-default" onClick={()=>props.onNavigate('books')}>Books</button>                    
                </li>
                <li>
                    { props.user!==null||
                    <button onClick={()=>handleLogin(vivek)} className="btn btn-default">
                       Login Vivek
                    </button>
                    }
                    { 
                    props.user!==null ||                   
                    <button onClick={()=>handleLogin(sanjay)} className="btn btn-default">
                       Login Sanjay
                    </button>  
                    }                     
                    {props.user && <button onClick={handleLogout} className="btn btn-default">
                     {props.user.name} | Logout
                    </button>}                    
                </li>
               
            </ul>
        </header>
    )
}

export default SiteHeader