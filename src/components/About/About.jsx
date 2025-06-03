import Services from "../Services/Services";
import "./about.css";

function About() {
	const skills = [
		"html",
		"css",
		"js",
		"bootstrap",
		"sass",
		"react",
		"redux",
		"git",
		"nextjs",
		"figma",
	];

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
						<a target="_blank" href="https://wa.me/08166085206">
							click
						</a>
						.
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
			<Services />
			<div className="info-wrapper">
				<div className="info container text-center">
					<img
						src="/Effects/Star.png"
						alt="Star"
						className="section-highlight"
					/>
					<h1 className="header">About Me!</h1>
					<div className="row mt-4">
						<div className="text col-md-7">
							Hey, I’m Judah Oyedele — a{" "}
							<b>frontend developer and UI/UX designer</b> with
							over <b>5 years of experience</b> crafting web
							experiences that not only <b>look good,</b> but{" "}
							<b>convert</b>. I prioritize conversion in my
							designs because beauty and results are both crucial
							to a good design. Whether it’s tweaking user flows,
							optimizing layouts, or building smooth interactions,
							I focus on making every click count.
							<p>
								Combining clean code with smart design, I create
								interfaces that guide users effortlessly and
								drive real impact. Let’s build something that
								not only turns heads but turns visitors into
								loyal users.
							</p>
							<button className="btn btn-blue icon-left">
								<img src="/Icons/download.svg" />
								Download Resume
							</button>
						</div>
						<img
							src="/Images/Profile.png"
							alt="Image"
							className="col-md-4"
						/>
						<img
							src="/Effects/doodle.png"
							alt="doodle"
							className="doodle"
						/>
					</div>
				</div>
				<img className="glow1" src="/Effects/Star_1.png" alt="Glow" />
				<img className="glow2" src="/Effects/Star_2.png" alt="Glow" />
			</div>
			<div className="what-i-use container text-center">
				<img
					src="/Effects/Star.png"
					alt="Star"
					className="section-highlight"
				/>
				<h1>What I Use</h1>
				<div className="row">
					{skills.map((skill, index) => {
						return (
							<img
								key={index}
                                className="col-md-2"
								src={`/Icons/Skills/${skill}.svg`}
								alt={skill}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default About;
