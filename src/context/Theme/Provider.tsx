import React, { FC } from 'react';
import ThemeContext from './Context';
import { Children, Theme } from 'src/@types';


type ThemeProvaiderProps = {
    children: Children,
    themeValue: Theme,
    onChangeTheme: (value: Theme) => void
}
const ThemeProvaider: FC<ThemeProvaiderProps> = ({ children, themeValue, onChangeTheme }) => {

    return (
        <ThemeContext.Provider
            value={{
                themeValue,
                onChangeTheme,
            }}
        >
            {children}

        </ThemeContext.Provider>
    )
}
export default ThemeProvaider