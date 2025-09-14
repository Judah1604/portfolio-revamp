import { useState } from "react";
import Socials from "../Contact/Socials";
import "./nav.css";
import { motion } from "motion/react";
import { tr } from "motion/react-client";

function Nav() {
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<a href="/" className="navbar-brand">
						<img src="/wordmark.png" alt="Aurora" />
					</a>
					<div className="navlinks">
						<motion.a
							href="#services"
							initial={{ translateY: -30 }}
							whileInView={{ translateY: 0 }}
							transition={{ delay: 0.2 }}
							viewport={{ once: true }}
						>
							Services
						</motion.a>
						<motion.a
							href="#projects"
							initial={{ translateY: -30 }}
							whileInView={{ translateY: 0 }}
							transition={{ delay: 0.3 }}
							viewport={{ once: true }}
						>
							Projects
						</motion.a>
					</div>
					<a className="btn btn-blue icon-left" href="#contact-form">
						<i class="fa-regular fa-comments"></i>
						Let's Chat
					</a>
					<motion.div
						className={isActive ? "menu-icon active" : "menu-icon"}
						initial={{ translateY: -40 }}
						whileInView={{ translateY: 0 }}
						transition={{ type: "spring", bounce: 0.4 }}
						onClick={() => setIsActive(!isActive)}
					>
						<span></span>
						<span></span>
						<span></span>
					</motion.div>
				</div>
			</nav>
			<div
				className={
					isActive ? "nav-menu active fadeIn" : "nav-menu fadeOut"
				}
			>
				<div className="column">
					<div className="navlinks">
						<motion.a
							href="#services"
							initial={{ translateX: -40 }}
							whileInView={{ translateX: 0 }}
							transition={{ delay: 0.2 }}
							viewport={{ once: true }}
							onClick={() => setIsActive(false)}
						>
							Services
						</motion.a>
						<motion.a
							href="#projects"
							initial={{ translateX: -40 }}
							whileInView={{ translateX: 0 }}
							transition={{ delay: 0.3 }}
							viewport={{ once: true }}
							onClick={() => setIsActive(false)}
						>
							Projects
						</motion.a>
					</div>
					<a className="btn btn-blue icon-left" href="#contact-form">
						<i class="fa-regular fa-comments"></i>
						Let's Chat
					</a>
				</div>
				<Socials />
			</div>
		</>
	);
}

export default Nav;
