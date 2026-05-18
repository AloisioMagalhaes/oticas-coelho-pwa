# Arquitetura do Projeto

## Estrutura de Pastas

```
oticas-coelho-pwa/
├── .github/workflows/     # CI/CD pipelines
├── .storybook/            # Storybook configuration
├── public/                # Static assets
│   ├── icons/             # PWA icons (72-512px)
│   ├── images/            # Product images
│   ├── manifest/          # Web App Manifest
│   ├── logo.svg           # Brand logo
│   ├── sw.js              # Service Worker
│   └── offline.html       # Offline fallback
├── src/
│   ├── components/
│   │   ├── atoms/         # Indivisíveis (<4KB cada)
│   │   ├── molecules/     # Átomos + Átomos
│   │   ├── organisms/     # Moléculas + Átomos
│   │   ├── templates/     # Layouts
│   │   └── pages/         # Páginas completas
│   ├── design-tokens/     # CSS custom properties
│   ├── services/          # API clients
│   ├── styles/            # Global styles
│   ├── utils/             # Helpers
│   ├── main.ts            # Entry point
│   └── vite-env.d.ts      # Type declarations
├── index.html             # HTML entry
├── vite.config.ts         # Vite + PWA config
├── tsconfig.json          # TypeScript config
└── package.json
```

## Padrões de Código

### Web Components com Lit
- Cada componente é uma classe que estende `lit.LitElement`
- CSS encapsulado via `static styles`
- Props reativas via `@property` e `@state`
- Eventos customizados via `CustomEvent`

### Design Tokens
- **ZERO valores hardcoded** — tudo via `var(--token-name)`
- Tokens organizados por categoria: cores, tipografia, spacing, bordas, sombras
- Suporte a dark mode e reduced motion

### Convenção de Commits
Seguindo Conventional Commits:
- `feat(escopo): descrição` — Nova feature
- `fix(escopo): descrição` — Bug fix
- `docs(escopo): descrição` — Documentação
- `style(escopo): descrição` — Formatação
- `refactor(escopo): descrição` — Refatoração
- `test(escopo): descrição` — Testes
- `chore(escopo): descrição` — Manutenção

### Limite de 4KB
Cada arquivo de componente deve ter no máximo 4096 bytes.
Se exceder, dividir em átomos adicionais.
