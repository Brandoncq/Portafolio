import { NavLink } from "react-router-dom";
import Formulario from "./Mensaje";
export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-zinc-900">
      <section className="w-full">
        <div className="grid grid-cols-2 gap-8 px-4 py-3 lg:py-6 md:grid-cols-4 lg:px-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="col-span-1 lg:col-span-2">
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Davis Brandon
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Soy un desarrollador web fullstack especializado en la creación
                de soluciones web eficientes y atractivas.
              </p>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <h2 className="mb-2 text-sm font-semibold  uppercase text-white mt-10">
                Secciones
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink
                    to="/"
                    onClick={handleScrollToTop}
                    className="hover:underline"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/Proyectos" className="hover:underline">
                    Nosotros
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
              Mensaje
            </h2>
            <Formulario
              service={import.meta.env.VITE_EMAIL_SERVICE}
              template={import.meta.env.VITE_EMAIL_TEMPLATE}
              publickey={import.meta.env.VITE_EMAIL_SECRET}
              captcha={import.meta.env.VITE_CAPTCHA_SECRET}
            ></Formulario>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Centro de Ayuda
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Gmail
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.instagram.com/davisbrandon036/"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Behance
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Github
                </a>
              </li>
              <li className="mb-4">
                <a href="/Contacto" className="hover:underline">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Logo
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium w-full flex justify-center items-center">
              <li className="mb-4 w-full flex justify-center items-center">
                <img
                  className="lg:w-4/12 w-2/3"
                  src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719379221/samples/landscapes/logomio_p34rv9.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-2 bg-neutral-800 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2024 <a href="">SEO Davis Brandon</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
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
                className="p-px cursor-pointer w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12 fill-white hover:fill-zinc-400"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/Brandoncq"
              target="blanck"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 50 50"
                className="p-px cursor-pointer w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12 fill-white hover:fill-zinc-400"
              >
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
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
                className="p-px cursor-pointer w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12 fill-white hover:fill-zinc-400"
              >
                <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z"></path>
              </svg>
            </a>
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
                className="p-px cursor-pointer w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12 fill-white hover:fill-zinc-400"
              >
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
