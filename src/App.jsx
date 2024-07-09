import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/nav";
import { Footer } from "./components/Foot";
//import { Work, Contact,ProjectDetails, About } from './components/pages';
import { Load } from "./load.jsx";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./pages/about.jsx"));
const Work = lazy(() => import("./pages/work.jsx"));
const SobreMi = lazy(() => import("./pages/sobremi.jsx"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      {/*<Navbar></Navbar>*/}
      <Suspense delayMs={5000} fallback={<Load />}>
        <Routes>
          <Route index element={<About />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Work />} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}
export default App;
