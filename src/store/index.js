import { configureStore } from "@reduxjs/toolkit";

// Logger with default options
import logger from 'redux-logger'
import rootReducers from "./slice";

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export{
    store
}
