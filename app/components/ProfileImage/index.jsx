"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/providers/ThemeContext";
import Image from "next/image";

const ProfileImage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Image
			src={theme === "dark" ? "/timothy.jpg" : "/blinded.png"}
			style={{ width: "auto", height: "300px" }}
			width={250}
			height={300}
			alt='Profile Image'
			objectFit='contain'
		/>
	);
};

export default ProfileImage;
