// ============================================================
//  COMPONENTE: WhatsAppButton
//  Botão flutuante do WhatsApp fixo no canto inferior direito.
//  Para editar o número vá em src/data/conteudo.js → CONTATO.whatsapp
// ============================================================
import { CONTATO } from "../data/conteudo";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTATO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      title="Fale conosco no WhatsApp"
      style={{
        position: "fixed", bottom: 26, right: 22, zIndex: 200,
        width: 54, height: 54, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "pulse 2.5s ease infinite",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        style={{ width: 54, height: 54, borderRadius: "50%", objectFit: "cover" }}
      />
    </a>
  );
}
