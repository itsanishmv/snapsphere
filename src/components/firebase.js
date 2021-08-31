import firebase from 'firebase'


const firebaseApp = firebase.initializeApp ({
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "instagram-clone-react-c52e7.firebaseapp.com",
    projectId: "instagram-clone-react-c52e7",
    storageBucket: "instagram-clone-react-c52e7.appspot.com",
    messagingSenderId: "676342010439",
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage =firebase.storage()
 
export  {firebaseApp,db,auth,storage} 
