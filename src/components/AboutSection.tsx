import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <h2 className="text-xl text-center font-semibold underline decoration-[#086CB4] decoration-2 underline-offset-4 mb-6">
        About Me
      </h2>
      <div className="bg-white border border-black rounded-md bg-white/40 p-8">
        <p className="text-lg">
          Hi, I'm <strong>Khin Sakphearoth</strong>, a recent Full Stack Web
          Development graduate from <strong>ISTAD</strong>. <br />
          I'm passionate about designing and building reliable backend systems
          that power seamless and scalable web applications. <br />
          Currently, I'm seeking an <strong>internship opportunity</strong>{" "}
          where I can apply my backend development skills, work on real-world
          projects, and continue growing as a developer.
        </p>
      </div>
    </section>
  );
}
