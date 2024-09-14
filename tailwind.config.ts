import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/components/[object Object].js",
	],
	darkMode: "class", // Enable dark mode based on a class
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
			boxShadow: {
				edu: "0 0 20px 0 rgba(245, 245, 245, 0.2)",
			},
		},
		plugins: [require("daisyui")],
	},
};
export default config;
