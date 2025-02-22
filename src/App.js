import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Footer from "./components/footer";
import "./App.css";
  
function App() {
	return (
		<div className="App">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>  
      <Footer />
		</div>
	);
}

export default App;