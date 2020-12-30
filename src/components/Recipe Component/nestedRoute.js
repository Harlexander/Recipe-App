import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Custom from './customfiles/custom'
import Content from './info'

const NestedRoute = ({recipes}) => {
    const {url} = useRouteMatch();
    const type = url.includes(":")
    return (
        <div>
            {type ?  <Custom/> : <Content recipes = {recipes}/>}
        </div>
    )
}

export default NestedRoute
