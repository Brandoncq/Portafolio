import SvgProyecto from "./svgproyecto";

function Proyectos() {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-1/2 border border-white rounded-lg">
        <SvgProyecto></SvgProyecto>
      </div>
      <div className="w-1/2"></div>
      <h1 className="text-white text-5xl">Proyectos</h1>
    </div>
  );
}

export default Proyectos;
