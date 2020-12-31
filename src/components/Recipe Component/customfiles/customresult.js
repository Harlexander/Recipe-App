import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch, useParams } from 'react-router-dom'
import Button from '../../button'
import { firestore } from '../../create-recipe component/firebase/firebase'

const Customresult = ({value}) => {
    const [length, setLength] = useState("")
    const [items, setItems] = useState([])

    
    useEffect(() => {
        const fetch = () => {
            firestore.collection("recipes").where("title", "==", `${value}`)
            .onSnapshot(({docs}) => {
            const rep = docs.map(doc => ({...doc.data(), id : doc.id, posted : doc.timeStamp} ))
            setLength(rep.length)
            setItems(rep)
            console.log(rep)
        });
        }
        fetch() }, [value])
    const {url} = useRouteMatch()
    return (
        <div>
         <h3 className="pt-3">Custom Results</h3>
         <p className="alert alert-primary">{length} found</p>
        
        {items.map( (details, index) => (
           <div key={index} className="row mt-4 border-bottom pb-3">
        <div className="col-md-5">
            <img src={details.img} className="img-thumbnail"/>
        </div>
            <div className="col-md-7">
            <p style={headText}><Link to={`${url}/:${details.id}`}>{details.title[0].toUpperCase()+ details.title.substring(1)}</Link></p>
        <div style={desc}>
            <p className="d-inline mr-1 font-weight-light"><span className="text-success">Cuisine :  </span>{details.cuisine}</p> 
            <p className="d-inline mr-1  font-weight-light"><span className="text-success"> Difficulty : </span> {details.difficulty} </p> 
        </div>
        <br />
        <p style={desc}>{details.description}...</p>
          <Link to={`${url}/:${details.id}`}><Button content={"view recipe"} classes={"btn-outline-primary btn"}/></Link>
        </div>
     </div>
        ))}
        </div>
    )
}

const desc ={
    fontSize : "15px"
}
const headText = {
        fontSize : "20px"
    }
export default Customresult