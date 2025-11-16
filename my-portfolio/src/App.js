import './App.css';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Skills />} />
        <Route path="/contact" element={<Skills />} />
      </Routes>
    </div>
    
  );
}

export default App;

