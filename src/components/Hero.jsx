export default function Hero() {
  return (
    <section className="relative pt-24 pb-24 px-4 w-full mx-auto overflow-hidden h-lvh">
      {/* 🔥 BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute right-0 top-0 h-full w-full object-cover opacity-20 pointer-events-none select-none"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />

      {/* 🔥 GRADIENT para que no rompa el texto */}
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l to-zinc-50/80 via-slate-300 from-transparent"></div>

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
      </div>
    </section>
  );
}
