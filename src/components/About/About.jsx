import "./about.css";

function About() {
	return (
		<>
			<div className="about text-center">
				<div className="intro container">
					<img
						src="/Effects/Star.png"
						alt="Star"
						className="section-highlight"
					/>
					<h1>
						Hi, I'm Judah — I turn ideas into smooth, responsive,
						and beautiful web interfaces. With a strong eye for
						design and a frontend toolkit to match, I bridge
						creativity and code to deliver experiences that{" "}
						<a target="_blank" href="https://wa.me/08166085206">click</a>.
					</h1>
					<img
						className="highlight"
						src="/Effects/text_highlight.png"
						alt="Highlight"
					/>
				</div>
				<img className="glow1" src="/Effects/Star_1.png" alt="Glow" />
				<img className="glow2" src="/Effects/Star_2.png" alt="Glow" />
			</div>
		</>
	);
}

export default About;
