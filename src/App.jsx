import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/pages/Homepage/Hero.jsx";
import Projects from "./components/pages/Homepage/Projects.jsx";
import Experience from "./components/pages/Homepage/Experience.jsx";
import Skills from "./components/pages/Homepage/Skills.jsx";
import MyStory from "./components/pages/Homepage/MyStory.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Home page with all sections
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <MyStory />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<MyStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
