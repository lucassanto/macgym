// ============================================================
//  COMPONENTE: Fade
//  Envolve qualquer conteúdo e aplica animação de entrada
//  quando o elemento aparece na tela ao rolar a página.
//
//  Props:
//    children — conteúdo a animar
//    delay    — atraso em ms antes de animar (padrão: 0)
//    style    — estilos extras opcionais
// ============================================================
import { useRef, useState, useEffect } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export function Fade({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
