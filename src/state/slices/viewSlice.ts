import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "view",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    controlsVisible: false,
    previousCommand: "",
  },
  reducers: {
    setPreviousCommand: (state, action) => {
      state.previousCommand = action.payload;
      return state;
    },
    setControlsVisible: (state, action) => {
      state.controlsVisible = action.payload;
      return state;
    },
  },
});

export const viewActions = slice.actions;
export default slice;
