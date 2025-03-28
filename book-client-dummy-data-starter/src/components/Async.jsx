import { useStatus } from "../contexts/StatusContext"


export const ErrorView=(props)=>{    
    return <h2 className="text-danger">Error: {props.error.message}</h2>
}

const Async = (props)=>{

    const {status,error} = useStatus();

    if(status==='pending')
        return <h2>Loading. Please wait...</h2>;

    if(status==='error')
        return <ErrorView error={error} />;

    

    if(status==='success')
        return props.children;


}

export default Async;