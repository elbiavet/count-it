import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config";
import { setTotalExpense, setTotalIncome } from "./totalSlice";


/* obtener Totales */

export const startTotalIncome=()=>{
    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe')

        const collectionRef = collection( FirebaseDB, `${ uid }/countIt/incomeList`)
        const docs = await getDocs( collectionRef )
        
        const docsIncome = [0]; //evita el error por tener array vacío
        docs.forEach(doc => {docsIncome.push(parseInt(doc.data().amount))})
        
        const totalIncome = docsIncome.reduce((a, c)=> a + c) 
        
        dispatch(setTotalIncome(totalIncome))
    }
}

export const startTotalExpense=()=>{
    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe')

        const collectionRef = collection( FirebaseDB, `${ uid }/countIt/expenseList`)
        const docs = await getDocs( collectionRef )
        
        const docsExpense = [0]; //evita el error por tener array vacío
        docs.forEach(doc => {docsExpense.push(parseInt(doc.data().amount))})
        const totalExpense = docsExpense.reduce((a, c)=> a + c)
       
        dispatch(setTotalExpense(totalExpense))
    }
}
