// NoImagesModal.jsx
import React from "react";
import "./NoImagesModal.css"; // optional for styling

const NoImagesModal = ({ onClose }) => {
	return (
		<div className="no-images-overlay" onClick={onClose}>
			<div
				className="no-images-content"
				onClick={(e) => e.stopPropagation()}
			>
				<p>No images available for this design.</p>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default NoImagesModal;
