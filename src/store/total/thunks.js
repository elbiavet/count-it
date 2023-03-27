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
        docs.forEach(doc => {docsIncome.push(parseFloat(doc.data().amount))})
        // docs.forEach(doc => {docsIncome.push(doc.data().amount).toFixed(2)})
        
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
        
        docs.forEach(doc => {docsExpense.push(parseFloat(doc.data().amount))})
        // docs.forEach(doc => {docsExpense.push(doc.data().amount).toFixed(2)})
        
        const totalExpense = docsExpense.reduce((a, c)=> a + c)
       
        dispatch(setTotalExpense(totalExpense))
    }
}
