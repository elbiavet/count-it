import { createSlice } from '@reduxjs/toolkit';

export const totalSlice = createSlice({
    name: 'total',
    initialState: {
        total: 0,
        totalExpense:0,
        totalIncome:0
    },
    reducers: {
        setTotalExpense: (state, { payload } ) => {
            state.totalExpense = payload;
        },
        setTotalIncome: (state, { payload } ) => {
            state.totalIncome = payload;
        },
        setTotal: (state) => {
            state.total = state.totalIncome - state.totalExpense;
        },
    }
});

export const { setTotal, setTotalExpense, setTotalIncome,  } = totalSlice.actions;