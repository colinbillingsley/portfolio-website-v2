import React from "react";

const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col md:flex-row justify-start items-start w-full py-8 md:py-20"
		>
			<h2 className="text-lg font-semibold w-[100px] mr-[70px] md:text-right text-left mb-6">
				Background
			</h2>

			<div className="font-light">
				<div className="flex flex-col justify-center items-center gap-5 w-full">
					<p className="max-w-prose text-sm md:text-base">
						Hey, I'm Colin. I am currently a senior at{" "}
						<span className="font-semibold">University of Central Florida</span>{" "}
						getting my BAS in
						<span className="font-semibold"> Computer Science</span>. I graduate
						at the end of this year,{" "}
						<span className="font-semibold"> December 2024</span>.
					</p>
					<p className="max-w-prose text-sm md:text-base">
						I'm a passionate{" "}
						<span className="font-semibold"> Front-end Developer</span> with a
						love for creating minimalistic designs and engaging user
						experiences. I thrive on transforming complex problems into clean,
						efficient code.
					</p>
					<p className="max-w-prose text-sm md:text-base">
						<span className="font-semibold">Outside of coding</span>, I enjoy
						going to the gym/staying active, playing video games, and trying new
						places to eat.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
