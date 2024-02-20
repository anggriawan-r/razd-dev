import About from "./About";
import Intro from "./Intro";

export default function MainContent() {
  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <Intro />
      <About />
    </main>
  );
}
