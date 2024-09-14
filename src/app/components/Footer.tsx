import React from "react";
import Contact from "./Contact";

const Footer = () => {
	return (
		<footer className="w-full mx-auto px-6 h-28 md:px-16 border-t border-t-gray-200 dark:border-white dark:border-opacity-20 z-[100] transition-all">
			<Contact />
			<div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4 h-full text-sm md:text-base">
				<p className="font-light dark:opacity-45">
					&copy; 2024 Colin Billingsley. All rights reserved.
				</p>
				<div className="relative bg-gray-100 dark:bg-opacity-15 px-6 py-4 rounded-full hover:cursor-default">
					<p className="font-light mr-6 dark:opacity-75">Available for Hire</p>
					<div className="absolute bg-green-500 h-3 w-3 rounded-full top-[1.35rem] right-5 animate-ping"></div>
					<div className="absolute bg-green-500 h-3 w-3 rounded-full top-[1.35rem] right-5"></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
