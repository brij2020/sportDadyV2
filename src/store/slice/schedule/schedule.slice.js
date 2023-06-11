import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')


/**
 * Listing APi
 */
const getMatchScheduleListAction = createAsyncThunk(
    'scheduleList/dataStatus',
    async (query, thunkAPI ) => {
        
        const response = await axiosInstance.get(API_PATH_CONST?.MATCH_SCHEDULE + `&pageno=${query?.pageno}&perpage=${query?.perpage}&matchtype=${query?.matchtype}`);
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
        builder.addCase(getMatchScheduleListAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(getMatchScheduleListAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(getMatchScheduleListAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});
//END

// exporting Reducers
const scheduleListReducer = scheduleListSlice.reducer;

export {
    getMatchScheduleListAction,
    scheduleListReducer
}