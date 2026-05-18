# 🕶️ Óticas Coelho — PWA

Progressive Web App da **Óticas Coelho**, rede de óculos com **20 anos no mercado** e 5 unidades no Pará e Tocantins.

## 📋 Sobre o Projeto

PWA de e-commerce para rede de óticas, focado em:
- **Vendas online** de armações, óculos de sol e lentes
- **SEO local** para cada unidade (Tailândia, Goianésia, Breu Branco, Jacundá, Tucuruí)
- **Agregação de valor** via conteúdo, avaliação visual e experiência digital
- **First mobile** — experiência otimizada para o público que acessa pelo celular

## 🎨 Design System

Baseado na identidade visual da marca coletada das redes sociais:
- **Instagram**: @oticascoelhooficial (14K followers, 1.350 posts)
- **Facebook**: Óticas Coelho Oficial
- **Threads**: @oticascoelhooficial

### Paleta de Cores
| Token | Hex | Uso |
|-------|-----|-----|
| Primary | `#1B6FF0` | Confiança, saúde visual |
| Secondary | `#F5A623` | Elegância, valor percebido |
| Success | `#4CAF50` | Confirmações |
| Error | `#F44336` | Erros, alertas |

### Tipografia
- **Headings**: Poppins (700-800)
- **Body**: Inter (400-600)
- **Accent**: Playfair Display (itálico para destaques)

## 🏗️ Stack Tecnológico

- **Web Components** nativos com Lit
- **Vite** como bundler
- **Storybook** para documentação de componentes
- **Vite PWA** plugin para service worker e manifest
- **TypeScript** strict mode
- **Atomic Design** (Átomo → Molécula → Organismo → Template → Página)

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Storybook
npm run storybook

# Preview do build
npm run preview
```

## 📁 Estrutura

```
src/
├── design-tokens/      # Variáveis CSS globais
├── components/
│   ├── atoms/          # Button, Input, Badge, Icon, Card, Avatar
│   ├── molecules/      # SearchBar, ProductCard, NavItem, FormField
│   ├── organisms/      # Header, Footer, HeroBanner, ProductGrid, Testimonials
│   ├── templates/      # MainLayout
│   └── pages/          # Home, Produtos, Sobre, Contato
├── services/           # API clients
├── styles/             # Global styles
└── utils/              # Helpers
```

## 📱 PWA Features

- ✅ Service Worker com Workbox
- ✅ Manifest com ícones e shortcuts
- ✅ Offline fallback page
- ✅ Cache strategies (CacheFirst para imagens, StaleWhileRevalidate para CSS/JS)
- ✅ Install prompt ready
- ✅ Theme color para address bar

## 🔍 SEO

- Meta tags completas (Open Graph, Twitter Card)
- JSON-LD structured data (Optometric)
- Semântica HTML5 com ARIA landmarks
- Preconnect para Google Fonts
- Sitemap-ready structure

## ♿ Acessibilidade (WCAG 2.1 AA)

- Skip navigation link
- ARIA labels em todos os componentes
- Focus visible com outline colorido
- Keyboard navigation support
- Reduced motion support
- Contraste mínimo 4.5:1

## 📄 Licença

UNLICENSED — Óticas Coelho © 2025
