import React from 'react'
import { Link } from 'react-router-dom'
import design from './../../images/design.jpg'

const Design = () => {
    return (
        <div class="container-fluid p-0 design">
            <img src={design} className="w-100"/>
            <div class="design-text w-50">
                <p> Share Your Food Thoughts and Recipes.</p>
                <Link to="/create-recipe"><button className="btn btn-outline-primary">Explore Now !!!</button></Link></div>
        </div>
    )
}

export default Design
