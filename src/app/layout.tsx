import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ModeContextProvider } from "./context/ModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Colin Billingsley",
	description: "Colin Billingsley, a software developer, website portfolio.",
	keywords: [
		"colin",
		"colin billingsley",
		"billingsley",
		"software developer",
		"colin software developer",
		"colin billingsley software developer",
		"software",
		"developer",
		"frontend developer",
		"colin frontend developer",
		"colin billingsley frontend developer",
		"frontend",
		"software engineer",
		"colin software engineer",
		"colin billingsley software engineer",
		"web developer",
		"colin web developer",
		"colin billingsley web developer",
		"colin billingsley nashville tn",
		"colin nashville tn",
		"colin nashville",
	],
	icons: "/colin-bw-logo.png",
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
