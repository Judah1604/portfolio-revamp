import React from "react";
import Site from "./Site";

function FRDev({ projectState }) {
	const sites = [
		{
			name: "Attique",
			image: "attique",
			langs: ["React", "SASS", "Bootstrap", "Framer Motion"],
			codeLink: "https://github.com/Judah1604/attique-real-estate",
			viewLink: "https://attique-real-estate.vercel.app/",
		},
		{
			name: "OakwoodGroup",
			image: "oakwoodgroup",
			langs: ["React", "SASS"],
			codeLink: "https://github.com/Judah1604/oakwood-main",
			viewLink: "https://www.oakwoodgroup.net/",
		},
		{
			name: "Expense Tracker Web App",
			image: "expense_tracker",
			langs: ["React", "SASS"],
			codeLink: "https://github.com/Judah1604/Expense-Tracker-Web-App",
			viewLink: "https://judah1604.github.io/Expense-Tracker-Web-App",
		},
		{
			name: "Blogr Landing Page",
			image: "blogr",
			langs: ["React", "SASS"],
			codeLink: "https://github.com/Judah1604/Blogr-Landing-Page",
			viewLink: "https://judah1604.github.io/Blogr-Landing-Page",
		},
		{
			name: "Movipix - Movies Site",
			image: "movipix",
			langs: ["React", "SASS", "Bootstrap", "Next JS"],
			codeLink: "https://github.com/Judah1604/movipix",
			viewLink: "https://movipix.netlify.app/",
		},
		{
			name: "Calculator",
			image: "calculator",
			langs: ["React", "SASS"],
			codeLink: "https://github.com/Judah1604/Calculator",
			viewLink: "https://judah1604.github.io/Calculator",
		},
		{
			name: "Github Users Search",
			image: "github_user_search",
			langs: ["React", "SASS"],
			codeLink: "https://github.com/Judah1604/Github-user-search",
			viewLink: "https://judah1604.github.io/Github-user-search/",
		},
		{
			name: "Insure Landing Page",
			image: "insure",
			langs: ["React", "SASS"],
			codeLink: "https://github.com/Judah1604/Insure-Landing-Page",
			viewLink: "https://judah1604.github.io/Insure-Landing-Page",
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
