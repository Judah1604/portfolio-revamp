import React from "react";
import UIDesign from "./UIDesign";

function UIDesigns({ projectState }) {
	const designs = [
		{ name: "BroadFi", tags: ["Music", "Web3"], viewLink: "/" },
		{ name: "Portfolio", tags: ["Portfolio"], viewLink: "/" },
		{ name: "ChatApp", tags: ["Messaging", "Social"], viewLink: "/" },
		{ name: "ExamEdge", tags: ["Learning", "Storage"], viewLink: "/" },
		{ name: "BoxChampy", tags: ["Gym"], viewLink: "/" },
	];

	return (
		<div
			className={
				projectState === "ui/ux" ? "designs fadeIn" : "designs fadeOut"
			}
		>
			{designs.map((design, index) => {
				return (
					<UIDesign
						key={index}
						name={design.name}
						tags={design.tags}
						viewLink={design.viewLink}
					/>
				);
			})}
		</div>
	);
}

export default UIDesigns;
