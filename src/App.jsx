import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import MyStory from "./components/MyStory.jsx";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <MyStory />
      </div>
    </>
  );
}

export default App;
