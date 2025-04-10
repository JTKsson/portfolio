"use client";
import { useState, useEffect } from "react";
import Styles from "./DarkModeToggle.module.scss";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const DarkModeToggle = () => {
	const [theme, setTheme] = useState("dark"); // Default to "dark" initially

	useEffect(() => {
		// Check if localStorage is available
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) {
				setTheme(storedTheme);
			}
		}
	}, []);

	useEffect(() => {
		// Update the theme in localStorage and on the document
		if (typeof window !== "undefined") {
			document.documentElement.setAttribute("data-theme", theme);
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className={Styles.toggleContainer} onClick={toggleTheme}>
			<div className={`${Styles.slider} ${theme === "light" ? Styles.light : ""}`}>
				<div className={Styles.knob}>
					{theme === "light" ? <BiSolidSun /> : <BiSolidMoon />}
				</div>
			</div>
		</div>
	);
};

export default DarkModeToggle;
