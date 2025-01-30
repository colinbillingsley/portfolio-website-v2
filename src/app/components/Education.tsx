import React from "react";
import EducationCard from "./EducationCard";
import * as motion from "framer-motion/client";

export interface classProps {
	courseId: string;
	title: string;
	tech: Array<string>;
}

export interface educationProps {
	acro: string;
	school: string;
	timeframe: string;
	location: string;
	degree: string;
	courses: classProps[];
	clubs: Array<string>;
	gpa: string;
	awards: Array<string>;
	link: string;
}

const Education = () => {
	const education: educationProps[] = [
		{
			acro: "ucf",
			school: "The University of Central Florida",
			timeframe: "August 2021 - December 2024",
			location: "Orlando, FL",
			degree: "Computer Science (B.S.)",
			courses: [
				{
					courseId: "COP 4934 & COP 4935",
					title: "Senior Design I & II",
					tech: [
						"React",
						"React Native",
						"CSS",
						"JavaScript",
						"PostgreSQL",
						"pgAdmin",
						"AWS",
						"Python",
						"Agile Methodology",
						"Jira",
						"Confluence",
					],
				},
				{
					courseId: "COP 2500C",
					title: "Concepts of Computer Science",
					tech: ["Python"],
				},
				{
					courseId: "COP 3223C",
					title: "Intro to C",
					tech: ["C"],
				},
				{
					courseId: "COP 3330",
					title: "Object-Oriented Programming",
					tech: ["Java"],
				},
				{
					courseId: "COP 3502",
					title: "Computer Science 1",
					tech: ["C"],
				},
				{
					courseId: "COP 3503",
					title: "Computer Science 2",
					tech: ["Java"],
				},
				{
					courseId: "COP 4331C",
					title: "Processes of Object-Oriented Development",
					tech: [
						"HTML",
						"CSS",
						"JavaScript",
						"React",
						"Express",
						"Node.js",
						"MongoDB",
						"MySQL",
					],
				},
				{
					courseId: "COP 3402",
					title: "Systems Software",
					tech: ["C"],
				},
				{
					courseId: "COP 4020",
					title: "Programming Languages",
					tech: ["Haskell", "TypeScript", "JavaScript", "C++", "C#"],
				},
				{
					courseId: "COP 4710",
					title: "Database Systems",
					tech: ["React", "Express", "Node.js", "JavaScript", "CSS", "MySQL"],
				},
				{
					courseId: "CIS 4004",
					title: "Web-Based Information Technology",
					tech: ["HTML", "CSS", "Bootstrap", "PHP", "JQuery", "React"],
				},
			],
			clubs: [],
			gpa: "GPA: 3.89",
			awards: ["Dean's List", "President's List"],
			link: "https://www.ucf.edu/",
		},
		{
			acro: "lssc",
			school: "Lake-Sumter State College",
			timeframe: "January 2020 - July 2021",
			location: "Leesburg, FL",
			degree: "Computer Science (A.A.)",
			courses: [],
			clubs: [],
			gpa: "GPA: 3.88",
			awards: ["Dean's List", "President's List"],
			link: "https://www.lssc.edu/",
		},
	];

	return (
		<section
			id="education"
			className="flex flex-col justify-center items-start w-full py-8 md:py-20"
		>
			<motion.h2
				className="text-lg font-semibold w-[100px] text-left mb-6"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				viewport={{ once: true }}
			>
				Education
			</motion.h2>

			<motion.div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full">
				{education.map((school, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							ease: "easeOut",
							delay: index * 0.2,
						}}
						viewport={{ once: true }}
						className="w-full"
					>
						<EducationCard school={school} key={school.acro} />
					</motion.div>
				))}
			</motion.div>

			<ClassTechnologiesTable classes={education[0].courses} />
		</section>
	);
};

export default Education;

const ClassTechnologiesTable: React.FC<{ classes: classProps[] }> = ({
	classes,
}) => {
	return (
		<div className="mt-5 mx-auto w-full">
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				viewport={{ once: true }}
				className="overflow-x-auto border-2 border-zinc-500/10 dark:border-white/15 rounded-sm"
			>
				<table className="w-full border-collapse bg-white dark:bg-neutral-900 shadow-sm rounded-sm overflow-hidden hover:cursor-default">
					<thead className="bg-gray-50 dark:bg-neutral-800">
						<motion.tr
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
							}}
							viewport={{ once: true }}
						>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
								<span>ID</span>
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
								<span>Class Name</span>
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
								Technologies/Skills
							</th>
						</motion.tr>
					</thead>
					<tbody className="bg-white dark:bg-neutral-900 divide-y-2 divide-zinc-200/50 dark:divide-neutral-500/25">
						{classes.map((classItem, index) => (
							<motion.tr
								key={classItem.courseId}
								className="hover:bg-gray-50 dark:hover:bg-neutral-800"
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.8,
									ease: "easeOut",
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
									{classItem.courseId}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
									{classItem.title}
								</td>
								<td className="flex items-center gap-2 px-6 py-4 whitespace-nowrap text-gray-500 dark:text-white">
									{classItem.tech.map((tech) => (
										<span
											key={tech}
											className="text-xs sm:text-sm bg-white dark:bg-gray-100/15 px-3 py-1 rounded-md border border-black/50 hover:border-black dark:border-white/25 dark:hover:border-white/50"
										>
											{tech}
										</span>
									))}
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</motion.div>
		</div>
	);
};
