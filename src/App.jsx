import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/nav";
//import { Work, Contact,ProjectDetails, About } from './components/pages';
import { Load } from "./load.jsx";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./components/pages/about.jsx"));
const Work = lazy(() => import("./components/pages/work.jsx"));
const SobreMi = lazy(() => import("./components/pages/sobremi.jsx"));
const ProjectDetails = lazy(() =>
  import("./components/pages/projectdetails.jsx")
);
const Contact = lazy(() => import("./components/pages/contact.jsx"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Suspense delayMs={5000} fallback={<Load />}>
        <Routes>
          <Route index element={<About />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Work />} />
          <Route path="/work/:project" element={<ProjectDetails />} />
          <Route path="/Contacto" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
