import react from 'react'

const Nutrient = ({nutrient}) => {
    const arrayofNutrients = Object.keys(nutrient).map((key) => (nutrient[key])
    )
    return(
        <ul className="row list-unstyled bg-white">
            {arrayofNutrients.map(({label, quantity,  unit}) => (
                <li className={`col-md-3 col-6 p-3 border-bottom ${quantity < 5 ? "d-none" : ""}`} key={label} style={style}><p>{label}</p> <span>{Math.floor(quantity)}{unit}</span></li>
            ))}

        </ul>
    )
}

const style = {
    fontSize : "14px",
    lineHeight : "14px",
    color : "#949494"
}
export default Nutrient