import "./nav.css";

function Nav() {
	return (
		<>
			
			<nav className="navbar">
				<div className="container">
					<a href="/" className="navbar-brand">
						<img src="/wordmark.png" alt="Aurora" />
					</a>
					<div className="navlinks">
						<a href="#services">Services</a>
						<a href="#projects">Projects</a>
					</div>
					<button className="btn btn-blue icon-left">
						<img src="/Icons/send.svg" alt="send" />
						Work With Me
					</button>
				</div>
			</nav>
		</>
	);
}

export default Nav;
