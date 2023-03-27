import { createSlice } from '@reduxjs/toolkit';

export const countAppSlice = createSlice({
    name: 'countApp',
    initialState: {
        isSaving:false,
        expenseList: [],
        incomeList:[],
        activeMovement: null,
        
        // totalExpense:0,
        // totalIncome:0,
        // total:0,
    }, 
    
    reducers: {

        // setTotal: (state ) => {
        //     state.total = state.totalIncome - state.totalExpense
        // },

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
            // state.totalExpense = state.expenseList?.map(e => parseInt(e.amount)).reduce((a, c)=> a + c);
        },
        
        setIncomeList: (state, { payload } ) => {
            state.incomeList = payload;
            // state.totalIncome = state.incomeList?.map(i => parseInt(i.amount)).reduce((a, c)=> a + c);
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
       
        clearNotesLogout: (state)=>{
            state.isSaving = false;
            state.expenseList = [];
            state.active = null;
        },

    }
});

export const { /* setTotal ,*/ addNewExpense, addNewIncome, setActiveMovement, setExpenseList, setIncomeList,  deleteExpenseById, deleteIncomeById, updateIncome, updateExpense, savingNewNote, clearNotesLogout, setSaving } = countAppSlice.actions;

