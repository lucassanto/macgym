// ============================================================
//  COMPONENTE: HorariosSection
//  Exibe horários de funcionamento e cronograma de professores.
//  Para editar vá em src/data/conteudo.js → HORARIOS e PROFESSORES
// ============================================================
import { HORARIOS, PROFESSORES } from "../data/conteudo";
import { TEMA } from "../styles/tema";
import { Fade } from "./Fade";

export function HorariosSection() {
  const G  = TEMA.ouro;
  const B2 = TEMA.pretoMedio;
  const B3 = TEMA.pretoClaro;

  return (
    <section id="horarios" style={{ padding: "clamp(48px, 8vh, 90px) 5%", background: B2 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>

        {/* Cabeçalho */}
        <Fade>
          <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 5, color: G, textTransform: "uppercase", marginBottom: 14 }}>
            Quando treinar
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1, marginBottom: 46 }}>
            HORÁRIOS DE <span style={{ color: G }}>FUNCIONAMENTO</span>
          </h2>
        </Fade>

        <Fade delay={140}>
          {/* Cards de horário */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginBottom: 3 }}>
            {HORARIOS.map((h, i) => (
              <div key={i} style={{
                background: h.aberto ? B3 : "#0f0f0f",
                padding: "34px 22px",
                borderTop: `3px solid ${h.aberto ? G : "rgba(255,255,255,0.08)"}`,
              }}>
                <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 4, color: h.aberto ? G : "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: 12 }}>
                  {h.dia}
                </div>
                <div style={{ fontSize: 30, color: h.aberto ? "#fff" : "rgba(255,255,255,0.22)", letterSpacing: 2 }}>
                  {h.hora}
                </div>
              </div>
            ))}
          </div>

          {/* Cronograma de professores */}
          <div style={{ background: B3, padding: "30px 26px", textAlign: "left" }}>
            <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 4, color: G, textTransform: "uppercase", marginBottom: 18 }}>
              Cronograma de aulas coletivas
            </div>
            {PROFESSORES.map((p, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "11px 0",
                borderBottom: i < PROFESSORES.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 14, color: "rgba(255,255,255,0.72)" }}>{p.turno}</span>
                <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 13, color: G }}>{p.nome}</span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
