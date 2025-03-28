
const withConditionalVisibility = (TargetComponent)=>{


    return (props)=>{

        if(props.visibility!==undefined && !props.visibility)
            return null; //show nothing.

        return <TargetComponent {...props} />

    }
}

export default withConditionalVisibility;