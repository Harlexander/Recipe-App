import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Usercontext } from '../../context/context'
import { firestore } from '../create-recipe component/firebase/firebase'

const Latest = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true) 
    const user = useContext(Usercontext)
    
    useEffect(() => {
        const get =
                firestore.collection("recipes").orderBy("posted", "desc").limit(4)
               .onSnapshot((doc) => {
                setData(doc.docs)
               })
         return () => get()
        }, [])

    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
    
        var elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
             return Math.floor(elapsed/1000) + ' seconds ago';   
        }
    
        else if (elapsed < msPerHour) {
             return Math.floor(elapsed/msPerMinute) + ' minutes ago';   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.floor(elapsed/msPerHour ) + ' hours ago';   
        }
    
        else if (elapsed < msPerMonth) {
            return  Math.floor(elapsed/msPerDay) + ' days ago';   
        }
    
        else if (elapsed < msPerYear) {
            return  Math.floor(elapsed/msPerMonth) + ' months ago';   
        }
    
        else {
            return Math.floor(elapsed/msPerYear ) + ' years ago';   
        }
    }
    return (
        <div className="container mt-5">
        <h3 className="mb-5 border-bottom">Latest <span className="text-primary">Uploads </span> </h3>

        <div className="row border-bottom pb-3 pt-1 text-center">
            {
                data.map( (doc, index) => (
                     <div className="container col-md-3 pb-2" key={index}>
                        <h4 className="text-primary float-md-left text-capitalize">{doc.data().title}</h4>
                        <img src={doc.data().img}alt="chocolate" width="250px" height="200px"/>
                        <Link to={`/search/:${doc.id}`}><h2 className="pt-1 text-success head  text-capitalize">{doc.data().title}...</h2></Link>
                        <i className="pull-left font-weight-light ">Posted : {timeDifference(new Date(), doc.data().posted.toDate())}</i><br/>
                        <p className="text-muted d-block">{doc.data().description}</p>
                    </div>
                ))
            }
           
            </div>
    </div>
    )
}

export default Latest
