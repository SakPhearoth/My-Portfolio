import React from "react";

type Group = {
  key: string;
  label: string;
  categoryIcon: string;
  icons: string[];
};

const groups: Group[] = [
  {
    key: "languages",
    label: "Languages:",
    categoryIcon: "/icons/code-bracket.png",
    icons: [
      "/icons/java.png",
      "/icons/javascript.png",
      "/icons/c.png",
      "/icons/c++.png",
    ],
  },
  {
    key: "web",
    label: "Web Technologies:",
    categoryIcon: "/icons/website.png",
    icons: [
      "/icons/HTML5.png",
      "/icons/CSS3.png",
      "/icons/Next.js.png",
      "/icons/Spring.png",
      "/icons/spring-boot.png",
    ],
  },
  {
    key: "db",
    label: "Database:",
    categoryIcon: "/icons/database.png",
    icons: ["/icons/PostgresSQL.png"],
  },
  {
    key: "tools",
    label: "Tools:",
    categoryIcon: "/icons/gear.png",
    icons: [
      "/icons/git.png",
      "/icons/github.png",
      "/icons/postman.png",
      "/icons/keycloak.png",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-10">
      <div className="border border-black rounded-md bg-white/40 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold underline decoration-[#086CB4] decoration-2 underline-offset-4 mb-6 text-center sm:text-left">
          Technical Skills
        </h2>

        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.key}>
              {/* category heading */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                <img
                  src={g.categoryIcon}
                  alt={`${g.label} icon`}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
                <p className="text-base sm:text-lg">{g.label}</p>
              </div>

              {/* skill icons container */}
              <div
                className="
                  flex flex-wrap justify-center sm:justify-start gap-3 p-3
                  border border-black rounded-md bg-white
                "
              >
                {g.icons.map((src) => (
                  <div
                    key={src}
                    className="
                      w-14 h-14 sm:w-16 sm:h-16 rounded-md flex items-center justify-center
                      bg-transparent transition-transform duration-200 hover:scale-105
                    "
                  >
                    <img
                      src={src}
                      alt={src.split("/").pop()?.replace(/[-_.]/g, " ") || "icon"}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
