import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SvgCasa from "../components/svgcasa";
function About() {
  const [showPopover, setShowPopover] = useState(false);
  const [srcmodal, setSrcmodal] = useState("");
  const popoverRef = useRef(null);
  const handleImageClick = (img) => {
    setShowPopover(true);
    setSrcmodal(img);
  };
  const handleClickOutside = (event) => {
    if (
      popoverRef.current.contains(event.target) &&
      event.target.tagName != "IMG"
    ) {
      setShowPopover(false);
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0 }
    );
    var hidden = document.querySelectorAll(".hidden-effect");
    hidden.forEach((el) => observer.observe(el));
    return () => {
      hidden.forEach((el) => observer.unobserve(el));
    };
  });
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-900">
      <section className="w-full flex flex-wrap h-lvh">
        <div className="w-full flex p-1 flex-col justify-center items-center h-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="242"
            height="325"
            fill="none"
            viewBox="0 0 242 325"
            className="lg:w-1/12 w-1/5 h-auto"
          >
            <path
              className="lines-effect"
              fill="#D9D9D9"
              stroke="#000"
              d="M10 157V10h94.667a99.998 99.998 0 0127.146 3.755L138 15.5l5.6 1.96a85.936 85.936 0 0144.298 35.275l2.925 4.64a99.145 99.145 0 0113.682 35.151l.178.98a100.02 100.02 0 01.736 31.104l-.14 1.049A50.046 50.046 0 01202.385 137l-2.885 7.5-12 23-10.399 11.16a92.856 92.856 0 01-57.284 28.938L112 208.5H49.5V277l81.341-.919a55.398 55.398 0 0037.104-14.832l4.752-4.42a54.833 54.833 0 0011.14-14.546l.18-.341a52.908 52.908 0 004.276-38.515l-.08-.294a27.32 27.32 0 00-1.933-5.073L183 191.5l9.887-11.932a100.046 100.046 0 008.377-11.741L210 153.5l1.75 2.052A86.063 86.063 0 01229.5 189.5l1.991 10.809a91.172 91.172 0 01-3.723 46.963l-.281.794a96.037 96.037 0 01-7.48 16.171L215.5 272l-2.939 3.762a100.018 100.018 0 01-22.383 21l-4.482 3.063A92.78 92.78 0 01133.354 316H10V170.5h95l7.513-1.326a61.91 61.91 0 0018.017-6.152l.429-.226a59.572 59.572 0 0018.831-15.533l.222-.278a57.958 57.958 0 0011.034-22.404l.2-.817a54.61 54.61 0 00-11.45-48.403l-2.507-2.946A65.112 65.112 0 0097.697 49.5H49.5V117H138l14.5 1.5-2.394 7.181a41.65 41.65 0 01-17.442 22.154l-1.817 1.136A52.836 52.836 0 01102.85 157H10z"
            ></path>
          </svg>
          <h1 className="text-white font-light xl:text-3xl lg:text-xl text-xl m-0 lg:mt-4 mt-2 playwrite-au-sa">
            Davis Brandon
          </h1>
          <h2 className="text-white font-light xl:text-lg lg:text-lg text-sm m-0 mt-2 italic">
            Desarrollador Web Full Stack
          </h2>
          <div className="w-full flex justify-center items-center">
            <div className="w-1/4 flex p-1 justify-center items-center">
              <div className="xl:w-1/5 lg:w-1/3 p-1 m-0 flex flex-col justify-center items-center">
                <a
                  href="https://www.instagram.com/davisbrandon036/"
                  target="blanck"
                  className="flex flex-col justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 50 50"
                    className="p-px cursor-pointer w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 fill-white hover:fill-zinc-400"
                  >
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/5 lg:w-1/3 p-1 m-0 flex flex-col justify-center items-center">
                <a
                  href="https://www.behance.net/davisccoica"
                  target="blanck"
                  className="flex flex-col justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    className="p-px cursor-pointer w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 fill-white hover:fill-zinc-400"
                  >
                    <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/5 lg:w-1/3 p-1 m-0 flex flex-col justify-center items-center">
                <a
                  href="https://github.com/Brandoncq"
                  target="blanck"
                  className="flex flex-col justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 50 50"
                    className="p-px cursor-pointer w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 fill-white hover:fill-zinc-400"
                  >
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/5 lg:w-1/3 p-1 m-0 flex flex-col justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/davis-coica-quispe-54b344289/"
                  target="blanck"
                  className="flex flex-col justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 50 50"
                    className="p-px cursor-pointer w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 fill-white hover:fill-zinc-400"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </div>
              <div className="xl:w-1/5 lg:w-1/3 p-1 m-0 flex flex-col justify-center items-center">
                <a
                  href="https://x.com/Brandon03614"
                  target="blanck"
                  className="flex flex-col justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 50 50"
                    className="p-px cursor-pointer w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 fill-white hover:fill-zinc-400"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-6">
            <div className="lg:w-1/3 w-4/5  flex flex-wrap justify-center">
              <div className="lg:w-1/3 w-1/2 p-1">
                <div className="lg:text-xl text-lg w-full bg-black rounded-xl font-bold text-center shadow-md shadow-white hover:shadow-zinc-700">
                  <NavLink
                    className="cursor-pointer bg-black text-zinc-200 hover:bg-white hover:text-black block py-3 rounded-xl"
                    to="/Proyectos"
                    onClick={handleScrollToTop}
                  >
                    <h1>PROYECTOS</h1>
                  </NavLink>
                </div>
              </div>
              <div className="lg:w-1/3 w-1/2 p-1">
                <div className="lg:text-xl text-lg w-full bg-black rounded-xl font-bold text-center shadow-md shadow-white hover:shadow-zinc-700">
                  <NavLink
                    className="cursor-pointer bg-black text-zinc-200 hover:bg-white hover:text-black block py-3 rounded-xl"
                    onClick={handleScrollToBottom}
                  >
                    <h1>CONTÁCTAME</h1>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-wrap p-0 m-0 justify-center items-center lg:h-lvh">
        <div className="w-full flex h-full flex-wrap lg:px-28 px-0 relative items-center">
          <div className="w-full flex items-center justify-center my-2">
            <h2 className="text-white lg:text-6xl text-3xl font-light whitespace-nowrap">
              Proyectos Personales
            </h2>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center px-1">
            <div className="w-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720454734/pixelcut-export_10_ptaigw.png"
                alt=""
                className="w-full hover:scale-105 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720381383/pixelcut-export_8_crmyg1.png"
                  )
                }
              />
            </div>
            <div className="w-full mt-2 overflow-hidden flex items-center">
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1718468995/x5xnkopn92lvug3jr7gw.jpg"
                alt=""
                className="w-full hover:scale-105 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720455271/Captura_de_pantalla_2024-06-27_203812_ysahq3.png"
                  )
                }
              />
            </div>
          </div>
          <div className="w-1/4 px-1">
            <div className="w-full overflow-hidden bg-zinc-400">
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720455438/Untitled_temc7e.svg"
                alt=""
                className="w-full h-auto object-cover hover:scale-110 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719586109/samples/landscapes/Captura_de_pantalla_2024-06-28_092811_cyqmjp.png"
                  )
                }
              />
            </div>
          </div>
          <div className="w-1/4 px-1">
            <div className="w-full mb-2 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719539799/samples/landscapes/pixelcut-export_g3vm6b.jpg"
                alt=""
                className="w-full h-auto object-cover hover:scale-110 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719589614/samples/landscapes/Captura_de_pantalla_2024-06-28_104356_otylu1.png"
                  )
                }
              />
            </div>
            <div className="w-full mt-2 overflow-hidden">
              <img
                src="https://content-cocina.lecturas.com/medio/2018/07/19/sushi-variado-tradicional_91be2c41_800x800.jpg"
                alt=""
                className="w-full h-auto object-cover hover:scale-110 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720452982/food_ragdr4.png"
                  )
                }
              />
            </div>
          </div>
          <div className="w-1/4 px-1 flex flex-col justify-center">
            <div className="w-full overflow-hidden mb-2">
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1718469326/pscoxairhsc2eqvmlfim.jpg"
                alt=""
                className="w-full hover:scale-105 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719380869/samples/landscapes/Captura_de_pantalla_2024-06-26_004716_ozcmty.png"
                  )
                }
              />
            </div>
            <div className="w-full overflow-hidden bg-slate-300">
              <img
                src="https://cumisucv.org.ve/wp-content/uploads/2022/05/PayPal-Logo.png"
                alt=""
                className="w-full mt-2 hover:scale-105 hover:grayscale cursor-pointer transition-all duration-500 ease-in-out border-zinc-300 border-2"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719948946/samples/landscapes/pixelcut-export_3_ramsg1.png"
                  )
                }
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-1">
            <NavLink
              className="cursor-pointer text-xl w-1/5 text-zinc-100 hover:bg-zinc-500 hover:text-white rounded-xl font-light text-center border-zinc-500 border"
              to="/Proyectos"
              onClick={handleScrollToTop}
            >
              <h1 className="py-1">Ver Más</h1>
            </NavLink>
          </div>
          {showPopover && (
            <div
              className={`absolute w-full flex flex-wrap h-full m-0 left-0 bg-black bg-opacity-60 z-50 justify-center items-center`}
              ref={popoverRef}
              onClick={(e) => handleClickOutside(e)}
            >
              <div className="w-full h-full flex justify-center p-5">
                <img
                  src={srcmodal}
                  className="h-full w-auto object-cover rounded-lg effect-opacity shadow-lg shadow-zinc-400"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="w-full flex flex-wrap p-0 m-0 justify-center items-center lg:h-lvh overflow-hidden">
        <div className="md:w-1/2 w-full p-5 justify-center items-start flex flex-col">
          <h1 className="text-white md:text-6xl text-3xl font-light text-left hidden-effect">
            Davis Brandon
          </h1>
          <h1 className="text-zinc-400 md:text-6xl text-3xl font-semibold hidden-effect">
            Desarrolador Web
          </h1>
          <h1 className="text-white md:text-6xl text-3xl font-semibold hidden-effect">
            Full Stack
          </h1>
          <p className="text-white md:text-lg text-sm mt-10">
            Soy un estudiante de séptimo ciclo de la carrera de Ingeniería en
            Informática y Sistemas. Durante mi formación, he desarrollado
            diversos proyectos utilizando tecnologías como SQL, PHP, JavaScript,
            HTML y CSS, así como frameworks modernos como React, Node.js y
            Next.js. Me especializo en crear soluciones web eficientes y
            atractivas, aplicando conocimientos tanto de frontend como de
            backend. Mis proyectos incluyen sistemas de inventario, gestores de
            galerías y el desarrollo de herramientas para la gestión y
            secuenciación de actividades en proyectos.
          </p>
        </div>
        <div className="md:w-1/2 w-full justify-center items-center flex flex-col overflow-hidden">
          <SvgCasa></SvgCasa>
        </div>
      </section>
      <section className="w-full flex flex-wrap p-0 m-0 justify-center items-center mb-20 lg:h-screen">
        <div className="w-full flex-wrap flex justify-center">
          <div className="lg:w-1/2 w-full flex flex-wrap items-center lg:px-10">
            <h1 className="text-white lg:text-5xl text-3xl  font-light w-full text-center mb-8 hidden-effect">
              Habilidades Técnicas
            </h1>
            <ul className="list-disc list-inside flex flex-col justify-center text-lg px-5 lg:px-0">
              <li className="text-white">Integración de Sistemas de Pagoa</li>
              <li className="text-white">Diseño Responsivo</li>
              <li className="text-white">Animaciones y Transiciones 2D</li>
              <li className="text-white">Login y Autenticacion</li>
              <li className="text-white">Envío de Mensajes</li>
              <li className="text-white">
                Creación y Gestión de Bases de Datos
              </li>
            </ul>
            <img
              src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719590920/samples/landscapes/olaf-val-UTk9cXzYWAg-unsplash_wws0qm.jpg"
              alt=""
              className="p-2 mt-5 rounded-xl"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-wrap justify-center">
            <div className="mb-6 lg:w-2/3 w-full p-5">
              <h1 className="text-white lg:text-5xl text-3xl font-light w-full text-center mb-10 hidden-effect">
                Tecnologías y Herramientas que Uso
              </h1>
              <ul className="list-disc list-inside flex justify-center items-center">
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path
                      fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                    ></path>
                  </svg>
                  JavaScript
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#E65100"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    ></path>
                    <path
                      fill="#FF6D00"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                    ></path>
                  </svg>
                  HTML
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#0277BD"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    ></path>
                    <path
                      fill="#039BE5"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                    ></path>
                    <path
                      fill="#EEE"
                      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                    ></path>
                  </svg>
                  CSS
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 80 80"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#dcd5f2"
                      d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"
                    ></path>
                    <path
                      fill="#8b75a1"
                      d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"
                    ></path>
                    <path
                      fill="#36404d"
                      d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"
                    ></path>
                    <g>
                      <path
                        fill="#36404d"
                        d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"
                      ></path>
                    </g>
                  </svg>
                  PHP
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <title>file_type_sql</title>
                    <path
                      d="M8.562,15.256A21.159,21.159,0,0,0,16,16.449a21.159,21.159,0,0,0,7.438-1.194c1.864-.727,2.525-1.535,2.525-2V9.7a10.357,10.357,0,0,1-2.084,1.076A22.293,22.293,0,0,1,16,12.078a22.36,22.36,0,0,1-7.879-1.3A10.28,10.28,0,0,1,6.037,9.7v3.55C6.037,13.724,6.7,14.528,8.562,15.256Z"
                      fill="#FD6187"
                    />
                    <path
                      d="M8.562,21.961a15.611,15.611,0,0,0,2.6.741A24.9,24.9,0,0,0,16,23.155a24.9,24.9,0,0,0,4.838-.452,15.614,15.614,0,0,0,2.6-.741c1.864-.727,2.525-1.535,2.525-2v-3.39a10.706,10.706,0,0,1-1.692.825A23.49,23.49,0,0,1,16,18.74a23.49,23.49,0,0,1-8.271-1.348,10.829,10.829,0,0,1-1.692-.825V19.96C6.037,20.426,6.7,21.231,8.562,21.961Z"
                      fill="#FD6187"
                    />
                    <path
                      d="M16,30c5.5,0,9.963-1.744,9.963-3.894V23.269a10.5,10.5,0,0,1-1.535.762l-.157.063A23.487,23.487,0,0,1,16,25.445a23.422,23.422,0,0,1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5,10.5,0,0,1-1.535-.762v2.837C6.037,28.256,10.5,30,16,30Z"
                      fill="#FD6187"
                    />
                    <ellipse
                      cx="16"
                      cy="5.894"
                      rx="9.963"
                      ry="3.894"
                      fill="#FD6187"
                    />
                  </svg>
                  SQL
                </li>
              </ul>
            </div>
            <div className="mb-6 lg:w-2/3 w-full p-5">
              <ul className="list-disc list-inside ml-4 mt-2 flex justify-center itmes-center">
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#21a366"
                      d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                    ></path>
                    <path
                      fill="#21a366"
                      d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                    ></path>
                  </svg>
                  Node.js
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 40 40"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#98ccfd"
                      d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                    ></path>
                    <path
                      fill="#4788c7"
                      d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                    ></path>
                    <g>
                      <path
                        fill="#98ccfd"
                        d="M39.5,20c0-2.796-2.912-5.232-7.492-6.787c0.576-2.671,0.655-5.055,0.166-6.881 c-0.408-1.522-1.181-2.617-2.296-3.253c-0.671-0.382-1.438-0.577-2.279-0.577c-2.207,0-4.893,1.401-7.597,3.791 C17.296,3.902,14.609,2.5,12.4,2.5c-0.842,0-1.608,0.194-2.279,0.577C9.006,3.714,8.232,4.81,7.825,6.333 c-0.489,1.826-0.41,4.21,0.165,6.88C3.412,14.768,0.5,17.205,0.5,20s2.912,5.232,7.491,6.786c-0.576,2.67-0.655,5.054-0.165,6.88 c0.407,1.524,1.181,2.619,2.297,3.257c0.671,0.382,1.438,0.577,2.279,0.577c0.001,0,0,0,0.001,0c2.208,0,4.894-1.401,7.598-3.793 c2.704,2.389,5.39,3.789,7.597,3.79c0.001,0,0.001,0,0.001,0c0.842,0,1.608-0.194,2.28-0.577c1.114-0.636,1.887-1.731,2.294-3.253 c0.489-1.826,0.41-4.21-0.165-6.88C36.587,25.233,39.5,22.796,39.5,20z M28.888,4.817c0.634,0.362,1.09,1.046,1.354,2.033 c0.401,1.496,0.322,3.509-0.158,5.79c-1.596-0.417-3.343-0.734-5.208-0.938c-1.11-1.502-2.269-2.855-3.44-4.041 c2.397-2.087,4.598-3.158,6.163-3.158C28.089,4.503,28.522,4.609,28.888,4.817z M25.784,23.287 c-0.653,1.117-1.324,2.152-2.003,3.119c-1.205,0.105-2.467,0.162-3.782,0.162c-1.316,0-2.578-0.058-3.784-0.162 c-0.679-0.967-1.35-2.002-2.003-3.119C13.576,22.197,13,21.096,12.481,20c0.519-1.095,1.095-2.197,1.732-3.287 c0.653-1.117,1.325-2.152,2.004-3.12c1.205-0.105,2.468-0.162,3.783-0.162c1.315,0,2.577,0.057,3.781,0.162 c0.679,0.968,1.35,2.002,2.003,3.119c0.637,1.09,1.214,2.192,1.733,3.287C26.998,21.096,26.421,22.197,25.784,23.287z M28.558,22.392c0.41,1.036,0.756,2.052,1.041,3.035c-0.99,0.258-2.057,0.478-3.194,0.655c0.377-0.582,0.748-1.174,1.106-1.787 C27.881,23.663,28.226,23.028,28.558,22.392z M20,30.983c-0.729-0.738-1.467-1.556-2.205-2.47c0.724,0.034,1.457,0.055,2.205,0.055 c0.747,0,1.48-0.021,2.203-0.055C21.466,29.427,20.729,30.246,20,30.983z M13.593,26.082c-1.136-0.177-2.203-0.397-3.193-0.655 c0.285-0.983,0.63-1.998,1.04-3.034c0.332,0.635,0.677,1.271,1.046,1.903C12.844,24.908,13.216,25.5,13.593,26.082z M11.44,17.607 c-0.41-1.036-0.755-2.051-1.04-3.034c0.99-0.258,2.057-0.478,3.194-0.655c-0.377,0.582-0.749,1.174-1.107,1.786 C12.117,16.337,11.772,16.972,11.44,17.607z M20.001,9.018c0.729,0.737,1.466,1.555,2.202,2.469 c-0.723-0.034-1.456-0.055-2.203-0.055s-1.48,0.021-2.203,0.055C18.534,10.573,19.272,9.755,20.001,9.018z M27.511,15.704 c-0.358-0.613-0.729-1.205-1.106-1.787c1.137,0.177,2.204,0.397,3.194,0.655c-0.285,0.984-0.631,1.999-1.041,3.036 C28.226,16.973,27.881,16.337,27.511,15.704z M9.757,6.851c0.265-0.989,0.721-1.674,1.355-2.037C11.478,4.606,11.911,4.5,12.4,4.5 c1.567,0,3.768,1.072,6.166,3.161c-1.172,1.187-2.332,2.539-3.443,4.042c-1.865,0.204-3.612,0.522-5.208,0.939 C9.435,10.359,9.356,8.346,9.757,6.851z M2.5,20c0-1.729,2.231-3.566,5.983-4.857C8.935,16.708,9.538,18.342,10.28,20 c-0.742,1.658-1.345,3.292-1.797,4.857C4.731,23.566,2.5,21.729,2.5,20z M12.401,35.5c-0.49,0-0.924-0.106-1.288-0.313 c-0.636-0.363-1.092-1.048-1.356-2.037c-0.401-1.496-0.322-3.509,0.158-5.79c1.596,0.417,3.342,0.734,5.207,0.938 c1.111,1.503,2.271,2.856,3.444,4.043C16.168,34.429,13.967,35.5,12.401,35.5z M30.241,33.15c-0.265,0.987-0.72,1.671-1.354,2.033 c-0.365,0.208-0.799,0.314-1.289,0.314c-1.566,0-3.767-1.071-6.164-3.157c1.172-1.187,2.331-2.54,3.441-4.042 c1.865-0.204,3.611-0.522,5.207-0.938C30.563,29.641,30.642,31.654,30.241,33.15z M31.515,24.858 c-0.452-1.565-1.055-3.199-1.797-4.858c0.742-1.659,1.345-3.293,1.797-4.858C35.268,16.433,37.5,18.271,37.5,20 C37.5,21.729,35.268,23.567,31.515,24.858z"
                      ></path>
                      <path
                        fill="#4788c7"
                        d="M12.402,38c-0.93,0-1.78-0.216-2.528-0.642c-1.237-0.708-2.089-1.906-2.532-3.563 c-0.472-1.762-0.446-4.064,0.07-6.682C2.694,25.42,0,22.842,0,20s2.694-5.42,7.412-7.114c-0.517-2.617-0.542-4.92-0.07-6.682 C7.785,4.548,8.637,3.35,9.873,2.643c2.52-1.438,6.178-0.393,10.128,2.988c3.949-3.378,7.604-4.422,10.125-2.986 c1.235,0.705,2.087,1.902,2.531,3.558c0.472,1.763,0.446,4.066-0.071,6.683C37.305,14.579,40,17.158,40,20 c0,2.842-2.695,5.421-7.414,7.115c0.518,2.617,0.542,4.919,0.07,6.682c-0.443,1.656-1.294,2.853-2.529,3.558 C27.604,38.793,23.946,37.746,20,34.37C17.224,36.747,14.604,38,12.402,38z M12.4,3c-0.753,0-1.437,0.172-2.031,0.511 C9.373,4.081,8.68,5.074,8.309,6.462c-0.458,1.707-0.398,4.005,0.171,6.646l0.094,0.436l-0.422,0.144C3.606,15.23,1,17.531,1,20 s2.606,4.77,7.151,6.313l0.422,0.144l-0.094,0.436c-0.569,2.641-0.629,4.939-0.171,6.646c0.371,1.389,1.064,2.382,2.062,2.952 C10.965,36.828,11.648,37,12.401,37h0.001c2.012,0,4.592-1.302,7.267-3.667L20,33.04l0.331,0.293 c2.674,2.362,5.255,3.664,7.267,3.664c0.754,0,1.438-0.172,2.034-0.511c0.994-0.568,1.687-1.56,2.058-2.948 c0.458-1.707,0.398-4.004-0.171-6.645l-0.094-0.436l0.422-0.144C36.393,24.771,39,22.469,39,20c0-2.47-2.607-4.771-7.153-6.313 l-0.422-0.144l0.095-0.436c0.569-2.641,0.629-4.939,0.171-6.646c-0.372-1.389-1.065-2.38-2.061-2.948 c-0.595-0.339-1.278-0.511-2.031-0.511c-2.011,0-4.591,1.302-7.267,3.666l-0.331,0.293L19.67,6.668C16.994,4.303,14.413,3,12.4,3z M12.401,36c-0.577,0-1.094-0.127-1.535-0.379c-0.756-0.432-1.292-1.22-1.593-2.342c-0.408-1.527-0.355-3.61,0.152-6.022 l0.108-0.513l0.507,0.132c1.591,0.415,3.317,0.727,5.135,0.925l0.217,0.024L15.523,28c1.073,1.451,2.217,2.793,3.397,3.989 l0.374,0.379l-0.401,0.35C16.464,34.834,14.158,36,12.401,36z M10.303,27.973c-0.468,2.04-0.482,3.777-0.063,5.047 c0.278,0.841,0.605,1.438,1.121,1.732c1.294,0.739,3.813-0.237,6.473-2.446c-1.033-1.08-2.035-2.267-2.984-3.536 C13.257,28.588,11.73,28.32,10.303,27.973z M27.599,35.997c-1.757,0-4.063-1.165-6.491-3.28l-0.401-0.349l0.374-0.379 c1.185-1.202,2.327-2.543,3.394-3.988l0.13-0.176l0.218-0.024c1.819-0.199,3.548-0.51,5.137-0.925l0.508-0.132l0.107,0.513 c0.507,2.414,0.56,4.496,0.151,6.022c-0.301,1.121-0.836,1.908-1.589,2.338C28.693,35.87,28.176,35.997,27.599,35.997z M22.166,32.306c2.66,2.207,5.171,3.184,6.475,2.443c0.513-0.292,0.839-0.889,1.117-1.728c0.422-1.271,0.405-3.008-0.062-5.047 c-1.427,0.347-2.954,0.614-4.549,0.797C24.204,30.035,23.203,31.221,22.166,32.306z M20,31.695l-0.355-0.36 c-0.773-0.782-1.526-1.625-2.238-2.508l-0.7-0.867l1.112,0.053c1.431,0.068,2.931,0.068,4.361,0l1.111-0.053l-0.698,0.866 c-0.71,0.879-1.462,1.723-2.237,2.507L20,31.695z M18.898,29.054c0.359,0.417,0.728,0.822,1.102,1.212 c0.374-0.392,0.741-0.796,1.101-1.212C20.372,29.073,19.627,29.073,18.898,29.054z M20,27.068c-1.284,0-2.571-0.055-3.827-0.164 l-0.232-0.02l-0.134-0.191c-0.721-1.027-1.402-2.089-2.025-3.154c-0.619-1.061-1.209-2.179-1.753-3.325L11.927,20l0.102-0.214 c0.544-1.146,1.134-2.265,1.753-3.325c0.63-1.078,1.293-2.109,2.027-3.155l0.134-0.19l0.232-0.02c2.508-0.218,5.142-0.218,7.649,0 l0.232,0.02l0.134,0.191c0.736,1.05,1.399,2.082,2.025,3.154c0.625,1.07,1.215,2.188,1.753,3.326L28.069,20l-0.101,0.214 c-0.538,1.137-1.128,2.256-1.753,3.326c-0.626,1.072-1.289,2.104-2.025,3.154l-0.134,0.191l-0.232,0.02 C22.57,27.013,21.284,27.068,20,27.068z M16.491,25.928c2.309,0.187,4.71,0.187,7.015,0c0.667-0.961,1.272-1.91,1.847-2.893 c0.571-0.977,1.112-1.997,1.61-3.035c-0.498-1.038-1.039-2.058-1.61-3.035c-0.574-0.983-1.18-1.932-1.847-2.893 c-2.306-0.187-4.711-0.187-7.013,0c-0.665,0.958-1.271,1.906-1.849,2.894c-0.565,0.968-1.107,1.988-1.61,3.034 c0.503,1.045,1.044,2.065,1.61,3.035C15.215,24.01,15.836,24.982,16.491,25.928z M25.377,26.749l0.607-0.938 c0.373-0.576,0.74-1.162,1.095-1.767c0.366-0.626,0.707-1.255,1.035-1.883l0.506-0.968l0.402,1.016 c0.405,1.023,0.761,2.06,1.057,3.081l0.143,0.494l-0.497,0.129c-1.017,0.264-2.107,0.488-3.243,0.665L25.377,26.749z M28.479,23.6 c-0.174,0.316-0.353,0.633-0.537,0.949c-0.168,0.288-0.34,0.571-0.513,0.851c0.528-0.1,1.042-0.209,1.54-0.329 C28.819,24.581,28.655,24.09,28.479,23.6z M14.621,26.749l-1.105-0.172c-1.136-0.177-2.227-0.401-3.241-0.665l-0.497-0.129 l0.143-0.493c0.294-1.017,0.649-2.053,1.056-3.08l0.402-1.017l0.506,0.97c0.327,0.628,0.668,1.256,1.034,1.882 c0.354,0.605,0.722,1.191,1.095,1.767L14.621,26.749z M11.029,25.069c0.496,0.119,1.01,0.229,1.537,0.329 c-0.173-0.279-0.344-0.562-0.512-0.85c-0.185-0.315-0.362-0.631-0.536-0.948C11.342,24.092,11.179,24.582,11.029,25.069z M31.18,25.502l-0.146-0.505c-0.446-1.548-1.043-3.16-1.772-4.792L29.17,20l0.092-0.204c0.729-1.63,1.326-3.243,1.773-4.792 l0.146-0.505l0.498,0.171C35.637,16.031,38,18.024,38,20c0,1.977-2.363,3.969-6.322,5.331L31.18,25.502z M30.265,20 c0.63,1.427,1.159,2.84,1.579,4.209C34.993,23.039,37,21.412,37,20s-2.007-3.039-5.156-4.209 C31.424,17.162,30.894,18.574,30.265,20z M8.817,25.501L8.32,25.33C4.363,23.968,2,21.976,2,20s2.363-3.968,6.32-5.33l0.497-0.171 l0.146,0.505c0.449,1.554,1.045,3.167,1.772,4.792L10.828,20l-0.092,0.204c-0.728,1.625-1.323,3.238-1.772,4.792L8.817,25.501z M8.155,15.791C5.006,16.962,3,18.589,3,20s2.006,3.038,5.155,4.209c0.421-1.375,0.95-2.787,1.578-4.209 C9.105,18.578,8.576,17.166,8.155,15.791z M11.378,18.809l-0.402-1.017c-0.406-1.027-0.762-2.063-1.056-3.08l-0.143-0.493 l0.497-0.129c1.016-0.264,2.106-0.488,3.242-0.665l1.106-0.172l-0.61,0.939c-0.373,0.575-0.74,1.161-1.095,1.766 c-0.366,0.625-0.707,1.254-1.034,1.882L11.378,18.809z M11.029,14.931c0.149,0.487,0.313,0.978,0.489,1.469 c0.174-0.316,0.352-0.632,0.536-0.948c0.168-0.287,0.339-0.57,0.512-0.85C12.039,14.701,11.525,14.812,11.029,14.931z M28.62,18.809l-0.506-0.969c-0.328-0.629-0.669-1.257-1.035-1.883c-0.354-0.605-0.722-1.191-1.095-1.767l-0.607-0.938l1.104,0.172 c1.137,0.177,2.229,0.401,3.243,0.666l0.497,0.129l-0.143,0.494c-0.296,1.02-0.651,2.057-1.057,3.081L28.62,18.809z M27.43,14.601 c0.173,0.28,0.345,0.563,0.513,0.851c0.185,0.316,0.363,0.632,0.537,0.949c0.176-0.491,0.34-0.982,0.49-1.47 C28.473,14.811,27.958,14.701,27.43,14.601z M30.465,13.257l-0.507-0.132c-1.587-0.415-3.315-0.726-5.137-0.925l-0.218-0.024 l-0.13-0.176c-1.07-1.449-2.212-2.791-3.394-3.987l-0.374-0.379l0.401-0.35c3.229-2.811,6.243-3.919,8.027-2.901 c0.755,0.431,1.29,1.218,1.591,2.338c0.408,1.527,0.355,3.61-0.152,6.023L30.465,13.257z M25.147,11.229 c1.597,0.183,3.123,0.451,4.549,0.798c0.517-1.907,0.59-3.595,0.063-5.048c-0.302-0.83-0.604-1.435-1.119-1.729 c-1.298-0.74-3.812,0.236-6.473,2.444C23.2,8.775,24.201,9.962,25.147,11.229z M9.534,13.257l-0.108-0.513 c-0.508-2.413-0.561-4.495-0.152-6.022c0.301-1.123,0.836-1.911,1.591-2.341c1.789-1.02,4.801,0.091,8.03,2.904l0.402,0.35 l-0.375,0.379c-1.184,1.197-2.326,2.539-3.396,3.987l-0.13,0.176l-0.218,0.024c-1.818,0.199-3.547,0.51-5.137,0.925L9.534,13.257z M12.4,5c-0.401,0-0.751,0.083-1.041,0.249c-0.514,0.293-0.774,0.916-1.119,1.731c-0.54,1.275-0.449,3.011,0.063,5.047 c1.428-0.347,2.954-0.615,4.549-0.798c0.946-1.267,1.948-2.453,2.983-3.534C15.766,5.977,13.803,5,12.4,5z M16.709,12.039 l0.699-0.866c0.71-0.88,1.463-1.723,2.237-2.507l0.355-0.36l0.355,0.36c0.777,0.787,1.529,1.63,2.236,2.506l0.697,0.866 l-1.11-0.052c-1.43-0.067-2.93-0.067-4.359,0L16.709,12.039z M20,10.932c0.37,0,0.737,0.005,1.101,0.014 c-0.357-0.415-0.726-0.819-1.1-1.211c-0.374,0.391-0.742,0.795-1.101,1.211C19.264,10.937,19.63,10.932,20,10.932z"
                      ></path>
                    </g>
                  </svg>
                  React.js
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <linearGradient
                      id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
                      x1="24"
                      x2="24"
                      y1="43.734"
                      y2="4.266"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#0a070a"></stop>
                      <stop offset=".465" stopColor="#2b2b2b"></stop>
                      <stop offset="1" stopColor="#4b4b4b"></stop>
                    </linearGradient>
                    <circle
                      cx="24"
                      cy="24"
                      r="19.734"
                      fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
                    ></circle>
                    <rect
                      width="3.023"
                      height="15.996"
                      x="15.992"
                      y="16.027"
                      fill="#fff"
                    ></rect>
                    <linearGradient
                      id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
                      x1="30.512"
                      x2="30.512"
                      y1="33.021"
                      y2="18.431"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset=".377"
                        stopColor="#fff"
                        stopOpacity="0"
                      ></stop>
                      <stop
                        offset=".666"
                        stopColor="#fff"
                        stopOpacity=".3"
                      ></stop>
                      <stop offset=".988" stopColor="#fff"></stop>
                    </linearGradient>
                    <rect
                      width="2.953"
                      height="14.59"
                      x="29.035"
                      y="15.957"
                      fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
                    ></rect>
                    <linearGradient
                      id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
                      x1="22.102"
                      x2="36.661"
                      y1="21.443"
                      y2="40.529"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".296" stopColor="#fff"></stop>
                      <stop
                        offset=".521"
                        stopColor="#fff"
                        stopOpacity=".5"
                      ></stop>
                      <stop
                        offset=".838"
                        stopColor="#fff"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <polygon
                      fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
                      points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
                    ></polygon>
                  </svg>
                  Next.js
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#e64a19"
                      d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                    ></path>
                    <path
                      fill="#7c4dff"
                      d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                    ></path>
                    <path
                      fill="#66bb6a"
                      d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                    ></path>
                    <path
                      fill="#ff7043"
                      d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                    ></path>
                    <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                  </svg>
                  Figma
                </li>
                <li className="text-white flex flex-col items-center justify-between font-semibold p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="hidden-effect w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  >
                    <path
                      fill="#F4511E"
                      d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                    ></path>
                  </svg>
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
