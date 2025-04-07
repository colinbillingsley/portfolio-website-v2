import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center w-full mx-auto px-6 md:px-16 transition-all">
			<Hero />
			<hr className="bg-gray-100 dark:opacity-25 w-2/3 my-8" />
			<About />
			<hr className="bg-gray-100 dark:opacity-25 w-2/3 my-8" />
			<Experience />
			<hr className="bg-gray-100 dark:opacity-25 w-2/3 my-8" />
			<Projects />
			<hr className="bg-gray-100 dark:opacity-25 w-2/3 my-8" />
			<Skills />
			<hr className="bg-gray-100 dark:opacity-25 w-2/3 my-8" />
			<Education />
		</main>
	);
}
