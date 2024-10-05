import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "framer-motion/client";
import React from "react";

const Hero = () => {
	const variants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<section
			id="hero"
			className="max-h-screen h-screen flex flex-col justify-center items-start hover:cursor-default"
		>
			<motion.h1
				className="md:text-9xl sm:text-8xl text-6xl font-semibold"
				initial="hidden"
				whileInView="visible"
				variants={variants}
				transition={{ duration: 0.5, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				Colin Billingsley
			</motion.h1>
			<div className="mt-2 flex flex-col gap-2">
				<motion.span
					className="font-light text-xl"
					initial="hidden"
					whileInView="visible"
					variants={variants}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
				>
					Front-end Developer
				</motion.span>
				<motion.p
					className="font-light text-sm max-w-prose"
					initial="hidden"
					whileInView="visible"
					variants={variants}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
					viewport={{ once: true }}
				>
					Specializing in crafting visually appealing interfaces and seamless
					user experiences using modern web technologies.
				</motion.p>
				<motion.div
					className="bg-white dark:bg-neutral-900 flex items-center gap-3 font-light text-sm border border-black dark:border-white hover:cursor-default rounded-full px-4 py-2 w-fit"
					initial="hidden"
					whileInView="visible"
					variants={variants}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
					viewport={{ once: true }}
				>
					<FontAwesomeIcon icon={faLocationDot} />
					<p>Orlando, FL</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
