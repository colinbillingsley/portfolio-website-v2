"use client";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import {
	faGraduationCap,
	faCalendarDays,
	faLocationDot,
	faChevronUp,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { educationProps } from "./Education";

interface EducationCardProps {
	school: educationProps;
}

const EducationCard: React.FC<EducationCardProps> = ({ school }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleCardClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`gap-4 border-2 ${
				isOpen
					? "border-zinc-500 dark:border-white/50"
					: "border-zinc-500/10 dark:border-white/15"
			} bg-zinc-100 dark:bg-neutral-900 rounded-sm shadow-md dark:shadow-none p-4 w-full`}
		>
			<button
				onClick={handleCardClick}
				className="group flex items-start gap-5 w-full hover:cursor-pointer"
			>
				<div>
					<FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
				</div>

				<div className="flex flex-col items-start text-left">
					<h3 className="text-base md:text-xl font-semibold">
						{school.school}
					</h3>
					<p className="text-gray-500 dark:text-white/50 mb-2 text-sm md:text-base">
						{school.degree}
					</p>
					<div className="flex flex-wrap items-center font-light text-xs sm:text-sm text-gray-500 dark:text-white/50 text-nowrap">
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

				<div className="ml-auto self-center">
					{isOpen ? (
						<FontAwesomeIcon icon={faChevronUp} />
					) : (
						<FontAwesomeIcon icon={faChevronDown} />
					)}
				</div>
			</button>

			<div
				className={`${
					isOpen ? "max-h-[1100px] opacity-100" : "max-h-0 opacity-0 p-0 m-0"
				} overflow-hidden text-left font-light mt-5 text-sm text-black dark:text-white transition-[opacity,height,max-height] duration-[300ms] ease-in-out hover:cursor-default`}
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
			</div>
		</div>
	);
};

export default EducationCard;
