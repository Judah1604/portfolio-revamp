import { motion } from "motion/react";

function Socials() {
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
		<motion.div
			className="row socials"
			initial="hidden"
			whileInView="show"
			variants={container}
			viewport={{ once: "true" }}
		>
			<motion.div
				className="link col-md-1"
				variants={item}
				whileHover={item.hover}
			>
				<a href="mailto:developwithaurora@gmail.com">
					<img src="/Icons/Socials/mail.svg" alt="mail" />
				</a>
			</motion.div>
			<motion.div
				className="link col-md-1"
				variants={item}
				whileHover={item.hover}
			>
				<a href="https://wa.me/2348166085206">
					<img src="/Icons/Socials/whatsapp.svg" alt="mail" />
				</a>
			</motion.div>
			<motion.div
				className="link col-md-1"
				variants={item}
				whileHover={item.hover}
			>
				<a href="https://x.com/CraftedByAurora">
					<img src="/Icons/Socials/twitter.svg" alt="mail" />
				</a>
			</motion.div>
			<motion.div
				className="link col-md-1"
				variants={item}
				whileHover={item.hover}
			>
				<a href="https://www.behance.net/aurora1604">
					<img src="/Icons/Socials/behance.svg" alt="mail" />
				</a>
			</motion.div>
			<motion.div
				className="link col-md-1"
				variants={item}
				whileHover={item.hover}
			>
				<a href="https://linkedin.com/in/judah-oyedele">
					<img src="/Icons/Socials/linkedin.svg" alt="mail" />
				</a>
			</motion.div>
			<motion.div
				className="link col-md-1"
				variants={item}
				whileHover={item.hover}
			>
				<a href="https://codepen.io/Judah1604">
					<img src="/Icons/Socials/codepen.svg" alt="mail" />
				</a>
			</motion.div>
		</motion.div>
	);
}

export default Socials;
