// ============================================================
//  COMPONENTE: HeroSection
//  Seção inicial do site com carrossel de fundo, título
//  principal e botões de ação.
//
//  Para editar o texto do hero, altere diretamente aqui.
//  Para editar as fotos, vá em src/data/conteudo.js
// ============================================================
import { Carousel } from "./Carousel";
import { TEMA } from "../styles/tema";

export function HeroSection({ onNavigate }) {
  const G = TEMA.ouro;

  return (
    <section id="hero" style={{
      position: "relative", height: "100vh",
      minHeight: 520, maxHeight: 780, overflow: "hidden",
    }}>
      {/* Carrossel de fundo */}
      <Carousel />

      {/* Gradiente sobre as imagens */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(to right, rgba(10,10,10,0.88) 40%, rgba(10,10,10,0.18) 100%)",
      }} />

      {/* Conteúdo textual */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 5%", paddingTop: 68,
      }}>
        <div style={{ animation: "fadeUp 0.8s ease forwards" }}>

          {/* Tag de localização */}
          <div style={{
            display: "inline-block",
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.32)",
            padding: "6px 18px", marginBottom: 20,
            fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 5,
            color: G, textTransform: "uppercase",
          }}>
            Centro de Treinamento — Ceará-Mirim / RN
          </div>

          {/* Título principal */}
          <h1 style={{
            fontSize: "clamp(50px, 9vw, 108px)", lineHeight: 0.92,
            marginBottom: 22, letterSpacing: 2,
            fontFamily: TEMA.fonteDisplay,
          }}>
            NOVA<br />
            <span style={{ color: G }}>GESTÃO.</span><br />
            NOVOS<br />
            RESULTADOS.
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 17,
            color: "rgba(255,255,255,0.68)", lineHeight: 1.7,
            maxWidth: 420, marginBottom: 34,
          }}>
            A Mac Gym está de cara nova. Estrutura completa, professores dedicados
            e a energia certa para você ir além dos seus limites.
          </p>

          {/* Botões CTA */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => onNavigate("planos")} style={{
              background: G, color: "#0a0a0a", border: "none", cursor: "pointer",
              padding: "15px 38px", fontFamily: TEMA.fonteTitulo,
              fontSize: 15, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600,
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >Ver Planos</button>

            <button onClick={() => onNavigate("contato")} style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.32)",
              cursor: "pointer", padding: "15px 38px",
              fontFamily: TEMA.fonteTitulo, fontSize: 15,
              letterSpacing: 3, textTransform: "uppercase",
              transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"; e.currentTarget.style.color = "#fff"; }}
            >Fale Conosco</button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div style={{
        position: "absolute", bottom: 34, left: "50%",
        animation: "bounce 2s ease infinite", zIndex: 4,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 10, letterSpacing: 4, color: "rgba(255,255,255,0.28)", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 34, background: `linear-gradient(to bottom, ${G}, transparent)` }} />
      </div>
    </section>
  );
}
