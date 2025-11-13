import React from "react";

const projects = [
  {
    id: 1,
    title: "KaveyCode",
    desc: "An online programming learning platform in Khmer language.",
    img: "images/projects/KaveyCodeProject.jpg",
    github: "https://github.com/FSWD-GEN-01/kavey-code-backend",
    live: "https://kaveycode.com/",
  },
  {
    id: 2,
    title: "Banking API",
    desc: "RESTful APIs for managing banking operations (accounts, customers) and courses. Implemented CRUD operations, filtering, pagination, and soft deletes with input validation using DTOs (@Valid). Applied REST best practices with correct HTTP verbs, status codes, and layered architecture. Integrated Spring Data JPA for database persistence.",
    img: "images/projects/restful-api.png",
    github: "https://github.com/SakPhearoth/Banking-API-Test02",
    live: "",
  },
  {
    id: 3,
    title: "Spring REST API",
    desc: "A project for CRUD operations with Spring REST API",
    img: "images/projects/Rest-api.png",
    github: "https://github.com/SakPhearoth/Sakphearoth-Spring-REST-API",
    live: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
       <h2 className="text-xl font-semibold underline decoration-[#086CB4] decoration-2 underline-offset-4 mb-6 text-center md:text-center">
          My Projects
        </h2>
      <div className="border border-black rounded-md bg-white/40 p-8">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="border border-black rounded-lg bg-white p-4 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-sm"
            >
              {/* Thumbnail */}
              <div className="border border-black/20 rounded-md overflow-hidden mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-4 flex-1">{p.desc}</p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 border border-black rounded-md text-sm text-center font-medium hover:bg-[#086CB4] hover:text-white transition-colors"
                >
                  Website
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 border border-black rounded-md text-sm text-center font-medium hover:bg-[#086CB4] hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
