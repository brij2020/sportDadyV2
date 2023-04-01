import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')

const homeDataAction = createAsyncThunk(
    'home/dataStatus',
    async (query, thunkAPI ) => {
        const response = await axiosInstance.get(API_PATH_CONST?.HOME_API);
        if(response?.data?.status) {
            return response.data.response
        } else {
            return response.data.response
        
        }
    
    }
)
//create reducer slice 
const homeSlice = createSlice({
    name: 'homes',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(homeDataAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(homeDataAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(homeDataAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});


// exporting Reducer
const homeReducer = homeSlice.reducer;

export {
    homeDataAction,
    homeReducer
}