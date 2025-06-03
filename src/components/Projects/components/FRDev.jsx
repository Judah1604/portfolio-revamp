import React from "react";
import Site from "./Site";

function FRDev({ projectState }) {
	const sites = [
		{
			name: "Attique",
			image: "attique",
			langs: ["React", "SASS", "Bootstrap", "Framer Motion"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "OakwoodGroup",
			image: "oakwoodgroup",
			langs: ["React", "SASS"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "Expense Tracker Web App",
			image: "expense_tracker",
			langs: ["React", "SASS"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "Blogr Landing Page",
			image: "blogr",
			langs: ["React", "SASS"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "Movipix - Movies Site",
			image: "movipix",
			langs: ["React", "SASS", "Bootstrap", "Next JS"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "Calculator",
			image: "calculator",
			langs: ["React", "SASS"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "Github Users Search",
			image: "github_user_search",
			langs: ["React", "SASS"],
			codeLink: "/",
			viewLink: "/",
		},
		{
			name: "Insure Landing Page",
			image: "insure",
			langs: ["React", "SASS"],
			codeLink: "/",
			viewLink: "/",
		},
	];

	return (
		<div
			className={
				projectState === "web" ? "sites fadeIn" : "sites fadeOut"
			}
		>
			{sites.map((site, index) => {
				return (
					<Site
						key={index}
						name={site.name}
						image={site.image}
						langs={site.langs}
						codeLink={site.codeLink}
						viewLink={site.viewLink}
					/>
				);
			})}
		</div>
	);
}

export default FRDev;
