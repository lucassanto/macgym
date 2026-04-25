// ============================================================
//  MACGYM — ARQUIVO DE CONTEÚDO
//  Edite este arquivo para atualizar textos, preços,
//  horários, professores e imagens sem mexer nos componentes.
// ============================================================

// ── NAVEGAÇÃO ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Início",      id: "hero"        },
  { label: "Sobre",       id: "sobre"       },
  { label: "Modalidades", id: "modalidades" },
  { label: "Horários",    id: "horarios"    },
  { label: "Planos",      id: "planos"      },
  { label: "Contato",     id: "contato"     },
];

// ── CARROSSEL ────────────────────────────────────────────────
// pos = onde focar a imagem (ex: "center 20%" mostra o rosto)
export const CAROUSEL_IMAGES = [
  { src: "/images/01.jpg", label: "Nossa estrutura",                                    pos: "center center" },
  { src: "/images/05.jpg", label: "Nova gestão, novos resultados",                      pos: "center 20%"   },
  { src: "/images/07.jpg", label: "Daqui a 3 meses você vai querer ter começado hoje", pos: "center 18%"   },
  { src: "/images/06.jpg", label: "Aula Step — Segundas 7h20",                         pos: "center 15%"   },
  { src: "/images/08.jpg", label: "Aula Funcional — Terça e Quinta",                   pos: "center 20%"   },
  { src: "/images/09.jpg", label: "Academia Mac Gym — Nova Gestão",                    pos: "center 18%"   },
];

// ── NÚMEROS DA ACADEMIA ──────────────────────────────────────
export const STATS = [
  { value: "500+", label: "Alunos ativos"      },
  { value: "3",    label: "Professores"         },
  { value: "6",    label: "Modalidades"         },
  { value: "15h",  label: "Por dia aberto"      },
];

// ── PROFESSORES ──────────────────────────────────────────────
export const PROFESSORES = [
  { nome: "Alexandre Santos", turno: "Manhã (7h–9h)"   },
  { nome: "Kaline Gomes",     turno: "Tarde (14h–17h)" },
  { nome: "Wallace Melo",     turno: "Tarde (17h–20h)" },
];

// ── MODALIDADES ──────────────────────────────────────────────
export const MODALITIES = [
  { icon: "🏋️", name: "Musculação",       desc: "Equipamentos modernos para hipertrofia e força com acompanhamento profissional." },
  { icon: "⚡",  name: "Treino Funcional", desc: "Terça e Quinta às 6h, 16h40 e 19h. Treinos dinâmicos para performance total."   },
  { icon: "🪜",  name: "Aula Step",        desc: "Segundas das 7h20 às 8h20. Cardio intenso com ritmo, energia e resultado."      },
  { icon: "💪",  name: "Abdômen",          desc: "Terça e Quinta às 16h. Foco no core para definição e postura."                  },
  { icon: "🤸",  name: "Alongamento",      desc: "Mobilidade e flexibilidade integradas ao seu treino diário."                    },
  { icon: "👥",  name: "Aulas Coletivas",  desc: "Terça e Quinta, 7h. Treinamento em grupo com energia e motivação."              },
];

// ── HORÁRIOS ─────────────────────────────────────────────────
export const HORARIOS = [
  { dia: "Segunda a Sexta",  hora: "05h às 20h", aberto: true  },
  { dia: "Sábado e Domingo", hora: "Fechado",    aberto: false },
];

// ── PLANOS / PREÇOS ──────────────────────────────────────────
export const PLANOS = [
  { label: "Matrícula",   valor: "60", desc: "Taxa única para novos alunos.",              destaque: false },
  { label: "Mensalidade", valor: "50", desc: "Acesso completo à academia todos os meses.", destaque: true  },
  { label: "Ex-alunos",   valor: "55", desc: "Condição especial para quem está voltando.", destaque: false },
];

// ── CONTATO ──────────────────────────────────────────────────
export const CONTATO = {
  whatsapp:  "558499990000", // número com DDI+DDD sem espaços
  endereco:  "Ceará-Mirim, RN",
  horario:   "Seg–Sex: 5h às 20h",
};

// ── REDES SOCIAIS ────────────────────────────────────────────
export const REDES_SOCIAIS = [
  { nome: "Instagram", url: "https://instagram.com/macgym" },
  { nome: "Facebook",  url: "https://facebook.com/macgym"  },
  { nome: "WhatsApp",  url: "https://wa.me/558499990000"   },
];
