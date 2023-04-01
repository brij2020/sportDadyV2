import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')


/**
 * Listing APi
 */
const getVideoListAction = createAsyncThunk(
    'videoList/dataStatus',
    async (query, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.VIDEOS_LIST_API + `&pageno=${query?.pageno}&perpage=${query?.perpage}`);
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const videoListSlice = createSlice({
    name: 'videoList',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getVideoListAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(getVideoListAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(getVideoListAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});
//END


/**
 * Detail APi
 */
const videoDetailAction = createAsyncThunk(
    'videoDetail/dataStatus',
    async (cmsId, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.VIDEOS_DETAIL_API + `&cmsuid=${cmsId}` );
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const videoDetailSlice = createSlice({
    name: 'videoDetail',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(videoDetailAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(videoDetailAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(videoDetailAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});


// exporting Reducers
const videoListReducer = videoListSlice.reducer;
const videoDetailReducer = videoDetailSlice.reducer;



export {
    videoListReducer,
    videoDetailReducer,
    getVideoListAction,
    videoDetailAction
}