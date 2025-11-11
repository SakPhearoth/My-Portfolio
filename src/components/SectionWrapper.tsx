import { ReactNode } from "react";

export default function SectionWrapper({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-10">
      <div className="border border-black rounded-md bg-white/40 p-8">
        {title && (
          <h2 className="text-xl font-semibold underline mb-6 text-center md:text-left">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
