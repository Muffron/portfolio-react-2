import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Work from "./components/work";
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </section>
        <Analytics />
      </main>
    </div>
  );
}

export default App;
