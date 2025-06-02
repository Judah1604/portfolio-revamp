import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/base/common.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
	return (
		<>
			<Hero />
            <About />
            <Projects />
		</>
	);
}

export default App;
