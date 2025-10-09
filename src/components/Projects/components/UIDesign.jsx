import { motion } from "motion/react";

function UIDesign({ name, tags, viewLink, openCarousel, prototype, description }) {
	return (
		<motion.div
			className="design"
			initial={{ translateY: 70 }}
			whileInView={{ translateY: 0 }}
			transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
			viewport={{ once: "true" }}
		>
			<div className="header-img">
				{prototype && (
					<div className="overlay">
						<a href={prototype} target="_blank">
							View Prototype
						</a>
					</div>
				)}
				<img
					src={`/Images/DisplayImgs/Design/${name.toLowerCase()}.png`}
					alt={name}
				/>
			</div>
			<div className="title">
				<h2>{name}</h2>
				<div className="tags">{tags.join("  |  ")}</div>
			</div>
			<div className="description">
				{description}
			</div>
			<div className="btns">
				<button className="btn btn-fill pages" onClick={openCarousel}>
					<img src="/Icons/grid.svg" alt="Open Pages" />
					View Pages
				</button>
				<a
					className={
						viewLink ? "btn btn-blue" : "btn btn-blue d-none"
					}
					href={viewLink}
					target="_blank"
				>
					Visit Design Link
					{/* <img src="/Icons/arrow-up-right.svg" alt="link" /> */}
				</a>
			</div>
		</motion.div>
	);
}

export default UIDesign;
