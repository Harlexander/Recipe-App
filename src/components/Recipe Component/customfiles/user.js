import React, { useState, useEffect } from 'react'
import { firestore } from '../../create-recipe component/firebase/firebase'

const User = ({id}) => {
    const [details, setDetails] = useState({})
    const getUser = () => {
       firestore.collection("users").doc(id)
    .get()
    .then( info => {
        const data = info.data()
        setDetails(data)
        console.log(data)
    }) 
    }
    useEffect(() => {getUser()}, [id])
    return (
        <div className="container">
            <h4 className="text-primary py-3">Recipe Uploader</h4>
            <div className="row"> 
            <div className="col-md-4 text-center">
                <img src={details.displayImg} className="rounded-circle" width="100px" height="100px"/>
            </div>
            <div className="col-md-8 px-2">
                <p className="text-primary username text-center">{details.nickname}</p>
                <p className=" text-center m-0">Special Skills : {details.skills}</p>
                <p className=" text-center m-0">Total Recipes  : {details.recipes}</p>
            </div>
            <div className="px-auto row my-3">
                <p className="font-weight-bold col-md-6">Follow User On Social Platforms</p>
                <div className="col-md-6">
                <a href={details.facebookUrl} target="_blank"  className="btn btn-primary rounded-circle fa fa-facebook shadow p-3 mx-3" type="button"></a>
                <a href={details.instagramUrl} target="_blank"  className="btn btn-danger rounded-circle fa fa-instagram shadow  p-3 mx-3" type="button"></a>
                <a href={details.twitterUrl} target="_blank"  className="btn btn-dark rounded-circle fa fa-twitter shadow  p-3 mx-3" type="button"></a> 
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default User
