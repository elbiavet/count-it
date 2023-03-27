
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';
import { startLoadingExpenses, startLoadingIncome } from '../store/countApp/thunks';

export const useCheckAuth = () => {

    const dispatch = useDispatch();
    const { status } = useSelector(state=> state.auth)
   
  
    useEffect(() => {
      
        onAuthStateChanged( FirebaseAuth, async( user )=>{
          
          if( !user ) return dispatch( logout() );  
          
          const { email, displayName, uid } = user;
      
          dispatch(login({ email, displayName, uid }))
          dispatch( startLoadingExpenses() ) 
          dispatch( startLoadingIncome() ) 
          
      })
      
    }, [])
    
    
  return { status }
}