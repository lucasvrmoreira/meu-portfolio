import React, { useState } from 'react';

const Habilidades = () => {
  const [abaAtiva, setAbaAtiva] = useState('tecnologias');

  const tecnologias = [
    { nome: 'JavaScript', imagem: `${process.env.PUBLIC_URL}/icons/JavaScript.svg` },
    { nome: 'React', imagem: `${process.env.PUBLIC_URL}/icons/React.svg` },
    { nome: 'TailwindCSS', imagem: `${process.env.PUBLIC_URL}/icons/TailwindCSS.svg` },
    { nome: 'Python', imagem: `${process.env.PUBLIC_URL}/icons/Python.svg` },
    { nome: 'Flask', imagem: `${process.env.PUBLIC_URL}/icons/Flask.svg` },
    { nome: 'HTML', imagem: `${process.env.PUBLIC_URL}/icons/HTML.svg` },
    { nome: 'CSS', imagem: `${process.env.PUBLIC_URL}/icons/CSS.svg` },
    { nome: 'Bootstrap', imagem: `${process.env.PUBLIC_URL}/icons/Bootstrap.svg` },
    { nome: 'PostgreSQL', imagem: `${process.env.PUBLIC_URL}/icons/PostgreSQL.svg` },
  ];

  const ferramentas = [
    { nome: 'Git', imagem: `${process.env.PUBLIC_URL}/icons/Git.svg` },
    { nome: 'GitHub', imagem: `${process.env.PUBLIC_URL}/icons/GitHub.svg` },
    { nome: 'Selenium', imagem: `${process.env.PUBLIC_URL}/icons/Selenium.svg` },
    { nome: 'Postman', imagem: `${process.env.PUBLIC_URL}/icons/Postman.svg` },
    { nome: 'Vite', imagem: `${process.env.PUBLIC_URL}/icons/Vite.svg` },
    { nome: 'Docker', imagem: `${process.env.PUBLIC_URL}/icons/Docker.svg` },
  ];


  const outros = [
    {
      titulo: 'APIs REST',
      descricao: 'Criação e consumo de APIs seguindo o protocolo HTTP',
    },
    {
      titulo: 'Clean Code',
      descricao: 'Boas práticas de código limpo e legível',
    },
    {
      titulo: 'Escrita Técnica',
      descricao: 'Criação e manutenção de documentação',
    },
    {
      titulo: 'Documentação de API (Swagger)',
      descricao: 'Documentação automática em APIs com FastAPI',
    },
    {
      titulo: 'UX Design',
      descricao: 'Foco na experiência e usabilidade do usuário',
    },
    {
      titulo: 'POO',
      descricao: 'Programação Orientada a Objetos',
    },
  ];


  const seguranca = [
    {
      titulo: 'OWASP Top 10',
      descricao: 'Segurança com base nos principais riscos da web',
    },
    {
      titulo: 'CSRF Protection',
      descricao: 'Proteção contra requisições forjadas em formulários',
    },
    {
      titulo: 'Criptografia com bcrypt',
      descricao: 'Armazenamento seguro de senhas no banco',
    },
    {
      titulo: '.env / Variáveis de ambiente',
      descricao: 'Proteção de credenciais fora do código',
    },
    {
      titulo: 'CORS Restrito',
      descricao: 'Restringir origens que podem acessar suas APIs',
    },
    {
      titulo: 'Autenticação Segura',
      descricao: 'Uso de senhas, tokens e proteção contra brute force',
    },
    {
      titulo: 'Logs de Auditoria',
      descricao: 'Registro de ações dos usuários',
    },

  ];

  return (
    <>
      <section id="habilidades" className="bg-white text-black -mt-1 py-24">
        <h2 className="text-center text-4xl font-extrabold italic mb-8 text-black-400">
          <span>HABILIDADES</span>
        </h2>



        {/* Conteúdo das Abas */}
        <div className="bg-[#a4a3a3] text-white p-6 rounded-xl min-h-[250px] shadow-md">
          {/* Abas dentro do card */}
          <div className="flex justify-center gap-3 mb-6">
            {['tecnologias', 'ferramentas', 'outros', 'seguranca',].map((aba) => (
              <button
                key={aba}
                onClick={() => setAbaAtiva(aba)}
                className={`px-4 py-2 rounded-md transition font-medium ${abaAtiva === aba
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#3a3a3a] text-gray-300 hover:bg-purple-500 hover:text-white'
                  }`}
              >
                {aba.charAt(0).toUpperCase() + aba.slice(1)}
              </button>
            ))}
          </div>

          {/* Ícones Tecnologia */}
          {abaAtiva === 'tecnologias' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
              {tecnologias.map((tec) => (
                <div key={tec.nome} className="flex flex-col items-center">
                  <img
                    src={tec.imagem}
                    alt={tec.nome}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <span className="text-sm">{tec.nome}</span>
                </div>
              ))}
            </div>
          )}


          {/* Ícones Ferramentas */}
          {abaAtiva === 'ferramentas' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
              {ferramentas.map((ferramenta) => (
                <div key={ferramenta.nome} className="flex flex-col items-center">
                  <img
                    src={ferramenta.imagem}
                    alt={ferramenta.nome}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <span className="text-sm">{ferramenta.nome}</span>
                </div>
              ))}
            </div>
          )}

          {/* Outros */}
          {abaAtiva === 'outros' && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {outros.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2c2c2c] border border-gray-600 rounded-md p-3 shadow-sm transition hover:border-purple-500"
                >
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Segurança */}
          {abaAtiva === 'seguranca' && (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {seguranca.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2c2c2c] border border-gray-600 rounded-md p-3 shadow-sm transition hover:border-purple-500"
                >
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>


      </section >
      <div className="-mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </>


  );
};

export default Habilidades;


