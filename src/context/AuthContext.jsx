/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from "../../firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider=({children})=>{

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const provider = new GoogleAuthProvider()

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}

const loginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password)
}

// Google signin

const googleSignIn =()=> {
    setLoading(true);
    return signInWithPopup(auth,provider)

}

const logout=()=>{
    setLoading(true);
    return signOut(auth);
}


    const authInfo={user,loading, createUser,setLoading,loginUser,logout,googleSignIn}
    useEffect(()=>{
        const unSubscriber=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
        return()=>{
            unSubscriber()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider