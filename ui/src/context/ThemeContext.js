import { createContext, useContext, useState  } from 'react';

const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const setColorMode = () => {
        setTheme(prev => {
            if(prev == 'light') return 'dark';
            if(prev == 'dark') return 'light';
        })
    }

    return (
        <ThemeContext.Provider value={{theme, setColorMode}} >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}