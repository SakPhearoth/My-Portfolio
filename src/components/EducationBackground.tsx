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
      <div className="border border-black rounded-md bg-white/40 p-8">
        <h2 className="text-xl font-semibold underline  decoration-[#086CB4] decoration-2 underline-offset-2 mb-6">
          Education Background
        </h2>

        <ul className="space-y-4">
          <li className="p-4 border border-black/30 rounded-md bg-white/70">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">
                  + Full Stack Web Development
                </p>
                <p className="text-lg text-gray-700">
                  Institute of Science and Technology Advanced Development
                  (ISTAD)
                </p>
              </div>
              <p className="text-lg text-gray-700">Apr 2025 - Oct 2025</p>
            </div>
          </li>

          <li className="p-4 border border-black/30 rounded-md bg-white/70">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">
                  + Adult English Program (AEP)
                </p>
                <p className="text-lg text-gray-700">
                  Institute of Foreign Language (IFL)
                </p>
              </div>
              <p className="text-lg text-gray-700">2023 - 2025</p>
            </div>
          </li>

          <li className="p-4 border border-black/30 rounded-md bg-white/70">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">
                  + Bachelor's in Computer Science
                </p>
                <p className="text-lg text-gray-700">
                  Royal University of Phnom Penh (RUPP)
                </p>
              </div>
              <p className="text-lg text-gray-700">2021 - 2024</p>
            </div>
          </li>

          <li className="p-4 border border-black/30 rounded-md bg-white/70">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">
                  + Front-End Development Short Course
                </p>
                <p className="text-lg text-gray-700">ETEC Center</p>
              </div>
              <p className="text-lg text-gray-700">Nov 2022 - Feb 2023</p>
            </div>
          </li>

          <li className="p-4 border border-black/30 rounded-md bg-white/70">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">+ High School</p>
                <p className="text-lg text-gray-700">
                  Kampot Krong Cambodia-Japan Friendship High School
                </p>
              </div>
              <p className="text-lg text-gray-700">2017 - 2020</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
