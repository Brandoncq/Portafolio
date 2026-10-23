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
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") setOpenModal(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, setOpenModal]);

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setDisplayProject(project);
      setDisplayIndex(index);
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [project, index]);

  const externalLink = displayProject.live || displayProject.repo;

  return (
    <div className="flex h-full w-full flex-col bg-surface">
      <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-outline-variant/25 bg-surface/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-10">
        <div className="min-w-0">
          <p className="truncate text-[9px] font-bold uppercase tracking-[0.22em] text-outline">
            {displayProject.client}
          </p>
          <p className="mt-0.5 text-sm font-bold text-primary">
            Case Study{" "}
            <span className="font-medium text-outline">
              / {String(displayIndex + 1).padStart(2, "0")} of{" "}
              {String(total).padStart(2, "0")}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            aria-label="Previous project"
            className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-primary transition-all duration-300 hover:bg-primary-container hover:text-on-primary"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 rotate-180 fill-current">
              <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
            </svg>
          </button>

          <button
            onClick={onNext}
            aria-label="Next project"
            className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-primary transition-all duration-300 hover:bg-primary-container hover:text-on-primary"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" />
            </svg>
          </button>

          <span className="mx-1 hidden h-6 w-px bg-outline-variant/40 sm:block" />

          <button
            onClick={() => setOpenModal(false)}
            aria-label="Close case study"
            className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant/40 bg-surface-container-lowest text-primary transition-all duration-300 hover:bg-primary-container hover:text-on-primary"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-14">
          <div
            className={`grid items-center gap-10 transition-all duration-500 lg:grid-cols-2 lg:gap-16 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-outline">
                  Featured Project
                </span>
                <span className="h-px flex-1 bg-outline-variant/40" />
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight text-primary-container sm:text-4xl lg:text-5xl xl:text-6xl">
                {displayProject.name}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-on-surface-variant sm:text-lg">
                {displayProject.description}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    The Solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                    {displayProject.details}
                  </p>
                </div>

                {displayProject.impact && (
                  <div className="rounded-xl border border-primary/10 bg-surface-container-low p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                      Impact
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                      {displayProject.impact}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-outline">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {displayProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-9">
                {externalLink ? (
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-on-primary shadow-lg shadow-primary-container/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                  >
                    {displayProject.live ? "Explore Project" : "View Live Site"}
                    <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      arrow_outward
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-low px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-outline">
                    <span className="material-symbols-outlined text-base">
                      lock
                    </span>
                    Private project
                  </span>
                )}
              </div>
            </div>

            <div className="relative flex justify-center pb-10 pt-2 lg:pb-0">
              <div className="absolute inset-x-4 inset-y-0 -z-10 rounded-3xl bg-surface-container-low" />

              <div className="relative w-full max-w-[520px]">
                <div className="overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-2xl">
                  <div className="flex items-center gap-3 border-b border-outline-variant/30 bg-surface-container-low px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="mx-auto flex-1 truncate rounded-md bg-surface-container-high px-3 py-1 text-center text-[9px] font-medium text-outline">
                      {displayProject.images.desktop}
                    </div>
                  </div>
                  <div className="aspect-[16/9] overflow-hidden bg-surface-container-high">
                    <img
                      src={displayProject.images.desktop}
                      alt={`${displayProject.name} desktop preview`}
                      className="h-full w-full select-none object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-3 w-24 sm:w-28 lg:-bottom-10 lg:-left-8 lg:w-32">
                  <div className="rounded-[1.7rem] bg-gradient-to-br from-[#f1f2f6] via-[#e3e5ea] to-[#cfd3db] p-1.5 shadow-xl ring-1 ring-black/[0.06]">
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[1.35rem] bg-black">
                      <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/80" />
                      <img
                        src={displayProject.images.mobile}
                        alt={`${displayProject.name} mobile preview`}
                        className="h-full w-full select-none object-cover"
                      />
                    </div>
                  </div>
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
