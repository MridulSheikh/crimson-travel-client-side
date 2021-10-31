import React, { useEffect, useState } from 'react';
import {  getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import FirebaseInitialize from '../firebase/firebase.init';
FirebaseInitialize()
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLoading, setIsLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handlelogin = ()=>{
        setIsLoading(true);
        return  signInWithPopup(auth, provider)
        .finally(() => setIsLoading(false));
    }
    const handlelogout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if (user) {
                setUser(user)
              }   
              
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    },[])
    return {
         handlelogin,
         user,
         handlelogout,
         isLoading
    };
};

export default useFirebase;