"use client";
import * as motion from "framer-motion/client";
import React, { ReactNode } from "react";
import {
	DiJsBadge,
	DiReact,
	DiCss3,
	DiHtml5,
	DiPython,
	DiNodejsSmall,
	DiJava,
	DiMysql,
} from "react-icons/di";
import { SiTypescript, SiExpress, SiPostman, SiFigma } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaGithub, FaLaptopCode } from "react-icons/fa";
import { useModeContext } from "../context/ModeContext";

const ICONSIZE = 48;

interface techProps {
	name: string;
	type: string;
	icon: ReactNode;
	color: string;
}

const Skills = () => {
	const { isDark } = useModeContext();

	const skills: techProps[] = [
		{
			name: "TypeScript",
			type: "Language",
			color: "#3178C6",
			icon: <SiTypescript color="#3178C6" size={ICONSIZE} />,
		},
		{
			name: "JavaScript",
			type: "Language",
			color: "#F0DB4F",
			icon: <DiJsBadge color="#F0DB4F" size={ICONSIZE} />,
		},
		{
			name: "React",
			type: "Javascript Library",
			color: "#61DBFB",
			icon: <DiReact color="#61DBFB" size={ICONSIZE} />,
		},
		{
			name: "NextJS",
			type: "JavaScript Framework",
			color: "#000000",
			icon: <RiNextjsFill color={`#000000 dark:#FFFFFF`} size={ICONSIZE} />,
		},
		{
			name: "Tailwind CSS",
			type: "CSS Framework",
			color: "#38BDF8",
			icon: <RiTailwindCssFill color="#38BDF8" size={ICONSIZE} />,
		},
		{
			name: "HTML",
			type: "Markup Language",
			color: "#E34C26",
			icon: <DiHtml5 color="#E34C26" size={ICONSIZE} />,
		},
		{
			name: "CSS",
			type: "Style Sheet Language",
			color: "#264de4",
			icon: <DiCss3 color="#264de4" size={ICONSIZE} />,
		},
		{
			name: "Express",
			type: "JavaScript Framework",
			color: "#000000",
			icon: <SiExpress color={`#000000 dark:#FFFFFF`} size={ICONSIZE} />,
		},
		{
			name: "Node.js",
			type: "JavaScript Library",
			color: "#68A063",
			icon: <DiNodejsSmall color="#68A063" size={ICONSIZE} />,
		},
		{
			name: "Python",
			type: "Language",
			color: "#FFD43B",
			icon: <DiPython color="#FFD43B" size={ICONSIZE} />,
		},
		{
			name: "C",
			type: "Language",
			color: "#000000",
			icon: <FaLaptopCode color={`#000000 dark:#FFFFFF`} size={ICONSIZE} />,
		},
		{
			name: "Java",
			type: "Language",
			color: "#FFA518",
			icon: <DiJava color="#FFA518" size={ICONSIZE} />,
		},
		{
			name: "MySQL",
			type: "Database",
			color: "#00758F",
			icon: <DiMysql color="#00758F" size={ICONSIZE} />,
		},
		{
			name: "PostgreSQL",
			type: "Database",
			color: "#0064A5",
			icon: <BiLogoPostgresql color="#0064A5" size={ICONSIZE} />,
		},
		{
			name: "MongoDB",
			type: "Database",
			color: "#4DB33D",
			icon: <BiLogoMongodb color="#4DB33D" size={ICONSIZE} />,
		},
		{
			name: "Git",
			type: "Version Control",
			color: "#F1502F",
			icon: <FaGitAlt color="#F1502F" size={ICONSIZE} />,
		},
		{
			name: "GitHub",
			type: "Miscellaneous",
			color: "#000000",
			icon: <FaGithub color={`#000000 dark:#FFFFFF`} size={ICONSIZE} />,
		},
		{
			name: "Postman",
			type: "Miscellaneous",
			color: "#EF5B25",
			icon: <SiPostman color="#EF5B25" size={ICONSIZE} />,
		},
		{
			name: "Figma",
			type: "Miscellaneous",
			color: "#A259FF",
			icon: <SiFigma color="#A259FF" size={ICONSIZE} />,
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

			<motion.div
				className="w-full flex items-center justify-center md:justify-start flex-wrap gap-2 hover:cursor-default"
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.1 }}
				viewport={{ once: true }}
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
			>
				{skills.map((tech, index) => (
					<SkillCard
						name={tech.name}
						icon={tech.icon}
						type={tech.type}
						color={tech.color}
						isDark={isDark}
						key={index}
					/>
				))}
			</motion.div>
		</section>
	);
};

export default Skills;

const SkillCard = ({
	name,
	icon,
	type,
	color,
	isDark,
}: {
	name: string;
	icon: ReactNode;
	type: string;
	color: string;
	isDark: boolean;
}) => {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: -50 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="relative z-10 flex items-center gap-2 rounded-sm bg-zinc-100 dark:bg-neutral-900 p-4 min-w-60 min-h-32 overflow-hidden border-2 border-zinc-500/10 dark:border-white/15"
		>
			<div>{icon}</div>
			<div className="flex flex-col">
				<h2 className="font-medium text-lg">{name}</h2>
				<span className="text-sm font-light">{type}</span>
			</div>
			<div
				className="absolute top-0 left-0 w-14 h-14 rounded-full blur-3xl"
				style={{
					backgroundColor: isDark && color === "#000000" ? "#FFFFFF" : color,
				}}
			></div>
		</motion.div>
	);
};
