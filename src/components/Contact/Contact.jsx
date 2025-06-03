import "./contact.css";

function Contact() {
	return (
		<div className="contact container">
			<form action="#">
				<h1>Let's work together!</h1>
				<div className="fields">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="name">FULL NAME*</label>
							<input
								type="text"
								id="name"
								className="form-control"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">EMAIL*</label>
							<input
								type="email"
								id="email"
								className="form-control"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="phone">PHONE NUMBER(OPTIONAL)</label>
						<input
							type="number"
							id="phone"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">MESSAGE(OPTIONAL)</label>
						<textarea
							type="text"
							id="message"
							className="form-control"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Contact;
