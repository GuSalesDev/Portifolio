import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setSolid(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`gsd-nav ${solid ? "solid" : ""}`}>
      <span className="gsd-logo">Gustavo Sales</span>
      <div className="gsd-nav-links">
        <a href="#sobre">SOBRE</a>
        <a href="#skills">SKILLS</a>
        <a href="#projetos">PROJETOS</a>
        <a href="#contato">CONTATO</a>
      </div>
    </nav>
  );
}