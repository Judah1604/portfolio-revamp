import { motion, scale } from "motion/react";
import Services from "../Services/Services";
import "./about.css";

function About() {
	const skills = [
		"html",
		"css",
		"js",
		"bootstrap",
		"sass",
		"react",
		"redux",
		"git",
		"nextjs",
		"figma",
	];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { translateY: 40, opacity: 0 },
		show: {
			translateY: 0,
			opacity: 1,
			transition: { type: "spring", bounce: 0.4 },
		},
		hover: {
			scale: 1.2,
		},
	};

	return (
		<>
			<div className="about text-center">
				<div className="intro container">
					<img
						src="/Effects/Star.png"
						alt="Star"
						className="section-highlight"
					/>
					<h1>
						Hi, I'm Judah — I turn ideas into smooth, responsive,
						and beautiful web interfaces. With a strong eye for
						design and a frontend toolkit to match, I bridge
						creativity and code to deliver experiences that{" "}
						<span>
							<a target="_blank" href="https://wa.me/08166085206">
								click
							</a>
							<img
								className="highlight"
								src="/Effects/text_highlight.png"
								alt="Highlight"
							/>
						</span>
						.
					</h1>
				</div>
				<img className="glow1" src="/Effects/Star_1.png" alt="Glow" />
				<img className="glow2" src="/Effects/Star_2.png" alt="Glow" />
			</div>
			<Services />
			<div className="info-wrapper">
				<div className="info container text-center">
					<img
						src="/Effects/Star.png"
						alt="Star"
						className="section-highlight"
					/>
					<h1 className="header">About Me!</h1>
					<div className="row mt-4">
						<motion.div
							className="text col-md-7"
							initial={{ translateX: 250 }}
							whileInView={{ translateX: 0 }}
							transition={{ type: "spring", bounce: 0.4 }}
							viewport={{ once: true }}
						>
							Hey, I’m Judah Oyedele — a{" "}
							<b>frontend developer and UI/UX designer</b> with
							over <b>5 years of experience</b> crafting web
							experiences that not only <b>look good,</b> but{" "}
							<b>convert</b>. I prioritize conversion in my
							designs because beauty and results are both crucial
							to a good design. Whether it’s tweaking user flows,
							optimizing layouts, or building smooth interactions,
							I focus on making every click count.
							<p>
								Combining clean code with smart design, I create
								interfaces that guide users effortlessly and
								drive real impact. Let’s build something that
								not only turns heads but turns visitors into
								loyal users.
							</p>
							<a
								className="btn btn-blue icon-left"
								href="/Judah Oyedele's Resume.pdf"
								download
							>
								<img src="/Icons/download.svg" />
								Download Resume
							</a>
						</motion.div>
						<img
							src="/Images/Profile.png"
							alt="Image"
							className="col-md-4"
						/>
						<img
							src="/Effects/doodle.png"
							alt="doodle"
							className="doodle"
						/>
					</div>
				</div>
				<img className="glow1" src="/Effects/Star_1.png" alt="Glow" />
				<img className="glow2" src="/Effects/Star_2.png" alt="Glow" />
			</div>
			<div className="what-i-use container text-center">
				<img
					src="/Effects/Star.png"
					alt="Star"
					className="section-highlight"
				/>
				<h1>What I Use</h1>
				<motion.div
					className="row"
					initial="hidden"
					whileInView="show"
					variants={container}
					viewport={{ once: "true" }}
				>
					{skills.map((skill, index) => {
						return (
							<motion.img
								key={index}
								className="col-md-2"
								src={`/Icons/Skills/${skill}.svg`}
								alt={skill}
								variants={item}
								whileHover={item.hover}
							/>
						);
					})}
				</motion.div>
			</div>
		</>
	);
}

export default About;
