import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async()=>{
    try{
       const result = await signInWithPopup( FirebaseAuth, googleProvider )
       const { uid, displayName, email }= result.user
       
       return {
        ok: true,
        uid, displayName, email
        }
        
    } catch(error){
        
        return{
            ok:false, 
            errorMessage: error.message
        }
    }
}


export const registerWithEmail = async({ displayName, email, password})=>{
    try{
       const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
       const { uid }= result.user
       await updateProfile(FirebaseAuth.currentUser, {displayName})

       return {
        ok: true,
        uid, displayName, email
        }
        
    } catch(error){
        
        return{
            ok:false, 
            errorMessage: error.message
        }
    }
}

export const loginWithEmail = async({ email, password})=>{
    try{
       const result = await signInWithEmailAndPassword( FirebaseAuth, email, password )
       const { uid, displayName }= result.user
       
       return {
        ok: true,
        uid, displayName, email
        }
        
    } catch(error){
        
        return{
            ok:false, 
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async()=>{
    return await FirebaseAuth.signOut();
}