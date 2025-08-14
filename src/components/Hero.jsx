import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import profileImage from "../assets/foto-perfil.png";
import pythonAnimation from "../assets/web.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBack((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const [text] = useTypewriter({
    words: ["Desenvolvedor FullStack"],
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 0,
    delaySpeed: 999999, // não apaga nunca
  });

  return (
    <div className="relative bg-black">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 min-h-screen text-white">
        {/* Texto à esquerda */}
        <div className="text-left w-full md:w-[60%]">

          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            Olá, eu sou Lucas Ribeiro,
          </h1>

          {/* Texto digitado com altura fixa */}
          <h2 className="text-3xl md:text-5xl text-purple-400 font-bold min-h-[64px]">
            {text}
            <Cursor cursorStyle="|" />
          </h2>

          <p className="text-lg md:text-base text-white mb-6">
            Sou um desenvolvedor Full Stack com foco em automações, integrações e
            na criação de aplicações web eficientes. Tenho paixão por transformar
            processos complexos em soluções práticas e inteligentes, conectando
            sistemas e otimizando fluxos de trabalho. Com uma visão completa do
            back-end ao front-end, atuo na entrega de projetos robustos,
            escaláveis e voltados para resultado, sempre buscando inovação e
            eficiência em cada linha de código.
          </p>

          {/* Botões */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="/Curriculo.pdf"
              download
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-white animate-bounceArrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
              </svg>
              Currículo
            </a>

            <a
              href="https://www.linkedin.com/in/lvrm/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
                0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 
                0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 
                1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.027-3.063-1.867-3.063-1.868 
                0-2.154 1.459-2.154 2.965v5.702h-3v-10h2.881v1.367h.041c.402-.761 
                1.384-1.563 2.848-1.563 3.046 0 3.609 2.004 
                3.609 4.611v5.585z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Avatar animado */}
        <div className="relative w-64 h-64 mt-10 md:mt-0 md:w-72 md:h-72 perspective">
          <div className={`w-full h-full transition-transform duration-[2000ms] transform-style-preserve-3d ${showBack ? "rotate-y-180" : ""}`}>
            <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-purple-600">
              <img src={profileImage} alt="Lucas Moreira" className="w-full h-full object-cover" />
            </div>
            <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-full overflow-hidden border-4 border-purple-600 bg-black flex items-center justify-center">
              <Player autoplay loop src={pythonAnimation} className="w-60 h-60" />
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      

    </div>


  );
};

export default Hero;


