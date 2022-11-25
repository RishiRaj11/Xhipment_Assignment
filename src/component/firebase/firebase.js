// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries






// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaAgZkIT-Tyxksxc33HLqqQ1cqzYEFK74",
  authDomain: "xhipment-6457d.firebaseapp.com",
  projectId: "xhipment-6457d",
  storageBucket: "xhipment-6457d.appspot.com",
  messagingSenderId: "152807173452",
  appId: "1:152807173452:web:f93979f7e9bc6c41b773e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export const signInWithGoogle=(setAccount)=>{
    signInWithPopup(auth,provider).then((result)=>{
        //console.log(result);
        const userDetails={
            name:result.user.displayName,
            email:result.user.email,
            photo:result.user.photoURL
        }
        setAccount(userDetails)
    }).catch((error)=>{
        console.log(error);
    })
}