// ============================================================
//  COMPONENTE: Navbar
//  Barra de navegação fixa no topo com logo, links e menu
//  mobile (hamburguer). Fica transparente no topo e escurece
//  ao rolar a página.
//
//  Props:
//    scrolled  — booleano: página foi rolada > 60px
//    menuOpen  — booleano: menu mobile está aberto
//    setMenuOpen — função para abrir/fechar menu mobile
//    active    — id da seção ativa
//    onNavigate — função para navegar até uma seção
// ============================================================
import { NAV_LINKS } from "../data/conteudo";
import { TEMA } from "../styles/tema";

export function Navbar({ scrolled, menuOpen, setMenuOpen, active, onNavigate }) {
  const G = TEMA.ouro;

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 68,
        background:    scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom:  scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        transition: "all 0.3s ease",
        padding: "0 5%", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <button onClick={() => onNavigate("hero")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img src="/images/logo.jpg" alt="Mac Gym" style={{ height: 46, objectFit: "contain" }} />
        </button>

        {/* Links desktop */}
        <div className="desk" style={{ display: "flex", gap: 26, alignItems: "center" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => onNavigate(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: TEMA.fonteTitulo, fontSize: 13, letterSpacing: 2,
              color: active === id ? G : "rgba(255,255,255,0.62)",
              textTransform: "uppercase", transition: "color 0.2s",
            }}>{label}</button>
          ))}
          <button onClick={() => onNavigate("contato")} style={{
            background: G, color: "#0a0a0a", border: "none", cursor: "pointer",
            padding: "10px 22px", fontFamily: TEMA.fonteTitulo,
            fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600,
          }}>Matricule-se</button>
        </div>

        {/* Hamburguer mobile */}
        <button className="ham" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", color: G, fontSize: 26, alignItems: "center",
        }}>☰</button>
      </nav>

      {/* Menu mobile expandido */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "#0a0a0a", borderBottom: "1px solid rgba(201,168,76,0.18)",
          padding: "1.5rem 5%", display: "flex", flexDirection: "column", gap: 18,
        }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => onNavigate(id)} style={{
              background: "none", border: "none", cursor: "pointer", textAlign: "left",
              fontFamily: TEMA.fonteTitulo, fontSize: 20, letterSpacing: 2,
              color: active === id ? G : "#fff", textTransform: "uppercase",
            }}>{label}</button>
          ))}
        </div>
      )}
    </>
  );
}
