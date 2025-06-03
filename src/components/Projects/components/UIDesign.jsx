import React from "react";

function UIDesign({ name, tags, viewLink }) {
	return (
		<div className="design">
			<img
				className="header-img"
				src={`/Images/DisplayImgs/Design/${name.toLowerCase()}.png`}
				alt={name}
			/>
			<div className="title">
				<h2>{name}</h2>
				<div className="tags">{tags.join("  |  ")}</div>
			</div>
			<div className="btns">
				<button className="btn btn-blue">
					<img src="/Icons/grid.svg" alt="grid" />
					View Pages
				</button>
				<a className="btn btn-outline link" href={viewLink}>
					<img src="/Icons/arrow-up-right.svg" alt="link" />
					Visit Design Link
				</a>
			</div>
		</div>
	);
}

export default UIDesign;
