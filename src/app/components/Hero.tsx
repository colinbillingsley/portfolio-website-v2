import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
	return (
		<section
			id="hero"
			className="max-h-screen h-screen flex flex-col justify-center items-start hover:cursor-default"
		>
			<h1 className="md:text-9xl sm:text-8xl text-6xl font-semibold">
				Colin Billingsley
			</h1>
			<div className="mt-2 flex flex-col gap-2">
				<span className="font-light text-xl">Front-end Developer</span>
				<p className="font-light text-sm max-w-prose">
					Specializing in crafting visually appealing interfaces and seamless
					user experiences using modern web technologies.
				</p>
				<div className="flex items-center gap-3 font-light text-sm border border-black dark:border-white hover:cursor-default rounded-full px-4 py-2 w-fit">
					<FontAwesomeIcon icon={faLocationDot} />
					<p>Orlando, FL</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
