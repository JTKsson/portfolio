import "./globals.scss";
import "./globalStyles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./providers/ThemeContext";

export const metadata = {
	title: "Portfolio - Timothy Karlsson",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<ThemeProvider>
				<body>
					<Header />
					{children}
					<Footer />
				</body>
			</ThemeProvider>
		</html>
	);
}
