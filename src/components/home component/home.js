import react, {useState, useEffect}from "react"
import { Link } from "react-router-dom";
import Footer from './footer/footer.js'
import Image from './asideImage'
import Article from './Article.js'
import "./home.css"
import Latest from "./latest.js";
import Design from "./design.js";

const Home = ({text}) =>{

        return(
            <>
           <Specials />
           <Latest />
           <Design/>
           
           <HotMeals redirect={text}/>
           <Image />
           <Article col={"col-md-4"}  redirect={text}/>
           <Footer  redirect={text}/>
           </>
        )
}

const Specials = () => {
    return(
        <>
        <div className="container bg-light p-4 shadow specials route">
            <div className="">
                <h3>Top Recipes Of The Day</h3>
                <p>Sliding recipes are much more tasty as food than sliding</p>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide mt-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="2000">
                        <div className="row">
                        <img src="https://www.edamam.com/web-img/fb9/fb9d84746257e2c4676661ccd7e7a398.jpg" className="col-md-6 w-100" alt="..." />
                        <div className="col-md-5">
                        <h4 className="py-2 text-primary">Chubby Chow</h4>
                        <p>No one's quite sure how bunny chow came to be named, but what is certain is that this hollowed-out half- or quarter-loaf of white bread filled with a blistering-hot curry is one of South Africa's most treasured street foods.<br/><br />
The meat and vegetable curries that fill bunny chows were bought to South Africa by Indian indentured laborers who came to South Africa in the 19th century to work on the sugar-cane fields.</p>
                    </div>
                    </div>
                    </div>
                    <div className="carousel-item"  data-interval="2000">
                    <div className="row">
                        <img src="https://www.edamam.com/web-img/b2d/b2de3e39b4a9135db3cce5fbf830b23c.jpg" className="col-md-6 w-100" alt="..." />
                        <div className="col-md-5">
                        <h4 className="py-2 text-primary">Muamba de Galinha</h4>
                        <p>This dish, like the popular Caldeirada de Peixe (fish stew) reveals the strong influence of Portuguese cuisine on this former colony, and is considered one of Angola's national food treasures.<br /><br />
Also known as chicken muamba, this is a spicy, somewhat oily stew made with with palm oil or palm butter, garlic, chilis and okra. Variations of chicken muamba, such as poulet moambé, are to be found all over the Congo River region, where it's often served with cassava leaves and white rice.</p>
                    </div>
                    </div>
                     </div>
                    <div className="carousel-item"  data-interval="2000">
                        <div className="row">
                        <img src="https://www.edamam.com/web-img/f59/f59b0f00070f606889ac2fd0c6d5555f.jpg" className="col-md-6 w-100" alt="..." />
                        <div className="col-md-5">
                        <h4 className="py-2 text-primary">Texas Barbecue</h4>
                        <p>Australians might like to stoke up a barbie on the weekend, but Texans live and die by the practice.<br />Mesquite smoked meats and tenderising rubs are common obsessions, and it is not uncommon to go to football games and find people have brought entire ranges to the parking lots that are worth upwards of five or even ten thousand dollars – a pastime called "tailgating".<br /> <br />  For excellent brisket, head to the Dallas Farmers Market, stand in line for a bit, then find a seat at Pecan Lodge.<br /><br /> Also good are the pork links, pulled pork, beef ribs and collard greens. Basically everything. </p>
                    </div>
                    </div>
                    </div>
                    </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
            </div>
            </div>
        </>
    )
}

const HotMeals = ({redirect}) => {
    return(
        <>
        <div className="container mt-5">
            <h3 className="mb-5 border-bottom">What's <span className="text-primary">Hot </span> </h3>

            <div className="row border-bottom pb-3 pt-1 text-center">
                <div className="container col-md-3 pb-2">
                    <h4 className="text-primary float-md-left">Chocolate</h4>
                    <img src="https://www.edamam.com/web-img/3c5/3c558709195198381a8d5c535d72a265.jpg" className=" img-thumbnail" alt="chocolate" width="250px" height="200px"/>
                    <Link to="/search" onClick={()=> {redirect("Chocolate Dipped Strawberries")}}><h4 className="pt-1 text-success head">Chocolate Dipped Strawberries</h4></Link>
                    <p className="border-top pt-2 text-md-left" style={text}>Chocolate, it's not just for dessert anymore. Particularly now that we know it's actually healthy for us. In these recipes, dark chocolate shows off its savory side, offering richness and complexity to sauces, chili, veggies, and pasta.…</p>
                </div>
                <div className="container col-md-3 pb-2">
                <h4 className="text-primary float-md-left">Pizza</h4>
                    <img src="https://www.edamam.com/web-img/bb8/bb8241fec252962293ff55494ac96ca3.jpg" className=" img-thumbnail" width="250px" height="200px" alt="chocolate" />
                    <Link to="/search" onClick={()=> {redirect("Barbeque Chicken Pizza")}}><h4 className="pt-1 text-success head">Barbeque Chicken Pizza</h4></Link>
                    <p className="border-top pt-2 text-md-left" style={text}>Place pizza crust on a medium baking sheet. Spread the crust with barbeque sauce. Top with chicken, cilantro, pepperoncini peppers, onion, and cheese. Bake in the preheated oven for 15 minutes, or until cheese is melted and bubbly.…</p>
                </div>
                <div className="container col-md-3 pb-2">
                    <h4 className="text-primary float-md-left">Omelette</h4>
                    <img src="https://www.edamam.com/web-img/eb3/eb39ed387cbab43ef2ae8d63dddc793d.jpg" className=" img-thumbnail" alt="chocolate" width="250px" height="200px"/>
                    <Link to="/search" onClick={()=> {redirect("French Country Omelette")}}><h4 className="pt-1 text-success head">French Country Omelette</h4></Link>
                    <p className="border-top pt-2 text-md-left" style={text}> true French omelette, or omelet as we Americans call it, is just eggs and butter, no filling. The egg is folded for a soft, tender texture. It's 10% ingredients and 90% technique, so it does take a bit of practice to perfect.…</p>
                </div>
                <div className="container col-md-3 pb-2">
                <h4 className="text-primary float-md-left">Rice</h4>
                    <img src="https://www.edamam.com/web-img/14c/14c4ee228dfaabf105bfb0a0a12b7693.jpg" className=" img-thumbnail" width="250px" height="200px" alt="chocolate" />
                    <Link to="/search" onClick={()=> {redirect("Jollof Rice")}}><h4 className="pt-1 text-success head">Party Jollof Rice</h4></Link>
                    <p className="border-top pt-2 text-md-left" style={text}>When cooking Jellof rice, building a flavor base is very important. Don’t be in haste to dump your ingredients in the pot otherwise, you will end up with what we call ”concoction”. Each step counts so try to do each of the steps in detail.…</p>
                </div>
            </div>
        </div>
        </>
    )
}

const text = {  
    fontSize : "15px"
}
export default Home