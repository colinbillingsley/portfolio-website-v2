import React from "react";
import { FaBuilding, FaCalendar } from "react-icons/fa";

interface ExpCardProps {
	title: string;
	company: string;
	dates: string;
	summary: string;
	skills: string[];
}

const ExperienceCard = ({
	title,
	company,
	dates,
	summary,
	skills,
}: ExpCardProps) => {
	return (
		<div className="border-2 border-zinc-500/10 hover:border-zinc-500 dark:border-white/15 dark:hover:border-white/50 shadow-none hover:shadow-2xl dark:hover:shadow-white/15 bg-zinc-50 dark:bg-neutral-900 rounded-sm p-5 hover:scale-[1.01] transition-all">
			<div className="space-y-1">
				<h2 className="text-xl font-medium">{title}</h2>
				<div className="flex gap-2 items-center">
					<FaBuilding size={12} />
					<p>{company}</p>
				</div>
				<div className="flex gap-2 items-center">
					<FaCalendar size={12} className="opacity-50" />
					<p className="opacity-50">{dates}</p>
				</div>
			</div>

			<div className="my-4">
				<p>{summary}</p>
			</div>

			<ul className="flex gap-2 items-center flex-wrap hover:cursor-default">
				{skills.map((skill, index) => (
					<li
						key={`${skill}-${index}`}
						className="px-3 py-1 text-xs sm:text-sm bg-white dark:bg-gray-100/15 rounded-md border border-black/50 hover:border-black dark:border-white/25 dark:hover:border-white/50 hover:-translate-x-1 hover:-translate-y-1 transition-all"
					>
						<p>{skill}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceCard;
