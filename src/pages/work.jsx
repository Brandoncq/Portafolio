import { useEffect, useRef, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import getInfo from "./../components/data";
export const Work = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const estimacionTiemposRef = useRef(null);
  const gestorProyectosRef = useRef(null);
  const alquilerDisfracesRef = useRef(null);
  const tiendafoodRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopover, setShowPopover] = useState(false);
  const [srcmodal, setSrcmodal] = useState({});
  const popoverRef = useRef(null);
  const [slides, setData] = useState(null);
  const handleImageClick = (proyecto) => {
    setShowPopover(true);
    setSrcmodal(slides[proyecto] || []);
    setActiveIndex(0);
  };
  const handleClickOutside = () => {
    setShowPopover(false);
  };
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const checkScrollPosition = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsAtBottom(isBottom);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfo();
        setData(data); // Actualiza el estado con los datos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
  }, [location.pathname]);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? srcmodal.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === srcmodal.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="m-0 p-0 w-full">
      <section className="m-0 p-0 w-full h-lvh flex items-center bg-white relative">
        <img
          src="https://images.unsplash.com/photo-1531968455001-5c5272a41129?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
        "
          alt=""
          className="lg:w-full lg:h-auto h-full w-auto object-cover grayscale"
        />
        <div className="flex flex-wrap items-center justify-center py-0 m-0 px-5 w-full h-lvh absolute bg-white bg-opacity-80">
          <div className="flex items-center justify-center p-0 m-0 w-full xl:absolute lg:top-0 mt-20">
            <div className="lg:w-1/3 w-1/2 flex flex-col items-center justify-center m-0 bg-gray-800 p-1 lg:mt-16">
              <h1 className="font-bold lg:text-5xl text-2xl m-0 hidden-effect text-white">
                PROYECTOS
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center p-0 m-0 w-full">
            <div className="flex flex-col justify-center m-0 lg:w-1/2 w-full p-8 border-8 border-gray-800 mt-6">
              <div
                onClick={() => scrollToSection(estimacionTiemposRef)}
                className="font-bold lg:text-2xl text-xl m-0 text-gray-900 mt-2 cursor-pointer hidden-effect hover:text-white hover:bg-gray-800 rounded-md px-1 z-10"
              >
                Herramienta de Estimación de Tiempos CPM - PERT
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-zinc-800 mb-2 hidden-effect px-1">
                Software para calcular y optimizar tiempos de proyectos
                utilizando los métodos CPM y PERT.
              </p>
              <div
                onClick={() => scrollToSection(gestorProyectosRef)}
                className="font-bold lg:text-2xl text-xl m-0 text-gray-900 mt-2 cursor-pointer hidden-effect hover:text-white hover:bg-gray-800 rounded-md px-1 z-10"
              >
                Gestor de Galerías de Proyectos
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-zinc-800 mb-2 hidden-effect px-1">
                Plataforma para gestionar y mostrar proyectos en forma de
                galerías de imágenes con descripciones.
              </p>
              <div
                onClick={() => scrollToSection(alquilerDisfracesRef)}
                className="font-bold lg:text-2xl text-xl m-0 text-gray-900 mt-2 cursor-pointer hidden-effect hover:text-white hover:bg-gray-800 rounded-md px-1 z-10"
              >
                Sistema de Alquiler de Disfraces
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-zinc-800 mb-2 hidden-effect px-1">
                Aplicación para gestionar el inventario y las reservas de
                disfraces para eventos.
              </p>
              <div
                onClick={() => scrollToSection(tiendafoodRef)}
                className="font-bold lg:text-2xl text-xl m-0 text-gray-900 mt-2 cursor-pointer hidden-effect hover:text-white hover:bg-gray-800 rounded-md px-1 z-10"
              >
                Digital Food Marketplace
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-zinc-800 mb-2 hidden-effect px-1">
                Una plataforma web intuitiva que ofrece una variedad de
                productos alimenticios y facilita pagos seguros a través de
                PayPal y Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>
      {showPopover && (
        <div
          id="default-carousel"
          className="fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-60 z-50"
          data-carousel="slide"
          ref={popoverRef}
        >
          <div
            className="absolute top-0 left-0 m-4 text-3xl text-white z-40 font-normal cursor-pointer rounded-full hover:bg-zinc-400 p-3"
            onClick={handleClickOutside}
          >
            <h3>X</h3>
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            {srcmodal.map((item, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                data-carousel-item
              >
                <img
                  src={item}
                  className="absolute block lg:w-auto w-full lg:h-full w:h-auto object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:p-12 p-2"
                  alt="..."
                />
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {srcmodal.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-current={index === activeIndex}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      )}
      <div className="w-full flex flex-col relative">
        {!isAtBottom && (
          <div className="w-full h-full flex items-center lg:h-lvh fixed top-0 lg:p-10 p-2">
            <div className="w-full h-full border border-zinc-500 flex items-center"></div>
            <NavLink to={"/"} onClick={handleScrollToTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 50 50"
                className="w-12 h-12 lg:w-16 lg:h-16 absolute top-0 right-0 bg-white cursor-pointer lg:m-4 m-1 lg:p-4 p-3 fill-zinc-500 border-2 border-zinc-400 rounded-lg hover:bg-zinc-400 hover:fill-white"
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </NavLink>
            <button
              onClick={handleScrollToTop}
              className="absolute bottom-0 right-0 bg-white cursor-pointer lg:m-4 m-1 lg:p-4 p-3 rounded-lg border border-zinc-400 text-xl text-zinc-500 hover:bg-zinc-600 hover:text-white"
            >
              ᐱ
            </button>
          </div>
        )}
        <section
          className="w-full flex flex-wrap p-0 m-0 justify-center items-center h-lvh bg-white"
          ref={estimacionTiemposRef}
        >
          <div className="w-full h-full p-10 flex items-center">
            <div className="w-full flex flex-wrap lg:px-10 mb-5">
              <div className="lg:w-5/12 w-full flex flex-col justify-center items-center p-5">
                <h2 className="font-medium lg:text-5xl text-xl m-0 text-gray-900 my-4 abril-fatface-regular hidden-effect">
                  Herramienta de Estimación de Tiempos CPM - PERT
                </h2>
                <hr className="h-1 my-4 bg-zinc-400 w-full" />
                <p className="font-base lg:text-sm text-xs m-0 text-zinc-700 mt-4 hidden-effect">
                  Esta aplicación permite a los usuarios elegir entre las
                  secciones de PERT y CPM para gestionar proyectos. Los usuarios
                  pueden especificar la cantidad de actividades, lo que genera
                  una tabla para completar los precedentes y tiempos.
                </p>
                <div className="w-full flex flex-wrap mt-4">
                  <div className="w-1/4 flex bg-yellow-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">JavaScript</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-1/4 flex bg-teal-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">React</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 40 40"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-green-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">Node</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-cyan-500 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">CSS</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                </div>
                <button
                  className="py-2 px-20 bg-gray-900 text-white hover:bg-zinc-500 mt-6 rounded-xl cursor-pointer z-10"
                  onClick={() => {
                    handleImageClick("estimacion");
                  }}
                >
                  Ver Mas
                </button>
              </div>
              <div className="lg:w-7/12 w-full lg:p-0 p-2">
                <div className="w-full flex flex-wrap justify-center items-center">
                  <div className="w-full p-1 flex flex-wrap items-center">
                    <div className="w-full p-1 flex flex-col bg-zinc-200 rounded-lg shadow-lg shadow-slate-900 ">
                      <img
                        src="
                      https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720381383/pixelcut-export_8_crmyg1.png"
                        alt=""
                        className="w-full h-auto p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full flex flex-wrap p-0 m-0 justify-center items-center h-lvh bg-white"
          ref={tiendafoodRef}
        >
          <div className="w-full h-full p-10 flex items-center">
            <div className="w-full flex flex-wrap lg:px-10 mb-5">
              <div className="lg:w-5/12 w-full flex flex-col justify-center items-center p-5">
                <h2 className="font-medium lg:text-5xl text-xl m-0 text-gray-900 my-4 abril-fatface-regular hidden-effect">
                  Digital Food Marketplace
                </h2>
                <hr className="h-1 my-4 bg-zinc-400 w-full" />
                <p className="font-base lg:text-sm text-xs m-0 text-zinc-700 mt-4 hidden-effect">
                  Los usuarios pueden explorar un catálogo diverso de comidas,
                  desde platos preparados hasta ingredientes frescos, con
                  descripciones detalladas y atractivas imágenes. La plataforma
                  integra pasarelas de pago PayPal y Stripe, asegurando
                  transacciones rápidas y seguras.
                </p>
                <div className="w-full flex flex-wrap mt-4">
                  <div className="w-1/4 flex bg-yellow-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">JavaScript</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-1/4 flex bg-teal-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">React</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 40 40"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-green-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">Node</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-cyan-300 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">Tailwind</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                      <path
                        fill="#00acc1"
                        d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-1/4 flex bg-gray-800 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-100 mr-1">Next</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                </div>
                <button
                  className="py-2 px-20 bg-gray-900 text-white hover:bg-zinc-500 mt-6 rounded-xl cursor-pointer z-10"
                  to="/SobreMi"
                  onClick={() => {
                    handleImageClick("tienda");
                  }}
                >
                  Ver Mas
                </button>
              </div>
              <div className="lg:w-7/12 w-full lg:p-0 p-2">
                <div className="w-full flex flex-wrap justify-center items-center">
                  <div className="w-full p-1 flex flex-wrap items-center">
                    <div className="w-full p-1 flex flex-col bg-zinc-200 rounded-lg shadow-lg shadow-slate-900 ">
                      <img
                        src="
                      https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719948970/samples/landscapes/Captura_de_pantalla_2024-07-02_123630_supubg.png"
                        alt=""
                        className="w-full h-auto p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full flex flex-wrap p-0 m-0 justify-center items-center h-lvh bg-white"
          ref={gestorProyectosRef}
        >
          <div className="w-full h-full p-10 flex items-center">
            <div className="w-full flex flex-wrap lg:px-10 mb-5">
              <div className="lg:w-5/12 w-full flex flex-col justify-center items-center p-5">
                <h2 className="font-medium lg:text-5xl text-xl m-0 text-gray-900 my-4 abril-fatface-regular hidden-effect">
                  Gestor de Galerías de Proyectos
                </h2>
                <hr className="h-1 my-4 bg-zinc-400 w-full" />
                <p className="font-base lg:text-sm text-xs m-0 text-zinc-700 mt-4 hidden-effect">
                  El Gestor de Galerías de Proyectos es una plataforma que
                  permite a los usuarios visualizar, agregar, editar y eliminar
                  proyectos en forma de galerías de imágenes con descripciones.
                  Cada proyecto se presenta en una galería de imágenes que los
                  usuarios pueden navegar, ofreciendo una visualización
                  atractiva y organizada.
                </p>
                <div className="w-full flex flex-wrap mt-4">
                  <div className="w-1/4 flex bg-yellow-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">JavaScript</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-1/4 flex bg-teal-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">React</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 40 40"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-green-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">Node</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-cyan-300 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">Tailwind</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                      <path
                        fill="#00acc1"
                        d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-1/4 flex bg-gray-800 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-100 mr-1">Next</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                </div>
                <button
                  className="py-2 px-20 bg-gray-900 text-white hover:bg-zinc-500 mt-6 rounded-xl cursor-pointer z-10"
                  to="/SobreMi"
                  onClick={() => {
                    handleImageClick("gestor");
                  }}
                >
                  Ver Mas
                </button>
              </div>
              <div className="lg:w-7/12 w-full lg:p-0 p-2">
                <div className="w-full flex flex-wrap justify-center items-center">
                  <div className="w-full p-1 flex flex-wrap items-center">
                    <div className="w-full p-1 flex flex-col bg-zinc-200 rounded-lg shadow-lg shadow-slate-900 ">
                      <img
                        src="
                      https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719586475/samples/landscapes/Captura_de_pantalla_2024-06-28_095400_bl9dvl.png"
                        alt=""
                        className="w-full h-auto p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full flex flex-wrap p-0 m-0 justify-center items-center h-lvh bg-white"
          ref={alquilerDisfracesRef}
        >
          <div className="w-full h-full p-10 flex items-center">
            <div className="w-full flex flex-wrap lg:px-10 mb-5">
              <div className="lg:w-5/12 w-full flex flex-col justify-center items-center p-5">
                <h2 className="font-medium lg:text-5xl text-xl m-0 text-gray-900 my-4 abril-fatface-regular hidden-effect">
                  Sistema de Alquiler de Disfraces
                </h2>
                <hr className="h-1 my-4 bg-zinc-400 w-full" />
                <p className="font-base lg:text-sm text-xs m-0 text-zinc-700 mt-4 hidden-effect">
                  El Sistema de Alquiler de Disfraces es una aplicación que
                  permite gestionar el alquiler de disfraces de manera
                  eficiente. Los usuarios pueden agregar nuevos artículos
                  (disfraces) al inventario y llevar un control detallado del
                  estado de cada alquiler.
                </p>

                <div className="w-full flex flex-wrap mt-4">
                  <div className="w-1/4 flex bg-yellow-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">JavaScript</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    >
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path
                        fill="#000001"
                        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-1/4 flex bg-orange-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">Html</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 40 40"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-cyan-500 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700">CSS</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                  <div className="w-1/4 flex bg-violet-400 bg-opacity-70 justify-center items-center border border-zinc-600 rounded-lg m-1">
                    <h1 className="text-zinc-700 mr-1">PHP</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 80 80"
                      className="hidden-effect w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
                  </div>
                </div>
                <button
                  className="py-2 px-20 bg-gray-900 text-white hover:bg-zinc-500 mt-6 rounded-xl cursor-pointer z-10"
                  to="/SobreMi"
                  onClick={() => {
                    handleImageClick("alquiler");
                  }}
                >
                  Ver Mas
                </button>
              </div>
              <div className="lg:w-7/12 w-full lg:p-0 p-2">
                <div className="w-full flex flex-wrap justify-center items-center">
                  <div className="w-full p-1 flex flex-wrap items-center">
                    <div className="w-full p-1 flex flex-col bg-zinc-200 rounded-lg shadow-lg shadow-slate-900 ">
                      <img
                        src="
                     https://res.cloudinary.com/dmo6ofy2z/image/upload/v1720381932/pixelcut-export_9_ucmnjs.png"
                        alt=""
                        className="w-full h-auto p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
