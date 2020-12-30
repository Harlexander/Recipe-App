import react from "react";
import { Route } from "react-router-dom";
const SearchBar = ({onClick, classes}) => {
    return(
        <Route render={({ history}) => (
          <form className={classes}>
            <div className="input-group mb-3">
            <input type="text" id="search" style={rad} className="form-control bg-light shadow" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div className="input-group-prepend px-2">
                <button className="btn btn-dark rounded-circle fa fa-search shadow" type="submit" id="button-addon1" onClick={(event, )=>{onClick(event, history )}}></button>
            </div>
            </div>
        </form>  
          )} />
    )
}
const rad = {
    borderRadius : "20px"
}
export default SearchBar