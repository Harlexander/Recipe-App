import brand from './../../images/Untitled.png'

 const Ingredients = ({recipe}) => {

    return( 
        <ul className="font-weight-normal list-unstyled">
         {recipe.map((item, index) => (
        <li key={index} className="m-2 border-bottom row"><img src={item.image !== undefined ? item.image : brand} style={img} className="col-4 w-md-100 h-md-100 h-"/><span className="col-8">{item.text || item.recipes}</span></li>
         )) }
         </ul> 
    )
}

const img = {
    height : "60px"
}
export default Ingredients