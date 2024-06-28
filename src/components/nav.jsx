import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
export const Navbar = () => {
  const [menuopen, setmenu] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [scrolled, setScrolled] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full fixed z-20 flex items-center justify-between transition-all ease-in-out duration-1000 lg:h-12 ${
        scrolled
          ? "lg:bg-opacity-40 bg-slate-600 px-2 py-1"
          : "lg:bg-opacity-20 bg-slate-900"
      }`}
    >
      <nav className="w-full flex justify-between">
        <Link to="/" className="title" onClick={handleScrollToTop}>
          Inicio
        </Link>
        <div
          className="menu"
          onClick={() => {
            setmenu(!menuopen);
          }}
        >
          <i className="bx bx-menu">&equiv;</i>
          <span></span>
          <span></span>
        </div>
        <ul className={menuopen ? "open" : ""}>
          <li className="list-none">
            <NavLink to="/Proyectos" onClick={handleScrollToTop}>
              Proyectos
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/SobreMi" onClick={handleScrollToTop}>
              Sobre Mi
            </NavLink>
          </li>
          {/*<li className="list-none">
            <NavLink to="/Contacto" onClick={handleScrollToTop}>
              Contacto
            </NavLink>
          </li>*/}
        </ul>
      </nav>
    </header>
  );
};
