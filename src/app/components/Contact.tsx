import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface contactLinkProp {
	icon: JSX.Element;
	link?: string;
	title: string;
}

const Contact = () => {
	const contactItems: contactLinkProp[] = [
		{
			icon: <FontAwesomeIcon icon={faLinkedin} />,
			link: "https://www.linkedin.com/in/colin-billingsley-507a56160",
			title: "LinkedIn",
		},
		{
			icon: <FontAwesomeIcon icon={faGithub} />,
			link: "https://github.com/colinbillingsley",
			title: "GitHub",
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			title: "colinebillingsley@gmail.com",
		},
	];
	return (
		<div className="w-full mt-10 mb-5 md:mb-0 flex flex-col items-center justify-center gap-5">
			<h2 className="text-4xl font-semibold">Contact Me!</h2>

			<div className="flex flex-col sm:flex-row justify-center items-center gap-8">
				<div className="flex flex-col justify-center items-start gap-2">
					{contactItems.map((item, index) => (
						<div key={index} className="flex items-center gap-3">
							<span>{item.icon}</span>
							{item.link ? (
								<a
									href={item.link}
									target="_blank"
									className="underline underline-offset-2 hover:underline-offset-4 opacity-100 hover:opacity-75"
								>
									{item.title}
								</a>
							) : (
								<span>{item.title}</span>
							)}
						</div>
					))}
				</div>

				<button>
					<a
						href="/colin-billingsley_resume.pdf"
						target="_blank"
						className="px-6 py-2 rounded-lg bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-white/25 border border-black dark:border-white/25 shadow-none hover:shadow-md dark:hover:shadow-white/25 ease-in-out duration-[250ms]"
					>
						Resume
					</a>
				</button>
			</div>
		</div>
	);
};

export default Contact;
