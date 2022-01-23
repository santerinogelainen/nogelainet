import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'view',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        controlsVisible: false
    },
    reducers: {
        setControlsVisible: (state, action) => {
            state.controlsVisible = action.payload;
        }
    },
});

export const viewActions = slice.actions;
export default slice