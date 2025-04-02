import { useStatus } from "../contexts/StatusContext"
import NotFoundScreen from "../screens/NotFoundScreen";

const error404=(error)=>{
    if(error.status === 404){
        return <NotFoundScreen/>
    }
}

const httpError=(status,message)=>error=>{
    if(error.status===status){
        if(typeof message === 'string')
            return <p className="text-danger">{message}</p>
        else if (typeof message === 'function')
            return message(error)
        else
            return message;
    }
}

const networkError=(error)=>{
    if(error.message.includes('Network Error')){
        return <p className="text-danger">Network error. Please check your internet connection.</p>
    }
}

export const ErrorView=({error,errorMessage,errorHandlers=[]})=>{ 
    
    const defaultHandlers=[
        networkError,
        error404,
        httpError(401, 'Not Logged In'),
        httpError(403, 'You are Not Authorized'),
    ]

    errorHandlers=[...errorHandlers, ...defaultHandlers]


    for(let errorHandler of errorHandlers){
        let response = errorHandler(error);
        if(response!==undefined)
            return response;
    }

    let message= errorMessage || error.message

    return <p className="text-danger">Error: {message}</p>
}

const Async = ({children, action, errorHandlers=[],loader,errorMessage})=>{
   

    const {status,error} = useStatus(action);
    
   
    if(status==='pending'){
        if(loader){
            if(typeof(loader)==='function')
                return loader();
            else
                return loader;
        }
        return <p>Please wait...</p>;
    }

    if(status==='error')
        return <ErrorView error={error} errorHandlers={errorHandlers} errorMessage={errorMessage} />;

    if(status==='success'){
       
        return children();
    }

}

export default Async;