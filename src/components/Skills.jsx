export default function Skills() {
  const capabilities = [
    {
      title: "Backend & data",
      description:
        "APIs, data models and business logic designed to stay clear as the product grows.",
      tools: ["Node.js", "Laravel", "PostgreSQL", "Redis"],
    },
    {
      title: "Real-time systems",
      description:
        "Live updates, geolocation and high-concurrency flows that hold up under real usage.",
      tools: ["WebSockets", "Redis", "Leaflet"],
    },
    {
      title: "Product interfaces",
      description:
        "Web and mobile experiences built for speed, clarity and everyday use.",
      tools: ["React", "Next.js", "React Native", "Flutter"],
    },
    {
      title: "Cloud & delivery",
      description:
        "Deployment and operations with a focus on stability, observability and uptime.",
      tools: ["AWS", "Docker", "Linux", "Nginx"],
    },
    {
      title: "Integrations",
      description:
        "Payments, maps, authentication and third-party services connected without friction.",
      tools: ["REST APIs", "OAuth 2.0", "PayPal", "Mapbox"],
    },
  ];

  const principles = [
    "Clarity over complexity",
    "Performance by design",
    "Ownership from start to finish",
  ];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-8 md:py-28"
      id="skills"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(175,200,240,0.12), transparent 45%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#afc8f0]/70">
            <span className="h-px w-8 bg-[#afc8f0]/40" />
            Capabilities
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            What I bring to a project
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
            I don't start with a list of tools. I start with the problem, then
            choose what keeps the system simple, fast and maintainable.
          </p>

          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
            The result is software that does its job quietly — and keeps doing
            it as the business changes.
          </p>

          <ul className="mt-9 space-y-3">
            {principles.map((principle) => (
              <li
                key={principle}
                className="flex items-center gap-3 text-sm font-medium text-slate-300"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <span className="material-symbols-outlined text-[13px] text-[#afc8f0]">
                    check
                  </span>
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="group flex gap-5 py-6 sm:gap-8 sm:py-7"
              >
                <span className="pt-1 text-[11px] font-bold tabular-nums tracking-[0.15em] text-[#afc8f0]/50 transition-colors duration-300 group-hover:text-[#afc8f0]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 sm:text-xl">
                    {capability.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                    {capability.description}
                  </p>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {capability.tools.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
