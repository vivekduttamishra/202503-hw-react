import { useState } from "react";


const UserLoginScreen = ({ }) => {

    const [email,setEmail] = useState('vivek@conceptarchitect.in')
    const [password,setPassword] = useState('')

   
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const changePassword=(e)=>{
        setPassword(e.target.value)
    }


    const handleLogin=(e)=>{
        e.preventDefault();
        
        console.log("email", email)
        console.log("password", password)
     }
 

    return (
        <div className="UserLoginScreen">
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        value={email} onChange={changeEmail}
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                     value={password} onChange={changePassword}
                    type="password" className="form-control" id="exampleInputPassword1"/>
                    <div id="emailHelp" className="form-text">You shoud never share your password with anyone else.</div>
                </div>
               
                <button type="submit" className="btn btn-primary">Login</button>
            </form>


        </div>
    )
}

export default UserLoginScreen;