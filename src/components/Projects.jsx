import { useState } from "react";
import ProjectsCarousel from "./Carousel/ProjectsCarousel";
import CaseStudyCard from "./Projects/CaseStudyCard";
import Modal from "./Modal/Modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const projects = [
    {
      name: "TamaTacna",
      client: "Research Program - University",
      description: "Interactive tourism platform with maps and routes",
      details:
        "Web and mobile application designed to promote tourism in Tacna through the visualization of historical locations. Features interactive maps, custom route generation similar to Google Maps, multimedia content including images and 360° videos, and optimized asset storage for performance.",
      tech: ["Next.js", "PostgreSQL", "Mapbox", "React Native"],
      images: {
        cover: "/tamatacna-cover.png",
        desktop: "/tamatacna-desktop.png",
        mobile: "/tamatacna-mobile.png",
      },
      live: "https://play.google.com/store/apps/details?id=com.silverhunk.tamatacnaguia",
    },
    {
      name: "Survey Management System",
      client: "DEC S.A.C.",
      description: "Geo-based control and anti-fraud validation",
      details:
        "Web platform for managing surveys with real-time geolocation tracking. Enables administrator control over surveyors, live monitoring via map integrations (Leaflet), real-time data visualization, and proximity-based restrictions (20 meters) to prevent fraudulent submissions.",
      tech: ["Laravel", "MySQL", "Leaflet", "JavaScript"],
      images: {
        cover: "/survey.png",
        desktop: "/survey-desktop.png",
        mobile: "/survey-mobile.png",
      },
      repo: "https://github.com/...",
    },
    {
      name: "News Management System",
      client: "DEC S.A.C.",
      description: "Editorial workflow with role-based access",
      details:
        "Content management system for news publishing with a structured approval workflow. Supports multiple roles including reporters, editors, and administrators, enabling content creation, validation, and controlled publication processes.",
      tech: ["Laravel", "Vite", "TailwindCSS", "MySQL"],
      images: {
        cover: "/news.png",
        desktop: "/news-desktop.png",
        mobile: "/news-mobile.png",
      },
      repo: "https://github.com/...",
    },
    {
      name: "AI Email Classifier",
      client: "Personal Project",
      description: "Intelligent email classification using LLMs",
      details:
        "Application inspired by Gmail that leverages Large Language Models to automatically classify emails. Built with a FastAPI backend, Redis caching for performance, Docker-based containerization, and a React frontend. Focused on scalability and intelligent automation.",
      tech: ["React", "FastAPI", "Redis", "Docker", "LLMs"],
      images: {
        cover: "/ai-mail.png",
        desktop: "/ai-mail-desktop.png",
        mobile: "/ai-mail-mobile.png",
      },
      repo: "https://github.com/...",
    },
    {
      name: "Tech E-commerce Platform",
      client: "Academic Project",
      description: "Online store with payments and authentication",
      details:
        "Full-stack e-commerce platform developed based on a real-world tech business scenario. Includes product catalog, category filtering, shopping cart functionality, secure authentication using JWT, and PayPal payment integration. Focused on business logic, security, and user experience.",
      tech: ["React", "Node.js", "Express", "MySQL", "JWT", "PayPal API"],
      images: {
        cover: "/ecommerce.png",
        desktop: "/ecommerce-desktop.png",
        mobile: "/ecommerce-mobile.png",
      },
      repo: "https://ecomerce-five-lilac.vercel.app",
    },
  ];
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="projects">
      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-primary-container mb-4">
          Featured Projects
        </h2>
        <p className="text-on-surface-variant">Selected real-world work</p>
      </div>

      {/* GRID */}
      <div className="w-full">
        <ProjectsCarousel
          projects={projects}
          onSelect={(project) => setSelectedProject(project)}
          setOpenModal={setOpenModal}
        />
      </div>

      {/* 🔥 TU MODAL */}
      <Modal
        isOpen={openModal}
        onClose={() => {
          setSelectedProject(null);
          setOpenModal(false);
        }}
        className="w-[100%] lg:h-[100%] h-lvh bg-white"
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
