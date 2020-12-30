import react, {Component} from "react"

const Button = ({classes, content}) => {
    return(
    <button type="button" className={classes}>{content}</button>
    )
}


export default Button