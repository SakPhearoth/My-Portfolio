// app/components/SkillsSection.tsx
import React from "react";

type Group = {
  key: string;
  label: string;
  categoryIcon: string; // small icon to the left of the label
  icons: string[]; // paths to icon images (in /public/icons/)
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
      <div className="border border-black rounded-md bg-white/40 p-6">
        <h2 className="text-xl font-semibold decoration-accent decoration-[#086CB4] decoration-2 underline underline-offset-2 mb-6">
          Technical Skills
        </h2>

        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.key}>
              {/* heading with small category icon */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={g.categoryIcon}
                  alt={`${g.label} icon`}
                  className="w-8 h-8 object-contain"
                />
                <p className="text-lg">{g.label}</p>
              </div>

              {/* chip container */}
              <div className="inline-flex items-center gap-3 p-3 border border-black rounded-md bg-white">
                {g.icons.map((src) => (
                  <div
                    key={src}
                    className="w-14 h-14 rounded-md flex items-center justify-center bg-transparent"
                    /* w-14/h-14 => 56px. Change to w-16/h-16 for 64px */
                  >
                    <img
                      src={src}
                      alt={
                        src.split("/").pop()?.replace(/[-_.]/g, " ") ||
                        "tech icon"
                      }
                      className="w-10 h-10 object-contain"
                      /* img inside chip is 40x40 (w-10 = 40px). Tweak if needed. */
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
