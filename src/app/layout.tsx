import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";

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
		<html lang="en">
			<body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors`}>
				<NextUIProvider>
					<Navbar />
					{children}
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
