import { collection, deleteDoc, doc, getDocs, setDoc, query, where } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config";
import { addNewExpense, addNewIncome, deleteExpenseById, deleteIncomeById, setActiveMovement, setExpenseList, setIncomeList, setSaving, setTotalExpense, setTotalIncome, updateExpense, updateIncome, updateMovement } from "./countAppSlice";



/* Añadir nuevo ingreso-gasto */

export const startAddNewIncome = ( newIncome )=>{
    return async(dispatch, getState) =>{

        const { uid } = getState().auth;
        
        // const newIncome= {
        //     title: "",
        //     amount:"",
        //     date: "",
        //     type: "",
        // } 

        const newDoc = doc( collection( FirebaseDB, `${uid}/countIt/incomeList`));
        await setDoc( newDoc, newIncome )
        

        let newIncomeWithId = {...newIncome}
        newIncomeWithId.id = newDoc.id
        
        dispatch(addNewIncome( newIncomeWithId ))
        dispatch(setActiveMovement( newIncomeWithId ))
    }
}

export const startAddNewExpense = ( newExpense )=>{
    return async(dispatch, getState) =>{

        const { uid } = getState().auth;
        
        // const newExpense= {
        //     title: "",
        //     amount:"",
        //     date: "",
        //     type: "",
        // } 

        const newDoc = doc( collection( FirebaseDB, `${uid}/countIt/expenseList`));
        await setDoc( newDoc, newExpense )
        
        // newExpense.id = newDoc.id 

        let newExpenseWithId = {...newExpense}
        newExpenseWithId.id = newDoc.id
        
        dispatch(addNewExpense( newExpenseWithId ))
        dispatch(setActiveMovement( newExpenseWithId ))

    }
}


/* Cargar array de Ingresos-Gastos */

export const startLoadingIncome = ()=>{

    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe')

        const collectionRef = collection( FirebaseDB, `${ uid }/countIt/incomeList`)
        const docs = await getDocs( collectionRef )
        
        const income = [];
        docs.forEach( doc => {
            income.push({ id: doc.id, ...doc.data() })
            
        });

        dispatch(setIncomeList(income))
    }
}


export const startLoadingExpenses = ()=>{

    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe')

        const collectionRef = collection( FirebaseDB, `${ uid }/countIt/expenseList`)
        const docs = await getDocs( collectionRef )
        
        const expenses = [];
        docs.forEach( doc => {
            expenses.push({ id: doc.id, ...doc.data() })
        });
        
        dispatch(setExpenseList(expenses))
    }
}

/* Eliminar un Ingreso - Gasto */

export const startDeleteIncome = ()=>{

    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        const { activeMovement } = getState().countApp;

        if( !uid ) throw new Error('El uid del usuario no existe')
        if( !activeMovement ) throw new Error('No hay una nota seleccionada')

        const docRef = doc( FirebaseDB, `${ uid }/countIt/incomeList/${activeMovement.id}`)
        await deleteDoc( docRef )
        
        dispatch( deleteIncomeById( activeMovement.id ) )
    }
}

export const startDeleteExpense = ()=>{

    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        const { activeMovement } = getState().countApp;

        if( !uid ) throw new Error('El uid del usuario no existe')
        if( !activeMovement ) throw new Error('No hay una nota seleccionada')

        const docRef = doc( FirebaseDB, `${ uid }/countIt/expenseList/${activeMovement.id}`)
        await deleteDoc( docRef )
        
        dispatch( deleteExpenseById( activeMovement.id ) )
    }
}

/* Actualizar un Ingreso-Gasto */

export const startUpdateIncome = () =>{
    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        const { activeMovement } = getState().countApp;

        const noteToFirestore = { ...activeMovement };
        delete noteToFirestore.id;

       
        const docRef = doc( FirebaseDB, `${ uid }/countIt/incomeList/${activeMovement.id}`);
        await setDoc( docRef, noteToFirestore, { merge: true } );

        dispatch( updateIncome( activeMovement ) );
    }
}


export const startUpdateExpense = () =>{
    return async(dispatch, getState)=>{

        const { uid } = getState().auth;
        const { activeMovement } = getState().countApp;

        const noteToFirestore = { ...activeMovement };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/countIt/expenseList/${activeMovement.id}`);
        await setDoc( docRef, noteToFirestore, { merge: true } );

        dispatch( updateExpense( activeMovement ) );
    }
}