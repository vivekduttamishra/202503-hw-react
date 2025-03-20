const SiteTitle = (props) => {
    console.log('x', props)

    let style = {
        color: props.color || "gray",
        fontSize: props.size + 'px'
    }


    return <h1 style={style} >{props.children}</h1>
}

export default SiteTitle;