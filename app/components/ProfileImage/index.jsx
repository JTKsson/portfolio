"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/providers/ThemeContext";
import Image from "next/image";

const ProfileImage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Image
			src={theme === "dark" ? "/timothy.jpg" : "/blinded.png"}
			width={250}
			height={300}
			alt='Profile Image'
		/>
	);
};

export default ProfileImage;
