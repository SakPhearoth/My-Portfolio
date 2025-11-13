import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <h2 className="text-xl text-center font-semibold underline decoration-[#086CB4] decoration-2 underline-offset-4 mb-6">
        About Me
      </h2>
      <div className="bg-white border border-black rounded-md bg-white/40 p-8">
        <p className="text-lg">
          Hi, I'm Khin Sakphearoth, a recent Full Stack Web Development graduate
          from ISTAD. <br /> I'm passionate about building responsive and
          user-friendly web applications using modern technologies. <br />{" "}
          Currently, I'm seeking an internship opportunity where I can apply my
          skills, contribute to real-world projects, and continue growing as a
          developer.
        </p>
      </div>
    </section>
  );
}
