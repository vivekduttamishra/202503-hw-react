import { useStatus } from "../contexts/StatusContext"


export const ErrorView=(props)=>{    
    return <p className="text-danger">Error: {props.error.message}</p>
}

const Async = (props)=>{

    const {status,error} = useStatus();

    if(status==='pending')
        return <p>Loading. Please wait...</p>;

    if(status==='error')
        return <ErrorView error={error} />;

    

    if(status==='success')
        return props.children;


}

export default Async;