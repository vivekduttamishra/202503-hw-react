import { createContext, useContext,useState } from "react";


const statusContext=createContext();


export const StatusProvider = ({children})=>{

    const [status,setStatusMessage]=useState('pending');
    const [error,setError] = useState(null);

    const setStatus=(status,error)=>{
        setStatusMessage(status);
        if(error)
            setError(error);
        else if(status!=='error')
            setError(null);
    }


    return (
        <statusContext.Provider value={{status,error,setStatus}}>
            {children}
        </statusContext.Provider>
    )
}

export const useStatus=()=>useContext(statusContext);