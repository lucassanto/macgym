// ============================================================
//  COMPONENTE: ModalidadesSection
//  Grid de cards com as modalidades oferecidas.
//  Para editar vá em src/data/conteudo.js → MODALITIES
// ============================================================
import { MODALITIES } from "../data/conteudo";
import { TEMA } from "../styles/tema";
import { Fade } from "./Fade";

export function ModalidadesSection() {
  const G  = TEMA.ouro;
  const B  = TEMA.preto;
  const B3 = TEMA.pretoClaro;

  return (
    <section id="modalidades" style={{ padding: "clamp(48px, 8vh, 90px) 5%", background: B }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 5, color: G, textTransform: "uppercase", marginBottom: 14 }}>
              O que oferecemos
            </div>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1 }}>
              NOSSAS <span style={{ color: G }}>MODALIDADES</span>
            </h2>
          </div>
        </Fade>

        {/* Grid de cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {MODALITIES.map((m, i) => (
            <Fade key={i} delay={i * 65}>
              <div
                style={{ background: B3, padding: "34px 26px", borderBottom: "2px solid transparent", transition: "background 0.3s, border-color 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#181205"; e.currentTarget.style.borderColor = G; }}
                onMouseLeave={e => { e.currentTarget.style.background = B3; e.currentTarget.style.borderColor = "transparent"; }}
              >
                <div style={{ fontSize: 34, marginBottom: 14 }}>{m.icon}</div>
                <h3 style={{ fontSize: 21, letterSpacing: 1, marginBottom: 10 }}>{m.name}</h3>
                <p style={{ fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.7 }}>
                  {m.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
