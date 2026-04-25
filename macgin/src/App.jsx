// ============================================================
//  MACGYM — APP PRINCIPAL
//  Este arquivo monta todos os componentes do site.
//  Não tem conteúdo aqui — apenas organização.
//
//  Para editar conteúdo:  src/data/conteudo.js
//  Para editar cores:     src/styles/tema.js
//  Para editar seções:    src/components/<NomeSection>.jsx
// ============================================================
import { useState, useEffect } from "react";
import { TEMA } from "./styles/tema";

// Componentes de layout
import { Navbar }        from "./components/Navbar";
import { Footer }        from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

// Seções da página
import { HeroSection }        from "./components/HeroSection";
import { StatsBar }           from "./components/StatsBar";
import { SobreSection }       from "./components/SobreSection";
import { ModalidadesSection } from "./components/ModalidadesSection";
import { HorariosSection }    from "./components/HorariosSection";
import { PlanosSection }      from "./components/PlanosSection";
import { ContatoSection }     from "./components/ContatoSection";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("hero");

  // Detecta scroll para mudar estilo da navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navega suavemente até a seção clicada
  const onNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: TEMA.fonteDisplay, background: TEMA.preto, color: "#fff", minHeight: "100vh" }}>

      {/* Fontes e animações globais */}
      <link href={TEMA.googleFonts} rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.45); }
          60%       { box-shadow: 0 0 0 14px rgba(201,168,76,0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        input::placeholder { color: rgba(255,255,255,0.28); }
        input:focus        { outline: none; border-color: #c9a84c !important; }

        /* Responsividade */
        @media (max-width: 768px) {
          .desk    { display: none !important; }
          .ham     { display: flex !important; }
          .about-g { grid-template-columns: 1fr !important; }
          .stats-g { grid-template-columns: repeat(2, 1fr) !important; }
          .plan-g  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── LAYOUT ──────────────────────────────────────────── */}
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        active={active}
        onNavigate={onNavigate}
      />

      <main>
        <HeroSection        onNavigate={onNavigate} />
        <StatsBar           />
        <SobreSection       onNavigate={onNavigate} />
        <ModalidadesSection />
        <HorariosSection    />
        <PlanosSection      onNavigate={onNavigate} />
        <ContatoSection     />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
