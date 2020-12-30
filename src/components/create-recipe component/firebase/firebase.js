import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyBmbpTXCA5vesE_zcNXRSKALVDWbYUJOso",
    authDomain: "peachy-recipe.firebaseapp.com",
    projectId: "peachy-recipe",
    storageBucket: "peachy-recipe.appspot.com",
    messagingSenderId: "4433932146",
    appId: "1:4433932146:web:9f16d26841befd59f277eb",
    measurementId: "G-2V5682659Y"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const googleprovider = new firebase.auth.GoogleAuthProvider()
export const facebookprovider = new firebase.auth.FacebookAuthProvider()