import React from "react";
import Contact from "./Contact";

const Footer = () => {
	return (
		<footer className="w-full mx-auto px-6 h-28 md:px-16 border-t border-t-gray-200 dark:border-white dark:border-opacity-20 z-[100] transition-all">
			<Contact />
			<div className="w-full text-sm md:text-base text-center mt-10 py-4">
				<p className="font-light dark:opacity-45">
					&copy; 2024 Colin Billingsley. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
