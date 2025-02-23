import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import "./App.css";
  
function App() {
	return (
		<div className="App">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>  
      <Footer />
		</div>
	);
}

export default App;