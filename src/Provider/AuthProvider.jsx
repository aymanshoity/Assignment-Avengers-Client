import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            const userEmail=currentUser?.email || user?.email;
            const loggedUserEmail={email:userEmail}
            setUser(currentUser)
            console.log('currently seen',currentUser)
            setLoading(false)
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt',loggedUserEmail,{ withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUserEmail,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
        return ()=>{unsubscribe()}
    },[])
    const authInfo={user,createUser,signInUser,signInWithGoogle,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;