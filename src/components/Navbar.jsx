import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about-experience");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = ["about-experience", "projects", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-80px 0px 0px 0px", // compensa navbar fijo
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (section) =>
    `font-['Manrope'] font-bold tracking-tight transition-all ${
      activeSection === section
        ? "text-[#001f3f] border-b-2 border-[#001f3f] pb-1"
        : "text-[#43474e] hover:text-[#001f3f]"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f9f9fe]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,31,63,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-tighter text-[#001f3f] font-['Manrope']">
          Davis Ccoica
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 select-none">
          <button
            onClick={() => scrollToSection("about-experience")}
            className={getLinkClass("about-experience")}
          >
            About & Experience
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className={getLinkClass("projects")}
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className={getLinkClass("skills")}
          >
            Skills
          </button>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 select-none">
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2 rounded-lg font-bold transition-all active:scale-95 ${
              activeSection === "contact"
                ? "bg-[#001f3f] text-white"
                : "bg-primary-container text-on-primary hover:opacity-90"
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
