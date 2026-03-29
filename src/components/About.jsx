export default function About() {
  return (
    <section className="py-24 bg-surface-container-low" id="about-experience">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Sidebar: Identity & Education */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-4xl font-extrabold text-primary-container tracking-tight">
                Biography
              </h2>
              <div className="mt-4 h-1 w-20 bg-primary-container mb-8"></div>
              <p className="text-3xl font-light text-on-surface leading-snug">
                Based in Tacna, Peru.
              </p>
              <p
                translate="no"
                className="text-3xl mt-4 font-semibold text-primary-container underline decoration-primary-fixed-dim decoration-4 underline-offset-8 italic select-none"
              >
                "nieto de campesinos"
              </p>
            </div>
            <div>
              <p className="text-xl text-on-surface-variant leading-relaxed font-body">
                Software developer focused on building scalable and reliable
                systems. Experience working across backend services, mobile
                applications, and cloud infrastructure, with a strong emphasis
                on performance, stability, and real-world problem solving.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-surface rounded-xl border border-outline-variant/15 shadow-sm">
                <span
                  translate="no"
                  className="material-symbols-outlined text-primary-container text-4xl mb-4 select-none"
                >
                  location_on
                </span>
                <h4 className="font-bold text-lg mb-1">Tacna, Peru</h4>
                <p className="text-xs text-outline uppercase font-bold tracking-widest">
                  Heroic City
                </p>
              </div>
              <div className="p-6 bg-surface rounded-xl border border-outline-variant/15 shadow-sm">
                <span
                  translate="no"
                  className="material-symbols-outlined text-primary-container text-4xl mb-4 select-none"
                >
                  school
                </span>
                <h4 className="font-bold text-lg mb-1">Computer Engineering</h4>
                <p className="text-on-surface-variant text-sm">
                  UNJBG • Class of 2025
                </p>
              </div>
            </div>
          </div>
          {/* Right Column: Narrative & Experience */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="font-extrabold text-primary-container uppercase tracking-widest text-sm">
                  Professional Journey
                </h3>
                <div className="flex-1 h-px bg-outline-variant/30"></div>
              </div>
              {/* Exp 1 */}
              <div className="group relative p-8 bg-surface-container-lowest rounded-xl border border-transparent border-primary/10 shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-primary-container">
                      Rivercon
                    </h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">
                      Full Stack Developer & Systems Analyst
                    </p>
                  </div>
                  <p className="text-sm font-bold text-on-surface-variant mt-2 md:mt-0">
                    Mar 2026 - Present
                  </p>
                </div>

                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Working on enterprise systems across SAP, mobile apps, and
                  backend services. Focused on debugging, improving stability,
                  and maintaining production-level applications.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    Flutter
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    PHP
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    SAP
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
              <div className="group relative p-8 bg-surface-container-lowest rounded-xl border border-transparent border-primary/10 shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-primary-container">
                      N&amp;V Soluciones E.I.R.L.
                    </h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">
                      Full Stack Developer
                    </p>
                  </div>
                  <p className="text-sm font-bold text-on-surface-variant mt-2 md:mt-0">
                    Jun 2025 - Feb 2026
                  </p>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Leading the development of high-concurrency business systems.
                  Managed 1000+ business records with optimized data structures.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    WebSockets
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    Node.js
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    PostgreSQL
                  </span>
                </div>
              </div>
              {/* Exp 2 */}
              <div className="group relative p-8 bg-surface-container-lowest rounded-xl border border-transparent border-primary/10 shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-primary-container">
                      Neon HouseLED
                    </h4>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">
                      Full Stack Developer
                    </p>
                  </div>
                  <p className="text-sm font-bold text-on-surface-variant mt-2 md:mt-0">
                    Feb 2025 - Jun 2025
                  </p>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Focused on performance engineering and modernizing frontend
                  architecture. Significant improvements in page load speeds and
                  SEO rankings.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    Laravel
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    Next.js
                  </span>
                  <span className="text-xs font-bold bg-surface-container-high px-3 py-1.5 rounded-full">
                    TailwindCSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
