import { useState, useRef } from "react";

export default function ProjectsCarousel({ projects, onSelect, setOpenModal }) {
  const [active, setActive] = useState(2);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const moved = useRef(false);

  const clamp = (num) => Math.max(0, Math.min(projects.length - 1, num));

  // 👉 START
  const handleStart = (x) => {
    isDragging.current = true;
    moved.current = false;
    startX.current = x;
  };

  // 👉 MOVE
  const handleMove = (x) => {
    if (!isDragging.current) return;

    const diff = x - startX.current;

    // 🔥 si se mueve un poco → ya es drag, no click
    if (Math.abs(diff) > 10) {
      moved.current = true;
    }

    // 🔥 threshold real
    if (Math.abs(diff) > 80) {
      if (diff > 0) {
        setActive((prev) => clamp(prev - 1));
      } else {
        setActive((prev) => clamp(prev + 1));
      }
      startX.current = x;
    }
  };

  // 👉 END
  const handleEnd = () => {
    isDragging.current = false;
  };

  const getStyle = (index) => {
    const offset = index - active;

    if (offset === 0)
      return "scale-110 z-30 translate-x-0 opacity-100 blur-0 grayscale-0";

    if (offset === -1)
      return "scale-95 z-20 -translate-x-44 opacity-70 blur-[1px] grayscale-[75%]";

    if (offset === 1)
      return "scale-95 z-20 translate-x-44 opacity-70 blur-[1px] grayscale-[75%]";

    if (offset === -2)
      return "scale-80 z-10 -translate-x-80 opacity-40 blur-[3px] grayscale-[90%]";

    if (offset === 2)
      return "scale-80 z-10 translate-x-80 opacity-40 blur-[3px] grayscale-[90%]";

    return "hidden";
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* BOTONES */}
      <button
        onClick={() => setActive((prev) => clamp(prev - 1))}
        className="absolute left-4 z-40 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full backdrop-blur aspect-square transition-colors ease-in-out duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 24 24"
          className="w-4 h-4 aspect-square fill-white rotate-180"
        >
          <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
        </svg>
      </button>

      <button
        onClick={() => setActive((prev) => clamp(prev + 1))}
        className="absolute right-4 z-40 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full backdrop-blur aspect-square transition-colors ease-in-out duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 24 24"
          className="w-4 h-4 aspect-square fill-white"
        >
          <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
        </svg>
      </button>

      {/* CONTENEDOR */}
      <div
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
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
            key={i}
            onClick={() => {
              if (moved.current) return;
              onSelect({ project, index: i });
              setOpenModal(true);
            }}
            className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${getStyle(i)}`}
          >
            <div className="relative overflow-hidden shadow-xl">
              <img
                src={project.images.cover}
                className="w-56 sm:w-64 md:w-72 h-80 sm:h-96 object-cover select-none"
                draggable={false}
              />

              {/* OVERLAY */}
              <div
                className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 ${
                  i === active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-sm sm:text-lg font-medium uppercase text-white tracking-wide text-center">
                  {project.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
