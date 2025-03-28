import { useContext, useState,createContext } from "react";
import { useStatus } from "./StatusContext";
import userService from "../services/user-service";


const userContext= createContext();


export const UserProvider=({children})=>{

    const [user,setUser] = useState(null);
    const {setStatus} = useStatus();

    const login=async (loginInfo)=>{
        try{
            console.log('loggin for', loginInfo);
            setStatus("pending");
            let response = await userService.loginUser(loginInfo)
            
            console.log('response',response);
            
            const {accessToken, user} = response;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("user",JSON.stringify(user));

            setStatus("success");
            setUser(user);

        }catch(err){
            console.log('login failed',err)
            setStatus("error", err);
        }
    }

    const logout=()=>{  
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setUser(null);
        setStatus("success");
    }

    const loadCurrentLogin=()=>{
        const userStr = localStorage.getItem("user");
        if(userStr){
            setUser(JSON.parse(userStr));            
        } else{
            setUser(null);
        }        
    }



    return (
        <userContext.Provider value={{user, login, logout,loadCurrentLogin}}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = ()=> useContext(userContext)