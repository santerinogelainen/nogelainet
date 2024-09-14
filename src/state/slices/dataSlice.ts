import { createSlice } from "@reduxjs/toolkit";
import projects from "../../data/projects";
import socialMedia from "../../data/socialMedia";

const initialState = {
  projects,
  socials: socialMedia,
};

const slice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {},
});

export const settingActions = slice.actions;
export default slice;
