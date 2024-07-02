import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const Work = () => {
  const estimacionTiemposRef = useRef(null);
  const gestorProyectosRef = useRef(null);
  const alquilerDisfracesRef = useRef(null);
  const tiendafoodRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
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

  return (
    <div className="m-0 p-0 w-full">
      <div className="m-0 p-0 w-full xl:h-screen flex items-center">
        <div className="flex flex-wrap items-center justify-center py-0 m-0 px-5 w-full relative xl:h-full">
          <div className="flex items-center justify-center p-0 m-0 w-full xl:absolute lg:top-0 mt-20">
            <div className="lg:w-1/3 w-1/2 flex flex-col items-center justify-center m-0 bg-slate-300 p-1 lg:mt-16">
              <h1
                className="font-bold lg:text-5xl text-2xl m-0 hidden-effect"
                style={{ color: "#1d2127" }}
              >
                PROYECTOS
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center p-0 m-0 w-full">
            <div className="flex flex-col justify-center m-0 lg:w-1/2 w-full p-8 border-8 border-slate-300 mt-6">
              <div
                onClick={() => scrollToSection(estimacionTiemposRef)}
                className="font-medium lg:text-2xl text-xl m-0 text-yellow-200 mt-2 cursor-pointer hidden-effect hover:text-yellow-400"
              >
                Herramienta de Estimación de Tiempos CPM - PERT
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-white mb-2 hidden-effect">
                Software para calcular y optimizar tiempos de proyectos
                utilizando los métodos CPM y PERT.
              </p>
              <div
                onClick={() => scrollToSection(gestorProyectosRef)}
                className="font-medium lg:text-2xl text-xl m-0 text-yellow-200 mt-2 cursor-pointer hidden-effect hover:text-yellow-400"
              >
                Gestor de Galerías de Proyectos
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-white mb-2 hidden-effect">
                Plataforma para gestionar y mostrar proyectos en forma de
                galerías de imágenes con descripciones.
              </p>
              <div
                onClick={() => scrollToSection(alquilerDisfracesRef)}
                className="font-medium lg:text-2xl text-xl m-0 text-yellow-200 mt-2 cursor-pointer hidden-effect hover:text-yellow-400"
              >
                Sistema de Alquiler de Disfraces
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-white mb-2 hidden-effect">
                Aplicación para gestionar el inventario y las reservas de
                disfraces para eventos.
              </p>
              <div
                onClick={() => scrollToSection(tiendafoodRef)}
                className="font-medium lg:text-2xl text-xl m-0 text-yellow-200 mt-2 cursor-pointer hidden-effect hover:text-yellow-400"
              >
                Digital Food Marketplace
              </div>
              <p className="font-base lg:text-sm text-xs m-0 text-white mb-2 hidden-effect">
                Una plataforma web intuitiva que ofrece una variedad de
                productos alimenticios y facilita pagos seguros a través de
                PayPal y Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 p-0 w-full flex items-center">
        <div
          className="m-0 w-full flex flex-wrap justify-center lg:p-20"
          ref={estimacionTiemposRef}
        >
          <div className="m-0 lg:w-3/4 w-full  flex flex-col justify-center lg:px-0 px-5 lg:mt-0 mt-5">
            <h2 className="font-medium lg:text-5xl text-3xl m-0 text-yellow-200 my-4 hidden-effect">
              Herramienta de Estimación de Tiempos CPM - PERT
            </h2>
            <p className="font-base lg:text-sm text-xs m-0 text-white mt-2">
              Esta aplicación, desarrollada en React, permite a los usuarios
              gestionar proyectos mediante las secciones PERT y CPM. Los
              usuarios especifican la cantidad de actividades, generando una
              tabla para completar los precedentes y tiempos. En PERT, se
              ingresan tres tiempos: optimista, pesimista y probable. La
              herramienta grafica la ruta crítica y muestra todas las posibles
              rutas críticas si hay más de una. También calcula la varianza y
              permite determinar la probabilidad de completar el proyecto en un
              tiempo específico 'x'.
            </p>
            <p className="font-base lg:text-sm text-xs m-0 text-white mt-2">
              URL:
              <a
                href="https://brandoncq.github.io/EstimaciondeTiempo/#/"
                target="blanck"
                className="text-yellow-200 hover:text-yellow-400"
              >
                Estimacion de Tiempo
              </a>
            </p>
          </div>
          <div className="m-0 w-full  flex flex-col justify-center p-5 h-screen mt-10">
            <iframe
              src="https://brandoncq.github.io/EstimaciondeTiempo/#/cpm"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="m-0 p-0 w-full flex items-center justify-center"
        ref={gestorProyectosRef}
      >
        <div className="m-0 w-full flex flex-wrap justify-center lg:p-20">
          <div className="m-0 lg:w-3/4 w-full  flex flex-col justify-center lg:px-0 px-5 lg:mt-0 mt-5">
            <h2 className="font-medium lg:text-5xl text-3xl m-0 text-yellow-200 my-4 hidden-effect">
              Gestor de Galerías de Proyectos
            </h2>
            <p className="font-base lg:text-sm text-xs m-0 text-white mt-2">
              El Gestor de Galerías de Proyectos es una plataforma desarrollada
              con Next.js que permite a los usuarios visualizar, agregar, editar
              y eliminar proyectos en forma de galerías de imágenes con
              descripciones. Cada proyecto se presenta en una galería de
              imágenes que los usuarios pueden navegar, ofreciendo una
              visualización atractiva y organizada. La plataforma cuenta con una
              sección de administración conectada a una base de datos, donde los
              usuarios pueden gestionar fácilmente sus proyectos: agregar nuevas
              galerías de imágenes, editar los detalles de proyectos existentes
              o eliminarlos según sea necesario. Las imágenes se almacenan en
              Cloudinary, y la aplicación crea una API para obtener la
              información necesaria para el portafolio, mostrando cada proyecto
              de manera eficiente y visualmente impactante. Esta herramienta es
              ideal para portafolios creativos como diseñadores, fotógrafos y
              arquitectos.
            </p>
          </div>
          <div className="m-0 w-full flex flex-wrap justify-center lg:p-5 mt-10">
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center p-5">
              <h3 className="font-light lg:text-2xl text-xl m-0 text-yellow-200 mt-2 hidden-effect">
                Dashboard de Gestión de Proyectos
              </h3>
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719380367/samples/landscapes/imagen_2024-06-26_003917850_oqv4jy.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719380277/samples/landscapes/Captura_de_pantalla_2024-06-26_003351_gdqbfj.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center p-5">
              <h3 className="font-light lg:text-2xl text-xl m-0 text-yellow-200 mt-2 hidden-effect">
                Galería de Proyectos
              </h3>
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719380814/samples/landscapes/imagen_2024-06-26_004643583_jry7nx.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719380869/samples/landscapes/Captura_de_pantalla_2024-06-26_004716_ozcmty.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-0 p-0 w-full flex items-center justify-center"
        ref={alquilerDisfracesRef}
      >
        <div className="m-0 w-full flex flex-wrap justify-center lg:p-20">
          <div className="m-0 lg:w-3/4 w-full  flex flex-col justify-center lg:px-0 px-5 lg:mt-0 mt-5">
            <h2 className="font-medium lg:text-5xl text-3xl m-0 text-yellow-200 my-4 hidden-effect">
              Sistema de Alquiler de Disfraces
            </h2>
            <p className="font-base lg:text-sm text-xs m-0 text-white mt-2">
              El Sistema de Alquiler de Disfraces es una aplicación que permite
              gestionar el alquiler de disfraces de manera eficiente. Los
              usuarios pueden agregar nuevos artículos (disfraces) al inventario
              y llevar un control detallado del estado de cada alquiler. La
              aplicación cuenta con un panel que muestra el estado de los
              alquileres, indicando si el alquiler está vigente, si se ha
              cumplido el plazo o si ha vencido. Esto facilita la regulación y
              el mantenimiento del control sobre los disfraces alquilados,
              permitiendo aplicar cargos adicionales en caso de retraso en la
              devolución.
            </p>
          </div>
          <div className="m-0 w-full flex flex-wrap justify-center lg:p-5 mt-10">
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center p-5">
              <h3 className="font-light lg:text-2xl text-xl m-0 text-yellow-200 mt-2 hidden-effect">
                Panel de Gestión de Disfraces
              </h3>
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719381947/samples/landscapes/Captura_de_pantalla_2024-06-26_010517_psk5bh.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center p-5">
              <h3 className="font-light lg:text-2xl text-xl m-0 text-yellow-200 mt-2 hidden-effect">
                Estado de Alquileres
              </h3>
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719381947/samples/landscapes/Captura_de_pantalla_2024-06-26_010454_yxkkiq.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="m-0 p-0 w-full flex items-center justify-center"
        ref={tiendafoodRef}
      >
        <div className="m-0 w-full flex flex-wrap justify-center lg:p-20">
          <div className="m-0 lg:w-3/4 w-full  flex flex-col justify-center lg:px-0 px-5 lg:mt-0 mt-5">
            <h2 className="font-medium lg:text-5xl text-3xl m-0 text-yellow-200 my-4 hidden-effect">
              Digital Food Marketplace
            </h2>
            <p className="font-base lg:text-sm text-xs m-0 text-white mt-2">
              Es una plataforma web diseñada para la venta y distribución de una
              amplia variedad de productos alimenticios. Los usuarios pueden
              explorar un catálogo diverso de comidas, desde platos preparados
              hasta ingredientes frescos, con descripciones detalladas y
              atractivas imágenes. La plataforma integra pasarelas de pago
              PayPal y Stripe, asegurando transacciones rápidas y seguras. Con
              un diseño responsive y una experiencia de usuario intuitiva,
              garantiza una navegación fluida en cualquier dispositivo. La
              seguridad de los datos está priorizada mediante encriptación y
              protocolos avanzados.
            </p>
          </div>
          <div className="m-0 w-full flex flex-wrap justify-center lg:p-5 mt-10">
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center p-5">
              <h3 className="font-light lg:text-2xl text-xl m-0 text-yellow-200 mt-2 hidden-effect">
                Interfaz de Productos
              </h3>
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719948970/samples/landscapes/Captura_de_pantalla_2024-07-02_123630_supubg.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-wrap justify-center p-5">
              <h3 className="font-light lg:text-2xl text-xl m-0 text-yellow-200 mt-2 hidden-effect">
                Pago con Paypal
              </h3>
              <img
                src="https://res.cloudinary.com/dmo6ofy2z/image/upload/v1719948946/samples/landscapes/pixelcut-export_3_ramsg1.png"
                alt=""
                className="w-full p-2 shadow-xl shadow-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
