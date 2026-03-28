export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Laravel (PHP)", "Python"],
    },
    {
      title: "Mobile",
      skills: ["React Native (Expo)", "Flutter"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3)", "Docker", "Linux", "Nginx"],
    },
    {
      title: "Integrations",
      skills: [
        "REST APIs",
        "WebSockets",
        "OAuth 2.0",
        "Google Maps",
        "Mapbox",
        "PayPal API",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-950" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-4 text-white">
            Tech Stack
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#afc8f0]">
            Technologies I use to design, build and scale production-ready
            systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-slate-900/90 border border-white/10 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm font-bold bg-slate-800 px-3 py-1.5 rounded-full text-[#afc8f0]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
