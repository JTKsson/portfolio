import "./globals.scss";
import "./globalStyles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
	title: "Portfolio - Timothy Karlsson",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
