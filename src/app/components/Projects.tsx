import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface projectsProps {
	title: string;
	description: string;
	tech: Array<string>;
	githubLink: string;
	imgURL: string;
	videoUrl?: string;
	link?: string;
}

const Projects = () => {
	const projects: projectsProps[] = [
		{
			title: "Univents",
			description: `Univents was part of a project in my Database course. It is a web application that enables universities to host their events and RSO groups located on campus. There are 3 levels of users: A super admin that creates the initial account for the university and accept or deny RSO groups and events, an admin that can create RSOs and events, and a basic user than can join RSOs and view events on campus. I worked the frontend where I used React, JavaScript, and CSS. I also assisted in the backend where I used node.js and express.`,
			tech: ["React", "Express", "Node.js", "MySQL", "CSS", "Postman", "Figma"],
			githubLink:
				"https://github.com/colinbillingsley/database-systems-project",
			imgURL: "/univents.png",
			videoUrl:
				"https://drive.google.com/file/d/1iCfHR5V6v1a-yRV1ihCVlG_nqjbJ2vSg/view?usp=sharing",
		},
		{
			title: "Pokemon Manager",
			description: `Pokemon Manager was the first project for my Jr. Design Course. It is a contact manager inspired by, you guessed it, Pokemon. It is a full LAMP stack application that allows users to create a profile, login, update their profile information or contacts information, add contacts, search contacts, and delete contacts. I worked on the fronted of the project where i utilized HTML, CSS, and JavaScript.`,
			tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "Postman"],
			githubLink: "https://github.com/colinbillingsley/LAMP-Project-SLP01",
			imgURL: "/pokemon.png",
			videoUrl: "",
		},
		{
			title: "Tears of Thanksgiving",
			description: `Tears of Thanksgiving was the second project in my Jr. Design course. It is a recipe creator that is inspired by the game Tears of the Kingdom. It is a full MERN stack application that allows users to create an account and login, as well as create, favorite, and delete recipes. For this project I mainly worked on the backend where I implemented the server, APIs, dealt with the database, and email verification.`,
			tech: ["React", "Express", "Node.js", "MongoDB", "CSS", "Postman"],
			githubLink: "https://github.com/colinbillingsley/POOSD-MERN-Project",
			imgURL: "/tears.png",
			videoUrl: "",
		},
		{
			title: "DoggyPics",
			description: `DoggyPics is a simple project that uses the Dog CEO Dog API to get all kinds of pictures from specific dog breeds. You can see all the breeds that the Dog CEO Dog API has, and you can click on each breed to see pictures of that breed as well as any sub-breeds.`,
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
			<h2 className="text-lg font-semibold w-[100px] text-left mb-6">
				Projects
			</h2>

			<div className="flex flex-col items-start font-light gap-5 w-full h-full">
				{projects.map((project) => (
					<div
						key={project.title}
						className="bg-white dark:bg-transparent border-2 border-gray-100 dark:border-white/15 dark:hover:border-white/50 flex flex-col lg:flex-row lg:even:flex-row-reverse justify-start items-center lg:items-start gap-6 p-8 shadow-lg dark:shadow-edu rounded-md w-full hover:-translate-y-1 transition-all duration-[350ms]"
					>
						<Image
							src={project.imgURL}
							alt={project.title}
							width={400}
							height={300}
							className="shadow-md rounded-md"
						/>

						<div className="flex flex-col gap-3 w-full">
							<div className="flex items-center gap-3">
								<h2 className="text-lg font-semibold">{project.title}</h2>
								<div className="flex items-center gap-3 text-xl">
									{project?.githubLink ? (
										<a
											href={project.githubLink}
											target="_blank"
											className="hover:scale-125 transition-all"
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
									) : (
										""
									)}
									{project?.link ? (
										<a
											href={project.link}
											target="_blank"
											className="hover:scale-125 transition-all"
										>
											<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
										</a>
									) : (
										""
									)}
									{project?.videoUrl ? (
										<a
											href={project.videoUrl}
											target="_blank"
											className="hover:scale-125 transition-all"
										>
											<FontAwesomeIcon icon={faPlayCircle} />
										</a>
									) : (
										""
									)}
								</div>
							</div>
							<p className="max-w-prose text-sm md:text-base">
								{project.description}
							</p>
							<ul className="flex items-center gap-2 flex-wrap">
								{project.tech.map((item) => (
									<li
										key={item}
										className="text-xs sm:text-sm bg-gray-100 dark:bg-gray-100/15 px-4 py-2 rounded-full border border-black dark:border-white/25"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
