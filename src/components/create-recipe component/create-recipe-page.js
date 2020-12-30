import react, {useContext, useEffect, useState} from "react"
import {auth} from './firebase/firebase'
import { Route, useHistory } from "react-router-dom";
import Form from './forms/form'
import {Usercontext} from '../../context/context'
import Footer from './../home component/footer/footer'

const CreateRecipe = () => {
        const user = useContext(Usercontext);
        const history = useHistory()
        const [id, setId] = useState(null)
        const redirect = () => {
            if(user.loading === false){
                user.user === null ? history.push('/login') : setId(user.user.uid)
            }
        }
        useEffect(() => {redirect()} , [user.user])
        return(
            <>
            <div className="container h-100 bg-light shadow p-5" style={container}>
            <h2>Create Your Own Recipe</h2>
            <br/>
            <Route exact path={`/create-recipe`}>
                <Form user={id}/>
            </Route>
            </div>
            <Footer />
            </>
        )
}
const container = {
    marginTop : "-80px",
}

export default CreateRecipe