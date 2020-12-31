import react, {Component} from "react"
import Logo from './../../../images/LogoMakr-4NpRxA.png'
import Button from "../../button.js"
import "./footer.css"
class Footer extends Component {

    render(){
        return(
            <>
            <footer className="container-fluid p-md-5" >
                <div className="row p-md-5">
                    <div className="col-md-4 text-muted">
                        <img src={Logo} className="img-fluid mb-4"/>
                        <p>Peachy is a brand created for the main aim of exploring all the possible aspect of foods and give users the opportunity to share there skill and thoughts on food. This is a place to bring the foodie's together....</p>
                        <br />
                        <Button classes={"btn-primary btn"} content={"Read More"} />
                    </div>
                <div className="col-md-4 mb-5" style={grey}>
                        <h4> <span className="text-primary">Recommended</span> Recipes </h4>
                        <ul className="list-unstyled">
                             <li className="row">
                                 <div  className="row px-3 py-3" >
                                    <div className="col-3 text-center " >
                                    <img className="my-auto img-thumbnail" src='https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2013/01/Pimento-Cheese-Potato-Skins1-63x53.jpg' height="83"  width="93"/> 
                                    </div>
                                    <div className="col-9 p-0">
                                    <a className="d-block">Chocolate Earl Grey Pots de Creme Recipe</a>
                                    <p className="text-muted" style={text}>2 cups cream 120 grams dark chocolate, chopped 2 bags...</p>
                                </div>
                                </div>
                                <div className="row px-3 py-3" >
                <div className="col-3 text-center" >
                <img className="my-auto img-thumbnail" src='https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2013/01/Pimento-Cheese-Potato-Skins1-63x53.jpg' height="83"  width="93"/> 
                </div>
                <div className="col-9 p-0">
                  <a className="d-block">Chocolate Earl Grey Pots de Creme Recipe</a>
                  <p className="text-muted" style={text}>2 cups cream 120 grams dark chocolate, chopped 2 bags...</p>
              </div>
              </div>
                            </li>
                        </ul>     
                    </div>
                    <div className="col-md-4 social mb-5 text-muted">
                    <h4 style={grey}> <span className="text-primary">Social</span> Handles </h4>
                    <br />
                    <p>We are always available for your recipes reachout and share that delicious delicies u have in ur home...</p>
                    <br />
                    <br />
                    <i className="fa fa-facebook-square" style={social}></i>
                    <i className="fa fa-twitter" style={social} ></i>
                    <i className="fa fa-instagram" style={social}></i>
                    <i className="fa fa-whatsap"  style={social}></i>
                    </div>
            </div>
            <i className="text-light float-right">Creator Harlex &copy;</i>
            </footer>
            </>
        )
    }
}

const text = {
    fontSize : "13px"
}
const grey = {
    color: "rgb(97, 90, 90)"
}

const social = {
    padding: "15px",
    color : "#2f8ae6",
    fontSize : "30px"
}


export default Footer