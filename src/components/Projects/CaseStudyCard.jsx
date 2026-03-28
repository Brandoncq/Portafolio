import { useState, useEffect } from "react";
const CaseStudyCard = ({
  project,
  index,
  total,
  setOpenModal,
  onNext,
  onPrev,
}) => {
  const [animate, setAnimate] = useState(true);
  const [displayProject, setDisplayProject] = useState(project);
  const [displayIndex, setDisplayIndex] = useState(index);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "ArrowRight") {
        onNext();
      }

      if (e.key === "ArrowLeft") {
        onPrev();
      }

      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext, onPrev, setOpenModal]);
  useEffect(() => {
    setAnimate(false); // salida

    const timeout = setTimeout(() => {
      setDisplayProject(project); // recién aquí cambias contenido
      setDisplayIndex(index);
      setAnimate(true); // entrada
    }, 300); // duración salida

    return () => clearTimeout(timeout);
  }, [project]);
  return (
    <div className="w-full h-screen lg:h-full flex flex-col bg-surface">
      {/* HEADER */}
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-6 border-b border-outline-variant/20 bg-zinc-200">
        <h2
          className={`text-sm sm:text-base lg:text-lg font-bold tracking-widest text-primary ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {displayProject.client}
        </h2>

        <div className="flex items-center gap-3">
          {/* PREV */}
          <button
            onClick={onPrev}
            className="hover:bg-black/50 text-white p-2 rounded-full backdrop-blur transition-colors ease-in-out duration-300 group"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 group-hover:fill-white rotate-180"
            >
              <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
            </svg>
          </button>

          {/* NEXT */}
          <button
            onClick={onNext}
            className="hover:bg-black/50 text-white p-2 rounded-full backdrop-blur transition-colors ease-in-out duration-300 group"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:fill-white">
              <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
            </svg>
          </button>

          {/* CLOSE */}
          <button
            className="text-black hover:bg-black/50 hover:text-white px-3 py-1 rounded-full backdrop-blur transition-colors ease-in-out duration-300 group aspect-square select-none"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div className="w-full flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div
          className={`max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center transition-all duration-500 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {" "}
          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <span className="text-xs sm:text-sm text-secondary select-none">
              {displayIndex + 1} / {total}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5 text-primary leading-tight">
              {displayProject.name}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-on-surface-variant">
              {displayProject.description}
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 text-on-surface-variant">
              {displayProject.details}
            </p>
            <div className="flex flex-wrap gap-2 mt-4 mb-8">
              {displayProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {displayProject.live || displayProject.repo ? (
              <div className="flex gap-4 select-none">
                {displayProject.live && (
                  <a
                    href={displayProject.live}
                    target="_blank"
                    className="flex items-center gap-2 font-bold text-primary group text-sm sm:text-base"
                  >
                    EXPLORE PROJECT
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition">
                      arrow_forward
                    </span>
                  </a>
                )}

                {displayProject.repo && (
                  <a
                    href={displayProject.repo}
                    target="_blank"
                    className="flex items-center gap-2 font-bold text-primary group text-sm sm:text-base"
                  >
                    EXPLORE PROJECT
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition">
                      arrow_forward
                    </span>
                  </a>
                )}
              </div>
            ) : (
              <p className="flex items-center gap-2 font-bold text-primary group text-sm sm:text-base select-none">
                Private project
              </p>
            )}
          </div>
          {/* MOCKUPS */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
            {/* background */}
            <div className="absolute w-full h-full bg-surface-container-low translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10"></div>

            {/* laptop */}
            <div className="w-[95%] sm:w-[80%] max-w-[500px]">
              <div className="bg-[#b8b8b8] p-2 sm:p-3 rounded-t-xl shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={displayProject.images.desktop}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="h-2 sm:h-3 bg-gray-300 rounded-b-md"></div>
            </div>

            {/* phone */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 lg:-bottom-6 lg:-left-6 w-24 sm:w-28 lg:w-32">
              <div className="bg-white p-1.5 sm:p-2 rounded-3xl shadow-xl">
                <div className="aspect-[9/19] overflow-hidden rounded-2xl">
                  <img
                    src={displayProject.images.mobile}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
