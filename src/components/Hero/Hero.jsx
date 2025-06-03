import Nav from "../Nav/Nav";
import "./hero.css";

function Hero() {
	return (
		<>
			<Nav />
			<div className="stars"></div>

			<div className="hero">
				<div className="text container text-center">
					<h1>
						Design. <span className="blue">Code.</span>{" "}
						<span className="yellow">Elevate.</span>
					</h1>
					<p>
						Frontend dev + UI/UX designer building sleek, responsive
						web experiences.
					</p>
					<button className="btn btn-blue icon-left">
						<img src="/Icons/download.svg" />
						Download Resume
					</button>
				</div>
			</div>
			<img src="/Effects/Moon.png" className="moon" />
		</>
	);
}

export default Hero;
