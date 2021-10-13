import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseinitialzation from './firebase.init';
import { useState } from 'react';
firebaseinitialzation();


const useFirebase=()=>{

    const [user,setuser]=useState({})
    const auth=getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singinWithgoogle=()=>{
        signInWithPopup(auth, googleProvider)
    .then(result=>{
        setuser(user.result)
    })
    }

    return{
        singinWithgoogle

    }

}
export default useFirebase;