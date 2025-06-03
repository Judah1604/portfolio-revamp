import React from "react";
import UIDesign from "./UIDesign";

function UIDesigns({ projectState }) {
	const designs = [
		{
			name: "BroadFi",
			tags: ["Music", "Web3"],
			viewLink:
				"https://www.figma.com/design/4J3170CfTTSTaJQAGbOC9h/BroadFi?node-id=0-1&t=JUeqhmSv4GT0gyEH-1",
		},
		{
			name: "Portfolio",
			tags: ["Portfolio"],
			viewLink:
				"https://www.figma.com/design/slhEH9f0ivk3xPdpToXQl4/Portfolio-Revamp?node-id=0-1&t=TzILRlf8Zitoq0l2-1",
		},
		{
			name: "ChatApp",
			tags: ["Messaging", "Social"],
			viewLink:
				"https://www.figma.com/design/UJAgHuzWNu3m0WpvIYnyPV/ChatApp?node-id=0-1&t=KgdINlZdyCqHe55x-1",
		},
		{
			name: "ExamEdge",
			tags: ["Learning", "Storage"],
			viewLink:
				"https://www.figma.com/design/fQydHSuzZJ6oMKgJrn7M5q/ExamEdge?node-id=0-1&t=JiId7g6VkSD3yKRo-1",
		},
		{
			name: "BoxChampy",
			tags: ["Gym"],
			viewLink:
				"https://www.figma.com/design/sd4OjAhGTdtC8feIybs3Ht/BoxChampy?node-id=0-1&t=XFd9nKizacHDamfq-1",
		},
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
