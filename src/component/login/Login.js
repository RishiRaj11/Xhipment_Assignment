import React from 'react'
import { signInWithGoogle } from '../firebase/firebase';
import {DataContext} from "../context/DataProvider.js";
import { useContext } from "react";
const Login = () => {

    const {setAccount}=useContext(DataContext);
  return (
    <div className='login'>

        <button className='login_btn' onClick={()=>{signInWithGoogle(setAccount)}}>SignIn with Google</button>
    </div>
  )
}

export default Login;