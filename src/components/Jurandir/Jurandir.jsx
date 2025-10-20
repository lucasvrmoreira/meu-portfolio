// src/components/Jurandir/Jurandir.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { OpenAI } from "openai";
import "./Jurandir.css";

const MAX_QUESTIONS_PER_SESSION = 3;
const COUNT_KEY = "jurandir_qcount";
const WELCOME_KEY = "jurandir_welcomed";

const JurandirUI = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "jurandir", text: "Olá! Sou o Jurandir 🤖, assistente pessoal do Lucas. Como posso ajudar?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // badge / balão
  const [showBubble, setShowBubble] = useState(true);

  // contador por sessão (zera quando fecha a aba)
  const [count, setCount] = useState(() => {
    const saved = sessionStorage.getItem(COUNT_KEY);
    return saved ? Number(saved) : 0;
  });
  const remaining = Math.max(0, MAX_QUESTIONS_PER_SESSION - count);

  // abre 1x por sessão e esconde o balão depois de 6s
  useEffect(() => {
    const welcomed = sessionStorage.getItem(WELCOME_KEY);
    if (!welcomed) {
      setTimeout(() => setOpen(true), 900);
      sessionStorage.setItem(WELCOME_KEY, "1");
    }
    const t = setTimeout(() => setShowBubble(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // se abrir, some o balão
  useEffect(() => {
    if (open) setShowBubble(false);
  }, [open]);

  // persiste a contagem
  useEffect(() => {
    sessionStorage.setItem(COUNT_KEY, String(count));
  }, [count]);

  // CRA no frontend: ideal usar proxy no backend em produção
  const openai = useMemo(() => {
    return new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });
  }, []);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    // limite antes de chamar a API
    if (count >= MAX_QUESTIONS_PER_SESSION) {
      setMessages(m => [
        ...m,
        {
          from: "jurandir",
          text:
            "Limite de 3 perguntas por sessão atingido. 😊\n" +
            "Dica: atualize a página para reiniciar a sessão ou me chame no LinkedIn!"
        }
      ]);
      setInput("");
      return;
    }

    const newMessages = [...messages, { from: "user", text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const context = `
        Você é o Jurandir, assistente pessoal do desenvolvedor Lucas Moreira.
        Estilo: amigável, objetivo, sem enrolar, 1–2 frases quando possível.
        Base:
        - Lucas é Full Stack com automações, integrações e IA.
        - Projetos: AgroVision AI (diagnóstico de plantas com IA), GQ Track (rastreabilidade com QR e CoA), SICRO (controle de roupas esterilizadas), Automação Fiscal (XML/NF-e).
        - Tecnologias: Python, Flask, FastAPI, React, PostgreSQL, Tailwind, TensorFlow, OpenCV, GPT-4o.
        - Evite temas fora do portfólio. Se perguntarem algo fora, redirecione gentilmente.
      `;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: context },
          ...newMessages.map(m => ({
            role: m.from === "user" ? "user" : "assistant",
            content: m.text
          }))
        ],
        max_tokens: 220
      });

      const reply =
        completion.choices?.[0]?.message?.content ||
        "Desculpe, não entendi. Pode tentar de outro jeito?";
      setMessages(prev => [...prev, { from: "jurandir", text: reply }]);

      // incrementa só após sucesso
      setCount(c => c + 1);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { from: "jurandir", text: "Ops! Algo deu errado 😅 Tente novamente em instantes." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="jurandir-container" aria-live="polite">
      {/* botão */}
      <motion.button
        className="jurandir-button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setOpen(prev => {
            const next = !prev;
            if (next) setShowBubble(false);
            return next;
          });
        }}
        aria-label="Abrir chat do Jurandir"
        title="Falar com o Jurandir"
      >
        🤖
        {/* badge de perguntas restantes */}
        <span className="jurandir-badge" aria-label={`Perguntas restantes: ${remaining}`}>
          {remaining}
        </span>
      </motion.button>

      {/* balãozinho (não consome tokens) */}
      {!open && showBubble && remaining > 0 && (
        <div className="jurandir-welcome-bubble">
          Posso te ajudar! Você tem {remaining} {remaining === 1 ? "pergunta" : "perguntas"} nesta sessão. 👋
        </div>
      )}

      {/* chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="jurandir-chat"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
          >
            <div className="chat-header">Jurandir 🤖</div>
            <div className="chat-body">
              {messages.map((msg, i) => (
                <div key={i} className={`msg ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
              {loading && <div className="msg jurandir">Digitando...</div>}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                placeholder={remaining > 0 ? "Digite aqui..." : "Limite atingido nesta sessão"}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                disabled={remaining <= 0 || loading}
              />
              <button onClick={sendMessage} disabled={remaining <= 0 || loading}>
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Portal: rende o componente direto no <body>, evitando bugs com elementos transformados
const Jurandir = () => createPortal(<JurandirUI />, document.body);

export default Jurandir;
