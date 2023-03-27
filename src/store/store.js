import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { countAppSlice } from "./countApp/countAppSlice";
import { modalSlice } from "./modal/modalSlice";
import { totalSlice } from "./total/totalSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        countApp: countAppSlice.reducer,
        modal: modalSlice.reducer,
        total: totalSlice.reducer
    }
})