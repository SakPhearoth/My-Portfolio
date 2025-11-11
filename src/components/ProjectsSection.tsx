import React from "react";

const projects = [
  {
    id: 1,
    title: "KaveyCode",
    img: "/projects/kaveycode.png",
    desc: "Landing page for tutoring platform",
  },
  {
    id: 2,
    title: "Portfolio v1",
    img: "/projects/portfolio.png",
    desc: "Personal portfolio",
  },
  {
    id: 3,
    title: "E-commerce Demo",
    img: "/projects/shop.png",
    desc: "Simple shop with cart",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-xl font-semibold underline  decoration-[#086CB4] decoration-2 underline-offset-2 text-center mb-8">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="border border-black rounded-lg bg-white p-4 flex flex-col"
          >
            <div className="rounded-md overflow-hidden border border-black/20 mb-4">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover"
              />
            </div>

            <h3 className="font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-gray-700 mb-4 flex-1">{p.desc}</p>

            <div className="flex gap-3 mt-auto">
              <a className="px-3 py-2 border border-black rounded-full text-sm">
                Live
              </a>
              <a className="px-3 py-2 border border-black rounded-full text-sm">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
