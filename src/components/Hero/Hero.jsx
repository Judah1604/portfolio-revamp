import { motion } from "motion/react";
import Nav from "../Nav/Nav";
import "./hero.css";

function Hero() {
	return (
		<>
			<Nav />
			<div className="stars"></div>

			<div className="hero">
				<div className="text container text-center">
					<motion.h1
						initial={{ translateY: 150 }}
						whileInView={{ translateY: 0 }}
						transition={{ type: "spring", delay: 0.2, bounce: 0.3 }}
						viewport={{ once: true }}
					>
						Design. <span className="blue">Code.</span>{" "}
						<span className="yellow">Elevate.</span>
					</motion.h1>
					<motion.p
						initial={{ translateY: 120 }}
						whileInView={{ translateY: 0 }}
						transition={{ type: "spring", delay: 0.3 }}
						viewport={{ once: true }}
					>
						Frontend dev + UI/UX designer building sleek, responsive
						web experiences.
					</motion.p>
					<motion.a
						className="btn btn-blue"
						initial={{ translateY: 140 }}
						whileInView={{ translateY: 0 }}
						transition={{ type: "spring", delay: 0.4 }}
						viewport={{ once: true }}
						href="/Judah Oyedele's Resume.pdf"
						download
					>
						<img src="/Icons/download.svg" />
						Download Resume
					</motion.a>
				</div>
			</div>
			<img
				src={
					window.innerWidth <= 430
						? "/Effects/Moon_mobile.png"
						: "/Effects/Moon.png"
				}
				className="moon"
			/>
		</>
	);
}

export default Hero;
