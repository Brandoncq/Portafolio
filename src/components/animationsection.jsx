import { useRef, useState } from "react";
function AnimationSection() {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const data = {
    Proyectos:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Habilidades:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    SobreMi:
      "https://images.unsplash.com/photo-1545330785-15356daae141?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Contacto:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const [content, setConent] = useState("");
  const contenido = useRef(null);
  const agrandar = (div, type) => {
    div.current.classList.toggle("z-10");
    div.current.classList.toggle("agrandado");
    div.current.classList.toggle("z-20");
    contenido.current.classList.toggle("translate-y-full");
    contenido.current.classList.toggle("top-0");
    setConent(data[type]);
  };
  return (
    <div
      className="w-full flex flex-wrap justify-center overflow-hidden xl:h-96 md:h-72 h-64"
      style={{ backgroundColor: "#1d2127" }}
    >
      <div className="w-1/2 flex flex-wrap relative">
        <div
          onClick={() => agrandar(div1, "Proyectos")}
          ref={div1}
          className="div-panel z-10 lg:absolute lg:top-0 lg:left-0  w-1/2 flex flex-col justify-end p-2 text-white transition-all duration-500 ease-in-out cursor-pointer"
          style={{ backgroundColor: "#1d2127" }}
        >
          <h2 className="font-bold lg:text-xl text-base mb-2 hover:text-yellow-400">
            Proyectos
          </h2>
          <p className="text-left m-0 w-full p-0 text-xs font-light mb-4">
            Proyectos FullStack.
          </p>
        </div>
        <div
          onClick={() => agrandar(div2, "Habilidades")}
          ref={div2}
          className="div-panel z-10 lg:absolute lg:top-0 lg:right-0 w-1/2 flex flex-col justify-end p-2 text-yellow-200 blockquotes transition-all duration-500 ease-in-out cursor-pointer"
          style={{ backgroundColor: "#1a1e23" }}
        >
          <h2 className="font-bold lg:text-xl text-base mb-2 hover:text-yellow-400">
            Habilidades
          </h2>
          <p className="text-left m-0 w-full p-0 text-xs font-light mb-4">
            Dominio de Frameworks.
          </p>
        </div>
        <div
          onClick={() => agrandar(div3, "SobreMi")}
          ref={div3}
          className="div-panel z-10 lg:absolute lg:bottom-0 lg:left-0 w-1/2 flex flex-col justify-end p-2 text-yellow-200 blockquotes transition-all duration-500 ease-in-out cursor-pointer"
          style={{ backgroundColor: "#1a1e23" }}
        >
          <h2 className="font-bold lg:text-xl text-base mb-2 hover:text-yellow-400">
            Sobre Mí
          </h2>
          <p className="text-left m-0 w-full p-0 text-xs font-light mb-4">
            Descripcion mia.
          </p>
        </div>
        <div
          onClick={() => agrandar(div4, "Contacto")}
          ref={div4}
          className="div-panel z-10 lg:absolute lg:bottom-0 lg:right-0 w-1/2 flex flex-col justify-end p-2 text-white transition-all duration-500 ease-in-out cursor-pointer"
          style={{ backgroundColor: "#1d2127" }}
        >
          <h2 className="font-bold lg:text-xl text-base mb-2 hover:text-yellow-400">
            Contacto
          </h2>
          <p className="text-left m-0 w-full p-0 text-xs font-light lg:mb-4">
            Contacto Redes Sociales.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center  xl:h-96 md:h-72 h-64 relative">
        <div className="w-full flex p-1 flex-col justify-center items-center h-full absolute z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="242"
            height="325"
            fill="none"
            viewBox="0 0 242 325"
            className="w-1/5 h-auto"
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
        </div>
        <div
          className="absolute flex justify-center items-center w-full h-full translate-y-full z-20 transition-all duration-500 ease-in-out top-0 left-0 p-5"
          style={{ backgroundColor: "#1d2127" }}
          ref={contenido}
        >
          <img src={content} alt="" className="w-full h-auto hover:grayscale" />
        </div>
      </div>
    </div>
  );
}

export default AnimationSection;
