import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

export default function MainContent() {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
