import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
    // opcional: atualizar atributo lang do HTML
    document.documentElement.lang = next;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#hero" className="hover:text-purple-400 transition">{t("nav.home")}</a></li>
          <li><a href="#habilidades" className="hover:text-purple-400 transition">{t("nav.skills")}</a></li>
          <li><a href="#projetos" className="hover:text-purple-400 transition">{t("nav.projects")}</a></li>
        </ul>

        {/* Switch de idioma */}
        <button
          onClick={toggleLang}
          className="ml-6 text-sm px-3 py-1 rounded-lg border border-purple-500 hover:bg-purple-600 hover:border-purple-600 transition"
          aria-label="Switch language"
          title="Switch language"
        >
          {i18n.language === "pt" ? "EN" : "PT"}
        </button>
      </div>
    </nav>
  );
}
