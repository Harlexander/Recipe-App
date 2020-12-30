import Tab from './../tab/tab.js'
import { Link } from "react-router-dom";
import chinese from "./../../images/Hong-Kong-cuisine.jpg"
import italian from "./../../images/photo-antipasto-platter-italian-food.jpg"
const Article = ({col, redirect}) => {
    return(
        <>
        <div className="container mt-5">
            <div className="row pb-2">
                <div className={`container mt-3 ${col}`}>
                    <h4 className="border-bottom pb-2"> <span className="text-primary">Weekly </span>Specials</h4>
                    <div className="row mt-4">
                        <div className=" col-md-4">
                        <img src={italian} className="d-md-block d-none img-thumbnail" height="140" width="120"/>    
                        </div>
                        <div  className="col-md-8" >
                            <p className="text-lg text-success">Italian Recipes</p>
                            <p style={text}>If there’s anything better than the perfect baked potato, it would have to be a twice baked potato. I’m sure everybody’s...</p>
                            <Link to="/search" className="btn btn-outline-primary w-50 " onClick={()=> {redirect("italian recipes")}}><h4 className="pt-1 text-success head">View All </h4></Link>
                        </div>
                    </div>
                </div>
                <div className={`container mt-3 ${col}`}>
                <h4 className="border-bottom pb-2"> <span className="text-primary">Chinese </span>Specials</h4>
                <div className="row mt-4">
                    <div className=" col-md-4">
                    <img src={chinese}  className="d-md-block d-none img-thumbnail w-100 h-80" height="140" width="120"/>    
                    </div>
                    <div  className="col-md-8" >
                        <p className="text-lg text-success">Chinese Mega Pizza</p>
                        <p style={text}>If there’s anything better than the perfect baked potato, it would have to be a twice baked potato. I’m sure everybody’s...</p>
                        <Link to="/search" className="btn btn-outline-primary w-50 " onClick={()=> {redirect("chinese recipes")}}><h4 className="pt-1 text-success head">View All </h4></Link>
                    </div>
                </div>
                </div>
                <div className={`container mt-3 ${col}`}>
                    <h4 className="border-bottom pb-2 mb-4"> <span className="text-primary">Africa </span>Time</h4>
                    <Tab />
                </div>
            </div>
        </div>
        
        </>
    )
}
const text = {
    fontSize : "15px"
}

export default Article