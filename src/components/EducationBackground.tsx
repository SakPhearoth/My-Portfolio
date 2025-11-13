import React from "react";

type Edu = {
  title: string;
  org?: string;
  date?: string;
  details?: string;
};

const educationData: Edu[] = [
  {
    title: "Full Stack Web Development",
    org: "Institute of Science and Technology Advanced Development (ISTAD)",
    date: "April 2024 - October 2024",
  },
  {
    title: "Adult English Program (AEP)",
    org: "Institute of Foreign Language (IFL)",
    date: "2023 - Present",
  },
  {
    title: "Bachelor's in Computer Science",
    org: "Royal University of Phnom Penh (RUPP)",
    date: "2021 - 2024",
  },
  {
    title: "Front-End Development Short Course",
    org: "ETEC Center",
    date: "November 2022 - February 2023",
  },
  {
    title: "High School",
    org: "Kampot Krong Cambodia-Japan Friendship High School",
    date: "2017 - 2020",
  },
];

export default function EducationBackground() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-xl sm:text-2xl font-semibold underline decoration-[#086CB4] decoration-2 underline-offset-4 mb-6 text-center sm:text-left">
        Education Background
      </h2>
      <div className="border border-black rounded-md bg-white/40 p-6 sm:p-8">
        <ul className="space-y-4">
          {[
            {
              title: "Full Stack Web Development",
              org: "Institute of Science and Technology Advanced Development (ISTAD)",
              date: "Apr 2025 - Oct 2025",
            },
            {
              title: "Adult English Program (AEP)",
              org: "Institute of Foreign Language (IFL)",
              date: "2023 - 2025",
            },
            {
              title: "Bachelor's in Computer Science",
              org: "Royal University of Phnom Penh (RUPP)",
              date: "2021 - 2024",
            },
            {
              title: "Front-End Development Short Course",
              org: "ETEC Center",
              date: "Nov 2022 - Feb 2023",
            },
            {
              title: "High School",
              org: "Kampot Krong Cambodia-Japan Friendship High School",
              date: "2017 - 2020",
            },
          ].map((edu) => (
            <li
              key={edu.title}
              className="p-4 sm:p-5 border border-black/30 rounded-md bg-white/70"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-base sm:text-lg font-semibold">
                    + {edu.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    {edu.org}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-700 sm:text-right">
                  {edu.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
