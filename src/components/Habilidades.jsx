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
      <section id="habilidades" className="bg-white text-black -mt-1 py-24">
        <h2 className="text-center text-4xl font-extrabold italic mb-8 text-black-400">
          <span>{t("skills.title")}</span>
        </h2>

        <div className="bg-[#a4a3a3] text-white p-6 rounded-xl min-h-[250px] shadow-md">
          {/* Abas */}
          <div className="flex justify-center gap-3 mb-6">
            {["tecnologias", "ferramentas", "outros", "seguranca"].map((aba) => (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`px-4 py-2 rounded-md transition font-medium ${
                  abaAtiva === aba
                    ? "bg-purple-600 text-white"
                    : "bg-[#3a3a3a] text-gray-300 hover:bg-purple-500 hover:text-white"
                }`}
              >
                {t(`skills.tabs.${aba}`)}
              </button>
            ))}
          </div>

          {abaAtiva === "tecnologias" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
              {tecnologias.map((tec) => (
                <div key={tec.nome} className="flex flex-col items-center">
                  <img
                    src={`https://skillicons.dev/icons?i=${tec.slug}`}
                    alt={tec.nome}
                    className="w-16 h-16 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="text-sm">{tec.nome}</span>
                </div>
              ))}
            </div>
          )}

          {abaAtiva === "ferramentas" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
              {ferramentas.map((f) => (
                <div key={f.nome} className="flex flex-col items-center">
                  <img
                    src={`https://skillicons.dev/icons?i=${f.slug}`}
                    alt={f.nome}
                    className="w-16 h-16 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="text-sm">{f.nome}</span>
                </div>
              ))}
            </div>
          )}

          {abaAtiva === "outros" && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {outros.map((item, idx) => (
                <div key={idx} className="bg-[#2c2c2c] border border-gray-600 rounded-md p-3 shadow-sm transition hover:border-purple-500">
                  <h3 className="text-base font-semibold text-white mb-1">{item.titulo}</h3>
                  <p className="text-gray-400 text-xs">{item.descricao}</p>
                </div>
              ))}
            </div>
          )}

          {abaAtiva === "seguranca" && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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

      <div className="-mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#000000" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
        </svg>
      </div>
    </>
  );
};

export default Habilidades;
