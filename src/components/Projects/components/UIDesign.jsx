import { motion } from "motion/react";

function UIDesign({ name, tags, viewLink }) {
	return (
		<motion.div
			className="design"
			initial={{ translateY: 70 }}
			whileInView={{ translateY: 0 }}
			transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
			viewport={{ once: "true" }}
		>
			<img
				className="header-img"
				src={`/Images/DisplayImgs/Design/${name.toLowerCase()}.png`}
				alt={name}
			/>
			<div className="title">
				<h2>{name}</h2>
				<div className="tags">{tags.join("  |  ")}</div>
			</div>
			<div className="btns">
				<a className="btn btn-blue" href={viewLink}>
					<img src="/Icons/arrow-up-right.svg" alt="link" />
					Visit Design Link
				</a>
			</div>
		</motion.div>
	);
}

export default UIDesign;
