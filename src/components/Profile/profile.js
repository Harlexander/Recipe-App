import React, {useContext, useState, useEffect}from 'react'
import img from "./../../images/user-icon1.jpg"
import { useHistory } from 'react-router-dom';
import { Usercontext } from '../../context/context';
import { auth, firestore, storage } from '../create-recipe component/firebase/firebase'
import Modal from '../modal';
import Links from './links';

function Profile() {

    const currentuser = useContext(Usercontext)
    const history = useHistory()
   
    const [loader, setLoader] = useState(true)
    const [image, setImage] = useState(null)
    const [user, setUser] = useState(null)
    const [state, setstate] = useState({});
    const [basic, setBasic] = useState({});
    const redirect = () => {
        if(currentuser.loading === false){
            if(!currentuser.user){
                history.push('/login')
            }else{
                    setBasic({
                    displayName :currentuser.user.displayName,
                    photoURL : currentuser.user.photoURL,
                    email : currentuser.user.email
                    })
                firestore.collection("users").doc(currentuser.user.uid)
                .onSnapshot(function(doc) {
                    const data = doc.data()
                    setstate(data || [])
                    setUser(currentuser.user.uid)
                    sessionStorage.setItem("details", JSON.stringify(data))
            })
        }
    }
}
   const addImage = (e) => {
       const file = e.target.files[0]
       setImage(file)
   }

   const put = () => {
      const uploadTask =  storage.ref(`displayImages/${basic.displayName}`).put(image)
       uploadTask.on('state_changed', 
       (snapShot) => {
         console.log(snapShot)
       }, (err) => {
         //catches the errors
         alert(err)
       }, () => {
         storage.ref('displayImages').child(basic.displayName).getDownloadURL()
          .then(fireBaseUrl => {
            currentuser.user.updateProfile({
                photoURL : fireBaseUrl
            })
            alert("image Uploaded Succesfully Reload Page to See changes")
            console.log(currentuser.user.photoURL)
          })
       })
   }

   console.log(currentuser.user)
    useEffect(() => {redirect()} , [currentuser.user])
    return (
        <div>
            <Modal />

            <div className="profile container route h-100 bg-light mx-auto shadow px-4 row">
            {currentuser.loading ? <p className="alert alert-warning "> loading</p> : null} 
                  <div className="col-md-6">
                      <div className="dp-container m-2">
                    <img src={basic.photoURL ? basic.photoURL : img} alt="displayPicture"  className="img-thumbnail dp"/>
                    <div className="edit">
                    <input id="image" type="file" className="d-block w-25" onChange={addImage}/>
                    <button className="button btn-primary btn btn-sm m-2" onClick={put}>Update Image</button>
                    </div>
                      </div>
                    
                  <p className="py-1 text-center">{state.bio}</p>
                  </div>
                  <div className="col-md-6">
                      <div>
                         <h2 className="py-2 font-weight-light">Hey {basic.displayName}</h2>
                         <div>
                              <ul className="list-group">
                          <li className="list-group-item">Name : <span>{state.fullname}</span></li>
                          <li className="list-group-item">Email : <span>{basic.email}</span></li>
                          <li className="list-group-item">Mobile : <span>{state.mobile}</span></li>
                          <li className="list-group-item">Total Recipe Uploaded : <span>N/A</span></li>
                          <li className="list-group-item">Skills : <span>{state.skills}</span></li>
                          <li className="list-group-item">Country : <span>{state.country}</span></li>
                        </ul>
                         </div>
                         
                        <div>
                        <a href={state.facebookUrl} target="_parent"><button className="btn btn-primary rounded-circle fa fa-facebook shadow p-3 m-3" type="button"></button></a>
                        <a href={state.instagramUrl} target="_blank"><button className="btn btn-danger rounded-circle fa fa-instagram shadow  p-3 m-3" type="button"></button></a>
                        <a href={state.twitterUrl} target="_blank"><button className="btn btn-dark rounded-circle fa fa-twitter shadow  p-3 m-3" type="button"></button></a>
                        <button className="btn btn-danger pull-left my-4" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Update Links
                        </button>
                        <button type="button" className="btn btn-primary pull-right my-4" data-toggle="modal" data-target="#updateprofile">
                        Update Profile
                        </button>
                        </div>
                        <Links user={user}/>
                      </div>
                  </div>
              </div>
             
            </div>
    )
}
// const container = {
//     marginTop : "-80px",
// }
export default Profile
