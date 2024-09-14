import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { Themes } from "../../models/themes";

const slice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: (Cookies.get("theme") || Themes.Dark) as string,
  reducers: {
    changeTheme: (state, action) => {
      const theme = action.payload || Themes.Dark;
      Cookies.set("theme", theme);
      const body = document.getElementsByTagName("body")[0];
      body.className = "theme " + theme;
      return theme;
    },
  },
});

export const themeActions = slice.actions;

export const loadTheme = (dispatch) => {
  dispatch(themeActions.changeTheme(Cookies.get("theme")));
};

export default slice;
