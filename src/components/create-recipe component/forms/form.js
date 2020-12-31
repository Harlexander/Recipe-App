import React, {useContext, useState} from 'react'
import { Usercontext } from '../../../context/context';
import { Yields, CookingTime, Category, Cuisine } from '../../../dropdown tags/select';
import { firestore, storage } from '../firebase/firebase';

const Form = () => {
    const {user} = useContext(Usercontext)
    const [inputs, setInputs] = useState([{recipes : ""}])
    const [textarea, setText] = useState([{instruction : ""}]);
    const [image, setImage] = useState(null)
    const [state, setState] = useState({
        title : "",
        description : "",
        cuisine : "",
        category : "",
        time : "",
        user : user ? user.uid : null,
        yields : "",
        method : "",
        difficulty : "",
        ingredients : [],
        instruction : []
    });

    const handlechanges = (e) => {
        const {name, value}  = e.target
        setState(prev =>( {
            ...prev,
            [name] : value
        }))
     }
    const handlechange = (e, index) => {
        const {name, value} = e.target
        const list = [...inputs]
        list[index][name] = value
        setState(prev =>( {
            ...prev,
            ingredients : list
        }))
    }
    const radio = (e) => {
        console.log(e.target.value)
        setState(prev =>( {
            ...prev,
            difficulty : e.target.value
        }))
    }
    const checkbox = (e) => {
        const {name} = e.target
        setState(prev =>( {
            ...prev,
            method : name
        }))
    }

    const addInput = (event) => {
        event.preventDefault();
        const list = [...inputs,{recipes : ""}]
        setInputs(list);
    }

    const removeItem = (index) => {
        const list = [...inputs]
        list.splice(index, 1);
        setInputs(list)
    }
    const handletext = (e, index) => {
        const {name, value} = e.target
        const list = [...textarea]
        list[index][name] = value
        setState(prev =>( {
            ...prev,
            instruction : list
        }))
    }

    const addtext = (event) => {
        event.preventDefault();
        const list = [...textarea,{instruction : ""}]
        setText(list);
    }

    const removetext = (index) => {
        const list = [...textarea]
        list.splice(index, 1);
        setText(list)
    }
    const submit = (e) => {
        e.preventDefault()
            put()
    }
    const addImage = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }
 
    const put = () => {
       const uploadTask =  storage.ref(`recipeImages/${state.user}-${state.title}`).put(image)
        uploadTask.on('state_changed', 
        (snapShot) => {
          console.log(snapShot)
        }, (err) => {
          //catches the errors
          alert(err)
        }, () => {
          storage.ref('recipeImages').child(`${state.user}-${state.title}`).getDownloadURL()
           .then(fireBaseUrl => {
            firestore.collection("recipes").add({
                title : state.title.toLowerCase(),
                description : state.description,
                cuisine : state.cuisine,
                category : state.category,
                time : state.time,
                user : state.user,
                yields : state.yields,
                method : state.method,
                difficulty : state.difficulty,
                ingredients : state.ingredients,
                instruction : state.instruction,
                img : fireBaseUrl,
                posted : new Date()
            })
            .then( () => {
                alert("uploaded successfully")
            })
           })
        })
    }
    return (
        <>
        <form onSubmit={submit}>
            <div className="form-group">
                <label>Recipe Title</label>
                <input type="text" name="title" className="form-control" value={state.title}  style={rad} onChange={handlechanges}/>
            </div>
            <div className="form-group">
                <label>Recipe Description</label>
                <textarea name="description" className="form-control rounded" value={state.description} onChange={handlechanges}/>
            </div>
            <div className="form-group">
                <label>Recipe Ingredients</label>
                <div className="container p-4 bg-light shadow-lg mb-3 rounded">
              {inputs.map((items,index) => (
                    <div className="input-group my-2 w-50 mx-auto" key={index}>
                    <input type="text"style={rad} className="form-control bg-light shadow" name="recipes" value={items.recipes} onChange={(e) => handlechange(e, index)}/>
                   { inputs.length !== 1 && <div className="input-group-prepend px-2">
                        <button type="button" className="btn btn-danger rounded-circle fa fa-remove shadow" onClick={() => removeItem(index)}></button>
                    </div>} 
                    </div> 
              ))}
              <button className="btn rounded btn-success px-md-5 m-4" onClick={(event)=> addInput(event)}>Add New Ingredients</button>
           </div>
           </div>
            <div className="form-group">
                <label>Recipe Instruction</label>
                <div className="container p-4 bg-light shadow-lg mb-3 rounded ">
                {textarea.map((items,index) => (
                    <div className="input-group my-2 w-50 mx-auto" key={index}>
                    <textarea type="text"style={rad} value = {items.instruction} name="instruction" className="form-control bg-light shadow" onChange={(e) => handletext(e , index)}/>
                    {textarea.length !== 1 && <div className="input-group-prepend px-2">
                        <button type ="button" className="btn btn-danger rounded-circle fa fa-remove shadow" onClick={() => removetext(index)}></button>
                    </div> }
                    </div> 
              ))}
              <button className="btn rounded btn-success px-md-5 m-4"  onClick={addtext}>Add New Instruction</button>
           </div>
           </div>
            <div className="radio-group my-4">
                <label className="font-weight-bold">Recipe difficulty</label>
                <br />
                <div class="form-check-inline" onChange={radio}> 
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio" value="Advanced" />Advanced
                    </label>
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio" value="Intermediate"/>Intermediate
                    </label>
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio" value="Easy"/>Easy
                    </label>
                    </div>
            </div>
            <div>
            </div>
            <div className="check-group my-5">
                <label className="font-weight-bold">Method Of Cooking</label>
                <br />
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="frying" value="frying" onChange={checkbox}/>frying
                </label>
                </div>
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="baking" value="Baking"  onChange={checkbox}/>Baking
                </label>
                </div>
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="grilling" value="Grilling"  onChange={checkbox}/>Grilling
                </label>
                </div>
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="roasting" value="Roasting"  onChange={checkbox}/>Roasting
                </label>
                </div>
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="searing" value="Searing"  onChange={checkbox}/>Searing
                </label>
                </div>
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="stewing" onChange={checkbox} value="stewing" />Stewing
                </label>
                </div>
                <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" name="steaming" onChange={checkbox} value="steaming" />Steaming
                </label>
                </div>
            </div>

            <div className="row my-3">
            <div className="form-group  col-md-6">
                <label>Recipe Category</label>
                <Category onChange={handlechanges} style={rad} />
            </div>
            <div className="form-group col-md-6">
                <label>Recipe Cuisine</label>
                <Cuisine onChange={handlechanges} style={rad} />
            </div>
            <div className="form-group col-md-6">
                <label>Yields</label>
                <Yields onChange={handlechanges} style={rad}/>
            </div>
            <div className="form-group col-md-6">
                <label>Cooking Time</label>
                <CookingTime onChange={handlechanges} style={rad}/>
            </div>
            </div>
            <div className="form-group py-3">
                <label className="font-weight-bold">Add Image</label>
                <input type="file" name="image" onChange={addImage}/>
            </div>

            <input  type="submit" className="btn btn-outline-primary my-4 p-2 w-100 "/>
            
        </form>
        <button onClick={() => {
            const washingtonRef = firestore.collection('timestamp');
            washingtonRef.add({
               time: new Date()
           })
           .then(() => {
               firestore.collection("timestamp")
               .get()
               .then((snapshot) => snapshot.docs.map( doc => console.log(doc.data())))
           })
           .catch(err => {
               console.log(" error : " + err)
           })}}>Click me</button>
           </>
    )
}
const rad = {
    borderRadius : "20px"
}
export default Form
