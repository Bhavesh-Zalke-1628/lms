import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    courceData: []
}

export const getAllCources = createAsyncThunk('/course/get', async () => {
    try {
        const res = await axiosInstance.get('/course/get')
        toast.promise(res, {
            loading: 'Wait! fetching data',
            success: "Cources loaded successfully",
            error: "Failed to load cources"
        })
        return (await res).data.cources;
    } catch (error) {
        toast.error(error?.res?.data?.message || error.message)
    }
})


const courceSlice = createSlice({
    name: 'cources',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})


export default courceSlice.reducer;