# Mac Gym — Site Oficial

## Estrutura do projeto

```
src/
├── App.jsx                        ← Arquivo principal (monta tudo)
│
├── data/
│   └── conteudo.js                ← ✏️  EDITE AQUI para mudar textos, preços e imagens
│
├── styles/
│   └── tema.js                    ← 🎨 EDITE AQUI para mudar cores e fontes
│
├── hooks/
│   └── useInView.js               ← Detecta quando elemento entra na tela (animação)
│
└── components/
    ├── Fade.jsx                   ← Animação de entrada suave ao rolar
    ├── Navbar.jsx                 ← Barra de navegação fixa
    ├── HeroSection.jsx            ← Seção inicial com carrossel
    ├── Carousel.jsx               ← Carrossel de imagens do hero
    ├── StatsBar.jsx               ← Faixa dourada com números
    ├── SobreSection.jsx           ← Seção "Sobre nós"
    ├── ModalidadesSection.jsx     ← Grid de modalidades
    ├── HorariosSection.jsx        ← Horários e cronograma
    ├── PlanosSection.jsx          ← Cards de preços
    ├── ContatoSection.jsx         ← Formulário de contato
    ├── Footer.jsx                 ← Rodapé
    └── WhatsAppButton.jsx         ← Botão flutuante do WhatsApp
```

---

## O que editar para cada situação

| O que você quer mudar          | Arquivo                        |
|-------------------------------|-------------------------------|
| Preços / mensalidade           | `src/data/conteudo.js` → PLANOS |
| Horários de funcionamento      | `src/data/conteudo.js` → HORARIOS |
| Professores                    | `src/data/conteudo.js` → PROFESSORES |
| Fotos do carrossel             | `src/data/conteudo.js` → CAROUSEL_IMAGES |
| Modalidades oferecidas         | `src/data/conteudo.js` → MODALITIES |
| Número do WhatsApp             | `src/data/conteudo.js` → CONTATO.whatsapp |
| Cor dourada ou tema visual     | `src/styles/tema.js` |
| Texto principal do hero        | `src/components/HeroSection.jsx` |

---

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

---

## Imagens

Coloque todas as imagens em `public/images/`:

```
public/
└── images/
    ├── 01.jpg ... 09.jpg   (fotos do carrossel)
    ├── logo.jpg            (logo da academia)
    ├── whatsapp.png        (ícone do WhatsApp)
    ├── appstore.webp       (badge App Store)
    └── google-play.webp    (badge Google Play)
```
