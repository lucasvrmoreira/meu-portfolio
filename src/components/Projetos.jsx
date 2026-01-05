import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import constructionAnimation from "../assets/constructionAnimation.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 bg-purple-700 text-white text-sm px-4 py-2 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
}

function PillButton({ href, icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl border border-purple-700/70 px-4 py-2 text-sm text-purple-200 hover:bg-purple-700/10 hover:scale-[1.02] transition-transform"
    >
      {icon}
      {children}
    </a>
  );
}

const GithubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.205 11.366.6.111.82-.261.82-.577v-2.024c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.118-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.628-5.476 5.922.43.372.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
  </svg>
);

const DeployIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0L1.605 6v12L12 24l10.395-6V6z" />
  </svg>
);

function LinkRow({ github, online, t }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {online && <PillButton href={online} icon={DeployIcon}>{t("projects.online")}</PillButton>}
      {github && <PillButton href={github} icon={GithubIcon}>{t("projects.github")}</PillButton>}
    </div>
  );
}

function SecretField({ label, value, setToast }) {
  const [show, setShow] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(`${label} copiado!`);
    } catch {}
  };

  return (
    <div className="space-y-1">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          readOnly
          className="w-full bg-[#0d0d0d] border border-purple-700/60 rounded-md px-3 py-2 pr-20 text-sm font-mono text-gray-200"
        />
        <button type="button" onClick={() => setShow((v) => !v)} className="absolute inset-y-0 right-9 px-2 flex items-center text-gray-300 hover:text-white">
          {show ? "🙈" : "👁️"}
        </button>
        <button type="button" onClick={copy} className="absolute inset-y-0 right-1 px-2 flex items-center text-gray-300 hover:text-white">
          📋
        </button>
      </div>
    </div>
  );
}

function Credenciais({ credenciais, setToast, t }) {
  if (!credenciais) return null;
  return (
    <div className="mt-4 space-y-2">
      <SecretField label="Usuário" value={credenciais.user} setToast={setToast} />
      <SecretField label="Senha" value={credenciais.pass} setToast={setToast} />
      <p className="text-[10px] text-gray-500">{t("projects.demoNote")}</p>
    </div>
  );
}

const techToIconId = (name) => {
  const map = {
    Python: "python",
    Flask: "flask",
    PostgreSQL: "postgres",
    HTML: "html",
    CSS: "css",
    React: "react",
    Vite: "vite",
    JavaScript: "javascript",
    Selenium: "selenium",
    TailwindCSS: "tailwind",
    Bootstrap: "bootstrap",
    "FastAPI": "fastapi"
  };
  return map[name] ?? null;
};
const hasSkillIcon = (id) => Boolean(id);

function AnimacaoManutencao({ t }) {
  return (
    <div className="flex flex-col items-center text-sm text-gray-400">
      <p className="text-center mb-3">{t("projects.devPhase")}</p>
      <div className="flex justify-center items-center w-full max-w-[440px] mx-auto">
        <Lottie animationData={constructionAnimation} loop style={{ maxWidth: "300px", width: "100%", height: "auto" }} />
      </div>
    </div>
  );
}

export default function Projetos() {
  const { t } = useTranslation();
  const [toast, setToast] = useState("");

   const projetosRaw = t("projects.list", { returnObjects: true });
   const projetos = Array.isArray(projetosRaw) ? projetosRaw : [];

  useEffect(() => {
    if (toast) {
      const tmo = setTimeout(() => setToast(""), 2000);
      return () => clearTimeout(tmo);
    }
  }, [toast]);

  return (
    <>
      <style>{`
        .swiper, .swiper-wrapper, .swiper-slide { overflow: visible !important; }
        .swiper-button-next, .swiper-button-prev { color: #a855f7; }
        .swiper-pagination-bullet-active { background: #a855f7; }
      `}</style>

      <section id="projetos" className="bg-black text-white py-40 px-12 pb-">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold italic mb-20 text-black-400">
            <span>{t("projects.title")}</span>
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={600}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides
            loop
            className="meu-projetos-swiper max-w-[1200px] mx-auto"
          >
            {projetos.map((projeto, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[350px] md:max-w-[450px] mx-auto">
                  <div className="bg-[#111] p-6 rounded-lg shadow-md border border-purple-800 hover:scale-105 transition-transform duration-300 min-h-[650px] flex flex-col justify-between overflow-visible">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{projeto.nome}</h3>
                    <p className="text-gray-300 mb-4">{projeto.descricao}</p>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {projeto.tecnologias.map((tech, i) => {
                        const iconId = techToIconId(tech);
                        return hasSkillIcon(iconId) ? (
                          <img
                            key={i}
                            src={`https://skillicons.dev/icons?i=${iconId}`}
                            alt={`${tech} logo`}
                            title={tech}
                            width="32"
                            height="32"
                            className="rounded-full bg-purple-700/70 p-1"
                            loading="lazy"
                          />
                        ) : (
                          <span key={i} className="bg-purple-700 text-white text-xs px-2 py-1 rounded-full font-medium">
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                    <LinkRow github={projeto.github} online={projeto.online} t={t} />

                    {projeto.credenciais && (
                      <>
                        <p className="mt-4 text-sm text-gray-400">{t("projects.credsIntro")}</p>
                        <Credenciais credenciais={projeto.credenciais} setToast={setToast} t={t} />
                      </>
                    )}

                    {projeto.lottie && <AnimacaoManutencao t={t} />}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <footer className="bg-black text-white py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">{t("footer.rights")}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/lvrm/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-[#6366f1] text-xl hover:scale-110 transition-transform"></i>
            </a>
            <a href="https://github.com/lucasvrmoreira" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-[#6366f1] text-xl hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>
      </footer>

      <Toast message={toast} />
    </>
  );
}
