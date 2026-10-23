import { useEffect, useRef, useState } from "react";

export default function ProjectsCarousel({
  projects,
  onSelect,
  setOpenModal,
  isModalOpen,
}) {
  const [active, setActive] = useState(Math.floor(projects.length / 2));
  const startX = useRef(0);
  const isDragging = useRef(false);
  const moved = useRef(false);

  const clamp = (num) => Math.max(0, Math.min(projects.length - 1, num));

  useEffect(() => {
    if (isModalOpen) return;

    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "ArrowLeft") {
        setActive((prev) => Math.max(0, Math.min(projects.length - 1, prev - 1)));
      }
      if (e.key === "ArrowRight") {
        setActive((prev) => Math.max(0, Math.min(projects.length - 1, prev + 1)));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projects.length, isModalOpen]);

  const handleStart = (x) => {
    isDragging.current = true;
    moved.current = false;
    startX.current = x;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;

    const diff = x - startX.current;

    if (Math.abs(diff) > 10) {
      moved.current = true;
    }

    if (Math.abs(diff) > 80) {
      if (diff > 0) {
        setActive((prev) => clamp(prev - 1));
      } else {
        setActive((prev) => clamp(prev + 1));
      }
      startX.current = x;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  const openProject = (index) => {
    onSelect({ project: projects[index], index });
    setOpenModal(true);
  };

  const getStyle = (index) => {
    const offset = index - active;

    if (offset === 0) return "z-30 translate-x-0 scale-100 opacity-100 blur-0 grayscale-0";

    if (offset === -1)
      return "z-20 -translate-x-[58%] scale-[0.88] opacity-60 blur-[1px] grayscale-[65%] sm:-translate-x-[68%] md:-translate-x-[76%]";

    if (offset === 1)
      return "z-20 translate-x-[58%] scale-[0.88] opacity-60 blur-[1px] grayscale-[65%] sm:translate-x-[68%] md:translate-x-[76%]";

    if (offset === -2)
      return "z-10 -translate-x-[105%] scale-[0.78] opacity-30 blur-[2px] grayscale-[85%] sm:-translate-x-[125%] md:-translate-x-[140%]";

    if (offset === 2)
      return "z-10 translate-x-[105%] scale-[0.78] opacity-30 blur-[2px] grayscale-[85%] sm:translate-x-[125%] md:translate-x-[140%]";

    return "z-0 translate-x-0 scale-75 opacity-0 pointer-events-none";
  };

  const selected = projects[active];

  return (
    <div className="w-full">
      <div
        className="relative flex h-[25rem] w-full items-center justify-center overflow-hidden sm:h-[29rem] md:h-[33rem]"
        style={{ touchAction: "pan-y" }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {projects.map((project, i) => (
          <div
            key={project.name}
            role="button"
            tabIndex={i === active ? 0 : -1}
            aria-label={`${project.name} case study`}
            onClick={() => {
              if (moved.current) return;
              if (i !== active) {
                setActive(i);
                return;
              }
              openProject(i);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              if (i !== active) {
                setActive(i);
                return;
              }
              openProject(i);
            }}
            className={`absolute cursor-pointer rounded-2xl outline-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface ${getStyle(
              i,
            )}`}
          >
            <div className="relative h-[22rem] w-[16rem] overflow-hidden rounded-2xl bg-primary-container shadow-2xl ring-1 ring-black/5 sm:h-[26rem] sm:w-[20rem] md:h-[30rem] md:w-[22rem]">
              <img
                src={project.images.cover}
                alt={project.name}
                className={`absolute inset-0 h-full w-full select-none object-cover transition-transform duration-700 ${
                  i === active ? "scale-105" : "scale-100"
                }`}
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent" />

              <div
                className={`absolute inset-x-0 bottom-0 p-5 text-white transition-all duration-500 sm:p-6 ${
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate">{project.client}</span>
                </div>

                <h3 className="mt-3 text-xl font-extrabold leading-tight sm:text-2xl">
                  {project.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-white/70">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
                  View case study
                  <span className="material-symbols-outlined text-base">
                    arrow_outward
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
        <button
          onClick={() => setActive((prev) => clamp(prev - 1))}
          disabled={active === 0}
          aria-label="Previous project"
          className="grid h-11 w-11 place-items-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-primary shadow-sm transition-all duration-300 hover:bg-primary-container hover:text-on-primary disabled:pointer-events-none disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-180 fill-current">
            <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.name}
              onClick={() => setActive(i)}
              aria-label={`Go to ${project.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-primary-container"
                  : "w-1.5 bg-outline-variant hover:bg-outline"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setActive((prev) => clamp(prev + 1))}
          disabled={active === projects.length - 1}
          aria-label="Next project"
          className="grid h-11 w-11 place-items-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-primary shadow-sm transition-all duration-300 hover:bg-primary-container hover:text-on-primary disabled:pointer-events-none disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
          </svg>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 px-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-outline">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </p>
        <p className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-outline sm:block">
          Drag, swipe or use arrow keys
        </p>
        <p className="max-w-[45%] truncate text-right text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
          {selected.name}
        </p>
      </div>
    </div>
  );
}
