// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Habilidades from "./components/Habilidades";
import Experiencia from "./components/Experiencia";
import Projetos from "./components/Projetos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="habilidades"><Habilidades /></section>
      <section id="experiencia"><Experiencia /></section>
      <section id="projetos"><Projetos /></section>
    </div>
  );
}

export default App;
