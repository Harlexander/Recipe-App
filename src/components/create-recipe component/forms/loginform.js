import React, {useState, useContext, useEffect} from 'react'
import {auth, googleprovider, facebookprovider} from './../firebase/firebase'
import { Link, useHistory } from "react-router-dom";
import { Usercontext } from '../../../context/context';

const Loginform = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = useContext(Usercontext);
    const [error, setError] = useState('')
    const history = useHistory()

    const signin = async () => {
        try{
            await auth.signInWithEmailAndPassword(email, password)
            await history.push('/profile')
         }catch(err){
             setError(`${err}`)
         }
    }
   const redirect =() => {
    if(user.loading === false){
        if(user.user !== null){
            history.push('/profile') 
        }
    }
   }
    const popup = (e, provider ) => {
        e.preventDefault()
        auth.signInWithRedirect(provider)
    }
    useEffect(() => {redirect()}, [user.user])
    return (
        <div className="container bg-light pt-5" style={container}>
           {user.loading ? <p className="alert alert-warning "> loading</p> : null} 
           <h3>Sign In</h3>
            {error && <p className="alert alert-danger">{error}</p>}
            <form className="row">
                <div className="col-md-6">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={signin}>Submit</button>     
                </div>
                <div class="col-md-6 text-center p-4">
                <button className="fb btn w-50 " onClick={(e) => popup(e, facebookprovider)}><i class="fa fa-facebook fa-fw"></i> Facebook Sign-in</button><br/><br/>
                <button className="twitter btn w-50"><i class="fa fa-twitter fa-fw"></i>Twitter Sign in </button><br/><br/>
                <button className="google btn  w-50"onClick={(e) => popup(e, googleprovider)}><i class="fa fa-google fa-fw" ></i>Google Sign in </button>
            </div>
            </form>
            <Link to="/register">You dont have an account? Register Now</Link>
        </div>
        
    )
}
const container = {
    marginTop : "-80px",
}

export default Loginform
