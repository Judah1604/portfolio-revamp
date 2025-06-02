import React from 'react'

function FRDev({ projectState }) {
	return (
		<div className={projectState === "web" ? "fadeIn" : "fadeOut"}>
			FRDev
		</div>
	);
}

export default FRDev