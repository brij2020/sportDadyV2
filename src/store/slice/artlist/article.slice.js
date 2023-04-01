import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')


/**
 * Listing APi
 */
const getArticleListAction = createAsyncThunk(
    'home/dataStatus',
    async (query, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.ART_LIST_API);
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const artListSlice = createSlice({
    name: 'homes',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getArticleListAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(getArticleListAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(getArticleListAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});
//END


/**
 * Detail APi
 */
const articledetailAction = createAsyncThunk(
    'home/dataStatus',
    async (cmsId, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.ART_DETAIL_API + `&cmsuid=${cmsId}` );
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const articleDetailSlice = createSlice({
    name: 'homes',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(articledetailAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(articledetailAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(articledetailAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});


// exporting Reducers
const artListReducer = artListSlice.reducer;
const artDetailReducer = articleDetailSlice.reducer;



export {
    artListReducer,
    artDetailReducer,
    getArticleListAction,
    articledetailAction
}