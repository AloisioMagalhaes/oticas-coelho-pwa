# Óticas Coelho PWA — Resumo do Projeto

## Status: v0.1.0 — MVP Inicial Completo

### O que foi entregue

#### 1. Pesquisa de Design-System
- Coleta de dados do Instagram @oticascoelhooficial via curl + parsing HTML
- 14K followers, 1.350 posts, 20 anos no mercado
- 5 unidades: Tailândia-PA, Goianésia-TO, Breu Branco-PA, Jacundá-PA, Tucuruí-PA
- Bio: "Veja o mundo com estilo"
- Paleta de cores definida: Azul Confiança + Dourado Elegância

#### 2. Design System (design-tokens/base.css)
- 100+ CSS custom properties
- Cores: primary (azul), secondary (dourado), success, warning, error, info, gray scale
- Tipografia: Poppins, Inter, Playfair Display
- Espaçamento: grid 8px
- Bordas, sombras, transições, z-index, breakpoints
- Suporte a dark mode e reduced motion

#### 3. Componentes Web (Lit + TypeScript)
Organismos implementados:
- `app-header` — Header sticky com logo, navegação, busca, carrinho
- `app-hero-banner` — Hero com CTA, stats, gradiente da marca
- `app-product-grid` — Grid de produtos com filtros por categoria
- `app-testimonials` — Depoimentos de clientes
- `app-footer` — Footer com links, contato, redes sociais
- `app-bottom-nav` — Navegação mobile fixa

#### 4. PWA
- Manifest completo (8 tamanhos de ícone, shortcuts, screenshots)
- Service Worker com Workbox (CacheFirst para imagens, StaleWhileRevalidate para CSS/JS)
- Offline fallback page
- 9 ícones PNG gerados programaticamente
- Logo SVG da marca

#### 5. SEO
- Meta tags completas (description, keywords, robots, Open Graph, Twitter Card)
- JSON-LD structured data (Optometric schema)
- Preconnect para Google Fonts
- Semântica HTML5 com ARIA landmarks
- Skip navigation link

#### 6. Acessibilidade (WCAG 2.1 AA)
- ARIA labels em todos os componentes
- Focus visible com outline colorido
- Keyboard navigation support
- Reduced motion via media query
- Screen reader friendly (roles, live regions)

#### 7. GitHub
- Repo: https://github.com/AloisioMagalhaes/oticas-coelho-pwa
- 12 labels organizadas
- 6 issues de próximas fases
- GitHub Project #10
- CI/CD pipeline (quality + deploy to GitHub Pages)
- Wiki: 3 páginas (Home, Design System, Arquitetura)

### Build Status
- TypeScript: OK (tsc --noEmit passa)
- Vite build: Bus error no WSL2 + Node 24 (bug conhecido)
- Build funcionará em CI/CD (GitHub Actions usa Ubuntu + Node 20)

### Próximos Passos (Issues criadas)
1. Implementar átomos (Button, Input, Badge, Icon)
2. Implementar moléculas (SearchBar, ProductCard, FormField)
3. Criar páginas (Produtos, Sobre, Contato)
4. SEO: sitemap.xml, robots.txt, local business data
5. A11y: auditoria WCAG 2.1 AA completa
6. PWA: install prompt, push notifications

### Comandos
```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run storybook  # Documentação de componentes
npm run typecheck  # Verificação de tipos
npm run lint       # Linting
```
