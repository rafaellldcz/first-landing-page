# Landing Page Template Premium (Next.js)

Template profissional de landing page para alta conversao, pronto para adaptar e vender para diferentes nichos.

## Visao geral

Este projeto foi construido para servir como base comercial reutilizavel para:
- agencia
- produto digital
- SaaS
- consultoria
- servico local
- infoproduto
- e-commerce de produto unico
- evento
- time/esports/marca pessoal

O foco do template e:
- UX orientada a conversao
- SEO tecnico basico pronto
- performance real (Next.js + App Router + next/image)
- arquitetura limpa e escalavel
- customizacao rapida sem retrabalho

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Motion for React (`motion/react`)
- Lucide React
- React Hook Form
- Zod
- next/image
- next/font
- ESLint

Auxiliares:
- clsx
- tailwind-merge
- class-variance-authority
- tw-animate-css

## Instalacao

```bash
npm install
```

## Comandos

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estrutura de pastas

```text
landing-page-template/
  public/
    images/
      hero-visual.svg
      og-cover.svg
  src/
    app/
      favicon.ico
      globals.css
      layout.tsx
      page.tsx
    components/
      landing/
        benefits-section.tsx
        faq-section.tsx
        final-cta-section.tsx
        footer.tsx
        header.tsx
        hero-section.tsx
        how-it-works-section.tsx
        icon-map.tsx
        landing-page.tsx
        lead-form-section.tsx
        offer-section.tsx
        reveal.tsx
        section-heading.tsx
        section-shell.tsx
        social-proof-section.tsx
        testimonials-section.tsx
      ui/
        accordion.tsx
        alert.tsx
        badge.tsx
        button.tsx
        card.tsx
        input.tsx
        label.tsx
        separator.tsx
        sheet.tsx
        textarea.tsx
    data/
      site-config.ts
      theme.ts
    hooks/
      use-lead-form.ts
    lib/
      integrations/
        lead-capture.ts
      icon-names.ts
      lead-schema.ts
      utils.ts
    styles/
      landing.css
  next.config.ts
  package.json
  tsconfig.json
```

## Como adaptar o conteudo

### 1) Conteudo global
Edite `src/data/site-config.ts`.

Esse arquivo controla:
- nome da marca
- textos da hero
- beneficios
- processo
- oferta
- depoimentos
- FAQ
- CTA final
- links do footer
- contatos

### 2) Formulario e mensagens
- Schema e validacao: `src/lib/lead-schema.ts`
- Estado/envio do form: `src/hooks/use-lead-form.ts`
- Integracao (mock pronta para trocar): `src/lib/integrations/lead-capture.ts`

Para integrar com backend real, substitua o conteudo de `submitLead`.

### 3) Identidade visual (cores e tema)
- Tokens de tema: `src/data/theme.ts`
- Variaveis CSS globais: `src/app/globals.css`
- Utilitarios visuais extras: `src/styles/landing.css`

### 4) Imagens
- Hero: `public/images/hero-visual.svg`
- OG image: `public/images/og-cover.svg`
- Caminhos das imagens: `src/data/site-config.ts`

## SEO tecnico implementado

- Metadata via App Router em `src/app/layout.tsx`
- `title`, `description`, `metadataBase`, `canonical`
- Open Graph e Twitter Card
- `lang="pt-BR"`
- estrutura semantica (`header`, `main`, `section`, `footer`)

## Publicar na Vercel

1. Suba o repositorio no GitHub/GitLab/Bitbucket.
2. Entre em https://vercel.com e importe o repositorio.
3. Framework detectado automaticamente: `Next.js`.
4. Build command: `next build` (padrao).
5. Output: `.next` (padrao).
6. Clique em Deploy.

Opcional para producao:
- configurar dominio customizado
- configurar variaveis de ambiente se conectar CRM/API

## Sugestoes de adaptacao por nicho

- SaaS: destaque trial, prova tecnica, comparativo com concorrente.
- Consultoria: destaque metodo, autoridade, estudos de caso.
- Infoproduto: destaque transformacao, bonus, urgencia de oferta.
- E-commerce de produto unico: destaque beneficio principal, garantia, depoimentos.
- Servico local: destaque regiao atendida, WhatsApp, prova local.
- Evento: destaque agenda, speakers, lotes, CTA de inscricao.

## Comandos usados na criacao deste projeto

```bash
npx create-next-app@latest landing-page-template --typescript --eslint --app --src-dir --import-alias "@/*" --tailwind --use-npm --yes
npm install motion lucide-react react-hook-form zod @hookform/resolvers
npx shadcn@latest init -d
npx shadcn@latest add accordion badge card input textarea label sheet separator alert
npm run lint
npm run build
```

## Observacao

A pasta raiz original continha espaco no nome (`Landing Pages`), entao o projeto foi criado dentro de `landing-page-template` para atender a restricao de nome de pacote npm.
