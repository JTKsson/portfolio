import FerrisWheel from "./components/FerrisWheel";
import ProfileImage from "./components/ProfileImage";
import styles from "./page.module.scss";

export default function Home() {
	const feIcons = [
		"techIcons/javascript.png",
		"techIcons/react.png",
		"techIcons/css.png",
		"techIcons/html.png",
		"techIcons/typescript.png",
		"techIcons/sass.png",
		"techIcons/tailwind.png",
	];

	const beIcons = [
		"techIcons/cosmodb.png",
		"techIcons/csharp.png",
		"techIcons/mongodb.svg",
		"techIcons/dotnetcore.png",
		"techIcons/express-js.png",
		"techIcons/sql.png",
	];

	const miscIcons = [
		"techIcons/git.png",
		"techIcons/azure.png",
		"techIcons/nextjs.svg",
		"techIcons/docker.png",
	];
	return (
		<main className={styles.homeBody}>
			<h2>Welcome</h2>
			<ProfileImage />
			<FerrisWheel icons={feIcons} />
			<FerrisWheel icons={beIcons} />
			<FerrisWheel icons={miscIcons} />
		</main>
	);
}
