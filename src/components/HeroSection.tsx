import React from "react";
// import profileSrc from "../assets/profile.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="bg-background text-foreground py-12">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-white/60">
            <img
              src="/my-profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro Text */}
        <div className="text-center md:text-left">
          <p className="text-md text-gray-600">Hello, my name is</p>
          <h1 className="text-3xl font-bold text-gray-900">KHIN SAKPHEAROTH</h1>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="/Khin-Sakphearoth-CV.pdf"
              className="inline-block px-4 py-2 rounded-lg bg-white font-medium"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-lg bg-black text-white font-medium"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex justify-center md:justify-start gap-3">
            <a
              className="p-2 rounded-full flex items-center justify-center"
              href="mailto:sakphearothkhin@gmail.com"
              aria-label="email"
            >
              <img
                src="/icons/email.png"
                alt="email"
                className="w-10 h-10 object-contain"
              />
            </a>

            <a
              className="p-2 rounded-full flex items-center justify-center"
              href="https://github.com/SakPhearoth"
              aria-label="github"
            >
              <img
                src="/icons/github.png"
                alt="github"
                className="w-10 h-10 object-contain"
              />
            </a>

            <a
              className="p-2 rounded-full flex items-center justify-center"
              href="https://t.me/Sakphearoth_Khin"
              aria-label="telegram"
            >
              <img
                src="/icons/telegram.png"
                alt="telegram"
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
