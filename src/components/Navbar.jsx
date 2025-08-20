import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        

        {/* Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-purple-400 transition">Início</a>
          </li>
          <li>
            <a href="#habilidades" className="hover:text-purple-400 transition">Habilidades</a>
          </li>
          <li>
            <a href="#experiencia" className="hover:text-purple-400 transition">Experiência</a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-purple-400 transition">Projetos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
