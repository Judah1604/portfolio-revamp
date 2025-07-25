import React, { useState } from "react";
import UIDesign from "./UIDesign";
import LightboxCarousel from "../../Utils/LightboxCarousel";
import NoImagesModal from "../../Utils/NoImagesModal";

function UIDesigns({ projectState }) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activeDesign, setActiveDesign] = useState(null);
	const [showNoImagesModal, setShowNoImagesModal] = useState(false);

	const designs = [
		{
			name: "VOCO",
			tags: ["Onboarding", "Language Learning"],
			viewLink:
				"https://www.figma.com/design/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?node-id=75-4&t=e5nDr0KqKuEU7b4x-1",
			folder: "VOCO",
			imgNumber: 8,
			prototype:
				"https://www.figma.com/proto/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?page-id=0%3A1&node-id=358-465&viewport=-7954%2C-3521%2C1&t=3fYGXHAfkQ8t6Lke-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
		},
		{
			name: "Chopwise",
			tags: ["Onboarding", "Food"],
			viewLink:
				"https://www.figma.com/design/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?node-id=75-4&t=e5nDr0KqKuEU7b4x-1",
			folder: "chopwise",
			imgNumber: 6,
			prototype:
				"https://www.figma.com/proto/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?page-id=0%3A1&node-id=222-2&viewport=-7954%2C-3521%2C1&t=3fYGXHAfkQ8t6Lke-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=222%3A2&show-proto-sidebar=1",
		},
		{
			name: "DesignChallenge",
			tags: ["Design"],
			viewLink:
				"https://www.figma.com/design/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?node-id=75-4&t=e5nDr0KqKuEU7b4x-1",
			folder: "designchallenge",
			imgNumber: 26,
		},
		{
			name: "BroadFi",
			tags: ["Music", "Web3"],
			viewLink:
				"https://www.figma.com/design/4J3170CfTTSTaJQAGbOC9h/BroadFi?node-id=0-1&t=JUeqhmSv4GT0gyEH-1",
			folder: "broadfi",
			imgNumber: 7,
		},
		{
			name: "Portfolio",
			tags: ["Portfolio"],
			viewLink:
				"https://www.figma.com/design/slhEH9f0ivk3xPdpToXQl4/Portfolio-Revamp?node-id=0-1&t=TzILRlf8Zitoq0l2-1",
			folder: false,
		},
		{
			name: "ChatApp",
			tags: ["Messaging", "Social"],
			viewLink:
				"https://www.figma.com/design/UJAgHuzWNu3m0WpvIYnyPV/ChatApp?node-id=0-1&t=KgdINlZdyCqHe55x-1",
			folder: "chatapp",
			imgNumber: 6,
		},
		{
			name: "ExamEdge",
			tags: ["Learning", "Storage"],
			viewLink:
				"https://www.figma.com/design/fQydHSuzZJ6oMKgJrn7M5q/ExamEdge?node-id=0-1&t=JiId7g6VkSD3yKRo-1",
			folder: "examedge",
			imgNumber: 3,
		},
		{
			name: "BoxChampy",
			tags: ["Gym"],
			viewLink:
				"https://www.figma.com/design/sd4OjAhGTdtC8feIybs3Ht/BoxChampy?node-id=0-1&t=XFd9nKizacHDamfq-1",
			folder: "boxchampy",
			imgNumber: 1,
		},
	];

	const openCarousel = (design) => {
		if (!design.folder || !design.imgNumber) {
			setShowNoImagesModal(true);
			return;
		}
		setActiveDesign(design);
		setCurrentIndex(0);
		setIsOpen(true);
	};

	return (
		<div
			className={
				projectState === "ui/ux" ? "designs fadeIn" : "designs fadeOut"
			}
		>
			{designs.map((design, index) => (
				<UIDesign
					key={index}
					name={design.name}
					tags={design.tags}
					viewLink={design.viewLink}
					openCarousel={() => openCarousel(design)}
					prototype={design.prototype}
				/>
			))}

			{isOpen && activeDesign?.folder && (
				<LightboxCarousel
					folderName={activeDesign.folder}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					setCurrentIndex={setCurrentIndex}
					currentIndex={currentIndex}
					imgNumber={activeDesign.imgNumber}
				/>
			)}

			{showNoImagesModal && (
				<NoImagesModal onClose={() => setShowNoImagesModal(false)} />
			)}
		</div>
	);
}

export default UIDesigns;
