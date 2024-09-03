import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/themeSlice"
import dataSlice from "./slices/dataSlice"
import viewSlice from "./slices/viewSlice"
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        data: dataSlice.reducer,
        view: viewSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store;