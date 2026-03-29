export default function Hero() {
  return (
    <section className="relative pt-24 pb-24 px-4 w-full mx-auto overflow-hidden h-lvh">
      {/* 🔥 BACKGROUND IMAGE */}
      <img
        src="background.jpg"
        className="absolute right-0 top-0 h-full w-full object-cover opacity-20 pointer-events-none select-none"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />

      {/* 🔥 GRADIENT para que no rompa el texto */}
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l to-zinc-50/80 via-slate-300/30 from-transparent"></div>

      <div className="relative z-10 max-w-7xl h-full flex flex-col justify-center lg:px-16">
        <div>
          <span className="inline-block py-1 px-3 bg-secondary-container rounded-full text-xs font-bold mb-6">
            Available for Projects
          </span>
        </div>

        <h1
          translate="no"
          className="text-6xl md:text-7xl font-extrabold leading-[0.9] mb-8"
        >
          Davis Brandon <br /> Ccoica
        </h1>

        <p className="text-2xl mb-10 max-w-2xl">
          Full Stack Developer Focused on{" "}
          <span className="font-semibold">Scalable Real-Time Applications</span>
        </p>

        {/* botones */}
        <div className="flex max-lg:flex-col lg:flex-wrap gap-4">
          <a
            href="mailto:brandoncq036@hotmail.com"
            className="flex items-center gap-2 bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all active:scale-95 ease-in-out duration-300"
          >
            <span className="material-symbols-outlined">mail</span>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/davis-ccoica-quispe-54b344289"
            target="_blank"
            className="flex items-center gap-2 text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl bg-surface-container-low transition-all active:scale-95 ease-in-out duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-slate-900 stroke-slate-900"
            >
              <path d="M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM11 19h1a1 1 0 0 0 1-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z" />
              <path
                fillRule="evenodd"
                d="M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z"
                clipRule="evenodd"
              />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
