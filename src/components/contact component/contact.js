import react, {Component} from "react"
import contact from './../../images/contact.png'

class CreateRecipe extends Component {

    render(){
        return(
            <div className="profile container h-100 bg-light mx-auto shadow px-4 text-center">
            <h1 className=" px-3">Reach out and our customer service<br/> will respond you</h1>
            <div className="row px-5 mt-5">
                <div className="col-md-6">
                <form>
            <div class="form-group">
                <input type="text" class="form-control border-0 rounded-0 shadow" id="exampleFormControlInput1" placeholder="FullName *"/>
            </div>
            <div class="form-group">
                <input type="email" class="form-control border-0 rounded-0  shadow" id="exampleFormControlSelect1" placeholder="Email"/>
            </div>
            <div class="form-group">
                <textarea class="form-control border-0 rounded-0  shadow" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
            <div class="form-group pull-left">
                <label>Are you an Existing Customer? </label>
                <input type="checkbox"/>
            </div>
            <div className="form-group">
                <input type="button" className="btn btn-outline-primary form-control" value="Submit" />
            </div>
            <p className="pull-left">Send in your Request <a target="_blank" href="mailto:favitopblog@gmail.com"> request@peachy.com</a></p>
        </form>
                </div>
                <div className="col-md-6">
                    <div>
                       <img src={contact} height="400px" width="100%"/> 
                    </div>
                    
                </div>
            </div>
            </div>
        )
    }
}


export default CreateRecipe