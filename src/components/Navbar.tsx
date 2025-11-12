export default function Navbar() {
  return (
    <header className="bg-background border-b border-black">
      <nav className="max-w-5xl mx-auto py-4 flex justify-center">
        <ul className="text-lg flex border border-black divide-x divide-black">
          {["About", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="
              relative inline-block px-8 py-2 bg-white text-foreground font-medium
              transition-colors duration-200 hover:bg-primary group
            "
              >
                {link}
                <span
                  className="
                absolute left-0 bottom-0 w-full h-[2px] bg-[#086CB4]
                scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300
              "
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
