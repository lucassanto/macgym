// ============================================================
//  COMPONENTE: Footer
//  Rodapé com logo, badges de app e redes sociais.
//  Para editar redes sociais vá em src/data/conteudo.js → REDES_SOCIAIS
// ============================================================
import { REDES_SOCIAIS } from "../data/conteudo";
import { TEMA } from "../styles/tema";

export function Footer() {
  const G = TEMA.ouro;

  return (
    <footer style={{ background: "#050505", padding: "34px 5%", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Linha superior: logo + apps + redes */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 18, marginBottom: 24 }}>

          <img src="/images/logo.jpg" alt="Mac Gym" style={{ height: 42, objectFit: "contain" }} />

          {/* Badges App Store / Google Play */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <img src="/images/appstore.webp"    alt="App Store"   style={{ height: 34, objectFit: "contain", cursor: "pointer", opacity: 0.8 }} />
            <img src="/images/google-play.webp" alt="Google Play" style={{ height: 34, objectFit: "contain", cursor: "pointer", opacity: 0.8 }} />
          </div>

          {/* Redes sociais */}
          <div style={{ display: "flex", gap: 18 }}>
            {REDES_SOCIAIS.map(({ nome, url }) => (
              <a key={nome} href={url} target="_blank" rel="noreferrer" style={{
                fontFamily: TEMA.fonteTitulo, fontSize: 11, letterSpacing: 2,
                color: "rgba(255,255,255,0.32)", cursor: "pointer",
                textTransform: "uppercase", transition: "color 0.2s",
                textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.color = G}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.32)"}
              >{nome}</a>
            ))}
          </div>
        </div>

        {/* Linha inferior: copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 18, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 12, color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} Mac Gym Centro de Treinamento. Todos os direitos reservados.
          </span>
          <span style={{ fontFamily: TEMA.fonteTexto, fontSize: 12, color: "rgba(255,255,255,0.22)" }}>
            Ceará-Mirim, Rio Grande do Norte
          </span>
        </div>
      </div>
    </footer>
  );
}
