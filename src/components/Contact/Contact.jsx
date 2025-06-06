import { motion } from "motion/react";
import "./contact.css";
import Socials from "./Socials";

function Contact() {

	return (
		<div className="contact container">
			<motion.form
				id="contact-form"
				initial={{ translateY: 70 }}
				whileInView={{ translateY: 0 }}
				transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
				name="Contact Form"
				method="POST"
				data-netlify="true"
			>
				<h1>Let's work together!</h1>
				<div className="fields">
					<input
						type="hidden"
						name="form-name"
						value="Contact Form"
					/>
					<div className="form-row">
						<div className="form-group">
							<input
								type="text"
								id="name"
								className="form-control"
								name="Full Name"
								required
							/>
							<label htmlFor="name">FULL NAME*</label>
						</div>
						<div className="form-group">
							<input
								type="email"
								id="email"
								className="form-control"
								name="Email address"
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
							name="Phone Number"
						/>
						<label htmlFor="phone">PHONE NUMBER(OPTIONAL)</label>
					</div>
					<div className="form-group">
						<textarea
							type="text"
							id="message"
							className="form-control"
							name="Message"
						/>
						<label htmlFor="message">MESSAGE(OPTIONAL)</label>
					</div>
				</div>
				<button
					className="btn btn-blue icon-left"
					type="submit"
				>
					<img src="/Icons/send.svg" alt="send" />
					Shoot
				</button>
			</motion.form>
			<div className="socials text-center">
				<h2>Reach me here too!</h2>
				<Socials />
			</div>
		</div>
	);
}

export default Contact;
