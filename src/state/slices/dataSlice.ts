import { createSlice } from "@reduxjs/toolkit";
import projects from "../../data/projects";

const initialState = {
  projects,
};

const slice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {},
});

export const settingActions = slice.actions;
export default slice;
