import "./services.css";

function Services() {
	return (
		<div className="services container text-center" id="services">
			<img
				src="/Effects/Star.png"
				alt="Star"
				className="section-highlight"
			/>
			<h1 className="header">Services</h1>
			<div className="container row">
				<div className="service design col-md-5">
					<img src="/Icons/pen-tool.svg" alt="design" />

					<h1>UI/UX Design</h1>
					<p>
						I design clean, intuitive interfaces that guide users
						effortlessly and drive action. With tools like Figma and
						a sharp eye for detail, I focus on layout, hierarchy,
						and consistency to create designs that don’t just look
						good — they work. Whether it’s a landing page or a full
						web app, I always design with purpose and conversion in
						mind.
					</p>
				</div>
				<div className="service dev col-md-5">
					<img src="/Icons/code.svg" alt="code" />

					<h1>Frontend Web Development</h1>
					<p>
						I turn designs into responsive, interactive web
						experiences using HTML, CSS, JavaScript, and React. I
						care about clean code, performance, and making sure
						everything works smoothly across devices. Whether I’m
						building a full site or reusable components, I focus on
						creating seamless, user-friendly interfaces that bring
						designs to life — and keep users engaged.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Services;
