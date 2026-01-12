import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experiences/Experience.jsx";
import Skills from "./components/Skills/Skills.jsx";
import MyStory from "./components/MyStory/MyStory.jsx";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <h1>Hello</h1>
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
