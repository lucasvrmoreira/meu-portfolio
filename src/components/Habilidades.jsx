import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Habilidades = () => {
  const { t } = useTranslation();
  const [abaAtiva, setAbaAtiva] = useState("tecnologias");

  const tecnologias = [
    { nome: "JavaScript", slug: "javascript" },
    { nome: "React", slug: "react" },
    { nome: "TailwindCSS", slug: "tailwind" },
    { nome: "Python", slug: "python" },
    { nome: "Flask", slug: "flask" },
    { nome: "HTML", slug: "html" },
    { nome: "CSS", slug: "css" },
    { nome: "Bootstrap", slug: "bootstrap" },
    { nome: "PostgreSQL", slug: "postgres" },
  ];
  const ferramentas = [
    { nome: "Git", slug: "git" },
    { nome: "GitHub", slug: "github" },
    { nome: "Selenium", slug: "selenium" },
    { nome: "Postman", slug: "postman" },
    { nome: "Vite", slug: "vite" },
    { nome: "Docker", slug: "docker" },
  ];
  const outros = t("skills.outros", { returnObjects: true });
  const seguranca = t("skills.seguranca", { returnObjects: true });

  return (
    <>
      <section id="habilidades" className="bg-white text-black py-16 px-3 sm:px-6">
        <h2 className="text-center text-4xl font-extrabold italic mb-8 text-black-400">
          <span>{t("skills.title")}</span>
        </h2>

        <div className="bg-[#a4a3a3] text-white p-6 rounded-xl shadow-md w-full max-w-6xl mx-auto">
          {/* Abas */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 w-full">
            {["tecnologias", "ferramentas", "outros", "seguranca"].map((aba) => (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md transition font-medium ${abaAtiva === aba
                  ? "bg-purple-600 text-white"
                  : "bg-[#3a3a3a] text-gray-300 hover:bg-purple-500 hover:text-white"
                  }`}
              >
                {t(`skills.tabs.${aba}`)}
              </button>
            ))}
          </div>

          {abaAtiva === "tecnologias" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center w-full max-w-5xl mx-auto">
              {tecnologias.map((tec) => (
                <div key={tec.nome} className="flex flex-col items-center">
                  <img
                    src={`https://skillicons.dev/icons?i=${tec.slug}`}
                    alt={tec.nome}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="text-sm">{tec.nome}</span>
                </div>
              ))}
            </div>
          )}

          {abaAtiva === "ferramentas" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center w-full max-w-5xl mx-auto">
              {ferramentas.map((f) => (
                <div key={f.nome} className="flex flex-col items-center">
                  <img
                    src={`https://skillicons.dev/icons?i=${f.slug}`}
                    alt={f.nome}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="text-sm">{f.nome}</span>
                </div>
              ))}
            </div>
          )}

          {abaAtiva === "outros" && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-5xl mx-auto">
              {outros.map((item, idx) => (
                <div key={idx} className="bg-[#2c2c2c] border border-gray-600 rounded-md p-3 shadow-sm transition hover:border-purple-500">
                  <h3 className="text-base font-semibold text-white mb-1">{item.titulo}</h3>
                  <p className="text-gray-400 text-xs">{item.descricao}</p>
                </div>
              ))}
            </div>
          )}

          {abaAtiva === "seguranca" && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-5xl mx-auto">
              {seguranca.map((item, idx) => (
                <div key={idx} className="bg-[#2c2c2c] border border-gray-600 rounded-md p-3 shadow-sm transition hover:border-purple-500">
                  <h3 className="text-base font-semibold text-white mb-1">{item.titulo}</h3>
                  <p className="text-gray-400 text-xs">{item.descricao}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Final do Habilidades.jsx */}
      <div className="relative bg-white overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto block"
          style={{ marginBottom: "-1px" }}
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L0,120Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Habilidades;
