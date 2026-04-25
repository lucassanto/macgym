// ============================================================
//  COMPONENTE: ContatoSection
//  Formulário de contato e informações da academia.
//  Para editar endereço/horário vá em src/data/conteudo.js → CONTATO
// ============================================================
import { CONTATO } from "../data/conteudo";
import { TEMA } from "../styles/tema";
import { Fade } from "./Fade";

export function ContatoSection() {
  const G  = TEMA.ouro;
  const B2 = TEMA.pretoMedio;
  const B3 = TEMA.pretoClaro;

  const infos = [
    { icon: "📍", text: CONTATO.endereco  },
    { icon: "⏰", text: CONTATO.horario   },
    { icon: "💬", text: "WhatsApp disponível" },
  ];

  return (
    <section id="contato" style={{ padding: "clamp(48px, 8vh, 90px) 5%", background: B2 }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>

        {/* Cabeçalho */}
        <Fade>
          <div style={{ fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 5, color: G, textTransform: "uppercase", marginBottom: 14 }}>
            Fale conosco
          </div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1, marginBottom: 14 }}>
            PRONTO PARA <span style={{ color: G }}>COMEÇAR?</span>
          </h2>
          <p style={{ fontFamily: TEMA.fonteTexto, fontWeight: 300, fontSize: 16, color: "rgba(255,255,255,0.48)", marginBottom: 42, lineHeight: 1.7 }}>
            Venha conhecer a academia. Nossa equipe vai te ajudar a montar o plano ideal para o seu objetivo.
          </p>
        </Fade>

        {/* Formulário */}
        <Fade delay={160}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30 }}>
            {[
              { ph: "Seu nome completo", type: "text"  },
              { ph: "Seu e-mail",        type: "email" },
              { ph: "WhatsApp",          type: "tel"   },
            ].map((f, i) => (
              <input key={i} type={f.type} placeholder={f.ph} style={{
                width: "100%", padding: "15px 18px",
                background: B3, border: "1px solid rgba(255,255,255,0.07)",
                color: "#fff", fontFamily: TEMA.fonteTexto, fontSize: 15,
              }} />
            ))}

            <button style={{
              width: "100%", padding: "17px",
              background: G, border: "none", cursor: "pointer",
              fontFamily: TEMA.fonteTitulo, fontSize: 15,
              letterSpacing: 4, textTransform: "uppercase",
              color: "#0a0a0a", fontWeight: 600, marginTop: 4,
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Quero me matricular
            </button>
          </div>

          {/* Informações de contato */}
          <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
            {infos.map((info, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: TEMA.fonteTexto, fontSize: 13, color: "rgba(255,255,255,0.42)" }}>
                <span style={{ fontSize: 15 }}>{info.icon}</span>
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
