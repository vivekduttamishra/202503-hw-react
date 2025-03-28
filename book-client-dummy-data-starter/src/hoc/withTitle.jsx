import { useState } from "react"


const withTitle=(TargetComponent, defaultTitle,expander=true)=>{

    const Wrapper=(props)=>{
        
        const title=props.title||defaultTitle

        const [hide,setHide]=useState(false)
        let style={            
        }
        if(expander)
            style.cursor="pointer";

        const toggle=()=>{
            if(expander)
                setHide(!hide)        
        }

        return (
            <div className='titleBox'>
                <h2 style={style} onClick={toggle}>{title}</h2>
                <div className='target'>
                  { hide ||  <TargetComponent /> }
                </div>
            </div>
        )
    }

    return Wrapper;
}

export default withTitle;