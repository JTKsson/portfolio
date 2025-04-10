import ProfileImage from "./components/ProfileImage";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.homeBody}>
			<h2>Welcome</h2>
			<ProfileImage />
		</main>
	);
}
