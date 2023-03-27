import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalExpense: false,
        modalIncome: false 
    },
    reducers: {
        onOpenModalExpense: (state ) => {
            state.modalExpense = true
        },
        onOpenModalIncome: (state ) => {
            state.modalIncome = true
        },
        closeModalExpense: (state) =>{
            state.modalExpense = false;
        },
        closeModalIncome: (state) =>{
            state.modalIncome = false;
        },
    },
});

export const { onOpenModalExpense, onOpenModalIncome, closeModalExpense, closeModalIncome } = modalSlice.actions;