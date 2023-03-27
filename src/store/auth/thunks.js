

import { loginWithEmail, logoutFirebase, registerWithEmail, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication =( email, password )=>{
    return async(dispatch)=>{

        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = ()=>{
    return async(dispatch)=>{

        dispatch(checkingCredentials())

        const result = await signInWithGoogle();
        if(!result) return dispatch(logout(result.errorMessage))
        dispatch(login( result))
    }
}


export const startRegisterWithEmail = ( { email, password, displayName } ) =>{
    return async(dispatch) =>{
        
        dispatch(checkingCredentials())

        const { uid, ok, errorMessage } = await registerWithEmail({email, password, displayName})
       
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({email, displayName, uid}))
       
        
    }
}

export const startLoginWithEmail = ( { email, password } ) =>{
    return async(dispatch) =>{
        
        dispatch(checkingCredentials())

        const { uid, ok, displayName, errorMessage } = await loginWithEmail({ email, password })
       
        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({ email, displayName, uid }))
        
    }
}

export const startLogoutFirebase = ()=>{
    return async(dispatch) =>{
        await logoutFirebase();
        dispatch(logout())
    }
}