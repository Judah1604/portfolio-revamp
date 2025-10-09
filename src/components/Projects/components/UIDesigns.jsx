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
			name: "Zypp Protocol",
			tags: ["Web3", "Product Design"],
			viewLink: "https://www.zypp.fun",
			folder: "zypp",
			imgNumber: 3,
			description:
				"Zypp is the first DropFi Solana protocol that makes sending assets offline a possibility and I had the honor of being the design lead. I handled the remake of all of Zypp's design assets from logo concept to social branding to website design work",
		},
		{
			name: "VOCO",
			tags: ["Onboarding", "Language Learning"],
			viewLink:
				"https://www.figma.com/design/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?node-id=75-4&t=e5nDr0KqKuEU7b4x-1",
			folder: "VOCO",
			imgNumber: 8,
			description:
				"Voco is a voice-first social app I designed to make online conversations feel natural and human. Instead of endless typing and scrolling, Voco lets people connect through quick voice notes, live audio chats, and community threads that sound more like real life. Built with a clean, modern interface, Voco is about bringing back the art of talking: simple, personal, and fun.",
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
			description:
				"An onboarding flow for Chopwise, Chopwise is a smart food platform I designed to connect people with nearby vendors, restaurants, and home cooks. From street bites to full meals, it makes discovering and ordering food effortless, while giving vendors more visibility and smoother transactions.",
			prototype:
				"https://www.figma.com/proto/RuqrAEwzXufkzUDNN3xgc8/30DayDesignChallenge?page-id=0%3A1&node-id=222-2&viewport=-7954%2C-3521%2C1&t=3fYGXHAfkQ8t6Lke-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=222%3A2&show-proto-sidebar=1",
		},
		{
			name: "ChatApp",
			tags: ["Messaging", "Social"],
			viewLink:
				"https://www.figma.com/design/UJAgHuzWNu3m0WpvIYnyPV/ChatApp?node-id=0-1&t=KgdINlZdyCqHe55x-1",
			folder: "chatapp",
			imgNumber: 4,
			description:
				"ChatApp is a sleek messaging platform with full Microsoft integration, link Outlook, Teams, and OneDrive right inside your chats. Designed by me, it’s built to keep work and life flowing in one clean, secure space.",
		},
		{
			name: "ExamEdge",
			tags: ["Learning", "Storage"],
			viewLink:
				"https://www.figma.com/design/fQydHSuzZJ6oMKgJrn7M5q/ExamEdge?node-id=0-1&t=JiId7g6VkSD3yKRo-1",
			folder: "examedge",
			description:
				"ExamEdge is a platform I designed to make studying easier by keeping all your materials in one place. Notes, past questions, and study guides are neatly organized so students can focus more on learning and less on searching. It’s built to help students stay prepared, save time, and study smarter, all in a simple, distraction free space.",
			imgNumber: 3,
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
					description={design.description}
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
