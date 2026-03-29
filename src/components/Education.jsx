function Education() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-surface-container-low rounded-3xl p-12 overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-primary-container tracking-tight mb-6">
              Academic Excellence
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-on-surface">
                  Bachelor's Degree in Computer Engineering
                </h3>
                <p className="text-on-surface-variant text-lg">
                  Universidad Nacional Jorge Basadre Grohmann
                </p>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span
                  translate="no"
                  className="material-symbols-outlined select-none"
                >
                  event
                </span>
                <span className="font-semibold">Graduating Dec 2025</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                Specialized in Software Engineering and Distributed Systems.
                Actively involved in local research initiatives and technology
                development within the Southern Peru region.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full aspect-video bg-white rounded-xl shadow-2xl flex items-center justify-center">
              <img
                src="/Portafolio/unjbg.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 right-4 text-primary font-bold opacity-50 text-4xl">
                UNJBG
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 -skew-x-12 transform translate-x-1/2"></div>
      </div>
    </section>
  );
}

export default Education;
