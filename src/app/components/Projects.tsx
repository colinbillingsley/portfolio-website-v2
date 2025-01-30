"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as motion from "framer-motion/client";

interface projectsProps {
	title: string;
	description: string;
	tech: Array<string>;
	githubLink: string;
	imgURL: string;
	videoUrl?: string;
	link?: string;
}

// Variants for staggering animation
const projectCardVariants = {
	hidden: { opacity: 0, y: 100 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.1,
			duration: 0.5,
		},
	}),
};

const Projects = () => {
	const projects: projectsProps[] = [
		{
			title: "TODO.io",
			description: `A full stack to-do list application that allows users to create an account, login, create different lists with tasks in them, as well as editing and deleting tasks.`,
			tech: [
				"Next.js",
				"TypeScript",
				"PostgreSQL",
				"Tailwind CSS",
				"Supabase",
				"Prisma",
				"ShadCN",
			],
			githubLink: "https://github.com/colinbillingsley/TODO.io",
			imgURL: "/todo-io.png",
			link: "https://todo-io-olive.vercel.app/",
		},
		{
			title: "Univents",
			description: `An application that hosts a university's events across campus, as well as any groups for students to join. I worked on the entire frontend and some backend`,
			tech: ["React", "Express", "Node.js", "MySQL", "CSS", "Postman", "Figma"],
			githubLink:
				"https://github.com/colinbillingsley/database-systems-project",
			imgURL: "/univents.png",
			videoUrl:
				"https://drive.google.com/file/d/1iCfHR5V6v1a-yRV1ihCVlG_nqjbJ2vSg/view?usp=sharing",
		},
		{
			title: "Contact Manager",
			description: `A project that I worked on by myself. This contact manager that eases handling of contacts, as well as setting up tasks that need to be done. No backend is incorporated within the project.`,
			tech: ["React", "NextJS", "TypeScript", "Tailwind CSS"],
			githubLink: "https://github.com/colinbillingsley/contact-manager",
			imgURL: "/contact-manager.png",
			link: "https://contact-manager-rose.vercel.app/",
		},
		{
			title: "Pokemon Manager",
			description: `A pokemon inspired contact manager. This was a group based project in my Jr. Design class at UCF. I worked all of the frontend of this project.`,
			tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "Postman"],
			githubLink: "https://github.com/colinbillingsley/LAMP-Project-SLP01",
			imgURL: "/pokemon.png",
			videoUrl: "",
		},
		{
			title: "Tears of Thanksgiving",
			description: `A recipe book application that is inspired by Legend of Zelda: Tears of the Kingdom. I worked mainly on the backend for this project, with some assistance in the frontend.`,
			tech: ["React", "Express", "Node.js", "MongoDB", "CSS", "Postman"],
			githubLink: "https://github.com/colinbillingsley/POOSD-MERN-Project",
			imgURL: "/tears.png",
			videoUrl: "",
		},
		{
			title: "DoggyPics",
			description: `Application that utilizes the Dog CEO API to get some practice with APIs. Allows users to get images of all kinds of dogs.`,
			tech: ["React", "JavaScript", "CSS", "Postman", "Dog CEO API"],
			githubLink: "https://github.com/colinbillingsley/dog-app",
			imgURL: "/dogs.png",
			videoUrl: "",
		},
		{
			title: "My Portfolio Website v1",
			description: `My first portfolio website.`,
			tech: ["React", "CSS", "JavaScript"],
			githubLink: "https://github.com/colinbillingsley/my-website",
			imgURL: "/v1.png",
			link: "https://colinbillingsley.github.io/my-website/",
		},
	];
	return (
		<section
			id="projects"
			className="flex flex-col justify-start items-start w-full py-8 md:py-20 hover:cursor-default"
		>
			<motion.h2
				className="text-lg font-semibold w-[100px] text-left mb-6"
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				viewport={{ once: true }}
			>
				Projects
			</motion.h2>

			<div className="grid grid-cols-1 card-sm:grid-cols-2 lg:grid-cols-2 card-xl:grid-cols-3 gap-3 w-full h-full">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						variants={projectCardVariants}
						initial="hidden"
						whileInView="visible"
						custom={index} // Pass the index for staggering
						viewport={{ once: true }}
						className="min-w-[20rem] min-h-[20rem]"
					>
						<ProjectCard key={project.title} project={project} />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Projects;

const ProjectCard: React.FC<{ project: projectsProps }> = ({ project }) => {
	return (
		<motion.div
			className="w-full h-full bg-zinc-100 dark:bg-neutral-900 border-2 border-zinc-500/10 hover:border-zinc-500 dark:border-white/15 dark:hover:border-white/50 p-8 rounded-sm shadow-none hover:shadow-2xl dark:hover:shadow-white/15 transition-shadow duration-200"
			whileHover={{ scale: 1.04 }}
			transition={{
				duration: 0.2,
				ease: "easeOut",
			}}
		>
			<div className="flex flex-col w-full h-full gap-3">
				<div className="flex items-center justify-between gap-3">
					<h2 className="text-lg font-semibold">{project.title}</h2>
					<div className="flex items-center gap-3 text-xl">
						{project?.githubLink && (
							<a
								href={project.githubLink}
								target="_blank"
								className="hover:scale-125 transition-all"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						)}
						{project?.link && (
							<a
								href={project.link}
								target="_blank"
								className="hover:scale-125 transition-all"
							>
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</a>
						)}
						{project?.videoUrl && (
							<a
								href={project.videoUrl}
								target="_blank"
								className="hover:scale-125 transition-all"
							>
								<FontAwesomeIcon icon={faPlayCircle} />
							</a>
						)}
					</div>
				</div>
				<motion.p
					className="max-w-prose text-sm md:text-base"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						ease: "easeOut",
						delay: 0.5,
					}}
					viewport={{ once: true }}
				>
					{project.description}
				</motion.p>
				<ul className="flex items-center gap-2 flex-wrap mt-auto">
					{project.tech.map((item, index) => (
						<motion.li
							key={item}
							className="text-xs sm:text-sm bg-white dark:bg-gray-100/15 px-3 py-1 rounded-md border border-black/50 hover:border-black dark:border-white/25 dark:hover:border-white/50"
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								ease: "easeOut",
								delay: index * 0.1,
							}}
							viewport={{ once: true }}
						>
							{item}
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};
