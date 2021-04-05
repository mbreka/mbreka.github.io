import React, {useState, createContext} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

export const CustomThemeContext = createContext();

export const CustomThemeProvider = (props) => {
        const [theme, setTheme] = useState(createMuiTheme({
          palette: {
            type: 'light',
          }
        }));

    return (
        <CustomThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </CustomThemeContext.Provider> 
    );
}