import React from "react";
import * as motion from "framer-motion/client";

const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col md:flex-row justify-start items-start w-full py-8 md:py-20"
		>
			<motion.h2
				className="text-lg font-semibold w-[100px] mr-[70px] md:text-right text-left mb-6"
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				Background
			</motion.h2>

			<motion.div
				className="font-light"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				<div className="flex flex-col justify-center items-center gap-5 w-full">
					<p className="max-w-prose text-sm md:text-base">
						Hey, I&apos;m Colin. I am currently a senior at{" "}
						<span className="font-semibold">University of Central Florida</span>{" "}
						getting my BAS in
						<span className="font-semibold"> Computer Science</span>. I graduate
						at the end of this year,{" "}
						<span className="font-semibold"> December 2024</span>.
					</p>
					<p className="max-w-prose text-sm md:text-base">
						I&apos;m a passionate{" "}
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
			</motion.div>
		</section>
	);
};

export default About;
