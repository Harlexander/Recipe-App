import React, { useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import quote from './../../../images/men-cooking-real-men-wear-aprons..jpg'
import { firestore } from '../../create-recipe component/firebase/firebase'
import Ingredients from '../ingredients'
import Instruction from './instruction'
import User from './user'
import { Usercontext } from '../../../context/context'

const Custom = () => {
    const {url} = useRouteMatch()
    let id = url.split("/")[2].substring(1)

    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(true)

    const getData = () => {
        if(loading === true){
             firestore.collection("recipes").doc(id)
            .get()
            .then( docs => {
                setDetails(docs.data())
                setLoading(false)
            })
            }
           }
    useEffect(() => {getData()}, [])
    console.log(details)

    const html = (<div>
        <h3>{details.title}</h3>
        <img src={details.img} width="100%" className="img-thumbnail mb-3"/>
        <p className="my-3">{details.description}</p>
        <div className="border-top font-weight-light">
            <p style={css.ingre} >Ingredients</p>
            <Ingredients recipe={details.ingredients}/>
        </div>
        <div className=" font-weight-light">
            <p style={css.ingre} >Easy Steps</p>
            <Instruction Instruction={details.instruction}/>
        </div>

        <User id = {details.user}/>  
    <img src={quote}  width="100%" height="400px"/>
    
    </div>)
       
    return (
        <>
        {!loading && html}
        </>
        
    )
}
const css = {
    inline : {
        display : "inline"
    },
    ingre : {
        fontSize : "30px",
        color : "blue"
    }
}


export default Custom
