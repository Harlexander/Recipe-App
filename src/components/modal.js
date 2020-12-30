import react, { useContext, useState } from 'react'
import { Usercontext } from '../context/context'
import { firestore } from './create-recipe component/firebase/firebase'

const Modal = () => {
    const value = useContext(Usercontext)
    const stored = JSON.parse(sessionStorage.getItem("details")) || []
    const [state, setState] = useState({
        fullname : "" || stored.fullname,
        nickname : ""  || stored.nickname,
        skills : ""  || stored.skills,
        mobile : ""  || stored.mobile,
        country : ""  || stored.country,
        bio : ""  || stored.bio,
    })
    const updateProfile = (e) => {
        e.preventDefault()
        value.user.updateProfile({
            displayName : state.nickname
        })
        firestore.collection("users").doc(value.user.uid).set(state)
        .then(()=> {
            alert("user update successfull")
        })
    }
    const handlechange = (e) => {
        const {name, value}  = e.target
        setState(prev =>( {
            ...prev,
            [name] : value
        }))
     }
    return(
        <div  class="modal fade" tabindex="-1" id="updateprofile" aria-hidden="false">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Update Profile {state.skills}</h5>
        </div>
        <div class="modal-body">
        <form onSubmit={updateProfile}>
        <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input type="text" name="fullname" value={state.fullname} className="form-control" required  onChange={handlechange} />
                <div className="form-text">We'll never share your information with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Nickname / Profile Name</label>
                <input type="text" name="nickname" value={state.nickname} className="form-control" required onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Skills</label>
                <input type="text" name="skills" value={state.email} className="form-control" required  onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Mobile Number</label>
                <input type="text" name="mobile" value={state.mobile} className="form-control" required  onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Country</label>
                <input type="text" name="country" value={state.country} className="form-control" required  onChange={handlechange}/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Edit View</label>
                <textarea type="text" name="bio" value={state.view} className="form-control" required  onChange={handlechange}/>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
            
            </form>
        </div>
        
        </div>
    </div>
</div>
    )
}

export default Modal