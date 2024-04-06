import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import Skills from "./componets/Skills";
import About from "./componets/About";
import Work from "./componets/Work";
import Contact from "./componets/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
