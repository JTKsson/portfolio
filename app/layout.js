import "./globals.scss";
import "./globalStyles.scss";
import Header from "./components/header";
import Footer from "./components/footer";
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
