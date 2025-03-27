import { useState } from "react";


const UserLoginScreen = ({ }) => {


    const [loginInfo, setLoginInfo]=useState({
        email:'',
        password:''
    })

    const [error,setError]=useState(null)
   
    const validate=(loginInfo)=>{
        let error={}
        if(!loginInfo.email)
            error.email='Email is required'
        else if(!loginInfo.email.includes('@'))
            error.email='Invalid email'

        if(!loginInfo.password)
            error.password='Password is required'
        else if(loginInfo.password.length<5)
            error.password='Password should be at least 5 characters long'
       
        let success= Object.keys(error).length===0
        if(!success)
            setError(error)
        else
            setError(null)

        return success;

    }

   const handleInput=(e)=>{
        const{name,value} = e.target;
        
        let newInfo ={...loginInfo}
        newInfo[name]=value;
        //update the value from text box.
        console.log('newInfo',newInfo)
        setLoginInfo(newInfo)
        validate(newInfo)       

   }


    const handleLogin=(e)=>{
        e.preventDefault();
        if(!validate(loginInfo)){
            console.log('invalid input')
            return;
        }

        //now we can save
        console.log('trying to loggin...',loginInfo)
       
     }
 

    return (
        <div className="UserLoginScreen">
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                       name='email' value={loginInfo.email} onChange={handleInput}
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text text-danger">
                            {error?.email}
                        </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                     name='password' value={loginInfo.password} onChange={handleInput}
                    type="password" className="form-control" id="exampleInputPassword1"/>
                    <div id="emailHelp" className="form-text text-danger">
                       {error?.password}
                    </div>
                </div>
               
                <button disabled={error!==null} type="submit" className="btn btn-primary">Login</button>
            </form>


        </div>
    )
}

export default UserLoginScreen;