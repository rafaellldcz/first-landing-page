import type { IconName } from "@/lib/icon-names";

export type SectionId =
  | "inicio"
  | "prova-social"
  | "beneficios"
  | "como-funciona"
  | "oferta"
  | "depoimentos"
  | "faq"
  | "contato"
  | "cta-final";

type LinkItem = {
  label: string;
  href: `#${SectionId}`;
};

type StatItem = {
  value: string;
  label: string;
};

type BenefitItem = {
  title: string;
  description: string;
  icon: IconName;
};

type StepItem = {
  title: string;
  description: string;
  icon: IconName;
};

type OfferFeatureItem = {
  title: string;
  description: string;
};

type OfferComparisonItem = {
  oldWay: string;
  withYou: string;
};

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type FooterLinkGroup = {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type SiteConfig = {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    supportEmail: string;
    supportPhone: string;
    location: string;
  };
  seo: {
    title: string;
    description: string;
    url: string;
    locale: string;
    ogImage: string;
  };
  navigation: LinkItem[];
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    trustLine: string;
    trustedBy: string[];
    visual: {
      imageSrc: string;
      imageAlt: string;
      metric: string;
      metricLabel: string;
      upliftLabel: string;
    };
  };
  socialProof: {
    logos: string[];
    stats: StatItem[];
    indicators: string[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  offer: {
    title: string;
    subtitle: string;
    features: OfferFeatureItem[];
    comparison: OfferComparisonItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  form: {
    title: string;
    subtitle: string;
    privacy: string;
    submitLabel: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  footer: {
    linkGroups: FooterLinkGroup[];
    socialLinks: SocialLink[];
    legalText: string;
  };
};

export const siteConfig: SiteConfig = {
  brand: {
    name: "AstraScale Studio",
    shortName: "AstraScale",
    tagline: "Landing pages premium orientadas a resultado e conversão.",
    supportEmail: "contato@astrascale.com.br",
    supportPhone: "+55 (11) 4002-8922",
    location: "São Paulo, SP • Atendimento nacional",
  },
  seo: {
    title: "Landing Page Premium para Conversão | AstraScale Studio",
    description:
      "Projetamos e implementamos landing pages com copy comercial, performance técnica e foco em geração de oportunidades qualificadas.",
    url: "https://www.astrascale.com.br",
    locale: "pt_BR",
    ogImage: "/images/og-cover.svg",
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Resultados", href: "#prova-social" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Processo", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    badge: "Diagnóstico estratégico + design orientado a conversão",
    title: "Transforme sua oferta em uma",
    highlight: "landing page que gera reuniões qualificadas",
    subtitle:
      "Nada de visual genérico ou copy vazia. Você recebe uma página clara, rápida e persuasiva para converter tráfego em oportunidades reais.",
    primaryCta: { label: "Agendar diagnóstico", href: "#contato" },
    secondaryCta: { label: "Ver provas e métricas", href: "#prova-social" },
    trustLine:
      "Ideal para SaaS, consultorias, serviços locais, infoprodutos e operações de aquisição em crescimento.",
    trustedBy: [
      "Média de +38% em conversão após otimização",
      "Estrutura preparada para CRM e automações",
      "Implementação com qualidade de produção",
    ],
    visual: {
      imageSrc: "/images/hero-visual.svg",
      imageAlt: "Painel com métricas de conversão e crescimento de leads",
      metric: "+38%",
      metricLabel: "de aumento médio em leads qualificados nos primeiros 60 dias",
      upliftLabel: "Base técnica limpa para evoluir campanhas sem retrabalho.",
    },
  },
  socialProof: {
    logos: [
      "Vitta Educação",
      "Cubo Jurídico",
      "Nord AI",
      "Lumen Saúde",
      "Sprint Retail",
      "Arena Prime",
    ],
    stats: [
      { value: "+38%", label: "conversão média após refatoração da landing" },
      { value: "97/100", label: "performance mobile média em projetos publicados" },
      { value: "-27%", label: "redução média no custo por lead em tráfego pago" },
      { value: "12 dias", label: "prazo médio para primeira versão aprovada" },
    ],
    indicators: [
      "Diagnóstico de posicionamento antes de qualquer decisão visual.",
      "Copy escrita para remover objeções e acelerar a tomada de decisão.",
      "Medição pronta para GA4, Meta Pixel, CRM e automações de follow-up.",
    ],
  },
  benefits: {
    title: "O que muda quando a landing é pensada para conversão",
    subtitle:
      "Você não ganha apenas uma página bonita: ganha uma estrutura comercial que trabalha com seu time todos os dias.",
    items: [
      {
        title: "Valor claro em segundos",
        description: "A proposta fica evidente logo na primeira dobra, sem ruído.",
        icon: "target",
      },
      {
        title: "Navegação que conduz ação",
        description: "Cada seção leva naturalmente ao próximo passo da decisão.",
        icon: "workflow",
      },
      {
        title: "Copy com intenção comercial",
        description: "Textos enxutos, humanos e orientados a dor, prova e benefício.",
        icon: "message",
      },
      {
        title: "Performance e SEO técnico",
        description: "Carregamento rápido, semântica correta e base pronta para indexar.",
        icon: "rocket",
      },
      {
        title: "Captura de lead qualificado",
        description: "Formulário validado com UX mobile para aumentar taxa de envio.",
        icon: "check",
      },
      {
        title: "Escalável para novos nichos",
        description: "Componentes reutilizáveis para adaptar oferta sem recomeçar.",
        icon: "layers",
      },
    ],
  },
  process: {
    title: "Do briefing ao lançamento em 4 etapas objetivas",
    subtitle:
      "Fluxo direto, com decisões rápidas e foco no que realmente impacta conversão.",
    steps: [
      {
        title: "Diagnóstico comercial",
        description: "Alinhamos público, oferta, objeções e meta principal da página.",
        icon: "chart",
      },
      {
        title: "Mensagem e direção visual",
        description: "Definimos narrativa, hierarquia e estilo para reforçar autoridade.",
        icon: "sparkles",
      },
      {
        title: "Implementação e integrações",
        description: "Construímos a página, formulário e pontos de rastreamento.",
        icon: "clock",
      },
      {
        title: "Publicação e calibração",
        description: "Entramos no ar com revisão final e ajustes iniciais de conversão.",
        icon: "users",
      },
    ],
  },
  offer: {
    title: "Escopo enxuto para lançar rápido e vender com consistência",
    subtitle:
      "Sem escopo inflado. Entrega focada em posicionamento, clareza e performance para acelerar retorno.",
    features: [
      {
        title: "Arquitetura completa de seção de venda",
        description: "Hero, prova social, benefícios, oferta, FAQ, formulário e CTA final.",
      },
      {
        title: "Design premium com ritmo visual",
        description: "Composição pensada para leitura rápida e percepção de valor.",
      },
      {
        title: "Base técnica pronta para integração",
        description: "Fácil conexão com API, webhook, CRM, WhatsApp e e-mail marketing.",
      },
      {
        title: "Código limpo para manutenção",
        description: "Componentes reutilizáveis e conteúdo centralizado para escala.",
      },
    ],
    comparison: [
      {
        oldWay: "Página bonita, mas sem narrativa comercial.",
        withYou: "Estrutura orientada a conversão com CTA claro em toda a jornada.",
      },
      {
        oldWay: "Layout genérico igual ao dos concorrentes.",
        withYou: "Posicionamento visual mais autoral e coerente com ticket premium.",
      },
      {
        oldWay: "Formulário fraco e leads desqualificados.",
        withYou: "Captação com validação real e mensagens que reduzem abandono.",
      },
    ],
  },
  testimonials: {
    title: "Feedback de times que precisavam vender com mais previsibilidade",
    subtitle:
      "Depoimentos fictícios de referência para mostrar o tipo de resultado esperado em projetos reais.",
    items: [
      {
        quote:
          "A nova landing tirou ruído da nossa proposta. Em poucas semanas o time comercial já percebeu leads mais preparados para fechar.",
        name: "Carolina Mendes",
        role: "Head de Marketing",
        company: "Nord AI",
      },
      {
        quote:
          "Parou de parecer template. A página ficou com cara de marca premium e melhorou o desempenho das campanhas sem aumentar orçamento.",
        name: "Fábio Azevedo",
        role: "Sócio-diretor",
        company: "Cubo Jurídico",
      },
      {
        quote:
          "Foi fácil adaptar para nosso nicho e integrar com CRM. O formulário converte melhor no mobile e o acompanhamento ficou mais claro.",
        name: "Mariana Torres",
        role: "Gerente de Growth",
        company: "Sprint Retail",
      },
    ],
  },
  faq: {
    title: "Perguntas frequentes antes de iniciar",
    subtitle:
      "Respostas diretas para reduzir fricção na tomada de decisão e acelerar o início do projeto.",
    items: [
      {
        question: "Essa estrutura funciona para diferentes nichos?",
        answer:
          "Sim. A base foi desenhada para adaptar copy, oferta e prova social com rapidez, sem reconstruir o projeto do zero.",
      },
      {
        question: "Vocês também ajustam a copy para o meu público?",
        answer:
          "Sim. A copy é revisada para destacar diferenciais, atacar objeções e aumentar clareza de valor.",
      },
      {
        question: "É possível integrar com CRM e automações?",
        answer:
          "Sim. A camada de captura já está preparada para API route, webhook, CRM, WhatsApp e plataformas de e-mail.",
      },
      {
        question: "A página já sai pronta para SEO básico?",
        answer:
          "Sim. Inclui metadados, Open Graph, headings organizados e estrutura semântica para indexação.",
      },
      {
        question: "Como fica o desempenho em dispositivos móveis?",
        answer:
          "A implementação é mobile-first, com foco em carregamento rápido, leitura confortável e boa experiência de envio.",
      },
      {
        question: "Quanto tempo para colocar em produção?",
        answer:
          "Em média, a primeira versão fica pronta entre 7 e 12 dias úteis, dependendo da velocidade de aprovação dos conteúdos.",
      },
    ],
  },
  form: {
    title: "Solicite um diagnóstico para a sua landing",
    subtitle:
      "Preencha o formulário para receber uma proposta com estrutura, prazo e próximos passos.",
    privacy:
      "Ao enviar, você concorda em receber contato comercial. Seus dados são usados apenas para atendimento e proposta.",
    submitLabel: "Receber proposta personalizada",
  },
  finalCta: {
    title: "Se sua landing ainda não convence em segundos, você está perdendo vendas todos os dias",
    subtitle:
      "Vamos construir uma página com posicionamento premium, copy persuasiva e navegação sem fricção para converter melhor.",
    primaryCta: { label: "Quero minha landing premium", href: "#contato" },
    secondaryCta: { label: "Ver perguntas frequentes", href: "#faq" },
  },
  footer: {
    linkGroups: [
      {
        title: "Navegação",
        links: [
          { label: "Início", href: "#inicio" },
          { label: "Resultados", href: "#prova-social" },
          { label: "Benefícios", href: "#beneficios" },
          { label: "Contato", href: "#contato" },
        ],
      },
      {
        title: "Soluções",
        links: [
          { label: "Estrutura comercial", href: "#oferta" },
          { label: "Prova social", href: "#depoimentos" },
          { label: "Processo de entrega", href: "#como-funciona" },
          { label: "Perguntas frequentes", href: "#faq" },
        ],
      },
      {
        title: "Contato",
        links: [
          { label: "Enviar e-mail", href: "mailto:contato@astrascale.com.br" },
          { label: "Ligar agora", href: "tel:+551140028922" },
          { label: "Solicitar proposta", href: "#contato" },
          { label: "Instagram", href: "https://instagram.com" },
        ],
      },
    ],
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    ],
    legalText: "Todos os direitos reservados.",
  },
};
