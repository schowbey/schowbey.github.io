import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import ProductEngineering from "./pages/projects/productEngineering";
import Novonesis from "./pages/projects/novonesis";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import "./App.css";
  
function App() {
	return (
		<div className="App">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProductEngineering />} />
          <Route path="/novonesis" element={<Novonesis />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>  
      <Footer />
		</div>
	);
}

export default App;