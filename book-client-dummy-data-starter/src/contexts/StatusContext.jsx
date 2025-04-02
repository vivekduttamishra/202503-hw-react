import { createContext, useContext,useState } from "react";


const statusContext=createContext();


export const StatusProvider = ({children})=>{

    const [status,setStatusMessage]=useState({});
    
    const setStatus=(key)=>(statusMessage,error)=>{
        setStatusMessage({
            ...status,
            [key]: {message:statusMessage,error:error||null}
        });
    }


    return (
        <statusContext.Provider value={{status,setStatus}}>
            {children}
        </statusContext.Provider>
    )
}

export const useStatus=(key='_global', value='')=>{
  const context= useContext(statusContext);
  let setStatus= context.setStatus(key);
  let status= context.status[key]
  if(!status) {
    status= {message:value, error:null}
       // setStatus(value);
   } //set initial value if not set yet
  
    return {
        setStatus,
        status:status.message,
        error:status.error
    }
}