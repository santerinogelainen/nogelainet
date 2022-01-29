import { createSlice } from '@reduxjs/toolkit'
import Cookies from "js-cookie"
import { Themes } from "../../models/themes"

const slice = createSlice({
    name: 'theme',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: Cookies.get("theme") || Themes.Dark,
    reducers: {
        changeTheme: (state, action) => {
            Cookies.set("theme", action.payload);
            const body = document.getElementsByTagName("body")[0];
            body.className = "theme " + action.payload;
            return action.payload;
        }
    },
});

export const themeActions = slice.actions;

export const loadTheme = (dispatch) => {
    dispatch(themeActions.changeTheme(Cookies.get("theme")));
}

export default slice