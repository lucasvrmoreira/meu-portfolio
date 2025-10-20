import React from "react";
import { useTranslation } from "react-i18next";

export default function Experiencia() {
  const { t } = useTranslation();
    const experienciasRaw = t("experience.items", { returnObjects: true });
    const experiencias = Array.isArray(experienciasRaw) ? experienciasRaw : [];

  return (
    <>
      <section id="experiencia" className="bg-black text-white py-24 px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white italic mb-10 text-center">
            {t("experience.title")}
          </h2>

          <div className="relative border-l-2 border-purple-600 pl-6">
            {experiencias.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="bg-[#111] p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold text-purple-400">{exp.empresa}</h3>
                    {exp.atual && (
                      <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {t("experience.current")}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{exp.periodo}</p>
                  <p className="text-gray-200 text-base mb-4">{exp.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech, i) => (
                      <span key={i} className="bg-purple-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="-mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#000000" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,128C560,160,640,224,720,240C800,256,880,224,960,208C1040,192,1120,192,1200,192C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"/>
        </svg>
      </div>
    </>
  );
}
