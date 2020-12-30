import react, {Component, useContext} from "react"
import { RedirectContext } from "../../context/context"
import './tab.css'

const Tab = () => {
  const redirect = useContext(RedirectContext)
        return(
            <>
            <ul className="nav nav-tabs pt-2 border" id="myTab" role="tablist" style={tab}>
            <li className="nav-item">
              <a className="nav-link active border" id="home-tab" data-toggle="tab" href="#main" role="tab" aria-controls="home" aria-selected="true">Main</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border" id="profile-tab" data-toggle="tab" href="#traditional" role="tab" aria-controls="profile" aria-selected="false">Traditional</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border" id="contact-tab" data-toggle="tab" href="#hot" role="tab" aria-controls="contact" aria-selected="false">Hot</a>
            </li>
          </ul>
          <div className="tab-content border" id="myTabContent">
            <div className="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="home-tab">
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto " src='https://www.edamam.com/web-img/d3d/d3d9984fd0ccec90cb110bf0627d8b20.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" onClick={() => {redirect("garri")}} className="d-block">Garri and Groundnut</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span> (4.5 / 5)</span>
              </div>
              </div>
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://www.edamam.com/web-img/715/71557903b3af79adc9d520f40e7312df.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" onClick={() => {redirect("Suya")}} className="d-block">Ghanian Roasted Chicken (Suya)</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://www.edamam.com/web-img/0d5/0d5be8b740840ec35d9300d388c4ca55.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" onClick={() => {redirect("Senegal Yassa")}} className="d-block">Senegal Yassa</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              </div>
              
            <div className="tab-pane fade" id="traditional" role="tabpanel" aria-labelledby="profile-tab">

              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://www.edamam.com/web-img/6ab/6ab7082dc114664370e2bf887bac62af' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" onClick={() => {redirect("Chorba frik")}} className="d-block">Chorba frik</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://www.edamam.com/web-img/32f/32f1cbcc76ea4396e96d9958dde1cd87.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" onClick={() => {redirect("Efo Riro")}} className="d-block">Efo - Riro</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://www.edamam.com/web-img/50e/50e51c9793f5139974c0991de44f6cee.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" onClick={() => {redirect("Taktouka")}} className="d-block">Taktouka</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
             
            </div>
            <div className="tab-pane fade" id="hot" role="tabpanel" aria-labelledby="contact-tab">
            
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2013/01/Pimento-Cheese-Potato-Skins1-63x53.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" href="/" className="d-block">Chocolate Earl Grey Pots de Creme Recipe</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2013/01/Pimento-Cheese-Potato-Skins1-63x53.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" href="/" className="d-block">Chocolate Earl Grey Pots de Creme Recipe</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              <div className="row px-3 py-3 border-bottom" >
                <div className="col-3 text-center" >
                <img alt="" className="my-auto" src='https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2013/01/Pimento-Cheese-Potato-Skins1-63x53.jpg' height="53"  width="63"/> 
                </div>
                <div className="col-9 p-0">
                  <a href="/search" href="/" className="d-block">Chocolate Earl Grey Pots de Creme Recipe</a>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span> (3.6 / 5)</span>
              </div>
              </div>
              </div>

          </div>
            </>
        )
    }

const tab = {
  background : "whitesmoke"
}



export default Tab