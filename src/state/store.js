import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import themeSlice from "./slices/themeSlice"
import dataSlice from "./slices/dataSlice"
import viewSlice from "./slices/viewSlice"
import thunkMiddleware from 'redux-thunk'

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        data: dataSlice.reducer,
        view: viewSlice.reducer
    }
}, applyMiddleware(thunkMiddleware));

export default store;