import React from "react";

function Site({ name, image, langs, codeLink, viewLink }) {
	return (
		<div className="site">
			<img
				src={`/Images/DisplayImgs/Dev/${image}.png`}
				alt={name}
				className="header-img"
			/>
			<h2>{name}</h2>
			<div className="langs">
				{langs.map((lang, i) => {
					return (
						<div key={i} className="lang">
							{lang}
						</div>
					);
				})}
			</div>
			<div className="btns">
				<a className="btn btn-blue" href={codeLink}>
					<img src="/Icons/code-btn.svg" alt="code" />
					View Code
				</a>
				<a className="btn btn-fill link" href={viewLink}>
					<img src="/Icons/arrow-up-right.svg" alt="link" />
					Visit Live Site
				</a>
			</div>
		</div>
	);
}

export default Site;
