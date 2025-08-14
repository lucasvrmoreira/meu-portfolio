import React from "react";
import Hero from "./components/Hero";
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="text-white">
      <Hero />
      <Habilidades />
      <Experiencia />
      <Projetos />
    </div>
  );
}

export default App;
