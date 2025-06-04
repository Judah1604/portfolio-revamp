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
					<motion.a
						className="btn btn-blue icon-left"
						initial={{ translateY: -80 }}
						whileInView={{ translateY: 0 }}
						transition={{ delay: 0.4 }}
						href="/Judah Oyedele's Resume.pdf"
						download
					>
						<img src="/Icons/send.svg" alt="send" />
						Work With Me
					</motion.a>
				</div>
			</nav>
		</>
	);
}

export default Nav;
