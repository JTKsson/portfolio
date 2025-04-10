"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	// Load theme from localStorage on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) {
				setTheme(storedTheme);
			}
		}
	}, []);

	// Update localStorage and document attribute when theme changes
	useEffect(() => {
		if (typeof window !== "undefined") {
			document.documentElement.setAttribute("data-theme", theme);
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
