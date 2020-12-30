import React, { useState } from 'react'
import { firestore } from '../create-recipe component/firebase/firebase'

const Links = ({user}) => {
    const stored = JSON.parse(sessionStorage.getItem("details")) 
    const [links, setLinks] = useState({
        facebook : ""|| stored.facebookUrl,
        instagram : "" || stored.instagramUrl,
        twitter : "" || stored.twitterUrl
    })
    
    const setState = (event) => {
        const {name, value} = event.target
        setLinks({
            ...links,
            [name] : value
        })
    }
    const setLink =() => {
        firestore.collection("users").doc(user)
        .update({
            facebookUrl : links.facebook,
            instagramUrl : links.instagram,
            twitterUrl : links.twitter
        })
        .then(() => {console.log("added successfully")})
    }
    console.log(user)
    return (
        <div>
            <div class="collapse" id="collapseExample">
                        <div class="input-group py-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Facebook</span>
                        </div>
                        <input type="text" name="facebook" value={links.facebook} onChange={setState} class="form-control"/>
                        </div>
                        <div class="input-group py-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Twitter</span>
                        </div>
                        <input type="text" name="twitter" value={links.twitter} onChange={setState} class="form-control"/>
                        </div>
                        <div class="input-group py-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Instagram</span>
                        </div>
                        <input type="text" name="instagram" value={links.instagram} onChange={setState} class="form-control"/>
                        </div>
                        <button className="btn btn-success" onClick={setLink}>Update</button>
                        </div>
                        
        </div>
    )
}

export default Links
