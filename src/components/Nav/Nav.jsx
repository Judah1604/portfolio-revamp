import "./nav.css";
import { motion } from "motion/react";

function Nav() {
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<motion.a
						href="/"
						className="navbar-brand"
						initial={{ translateY: -70 }}
						whileInView={{ translateY: 0 }}
					>
						<img src="/wordmark.png" alt="Aurora" />
					</motion.a>
					<div className="navlinks">
						<motion.a
							href="#services"
							initial={{ translateY: -60 }}
							whileInView={{ translateY: 0 }}
							transition={{ delay: 0.2 }}
						>
							Services
						</motion.a>
						<motion.a
							href="#projects"
							initial={{ translateY: -60 }}
							whileInView={{ translateY: 0 }}
							transition={{ delay: 0.3 }}
						>
							Projects
						</motion.a>
					</div>
					<motion.button
						className="btn btn-blue icon-left"
						initial={{ translateY: -80 }}
						whileInView={{ translateY: 0 }}
						transition={{ delay: 0.4 }}
					>
						<img src="/Icons/send.svg" alt="send" />
						Work With Me
					</motion.button>
				</div>
			</nav>
		</>
	);
}

export default Nav;
