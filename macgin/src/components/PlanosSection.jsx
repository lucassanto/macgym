// ============================================================
//  COMPONENTE: PlanosSection
//  Cards de preços e planos da academia.
//  Para editar valores vá em src/data/conteudo.js → PLANOS
// ============================================================
import { PLANOS } from "../data/conteudo";
import { TEMA } from "../styles/tema";
import { Fade } from "./Fade";

export function PlanosSection({ onNavigate }) {
  const G  = TEMA.ouro;
  const B  = TEMA.preto;
  const B3 = TEMA.pretoClaro;

  return (
    <section id="planos" style={{ padding: "clamp(48px, 8vh, 90px) 5%", background: B }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 5, color: G, textTransform: "uppercase", marginBottom: 14 }}>
              Invista em você
            </div>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1, marginBottom: 10 }}>
              SEU NOVO <span style={{ color: G }}>COMEÇO</span>
            </h2>
            <p style={{ fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.4)" }}>
              Valores reais, sem pegadinha
            </p>
          </div>
        </Fade>

        {/* Cards de planos */}
        <div className="plan-g" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
          {PLANOS.map((p, i) => (
            <Fade key={i} delay={i * 90}>
              <div style={{
                background: p.destaque ? G : B3,
                padding: "42px 30px", position: "relative",
                transform: p.destaque ? "scale(1.04)" : "scale(1)",
              }}>
                {/* Badge "Popular" */}
                {p.destaque && (
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    background: "#0a0a0a", padding: "5px 14px",
                    fontFamily: TEMA.fonteTitulo, fontSize: 10,
                    letterSpacing: 3, color: G, textTransform: "uppercase",
                  }}>Popular</div>
                )}

                {/* Nome do plano */}
                <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 18, color: p.destaque ? "rgba(10,10,10,0.5)" : "rgba(255,255,255,0.38)" }}>
                  {p.label}
                </div>

                {/* Preço */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 14 }}>
                  <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 15, color: p.destaque ? "#0a0a0a" : G }}>R$</span>
                  <span style={{ fontSize: 64, lineHeight: 1, color: p.destaque ? "#0a0a0a" : "#fff" }}>{p.valor}</span>
                  <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 13, color: p.destaque ? "rgba(10,10,10,0.45)" : "rgba(255,255,255,0.3)" }}>,00</span>
                </div>

                {/* Descrição */}
                <p style={{ fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 14, color: p.destaque ? "rgba(10,10,10,0.6)" : "rgba(255,255,255,0.48)", lineHeight: 1.6, marginBottom: 26 }}>
                  {p.desc}
                </p>

                {/* Botão */}
                <button onClick={() => onNavigate("contato")} style={{
                  width: "100%", padding: "13px",
                  border: `2px solid ${p.destaque ? "#0a0a0a" : G}`,
                  background: "transparent", cursor: "pointer",
                  fontFamily: TEMA.fonteTitulo, fontSize: 13,
                  letterSpacing: 3, textTransform: "uppercase",
                  color: p.destaque ? "#0a0a0a" : G,
                  transition: "background 0.2s, color 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = p.destaque ? "#0a0a0a" : G; e.currentTarget.style.color = p.destaque ? G : "#0a0a0a"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = p.destaque ? "#0a0a0a" : G; }}
                >Matricular agora</button>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
