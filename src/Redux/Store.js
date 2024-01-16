import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slices/AuthSlice.js';
import CourceSlice from './Slices/CourceSlice.js';
const store = configureStore({
    reducer: {
        auth: authSlice,
        courses: CourceSlice
    },
    devTools: true
});

export default store;