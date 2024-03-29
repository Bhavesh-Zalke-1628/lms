import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
import { toFormData } from "axios";
const initialState = {
    courseData: []
}
export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const response = axiosInstance.get("/cource");
        toast.promise(response, {
            loading: "loading course data...",
            success: "Courses loaded successfully",
            error: "Failed to get the courses",
        });
        return (await response).data.cources;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const creatNewCourse = createAsyncThunk('/course/create', async (data) => {
    try {
        let formData = new FormData();
        formData.append('title', data?.title)
        formData.append('description', data?.description)
        formData.append('categeory', data?.categeory)
        formData.append('createdBy', data?.createdBy)
        formData.append('thumbnails', data?.thumbnails)

        const response = axiosInstance.post('/cource', formData);
        toast.promise(response, {
            loading: "Crating new Cource",
            success: "Cource Created Successfully",
            error: "Failed to create Cource"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if (action.payload) {
                state.courseData = [...action.payload];
            }
        })
    }
});

export default courseSlice.reducer;