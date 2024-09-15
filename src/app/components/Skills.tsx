import {
	faCode,
	faDatabase,
	faKeyboard,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "framer-motion/client";
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
			<motion.h2
				className="text-lg font-semibold w-[100px] md:mr-[70px] md:text-right text-left mb-6"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				Skills
			</motion.h2>

			<div className="font-light grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 hover:cursor-default w-full">
				<div className="p-2">
					<motion.div
						className="flex items-center gap-3 mb-2"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<FontAwesomeIcon icon={faKeyboard} />
						<h3 className="font-semibold uppercase">WebDev</h3>
					</motion.div>
					{webDev.map((item, index) => (
						<motion.p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.2,
							}}
							viewport={{ once: true }}
						>
							{item.name}
						</motion.p>
					))}
				</div>
				<div className="p-2">
					<motion.div
						className="flex items-center gap-3 mb-2"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						viewport={{ once: true }}
					>
						<FontAwesomeIcon icon={faCode} />
						<h3 className="font-semibold uppercase">Languages</h3>
					</motion.div>
					{languages.map((item, index) => (
						<motion.p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.2,
							}}
							viewport={{ once: true }}
						>
							{item.name}
						</motion.p>
					))}
				</div>
				<div className="p-2">
					<motion.div
						className="flex items-center gap-3 mb-2"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.4,
						}}
						viewport={{ once: true }}
					>
						<FontAwesomeIcon icon={faDatabase} />
						<h3 className="font-semibold uppercase">Databases</h3>
					</motion.div>
					{databases.map((item, index) => (
						<motion.p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.2,
							}}
							viewport={{ once: true }}
						>
							{item.name}
						</motion.p>
					))}
				</div>
				<div className="p-2">
					<motion.div
						className="flex items-center gap-3 mb-2"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.6,
						}}
						viewport={{ once: true }}
					>
						<FontAwesomeIcon icon={faTerminal} />
						<h3 className="font-semibold uppercase">Miscellaneous</h3>
					</motion.div>
					{misc.map((item, index) => (
						<motion.p
							key={item.name}
							className="text-gray-500 dark:text-white dark:opacity-50"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.2,
							}}
							viewport={{ once: true }}
						>
							{item.name}
						</motion.p>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
