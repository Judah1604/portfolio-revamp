import React, { useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable"; // <-- import swipe hook
import "./LightboxCarousel.css";

const LightboxCarousel = ({
	folderName,
	imgNumber,
	isOpen,
	setIsOpen,
	currentIndex,
	setCurrentIndex,
}) => {
	const images = useMemo(
		() =>
			Array.from(
				{ length: imgNumber },
				(_, index) => `${folderName} - ${index + 1}`
			),
		[folderName, imgNumber]
	);

	const closeCarousel = () => setIsOpen(false);

	const nextImage = () =>
		setCurrentIndex((prev) => (prev + 1) % images.length);

	const prevImage = () =>
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

	// Keyboard support
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e) => {
			if (e.key === "ArrowRight") nextImage();
			else if (e.key === "ArrowLeft") prevImage();
			else if (e.key === "Escape") closeCarousel();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	// Swipe handlers
	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => nextImage(),
		onSwipedRight: () => prevImage(),
		preventScrollOnSwipe: true,
		trackMouse: true,
	});

	return (
		isOpen &&
		folderName && (
			<div className="lightbox-overlay" onClick={closeCarousel}>
				<div
					className="lightbox-content"
					onClick={(e) => e.stopPropagation()}
					{...swipeHandlers}
				>
					<button
						className="lightbox-close"
						onClick={closeCarousel}
						aria-label="Close"
					>
						<img src="/Icons/close.svg" alt="Close" />
					</button>

					<img
						src={`/Images/Designs/${folderName}/${images[currentIndex]}.png`}
						alt={`Design image ${currentIndex + 1}`}
						className="lightbox-image"
						loading="eager"
					/>

					<button
						className="lightbox-nav left"
						onClick={prevImage}
						aria-label="Previous image"
					>
						&#10094;
					</button>

					<button
						className="lightbox-nav right"
						onClick={nextImage}
						aria-label="Next image"
					>
						&#10095;
					</button>

					<div className="lightbox-thumbnails">
						{images.map((img, index) => (
							<img
								key={index}
								src={`/Images/Designs/${folderName}/${img}.png`}
								alt={`Thumbnail ${index + 1}`}
								className={`thumb ${
									index === currentIndex ? "active" : ""
								}`}
								onClick={() => setCurrentIndex(index)}
								loading="lazy"
								role="button"
							/>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default LightboxCarousel;
