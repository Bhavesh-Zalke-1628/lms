import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
}

// Async thunk
export const createAccount = createAsyncThunk('/user/signup', async (data) => {
    try {
        const response = await axiosInstance.post('/register')
        toast.promise(response, {
            loading: 'Creating account...',
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to create account"
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},

})

// export const { } = authSlice.actions;
export default authSlice.reducer;