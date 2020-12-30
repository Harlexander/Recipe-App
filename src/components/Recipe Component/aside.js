import react from 'react'
import Article from './../home component/Article.js'

function Aside({heading, items}) {
    return(
        <div >
            <ul className="list-group list-group-flush my-5">
            <li className="list-group-item bg-light font-weight-bold pb-4" style={top}> <span className="text-primary">Recommended</span> Recipes</li>
            <li className="list-group-item bg-light ">Dapibus ac facilisis in</li>
            <li className="list-group-item bg-light ">Morbi leo risus</li>
            <li className="list-group-item bg-light ">Porta ac consectetur ac</li>
            <li className="list-group-item bg-light ">Vestibulum at eros</li>
            </ul>

            <Article col={"mb-3"} />
        </div>
    )
}
const top ={
    fontSize : "20px"
}
export default Aside