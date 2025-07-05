import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/base/common.css";
import "./Styles/base/media-queries.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Contact />

			<div className="underglow"></div>
		</>
	);
}

export default App;
