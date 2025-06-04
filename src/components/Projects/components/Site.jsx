import { motion } from "motion/react";

function Site({ name, image, langs, codeLink, viewLink }) {
	return (
		<motion.div
			className="site"
			initial={{ translateY: 70 }}
			whileInView={{ translateY: 0 }}
			transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
			viewport={{ once: "true" }}
		>
			<img
				src={`/Images/DisplayImgs/Dev/${image}.png`}
				alt={name}
				className="header-img"
			/>
			<h2>{name}</h2>
			<div className="langs">
				{langs.map((lang, i) => {
					return (
						<div key={i} className="lang">
							{lang}
						</div>
					);
				})}
			</div>
			<div className="btns">
				<a className="btn btn-blue" href={codeLink} target="_blank">
					<img src="/Icons/code-btn.svg" alt="code" />
					View Code
				</a>
				<a
					className="btn btn-fill link"
					href={viewLink}
					target="_blank"
				>
					<img src="/Icons/arrow-up-right.svg" alt="link" />
					Visit Live Site
				</a>
			</div>
		</motion.div>
	);
}

export default Site;
