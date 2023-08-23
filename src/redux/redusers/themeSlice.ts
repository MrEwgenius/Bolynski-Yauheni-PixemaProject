import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "src/@types";
import { Rootstate } from "../store";
import { LOCAL_STORAGE_THEME } from "src/utils/constants";


type InitialState = {

    themeValue: Theme
}


const initialState: InitialState = {
    themeValue: Theme.Dark
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setThemeValue: (state, action: PayloadAction<Theme>) => {
            state.themeValue = action.payload
            localStorage.setItem(LOCAL_STORAGE_THEME, action.payload);
            

        }
    }
})

export const { setThemeValue } = themeSlice.actions

export const ThemeSelectors = {

    getThemeValue: (state: Rootstate) => state.themReducer.themeValue,
}

export default themeSlice.reducer