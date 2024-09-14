"use client";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import {
	faGraduationCap,
	faCalendarDays,
	faLocationDot,
	faChevronRight,
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
		<div className="gap-4 border border-gray-200 dark:border-white dark:border-opacity-25 rounded-lg shadow-md dark:shadow-edu p-4 w-full">
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
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						<FontAwesomeIcon icon={faChevronUp} />
					)}
				</div>
			</button>

			{isOpen && (
				<div className="text-left font-light mt-5 text-sm text-gray-500 dark:text-white">
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
													className="mt-1 px-4 py-[0.3rem] bg-gradient-to-l from-sky-200/25 to-sky-200/75 border border-sky-300 rounded-full"
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
			)}
		</div>
	);
};

export default EducationCard;
