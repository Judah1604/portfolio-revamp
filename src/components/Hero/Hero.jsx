import { motion } from "motion/react";
import Nav from "../Nav/Nav";
import "./hero.css";

function Hero() {
	return (
		<div className="hero-wrapper">
			<div className="stars"></div>
			<Nav />

			<div className="hero">
				<div className="text container text-center">
					<h1>
						World-class interfaces for <br /> startups ready to
						scale.
					</h1>
					<div className="btns">
						<a
							className="btn btn-blue icon-left"
							href="#contact-form"
						>
							Start Now
							{/* <i class="fa-solid fa-plane-departure"></i> */}
						</a>
						<a
							className="btn btn-fill icon-left"
							href="#projects"
						>
							View Work
							{/* <i class="fa-solid fa-arrow-down"></i> */}
						</a>
					</div>
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
			<a className="scroll" href="#about">
				<img src="/Icons/scrolldown.svg" alt="Scroll Down" />
			</a>
		</div>
	);
}

export default Hero;
