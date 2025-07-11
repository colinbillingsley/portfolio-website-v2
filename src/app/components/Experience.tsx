import React from "react";
import * as motion from "framer-motion/client";
import ExperienceCard from "./ExperienceCard";

interface ExperiencesProps {
	title: string;
	company: string;
	dates: string;
	summary: string;
	skills: string[];
}

const experiences: Array<ExperiencesProps> = [
	{
		title: "Web Developer",
		company: "Burton Electric LLC",
		dates: "June 2025 - Present",
		summary:
			"Redesigned and led the full redevelopment of a commercial website for a local electrical services company, transitioning from an outdated platform to a modern, responsive solution built with Next.js and Tailwind CSS. Managed the entire development lifecycle—from initial design to deployment—while also handling continuous improvements and feature updates post-launch. Transitioned to a new email hosting system, ensuring a smooth data migration with minimal downtime. The project significantly improved performance, accessibility, and user experience, resulting in reduced operational costs and increased client engagement.",
		skills: [
			"Web Development",
			"React",
			"NextJS",
			"TailwindCSS",
			"ShadCN UI",
			"version control (Git)",
			"SEO",
			"DNS configuration",
			"Mail Migration",
			"Responsive design",
		],
	},
	{
		title: "Software Developer",
		company: "U.S. Army Reserves (UCF Senior Design)",
		dates: "January 2024 - December 2024",
		summary:
			"During my senior design project, I collaborated with the United States Army Reserves on a large-scale application that had been under development for several years with a well-established codebase. Working in an Agile environment using Jira and Confluence, my primary responsibilities included bug fixing to improve overall functionality and implementing several small features to enhance the application. Additionally, I took the initiative to redesign and complete a critical feature that another team had implemented incorrectly, ensuring it met the project requirements. This experience required close collaboration with teammates and stakeholders, as well as effective use of Agile tools to plan, track progress, and deliver high-quality solutions within tight deadlines.",
		skills: [
			"Agile Environment",
			"AWS",
			"CSS",
			"Debugging",
			"Git",
			"GitHub",
			"Package Upgrading",
			"JavaScript",
			"Mobile Devlopment",
			"PostgreSQL",
			"Python",
			"React",
			"React Native",
		],
	},
];

const Experience = () => {
	return (
		<section
			id="experience"
			className="flex flex-col md:flex-row justify-start items-start w-full py-8 md:py-20"
		>
			<motion.h2
				className="text-lg font-semibold w-[100px] mr-[70px] md:text-right text-left mb-6"
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				Experience
			</motion.h2>

			<motion.ul
				className="font-light space-y-6"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				{experiences.map((exp, index) => (
					<li key={`${exp.title}-${index}`}>
						<ExperienceCard
							title={exp.title}
							company={exp.company}
							dates={exp.dates}
							summary={exp.summary}
							skills={exp.skills}
						/>
					</li>
				))}
			</motion.ul>
		</section>
	);
};

export default Experience;
