import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import axiosInstance from '../../Helpers/axiosInstance.js'
import axiosInstance from "../../Helpers/axiosInstance";
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
}

// Async thunk
// export const createAccount = createAsyncThunk('/user/signup', async (data) => {
//     try {
//         const response = await axiosInstance.post('/auth/register')
//         toast.promise(response, {
//             loading: 'Creating account...',
//             success: (data) => {
//                 return data?.data?.message
//             },
//             error: "Failed to create account"
//         });
//         return response.data;
//         return response.data;

//     } catch (error) {
//         toast.error(error?.response?.data?.message)
//     }
// })

export const createAccount = createAsyncThunk("/user/signup", async (data) => {
    try {
        const res = axiosInstance.post("/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},

})

// export const { } = authSlice.actions;
export default authSlice.reducer;