// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traduções (adicione/edite à vontade)
const resources = {
  pt: {
    translation: {
      nav: { home: "Início", skills: "Habilidades", experience: "Experiência", projects: "Projetos" },
      buttons: { resume: "Currículo", linkedin: "LinkedIn" },
      hero: {
        greeting: "Olá, eu sou Lucas Ribeiro,",
        role: "Desenvolvedor FullStack",
        about:
          "Sou um desenvolvedor Full Stack com foco em automações, integrações e na criação de aplicações web eficientes. Tenho paixão por transformar processos complexos em soluções práticas e inteligentes, conectando sistemas e otimizando fluxos de trabalho. Com uma visão completa do back-end ao front-end, atuo na entrega de projetos robustos, escaláveis e voltados para resultado, sempre buscando inovação e eficiência em cada linha de código."
      },
      skills: {
        title: "HABILIDADES",
        tabs: { tecnologias: "Tecnologias", ferramentas: "Ferramentas", outros: "Outros", seguranca: "Segurança" },
        outros: [
          { titulo: "APIs REST", descricao: "Criação e consumo de APIs seguindo o protocolo HTTP" },
          { titulo: "Clean Code", descricao: "Boas práticas de código limpo e legível" },
          { titulo: "Escrita Técnica", descricao: "Criação e manutenção de documentação" },
          { titulo: "Documentação de API (Swagger)", descricao: "Documentação automática em APIs com FastAPI" },
          { titulo: "UX Design", descricao: "Foco na experiência e usabilidade do usuário" },
          { titulo: "POO", descricao: "Programação Orientada a Objetos" }
        ],
        seguranca: [
          { titulo: "OWASP Top 10", descricao: "Segurança com base nos principais riscos da web" },
          { titulo: "CSRF Protection", descricao: "Proteção contra requisições forjadas em formulários" },
          { titulo: "Criptografia com bcrypt", descricao: "Armazenamento seguro de senhas no banco" },
          { titulo: ".env / Variáveis de ambiente", descricao: "Proteção de credenciais fora do código" },
          { titulo: "CORS Restrito", descricao: "Restringir origens que podem acessar suas APIs" },
          { titulo: "Autenticação Segura", descricao: "Uso de senhas, tokens e proteção contra brute force" },
          { titulo: "Logs de Auditoria", descricao: "Registro de ações dos usuários" }
        ]
      },
      experience: {
        title: "EXPERIÊNCIA PROFISSIONAL",
        current: "Atualmente",
        items: [
          {
            empresa: "Cellavita",
            atual: true,
            periodo: "Janeiro/2023",
            cargo: "Coordenador de Materiais & Desenvolvedor de Soluções",
            descricao:
              "Coordenação do fluxo de materiais na área produtiva e controle de estoque. Desenvolvimento de soluções com Python e automações fiscais com Selenium e PyAutoGUI. Criação de aplicações web com Flask e React, integração de sistemas via API/ETL e aplicação de metodologias como Lean e Melhoria Contínua.",
            tecnologias: ["Python", "Flask", "React", "Selenium", "PyAutoGUI", "APIs REST", "XML", "HTML", "CSS", "JavaScript"]
          }
        ]
      },
      projects: {
        title: "PROJETOS",
        online: "Ver Online",
        github: "GitHub",
        credsIntro: "Abaixo as credenciais para acesso online:",
        demoNote: "Conta de demonstração — permissões limitadas.",
        devPhase: "Fase final de desenvolvimento",
        list: [
          {
            nome: "Automação Fiscal com Python",
            descricao:
              "Sistema inteligente que lê dados hexadecimais armazenados em tabelas de banco de dados e os converte automaticamente para o formato XML. Desenvolvido para possibilitar o download em massa de arquivos de Nota Fiscal Eletrônica (NF-e) com base nos dados processados",
            tecnologias: ["Python", "Selenium", "JavaScript", "FastAPI", "XML", "PostgreSQL"],
            lottie: true 
          },
          {
            nome: "SICRO - Sistema de Controle de Roupas Estéreis",
            descricao:
              "O SICRO é uma aplicação desenvolvida para gerenciar todo o ciclo de vida das roupas esterilizadas utilizadas em hospitais,laboratorios e centros cirúrgicos, garantindo rastreabilidade, segurança e conformidade com os protocolos da CCIH.",
            tecnologias: ["Python", "PostgreSQL", "Vite", "React", "JavaScript", "FastAPI", "TailwindCSS"],
            github: "https://github.com/lucasvrmoreira/sicro",
            online: "https://sicro-bqcl.vercel.app/login",
            credenciais: { user: "producao", pass: "Cell@vita" }
          },
          {
            nome: "GQ TRACK",
            descricao:
              "Sistema voltado para a área farmacêutica que automatiza a etiquetagem de produtos, com geração de QR Codes inteligentes que armazenam as informações do lote extraídas diretamente do banco SAP, além do link para o Certificado de Análise (CoA).Garante rastreabilidade, agilidade e conformidade nos processos de Garantia da Qualidade.",
            tecnologias: ["Python", "Flask", "PostgreSQL", "React", "Vite", "TailwindCSS", "JavaScript"],
            github: "https://github.com/lucasvrmoreira/gqtrack",
            online: "https://gqtrack.vercel.app/",
            credenciais: { user: "admin", pass: "123456" }
          },
          {
            nome:"AgroVision AI",
            descricao:"O AgroVision AI é uma plataforma inteligente para diagnóstico agrícola automatizado, criada para ajudar produtores rurais, agrônomos e pesquisadores a detectar doenças e pragas em plantas apenas com uma foto da folha.",
            tecnologias:["Python","FastAPI","React","TensorFlow","OpenCV","PyTorch","OpenCV","NumPy + scikit-image","IA generativa - GPT-40 openAI"],
            lottie: true

          }
          
        ]
      },
      footer: { rights: "© 2025 Lucas Moreira - Todos os direitos reservados" }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", skills: "Skills", experience: "Experience", projects: "Projects" },
      buttons: { resume: "Resume", linkedin: "LinkedIn" },
      hero: {
        greeting: "Hi, I'm Lucas Ribeiro,",
        role: "Full-Stack Developer",
        about:
          "I'm a Full-Stack developer focused on automations, integrations, and building efficient web applications. I love turning complex processes into smart, practical solutions, connecting systems and streamlining workflows. From back end to front end, I deliver robust, scalable, results-oriented projects, always aiming for innovation and efficiency in every line of code."
      },
      skills: {
        title: "SKILLS",
        tabs: { tecnologias: "Technologies", ferramentas: "Tools", outros: "Other", seguranca: "Security" },
        outros: [
          { titulo: "REST APIs", descricao: "Build and consume APIs over HTTP" },
          { titulo: "Clean Code", descricao: "Best practices for readable, maintainable code" },
          { titulo: "Technical Writing", descricao: "Create and maintain documentation" },
          { titulo: "API Docs (Swagger)", descricao: "Automatic docs in FastAPI" },
          { titulo: "UX Design", descricao: "User experience and usability focus" },
          { titulo: "OOP", descricao: "Object-Oriented Programming" }
        ],
        seguranca: [
          { titulo: "OWASP Top 10", descricao: "Security based on the top web risks" },
          { titulo: "CSRF Protection", descricao: "Protect against forged form requests" },
          { titulo: "bcrypt hashing", descricao: "Secure password storage" },
          { titulo: ".env / Environment Vars", descricao: "Keep secrets out of code" },
          { titulo: "Restricted CORS", descricao: "Limit origins that can access your APIs" },
          { titulo: "Secure Auth", descricao: "Passwords, tokens, and brute-force protection" },
          { titulo: "Audit Logs", descricao: "Record user actions" }
        ]
      },
      experience: {
        title: "PROFESSIONAL EXPERIENCE",
        current: "Currently",
        items: [
          {
            empresa: "Cellavita",
            atual: true,
            periodo: "January/2023",
            cargo: "Materials Coordinator & Solutions Developer",
            descricao:
              "Coordinated material flow in production and inventory control. Built solutions with Python and fiscal automations using Selenium and PyAutoGUI. Developed web apps with Flask and React, integrated systems via API/ETL, and applied Lean/Continuous Improvement practices.",
            tecnologias: ["Python", "Flask", "React", "Selenium", "PyAutoGUI", "REST APIs", "XML", "HTML", "CSS", "JavaScript"]
          }
        ]
      },
      projects: {
        title: "PROJECTS",
        online: "Live Demo",
        github: "GitHub",
        credsIntro: "Login credentials (demo):",
        demoNote: "Demo account — limited permissions.",
        devPhase: "Final development stage",
        list: [
          {
            nome: "Tax Automation with Python",
            descricao:
              "Intelligent system that reads hexadecimal data stored in DB tables and automatically converts it to XML. Built to enable mass downloads of Brazilian NF-e files based on the processed data.",
            tecnologias: ["Python", "Selenium", "JavaScript", "FastAPI", "XML", "PostgreSQL"],
            lottie: true
            
          },
          {
            nome: "SICRO — Sterile Garment Control System",
            descricao:
              "App to manage the entire lifecycle of sterilized garments used in hospitals, labs, and ORs, ensuring traceability, safety, and compliance with CCIH protocols.",
            tecnologias: ["Python", "PostgreSQL", "Vite", "React", "JavaScript", "FastAPI", "TailwindCSS"],
            github: "https://github.com/lucasvrmoreira/sicro",
            online: "https://sicro-bqcl.vercel.app/login",
            credenciais: { user: "producao", pass: "Cell@vita" }
          },
          {
            nome: "GQ TRACK",
            descricao:
              "Pharma-oriented system that automates product labeling with smart QR Codes holding lot info fetched from SAP DB plus the Certificate of Analysis (CoA) link. Ensures traceability, speed, and compliance for Quality Assurance processes.",
            tecnologias: ["Python", "Flask", "PostgreSQL", "React", "Vite", "TailwindCSS", "JavaScript"],
            github: "https://github.com/lucasvrmoreira/gqtrack",
            online: "https://gqtrack.vercel.app/",
            credenciais: { user: "admin", pass: "123456" }
          },
          {
            nome: "AgroVision AI",
            descricao: "AgroVision AI is an intelligent platform for automated agricultural diagnostics, designed to help farmers, agronomists, and researchers detect plant diseases and pests using just a photo of the leaf.",
            tecnologias: ["Python","FastAPI","React","TensorFlow","OpenCV","PyTorch","OpenCV","NumPy + scikit-image","Generative AI - GPT-4o openAI"],
            lottie: true

          }
          
        ]
      },
      footer: { rights: "© 2025 Lucas Moreira — All rights reserved" }
    }
  }
};

const saved = localStorage.getItem("lang");
const fallback = "pt";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: saved || fallback,
    fallbackLng: fallback,
    interpolation: { escapeValue: false }
  });

export default i18n;
