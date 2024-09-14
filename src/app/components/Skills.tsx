import {
	faCode,
	faDatabase,
	faKeyboard,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface languagesProps {
	name: string;
}

interface webDevProps {
	name: string;
}

interface databaseProps {
	name: string;
}

interface miscProps {
	name: string;
}

const Skills = () => {
	const languages: languagesProps[] = [
		{
			name: "Python",
		},
		{
			name: "C",
		},
		{
			name: "Java",
		},
	];

	const webDev: webDevProps[] = [
		{
			name: "HTML",
		},
		{
			name: "CSS",
		},
		{
			name: "Tailwind CSS",
		},
		{
			name: "JavaScript",
		},
		{
			name: "TypeScript",
		},
		{
			name: "React",
		},
		{
			name: "NextJS",
		},
		{
			name: "Express",
		},
		{
			name: "Node.js",
		},
	];

	const databases: databaseProps[] = [
		{
			name: "MySQL",
		},
		{
			name: "PostgreSQL",
		},
		{
			name: "MongoDB",
		},
	];

	const misc: miscProps[] = [
		{
			name: "Git",
		},
		{
			name: "GitHub",
		},
		{
			name: "Postman",
		},
		{
			name: "Figma",
		},
		{
			name: "Debugging",
		},
	];

	return (
		<section
			id="skills"
			className="flex flex-col md:flex-row justify-start items-start w-full py-8 md:py-20"
		>
			<h2 className="text-lg font-semibold w-[100px] md:mr-[70px] md:text-right text-left mb-6">
				Skills
			</h2>

			<div className="font-light grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 hover:cursor-default w-full">
				<div className="p-2">
					<div className="flex items-center gap-3 mb-2">
						<FontAwesomeIcon icon={faKeyboard} />
						<h3 className="font-semibold uppercase">WebDev</h3>
					</div>
					{webDev.map((item) => (
						<p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
						>
							{item.name}
						</p>
					))}
				</div>
				<div className="p-2">
					<div className="flex items-center gap-3 mb-2">
						<FontAwesomeIcon icon={faCode} />
						<h3 className="font-semibold uppercase">Languages</h3>
					</div>
					{languages.map((item) => (
						<p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
						>
							{item.name}
						</p>
					))}
				</div>
				<div className="p-2">
					<div className="flex items-center gap-3 mb-2">
						<FontAwesomeIcon icon={faDatabase} />
						<h3 className="font-semibold uppercase">Databases</h3>
					</div>
					{databases.map((item) => (
						<p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
						>
							{item.name}
						</p>
					))}
				</div>
				<div className="p-2">
					<div className="flex items-center gap-3 mb-2">
						<FontAwesomeIcon icon={faTerminal} />
						<h3 className="font-semibold uppercase">Miscellaneous</h3>
					</div>
					{misc.map((item) => (
						<p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
						>
							{item.name}
						</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
