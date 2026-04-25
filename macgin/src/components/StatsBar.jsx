// ============================================================
//  COMPONENTE: StatsBar
//  Faixa dourada com os números da academia.
//  Para editar os dados vá em src/data/conteudo.js → STATS
// ============================================================
import { STATS } from "../data/conteudo";
import { TEMA } from "../styles/tema";
import { Fade } from "./Fade";

export function StatsBar() {
  return (
    <section style={{ background: TEMA.ouro, padding: "42px 5%" }}>
      <div className="stats-g" style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20, textAlign: "center",
      }}>
        {STATS.map((s, i) => (
          <Fade key={i} delay={i * 80}>
            <div style={{ fontSize: "clamp(30px, 4vw, 50px)", color: "#0a0a0a", lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: TEMA.fonteTexto, fontSize: 11,
              color: "rgba(10,10,10,0.58)", letterSpacing: 2,
              textTransform: "uppercase", marginTop: 6,
            }}>
              {s.label}
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
