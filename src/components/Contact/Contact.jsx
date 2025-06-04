import { motion } from "motion/react";
import "./contact.css";

function Contact() {
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
		<div className="contact container">
			<motion.form
				action="#"
				initial={{ translateY: 70 }}
				whileInView={{ translateY: 0 }}
				transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
			>
				<h1>Let's work together!</h1>
				<div className="fields">
					<div className="form-row">
						<div className="form-group">
							<input
								type="text"
								id="name"
								className="form-control"
								required
							/>
							<label htmlFor="name">FULL NAME*</label>
						</div>
						<div className="form-group">
							<input
								type="email"
								id="email"
								className="form-control"
								required
							/>
							<label htmlFor="email">EMAIL*</label>
						</div>
					</div>
					<div className="form-group">
						<input
							type="number"
							id="phone"
							className="form-control"
						/>
						<label htmlFor="phone">PHONE NUMBER(OPTIONAL)</label>
					</div>
					<div className="form-group">
						<textarea
							type="text"
							id="message"
							className="form-control"
						/>
						<label htmlFor="message">MESSAGE(OPTIONAL)</label>
					</div>
				</div>
			</motion.form>
			<div className="socials text-center">
				<h2>Reach me here too!</h2>
				<motion.div
					className="row"
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
						<a href="mailto:someone@example.com">
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
						<a href="https://x.com/JudahOyedele">
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
						<a href="https://linkedin/in/judah-oyedele">
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
			</div>
		</div>
	);
}

export default Contact;
