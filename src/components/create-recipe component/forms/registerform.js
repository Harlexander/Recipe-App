import React, {useEffect, useState, useContext} from 'react'
import {auth, firestore} from './../firebase/firebase'
import { Link, useHistory } from "react-router-dom";
import { Usercontext } from '../../../context/context';
import { Countries, CountryCode } from '../../../dropdown tags/select';

const Registerform = () => {
    const user = useContext(Usercontext)
    const history = useHistory();
    
    const [state, setState] = useState({
        fullname : "",
        nickname : "",
        email : "",
        countryCode : "",
        mobile_number : "",
        country : "",
        password : "",
        confirmpassword : ""
    })
    const [error, setError] = useState('')

    const handlechange = (e) => {
        const {name, value}  = e.target
        setState(prev =>( {
            ...prev,
            [name] : value
        }))
     }
    const createUser = (e) => {
        e.preventDefault()
       auth.createUserWithEmailAndPassword(state.email, state.password)
       .then((res) => {
           const id = res.user.uid
           res.user.updateProfile({
               displayName : state.nickname
           })
           firestore.collection('users').doc(id).set({
            fullname : state.fullname,
            mobile : "+" + state.countryCode + state.mobile_number,
            country : state.country
           })
       }).then(() => {history.push('/profile')})
       .catch(err => setError(`${err}`))
    }


    const redirect = () => {
        user.user && history.push('/profile')
    }
    useEffect(() => {redirect()} , [user.loading])
    return (
        <div className="container bg-light pt-5" style={container}>
            {user.loading ? <p className="alert alert-warning "> loading</p> : null} 
            <h3>Register</h3>
            {error && <p className="alert alert-danger">{error}</p>}
             <form onSubmit={createUser}>
            <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input type="text" name="fullname" value={state.fullname} className="form-control" aria-describedby="emailHelp" required  onChange={handlechange} />
                <div className="form-text">We'll never share your information with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Nickname / Profile Name</label>
                <input type="text" name="nickname" value={state.nickname} className="form-control" required onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Email</label>
                <input type="text" name="email" value={state.email} className="form-control" required  onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Mobile Number</label>
                <div className="input-group mb-3">
                <div className="input-group-prepend w-25">
                    <CountryCode onChange={handlechange}/>
                </div>
                <input type="text" className="form-control w-75"name="mobile" value={state.mobile} className="form-control" required  onChange={handlechange} aria-describedby="basic-addon3"/>
                </div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Country</label>
                <Countries onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" name="password" value={state.password} className="form-control" required  onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Confirm Password</label>
                <input type="password" name="confirmpassword" value={state.confirmpassword} className="form-control" required onChange={handlechange}/>
            </div>
            {state.password !== state.confirmpassword && <p className="text-danger"><i>password does not match</i></p>}
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/login">Already have an account? Login Now</Link>
        </div>
    )
}
const container = {
    marginTop : "-80px",
}

export default Registerform
