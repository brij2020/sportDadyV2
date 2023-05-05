


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../apiServices/axiosInstance'
const  API_PATH_CONST = require('../../../apiServices/apiPath')

const liveScoreAction = createAsyncThunk(
    'livescore/dataStatus',
    async (query, thunkAPI ) => {
        const {
            matchId = 6767
        }  = query
        const response = await axiosInstance.get(API_PATH_CONST?.LIVE_SCORE + `&matchId=${matchId}`);
        console.log('response', response)
        if(response?.data?.status) {
            return response.data?.response
        } else {
            return response.data?.response
        
        }
    
    }
)
//create reducer slice 
const liveScoreSlice = createSlice({
    name: 'livesocre',
    initialState:{ data:{ }, loading: false},
    reducers:{},
    extraReducers: builder => {
        builder.addCase(liveScoreAction.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.status = true;
        })
        builder.addCase(liveScoreAction.pending, (state,{ payload }) => {
            state.loading = true;
            state.status = false;
        })
        builder.addCase(liveScoreAction.rejected, (state,{ payload}) => {
            state.loading = false;
            state.status = false;
 
        })
    }
});


// exporting Reducer
const liveScoreReducer = liveScoreSlice.reducer;

export {
    liveScoreAction,
    liveScoreReducer
}


