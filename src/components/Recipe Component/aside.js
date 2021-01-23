import Article from './../home component/Article.js'

function Aside() {
    return(
        <div >
            <ul className="list-group list-group-flush my-5">
            <li className="list-group-item bg-light font-weight-bold pb-4" style={top}> <span className="text-primary">Recommended</span> Recipes</li>
            <li className="list-group-item bg-light ">Spinach and Sausage Lasagna</li>
            <li className="list-group-item bg-light ">Instant Pot Beef Chili</li>
            <li className="list-group-item bg-light ">Instant Pot Beef Chili</li>
            <li className="list-group-item bg-light ">Steak Fajitas</li>
            </ul>

            <Article col={"mb-3"} />
        </div>
    )
}
const top ={
    fontSize : "20px"
}
export default Aside