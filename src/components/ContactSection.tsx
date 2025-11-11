import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold underline  decoration-[#086CB4] decoration-2 underline-offset-2 text-center mb-6">
        Contact Me
      </h2>

      <div className="mx-auto max-w-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border border-black rounded-full p-4 sm:p-6 bg-white">
          {/* Email */}
          <a
            className="flex items-center justify-center gap-2 sm:gap-3 hover:opacity-80 transition"
            href="mailto:sakphearothkhin@gmail.com"
            aria-label="email"
          >
            <img
              src="/icons/email.png"
              alt="email"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-base sm:text-lg text-center sm:text-left">
              sakphearothkhin@gmail.com
            </span>
          </a>

          {/* Telegram */}
          <a
            className="flex items-center justify-center gap-2 sm:gap-3 hover:opacity-80 transition"
            href="https://t.me/Sakphearoth_Khin"
            aria-label="telegram"
          >
            <img
              src="/icons/telegram.png"
              alt="telegram"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-base sm:text-lg text-center sm:text-left">
              @Sakphearoth_Khin
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
