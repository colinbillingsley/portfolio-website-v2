"use client";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import {
	faGraduationCap,
	faCalendarDays,
	faLocationDot,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { educationProps } from "./Education";
import * as motion from "framer-motion/client";

interface EducationCardProps {
	school: educationProps;
}

const EducationCard: React.FC<EducationCardProps> = ({ school }) => {
	return (
		<motion.a
			whileHover={{ scale: 1.04 }}
			transition={{
				duration: 0.2,
				ease: "easeOut",
			}}
			className={`flex gap-4 border-2 border-zinc-500/10 hover:border-zinc-500 dark:border-white/15 dark:hover:border-white/50 shadow-none hover:shadow-2xl dark:hover:shadow-white/15 bg-zinc-50 dark:bg-neutral-900 rounded-sm p-4 min-w-72 w-full h-52 transition-shadow group`}
			href={school.link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>
				<FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
			</div>

			<div className="flex flex-col items-start text-left">
				<div className="flex items-center gap-3">
					<h3 className="text-base md:text-xl font-semibold">
						{school.school}
					</h3>
					<FontAwesomeIcon
						icon={faArrowRight}
						className="group-hover:translate-x-3 transition-transform"
					/>
				</div>
				<div className="flex flex-col justify-center w-full h-full">
					<p className="text-gray-500 dark:text-white/50 text-sm md:text-base">
						{school.degree}
					</p>
					<div className="flex items-center gap-2 text-gray-500 dark:text-white/50 font-light text-sm">
						<span>Awards:</span>
						<ul className="flex items-center gap-2">
							{school.awards.map((award) => (
								<li key={award}>{award}</li>
							))}
						</ul>
					</div>
					<div className="flex flex-wrap items-center font-light text-xs sm:text-sm text-gray-500 dark:text-white/50 text-nowrap mt-auto">
						<div className="flex items-center gap-2 mr-4">
							<FontAwesomeIcon icon={faCalendarDays} />
							<p>{school.timeframe}</p>
						</div>

						<div className="flex items-center gap-2 mr-4">
							<FontAwesomeIcon icon={faLocationDot} />
							<p>{school.location}</p>
						</div>

						<div className="flex items-center gap-2">
							<FontAwesomeIcon icon={faGoogleScholar} />
							<p>{school.gpa}</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div
				className={`
					text-left font-light mt-5 text-sm text-black dark:text-white hover:cursor-default`}
			>
				<div>
					<span>Awards:</span>
					<ul className="flex items-center gap-2">
						{school.awards.map((award) => (
							<li key={award} className="font-medium">
								{award}
							</li>
						))}
					</ul>
				</div>

				{school.courses.length > 0 ? (
					<div className="mt-2">
						<span>Relevant Courses:</span>
						<ul className="flex flex-col items-start gap-4">
							{school.courses.map((course) => (
								<li key={course.title}>
									<span className="font-medium">{course.title}</span>
									<ul className="flex items-center gap-2 flex-wrap">
										{course.tech.map((item) => (
											<li
												key={item}
												className="mt-1 px-3 py-1 bg-gray-100 dark:bg-gray-100/15 border border-black/50 hover:border-black dark:border-white/25 dark:hover:border-white/50 rounded-md"
											>
												{item}
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</div>
				) : (
					""
				)}
			</div> */}
		</motion.a>
	);
};

export default EducationCard;
