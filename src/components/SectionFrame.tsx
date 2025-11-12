import { ReactNode } from "react";

export default function SectionFrame({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="border border-black rounded-md bg-white/40 p-6">
        {title && <h2 className="text-lg font-semibold underline mb-4">{title}</h2>}
        {children}
      </div>
    </section>
  );
}