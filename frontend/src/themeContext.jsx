    // ThemeContext.jsx
    import { createContext, useContext, useEffect, useState } from "react";

    const ThemeContext = createContext();

    export function ThemeProvider({ children }) {
        const [theme, setTheme] = useState(() => {
            return localStorage.getItem("app-theme") || "light";
        });
        useEffect(() => {
            localStorage.setItem("app-theme", theme);
        }, [theme])

        function toggleTheme() {
            // 3. Use React's currentTheme, not localStorage, to determine the next state
            setTheme((currentTheme) => {
                // console.log(currentTheme, 'color');
                return currentTheme === "light" ? "dark" : "light";
            });
        }

        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        );
    }

    export function useTheme() {
        return useContext(ThemeContext);
    }