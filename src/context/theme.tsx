import React, { useCallback, useContext, useState } from "react";
import { Theme } from "./types";
import { defaultTheme } from "./utils/presetThemes";

type ThemeContextInterface = {
    theme: Theme;
    updateTheme: (theme: Theme) => void;
};

type ThemeContextType = ThemeContextInterface;
const ThemeContext = React.createContext<ThemeContextType>(
    {} as ThemeContextInterface,
);

export function useThemeContext() {
    return useContext(ThemeContext);
}

const ThemeContextProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const updateTheme = useCallback((theme: Theme) => {
        setTheme(theme);
    }, []);

    const value: ThemeContextInterface = {
        theme: theme,
        updateTheme: updateTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
