import React from "react";
import UIDesign from "./UIDesign";

function UIDesigns({ projectState }) {
	return (
		<div
			className={
				projectState === "ui/ux" ? "designs fadeIn" : "designs fadeOut"
			}
		>
			<UIDesign
				name={"BroadFi"}
				tags={["Music", "Web3"]}
				viewLink={"/"}
			/>
			<UIDesign
				name={"ChatApp"}
				tags={["Messaging", "Social"]}
				viewLink={"/"}
			/>
			<UIDesign
				name={"ExamEdge"}
				tags={["Learning", "Storage"]}
				viewLink={"/"}
			/>
			<UIDesign
				name={"BoxChampy"}
				tags={["Gym"]}
				viewLink={"/"}
			/>
		</div>
	);
}

export default UIDesigns;
