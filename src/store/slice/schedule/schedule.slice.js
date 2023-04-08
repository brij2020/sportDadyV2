import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')


/**
 * Listing API
 */
const getScheduleListAction = createAsyncThunk(
    'scheduleList/dataStatus',
    async (query, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.SCHEDULE_LIST);
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const scheduleListSlice = createSlice({
    name: 'scheduleList',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getScheduleListAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(getScheduleListAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(getScheduleListAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});
//END

// exporting Reducers
const scheduleListReducer = scheduleListSlice.reducer;
export {
    scheduleListReducer,
    getScheduleListAction,
  
}