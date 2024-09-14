"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressCard,
	faGraduationCap,
	faLaptopCode,
	faListUl,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface linkProp {
	icon: JSX.Element;
	title: string;
	link: string;
}

interface profileLinkProp {
	icon: JSX.Element;
	link: string;
}

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(true);

	useEffect(() => {
		if (isLight) {
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.add("dark");
		}
	}, [isLight]);

	const toggleDarkMode = (): void => setIsLight((prev) => !prev);

	const menuItems: linkProp[] = [
		{
			icon: <FontAwesomeIcon icon={faAddressCard} />,
			title: "About",
			link: "#about",
		},
		{
			icon: <FontAwesomeIcon icon={faListUl} />,
			title: "Skills",
			link: "#skills",
		},
		{
			icon: <FontAwesomeIcon icon={faGraduationCap} />,
			title: "Education",
			link: "#education",
		},
		{
			icon: <FontAwesomeIcon icon={faLaptopCode} />,
			title: "Projects",
			link: "#projects",
		},
	];

	const profileItems: profileLinkProp[] = [
		{
			icon: <FontAwesomeIcon icon={faLinkedin} />,
			link: "https://www.linkedin.com/in/colin-billingsley-507a56160",
		},
		{
			icon: <FontAwesomeIcon icon={faGithub} />,
			link: "https://github.com/colinbillingsley",
		},
	];

	return (
		<nav className="fixed z-[50] top-0 left-0 right-0 font-light bg-white dark:bg-black px-6 md:px-16 py-4 border-b border-gray-200 dark:border-white dark:border-opacity-20">
			<div className="w-full mx-auto flex justify-between items-center">
				<a href="#" className="font-bold text-xl">
					{isLight ? (
						<p>Colin.light</p>
					) : (
						<p className="relative">
							Colin.dark
							<div className="motion-safe:absolute motion-safe:bottom-2 motion-safe:right-0 motion-safe:bg-white motion-safe:w-full motion-safe:h-2 motion-safe:blur-md motion-safe:animate-pulse"></div>
						</p>
					)}
				</a>

				{/* Links for larger screens */}
				<div className="hidden md:flex gap-3">
					{menuItems.map((link) => (
						<a
							className="p-2 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-25 rounded-lg transition-colors duration-[350ms]"
							href={link.link}
							key={link.title}
						>
							{link.title}
						</a>
					))}
				</div>

				<div className="flex gap-3">
					<div className="self-center">
						{isLight ? (
							<button onClick={toggleDarkMode} className="p-2">
								<FontAwesomeIcon icon={faSun} />
							</button>
						) : (
							<button onClick={toggleDarkMode} className="p-2">
								<FontAwesomeIcon icon={faMoon} />
							</button>
						)}
					</div>
					<div className="gap-3 hidden md:flex">
						{profileItems.map((link, index) => (
							<a
								key={index}
								href={link.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-25 rounded-full text-l p-3 flex items-center justify-center"
							>
								{link.icon}
							</a>
						))}
					</div>

					{/* Hamburger menu button for smaller screens */}
					<button
						className={`md:hidden bg-transparent hover:bg-gray-100 dark:hover:bg-white/25 p-2 flex flex-col gap-1 items-center justify-center rounded-lg ${
							isMenuOpen
								? "outline outline-offset-4 outline-black dark:outline-white"
								: ""
						}`}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div
							className={`h-[1px] w-6 bg-black dark:bg-white transition duration-[400ms] ${
								isMenuOpen ? " translate-y-[5px] rotate-45" : ""
							}`}
						></div>
						<div
							className={`h-[1px] w-6 bg-black dark:bg-white duration-[400ms] ${
								isMenuOpen ? "opacity-0" : "opacity-100"
							}`}
						></div>
						<div
							className={`h-[1px] h- w-6 bg-black dark:bg-white duration-[400ms] ${
								isMenuOpen ? "-translate-y-[5px] rotate-[315deg]" : ""
							}`}
						></div>
					</button>
				</div>
			</div>

			{/* Dropdown menu for smaller screens */}
			<div
				className={`${
					isMenuOpen ? "opacity-100 h-screen p-4" : "opacity-100 h-0 p-0"
				} bg-gray-50 dark:bg-gray-800 dark:bg-opacity-25 bg-opacity-50 backdrop-blur-md overflow-hidden top-[72px] text-black dark:text-white flex flex-col gap-8 transition-[opacity,height,padding] duration-500 ease-in-out absolute left-0 w-full md:hidden md:z-auto z-[-1]`}
			>
				<div className="flex flex-col gap-1">
					{menuItems.map((link) => (
						<a
							className={`${
								isMenuOpen ? "opacity-100" : "opacity-0"
							} flex font-light items-center gap-5 px-4 py-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-25 dark:hover:bg-white dark:hover:bg-opacity-25`}
							href={link.link}
							key={link.title}
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
						>
							{link.icon}
							{link.title}
						</a>
					))}
				</div>

				<div className="flex gap-3 px-2">
					{profileItems.map((link, index) => (
						<a
							key={index}
							href={link.link}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-transparent hover:bg-gray-400 hover:bg-opacity-25 dark:hover:bg-white dark:hover:bg-opacity-25 rounded-full text-lg p-3 flex items-center justify-center"
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
