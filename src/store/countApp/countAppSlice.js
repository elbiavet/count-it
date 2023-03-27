import { createSlice } from '@reduxjs/toolkit';

export const countAppSlice = createSlice({
    name: 'countApp',
    initialState: {
        isSaving:false,
        expenseList: [],
        incomeList:[],
        activeMovement: null,
    }, 
    
    reducers: {
        /* añadir */
        addNewExpense: (state, { payload } ) => {
            state.expenseList.push(payload);
            state.isSaving = false;
        },

        addNewIncome: (state, { payload } ) => {
            state.incomeList.push(payload);
            state.isSaving = false;
        },

        /* activar */
        setActiveMovement: (state, { payload } ) => {
            state.activeMovement = payload;
        },

        /* crear array */
        setExpenseList: (state, { payload } ) => {
            state.expenseList = payload;
        },
        
        setIncomeList: (state, { payload } ) => {
            state.incomeList = payload;
        },

          /* borrar */
        deleteExpenseById: (state, { payload }) =>{
            state.expenseList = state.expenseList.filter( expense => expense.id !== payload);
            state.active = null;
        },

        deleteIncomeById: (state, { payload }) =>{
            state.incomeList = state.incomeList.filter( income => income.id !== payload);
            state.active = null;
        },

        /* actualizar */
        updateIncome: (state, {payload}) =>{ //payload: note
            state.isSaving = false;
            state.incomeList = state.incomeList.map( income => {
                if( income.id === payload.id ) {
                    return payload;
                }
                return income;
            });
        },
        
        updateExpense: (state, {payload}) =>{ //payload: note
            state.isSaving = false;
            state.expenseList = state.expenseList.map( expense => {
                if( expense.id === payload.id ) {
                    return payload;
                }
                return expense;
            });
        },
    
        /* bandera para deshabilitar botones */
        setSaving: (state) => {
            state.isSaving = true;
        },
        
        savingNewNote: (state)=>{
            state.isSaving = true;
        },
       
    }
});

export const { addNewExpense, addNewIncome, setActiveMovement, setExpenseList, setIncomeList,  deleteExpenseById, deleteIncomeById, updateIncome, updateExpense, savingNewNote, clearNotesLogout, setSaving } = countAppSlice.actions;

