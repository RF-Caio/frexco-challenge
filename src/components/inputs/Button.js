function Button(props){
    return(
        <button className={props.className} type="button" onClick={props.buttonAction}>{props.text}</button>
    )
}

export default Button