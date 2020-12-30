import react from 'react'
import { Link } from 'react-router-dom'
import Button from './../button'

const ErrorPage = () => {
    return (
        <>
        <div className='container text-center bg-light' style={style}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/" ><Button content={"View Home Page"} classes={"btn btn-outline-primary btn-lg"}/></Link>
        </div>
        </>
    )
}

const style = {
    marginTop : "-80px",
    background : "whitesmoke",
    height : "70vh"
}

export default ErrorPage