// ============================================================
//  COMPONENTE: SobreSection
//  Seção "Sobre nós" com foto do gestor e texto institucional.
//
//  Para editar professores vá em src/data/conteudo.js → PROFESSORES
//  Para trocar a foto edite o src da <img> abaixo
// ============================================================
import { PROFESSORES } from "../data/conteudo";
import { TEMA } from "../styles/tema";
import { Fade } from "./Fade";

export function SobreSection({ onNavigate }) {
  const G  = TEMA.ouro;
  const B2 = TEMA.pretoMedio;

  return (
    <section id="sobre" style={{ padding: "clamp(48px, 8vh, 90px) 5%", background: B2 }}>
      <div className="about-g" style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 68, alignItems: "center",
      }}>

        {/* Foto do gestor */}
        <Fade>
          <div style={{ position: "relative" }}>
            <img
              src="/images/09.jpg"
              alt="Gestor Mac Gym"
              style={{
                width: "100%",
                height: "clamp(320px, 45vh, 480px)",
                objectFit: "cover",
                objectPosition: "center 15%",
                display: "block",
              }}
            />
            {/* Legenda sobre a foto */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(to top, rgba(10,10,10,0.88), transparent)",
              padding: "28px 22px 20px",
            }}>
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: 20, color: G, letterSpacing: 2 }}>Nova gestão</div>
              <div style={{ fontFamily: TEMA.fonteTexto, fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Nova energia. Novos resultados.</div>
            </div>
            {/* Detalhe decorativo */}
            <div style={{ position: "absolute", top: -12, left: -12, width: 72, height: 72, border: "2px solid rgba(201,168,76,0.38)", pointerEvents: "none" }} />
          </div>
        </Fade>

        {/* Texto institucional */}
        <Fade delay={200}>
          <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 5, color: G, textTransform: "uppercase", marginBottom: 14 }}>
            Sobre nós
          </div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1, margin: "0 0 20px" }}>
            MAC GYM<br />
            <span style={{ color: G }}>CENTRO DE</span><br />
            TREINAMENTO
          </h2>
          <p style={{ fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 16 }}>
            A Mac Gym é referência em Ceará-Mirim para quem leva o treino a sério.
            Com nova gestão, chegamos com ainda mais estrutura, profissionais qualificados
            e um ambiente que te desafia todos os dias.
          </p>
          <p style={{ fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 30 }}>
            Nossa equipe é formada pelos professores{" "}
            {PROFESSORES.map((p, i) => (
              <span key={i}>
                <strong style={{ color: "#fff", fontWeight: 500 }}>{p.nome}</strong>
                {i < PROFESSORES.length - 1 ? (i === PROFESSORES.length - 2 ? " e " : ", ") : ""}
              </span>
            ))}
            {" "}— prontos para te guiar com segurança e resultados reais.
          </p>
          <button onClick={() => onNavigate("contato")} style={{
            background: "transparent", border: `1px solid ${G}`, color: G,
            padding: "13px 30px", fontFamily: TEMA.fonteTitulo,
            fontSize: 13, letterSpacing: 3, textTransform: "uppercase", cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = G; }}
          >
            Venha nos visitar
          </button>
        </Fade>
      </div>
    </section>
  );
}
