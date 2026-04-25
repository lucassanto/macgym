// ============================================================
//  COMPONENTE: Carousel
//  Carrossel automático de imagens com setas de navegação
//  e dots indicadores. Troca de foto a cada 5 segundos.
//
//  Para adicionar/remover fotos edite CAROUSEL_IMAGES
//  no arquivo src/data/conteudo.js
// ============================================================
import { useState, useEffect, useCallback } from "react";
import { CAROUSEL_IMAGES } from "../data/conteudo";
import { TEMA } from "../styles/tema";

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fading,  setFading]  = useState(false);
  const total = CAROUSEL_IMAGES.length;
  const G = TEMA.ouro;

  const go = useCallback((next) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent((next + total) % total);
      setFading(false);
    }, 400);
  }, [fading, total]);

  // Autoplay — troca a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, go]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>

      {/* Imagens */}
      {CAROUSEL_IMAGES.map((img, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? (fading ? 0 : 1) : 0,
          transition: "opacity 0.55s ease",
        }}>
          <img
            src={img.src}
            alt={img.label}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.pos, opacity: 0.52 }}
          />
        </div>
      ))}

      {/* Setas anterior / próximo */}
      {["◀", "▶"].map((seta, i) => (
        <button key={i} onClick={() => go(current + (i === 0 ? -1 : 1))} style={{
          position: "absolute", top: "50%", transform: "translateY(-50%)",
          [i === 0 ? "left" : "right"]: 18,
          background: "rgba(0,0,0,0.45)", border: `1px solid rgba(201,168,76,0.4)`,
          color: G, fontSize: 18, width: 44, height: 44,
          cursor: "pointer", zIndex: 5,
        }}>{seta}</button>
      ))}

      {/* Dots indicadores */}
      <div style={{
        position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 8, zIndex: 5,
      }}>
        {CAROUSEL_IMAGES.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            width: i === current ? 28 : 8, height: 8,
            background: i === current ? G : "rgba(255,255,255,0.3)",
            border: "none", cursor: "pointer", padding: 0,
            transition: "width 0.3s, background 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}
