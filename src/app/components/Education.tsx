import React from "react";
import EducationCard from "./EducationCard";
import * as motion from "framer-motion/client";

export interface educationProps {
	acro: string;
	school: string;
	timeframe: string;
	location: string;
	degree: string;
	courses: Array<{ title: string; tech: Array<string> }>;
	clubs: Array<string>;
	gpa: string;
	awards: Array<string>;
}

const Education = () => {
	const education = [
		{
			acro: "ucf",
			school: "The University of Central Florida",
			timeframe: "August 2021 - December 2024",
			location: "Orlando, FL",
			degree: "Computer Science (B.S.)",
			courses: [
				{
					title: "Concepts of Computer Science (COP 2500C)",
					tech: ["Python"],
				},
				{
					title: "Intro to C (COP 3223C)",
					tech: ["C"],
				},
				{
					title: "Object-Oriented Programming (COP 3330)",
					tech: ["Java"],
				},
				{
					title: "Computer Science 1 (COP 3502)",
					tech: ["C"],
				},
				{
					title: "Computer Science 2 (COP 3503)",
					tech: ["Java"],
				},
				{
					title: "Processes of Object-Oriented Development (COP 4331C)",
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
					title: "Systems Software (COP 3402)",
					tech: ["C"],
				},
				{
					title: "Programming Languages (COP 4020)",
					tech: ["Haskell", "TypeScript", "JavaScript", "C++", "C#"],
				},
				{
					title: "Database System (COP 4710)",
					tech: ["React", "Express", "Node.js", "JavaScript", "CSS", "MySQL"],
				},
				{
					title: "Web-Based Information Technology (CIS 4004)",
					tech: ["HTML", "CSS", "Bootstrap", "PHP", "JQuery", "React"],
				},
			],
			clubs: [],
			gpa: "GPA: 3.89",
			awards: ["Dean's List", "President's List"],
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

			<motion.div className="flex flex-col gap-5 w-full">
				{education.map((school, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: index * 0.2,
						}}
						viewport={{ once: true }}
					>
						<EducationCard school={school} key={school.acro} />
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Education;
