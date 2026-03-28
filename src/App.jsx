import "./assets/index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact
          service={import.meta.env.VITE_EMAIL_SERVICE}
          template={import.meta.env.VITE_EMAIL_TEMPLATE}
          publickey={import.meta.env.VITE_EMAIL_SECRET}
          captcha={import.meta.env.VITE_CAPTCHA_SECRET}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
