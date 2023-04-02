import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')


/**
 * Listing APi
 */
const getPhotoListAction = createAsyncThunk(
    'photoList/dataStatus',
    async (query, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.PHOTO_LST_API + `&pageno=${query?.pageno}&perpage=${query?.perpage}`);
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const photoListSlice = createSlice({
    name: 'PhotoList',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getPhotoListAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(getPhotoListAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(getPhotoListAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});
//END


/**
 * Detail APi
 */
const photoDetailAction = createAsyncThunk(
    'videoDetail/dataStatus',
    async (cmsId, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.PHOTO_DETAIL + `&cmsuid=${cmsId}` );
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const photoDetailSlice = createSlice({
    name: 'videoDetail',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(photoDetailAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(photoDetailAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(photoDetailAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});


// exporting Reducers
const photoListReducer = photoListSlice.reducer;
const photoDetailReducer = photoDetailSlice.reducer;



export {
    photoListReducer,
    photoDetailReducer,
    getPhotoListAction,
    photoDetailAction
}