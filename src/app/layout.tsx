import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ModeContextProvider } from "./context/ModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Colin Billingsley",
	description: "My porfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ModeContextProvider>
			<html lang="en">
				<body
					className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors`}
				>
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
		</ModeContextProvider>
	);
}
