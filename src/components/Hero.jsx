export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-surface pb-20 pt-28 lg:pb-16">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="background.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none h-full w-full select-none object-cover opacity-[0.16]"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/50" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,31,63,0.12) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl">
          <div
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-outline"
            style={{ animation: "heroFade 0.7s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <span className="h-px w-8 bg-primary-container" />
            Full Stack Developer · Tacna, Peru
          </div>

          <h1
            translate="no"
            className="mt-7 text-5xl font-extrabold leading-[0.95] tracking-tight text-primary sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              animation: "heroFade 0.8s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "80ms",
            }}
          >
            Davis Brandon <br />
            <span className="bg-gradient-to-r from-primary via-[#2f486a] to-[#476083] bg-clip-text text-transparent">
              Ccoica
            </span>
          </h1>

          <p
            className="mt-7 max-w-2xl text-lg leading-snug text-on-surface-variant sm:text-2xl"
            style={{
              animation: "heroFade 0.8s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "160ms",
            }}
          >
            I turn complex requirements into{" "}
            <span className="font-semibold text-primary">
              reliable, real-time applications
            </span>{" "}
            — from backend architecture to polished interfaces.
          </p>

          <div
            className="mt-9 flex max-w-xl items-stretch divide-x divide-outline-variant/30 border-y border-outline-variant/25"
            style={{
              animation: "heroFade 0.8s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "220ms",
            }}
          >
            {[
              { title: "End-to-end", sub: "API to interface" },
              { title: "Scalable", sub: "Built for growth" },
              { title: "Reliable", sub: "Stable in production" },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`min-w-0 flex-1 py-3.5 ${
                  i === 0 ? "pr-4" : i === 2 ? "pl-4" : "px-4"
                }`}
              >
                <p className="text-xs font-bold tracking-tight text-primary">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-outline">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{
              animation: "heroFade 0.8s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "280ms",
            }}
          >
            <a
              href="mailto:brandoncq036@hotmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-7 py-4 text-base font-bold text-on-primary shadow-lg shadow-primary-container/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            >
              <span translate="no" className="material-symbols-outlined text-xl">
                mail
              </span>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/davis-ccoica-quispe-54b344289"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant/50 bg-surface-container-lowest/80 px-7 py-4 text-base font-bold text-on-surface backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-slate-900 stroke-slate-900"
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
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-3 py-4 text-sm font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:text-surface-tint sm:px-4"
            >
              View Projects
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-y-0.5">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about-experience"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-outline transition-colors hover:text-primary lg:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-outline-variant to-transparent" />
      </a>
    </section>
  );
}
