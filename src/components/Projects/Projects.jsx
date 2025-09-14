import { useState } from "react";
import "./projects.css";
import UIDesigns from "./components/UIDesigns";
import FRDev from "./components/FRDev";

function Projects() {
	const [projectState, setProjectState] = useState("ui/ux");

	return (
		<div className="projects text-center" id="projects">
			
			<h1 className="header">Projects</h1>
			<div className="pill">
				<div
					className={
						projectState === "ui/ux"
							? "ui-toggle active"
							: "ui-toggle"
					}
					onClick={() => setProjectState("ui/ux")}
				>
					UI/UX Design
				</div>
				<div
					className={
						projectState === "web"
							? "dev-toggle active"
							: "dev-toggle"
					}
					onClick={() => setProjectState("web")}
				>
					Frontend Web Development
				</div>
			</div>
			<img className="glow1" src="/Effects/Star_1.png" alt="Glow" />
			<img className="glow2" src="/Effects/Star_2.png" alt="Glow" />
			<div className="wrapper">
				{projectState === "ui/ux" ? (
					<UIDesigns projectState={projectState} />
				) : (
					<FRDev projectState={projectState} />
				)}
			</div>
		</div>
	);
}

export default Projects;
