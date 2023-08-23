import React, { useContext, createContext } from 'react';

import { Theme } from "src/@types"

const initialValues = {
    themeValue: Theme.Light,
    onChangeTheme: (value: Theme) => { }
}

const ThemeContext = createContext(initialValues)


export const useThemeContext = () => useContext(ThemeContext)


export default ThemeContext
