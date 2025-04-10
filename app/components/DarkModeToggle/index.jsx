"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/providers/ThemeContext";
import Styles from "./DarkModeToggle.module.scss";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const DarkModeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

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
