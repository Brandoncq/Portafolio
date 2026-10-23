import { useState } from "react";
import ProjectsCarousel from "./Carousel/ProjectsCarousel";
import CaseStudyCard from "./Projects/CaseStudyCard";
import Modal from "./Modal/Modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const projects = [
    {
      name: "News Management System",
      client: "DEC S.A.C.",
      description: "Role-based editorial workflow for controlled publishing",
      details:
        "Designed and implemented a content management system with a structured approval workflow. Enabled role-based access (reporters, editors, admins) to ensure controlled publishing, reduce content errors, and improve editorial efficiency.",
      impact:
        "Improved editorial workflow efficiency and reduced content publishing errors through role-based validation and approval processes.",
      tech: ["Laravel", "Vite", "TailwindCSS", "MySQL"],
      images: {
        cover: "news.jpg",
        desktop: "news_desktop.png",
        mobile: "news_mobile.png",
      },
    },
    {
      name: "Survey Management System",
      client: "DEC S.A.C.",
      description: "Real-time geolocation tracking with anti-fraud validation",
      details:
        "Built a field data collection platform with real-time geolocation tracking and map-based monitoring using Leaflet. Implemented proximity validation (20m radius) to prevent fraudulent submissions and ensure data accuracy in distributed environments.",
      impact:
        "Reduced fraudulent survey submissions and increased data reliability by enforcing geolocation-based validation in field operations.",
      tech: ["Laravel", "MySQL", "Leaflet", "JavaScript"],
      images: {
        cover: "survey.jpg",
        desktop: "survey_desktop.png",
        mobile: "survey_mobile.png",
      },
    },
    {
      name: "TamaTacna",
      client: "Research Program - University",
      description: "Tourism platform with dynamic maps and route generation",
      details:
        "Developed a web and mobile tourism platform featuring interactive maps and dynamic route generation. Optimized media delivery (images and 360° content) and backend performance to ensure smooth user experience across devices.",
      impact:
        "Enhanced user experience and engagement by delivering optimized multimedia content and efficient route generation across web and mobile platforms.",
      tech: ["Next.js", "PostgreSQL", "Mapbox", "React Native"],
      images: {
        cover: "tamatacna.jpg",
        desktop: "tamatacna_desktop.png",
        mobile: "tamatacna_mobile.png",
      },
      live: "https://play.google.com/store/apps/details?id=com.silverhunk.tamatacnaguia",
    },
    {
      name: "Tech E-commerce Platform",
      client: "Academic Project",
      description: "Full-stack e-commerce with secure payments",
      details:
        "Built a full-stack e-commerce platform with secure authentication (JWT) and PayPal integration. Designed core business logic including product management, cart functionality, and transaction handling, focusing on security and scalability.",
      impact:
        "Implemented secure payment processing and authentication flows, improving transaction reliability and protecting user data.",
      tech: ["React", "Node.js", "Express", "MySQL", "JWT", "PayPal API"],
      images: {
        cover: "ecommerce.jpg",
        desktop: "ecommerce_desktop.png",
        mobile: "ecommerce_mobile.png",
      },
      repo: "https://ecomerce-five-lilac.vercel.app",
    },
    {
      name: "AI Email Classifier",
      client: "Personal Project",
      description: "LLM-based email classification system",
      details:
        "Developed an intelligent email classification system using Large Language Models. Implemented a FastAPI backend with Redis caching to reduce response times, and containerized the application using Docker for scalable deployment.",
      impact:
        "Reduced email processing time and improved classification efficiency through LLM-based automation and caching strategies.",
      tech: ["React", "FastAPI", "Redis", "Docker", "LLMs"],
      images: {
        cover: "sumamail.jpg",
        desktop: "mail_desktop.png",
        mobile: "mail_mobile.png",
      },
    },
  ];
  return (
    <section className="relative py-24 md:py-28" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-outline">
              <span className="h-px w-10 bg-primary-container" />
              Selected Work
            </div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-container md:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant md:text-lg">
              Real-world applications focused on scalability, performance, and
              user experience.
            </p>
          </div>

          <div className="flex items-center gap-4 md:pb-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-outline">
              {String(projects.length).padStart(2, "0")} Projects
            </span>
            <span className="hidden h-8 w-px bg-outline-variant/40 md:block" />
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-outline md:block">
              2024 — 2026
            </span>
          </div>
        </div>

        <ProjectsCarousel
          projects={projects}
          onSelect={(project) => setSelectedProject(project)}
          setOpenModal={setOpenModal}
          isModalOpen={openModal}
        />
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => {
          setSelectedProject(null);
          setOpenModal(false);
        }}
        className="h-lvh w-full overflow-hidden bg-surface lg:h-full"
        hideCloseButton={true}
      >
        {selectedProject && (
          <CaseStudyCard
            setOpenModal={setOpenModal}
            index={selectedProject.index}
            total={projects.length}
            project={selectedProject.project}
            onNext={() =>
              setSelectedProject((prev) => ({
                project: projects[(prev.index + 1) % projects.length],
                index: (prev.index + 1) % projects.length,
              }))
            }
            onPrev={() =>
              setSelectedProject((prev) => ({
                project:
                  projects[
                    (prev.index - 1 + projects.length) % projects.length
                  ],
                index: (prev.index - 1 + projects.length) % projects.length,
              }))
            }
          />
        )}
      </Modal>
    </section>
  );
}
