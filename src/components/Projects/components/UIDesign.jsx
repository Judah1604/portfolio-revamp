import React from "react";

function UIDesign({ name, tags, viewLink}) {
	return (
		<div className="design">
			<img
				className="header-img"
				src={`/Images/DisplayImgs/${name.toLowerCase()}.png`}
				alt={name}
			/>
			<div className="title">
				<h2>{name}</h2>
				<div className="tags">{tags.join("  |  ")}</div>
			</div>
			<div className="btns">
				<button className="btn btn-blue">View Pages</button>
				<a className="btn btn-outline" href={viewLink}>
					Visit Design Link
				</a>
			</div>
		</div>
	);
}

export default UIDesign;
