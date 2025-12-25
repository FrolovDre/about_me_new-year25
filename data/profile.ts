export const profile = {
  name: 'Андрей Фролов',
  role: 'Product Manager / Project Manager',
  summary: [
    'Выпускник МГУ, магистратура НИУ ВШЭ (бизнес-информатика / цифровые инновации).',
    'Интерес: продукт + аналитика + AI.',
    'Опыт в Agile и end-to-end цикле продукта.'
  ],
  location: 'Москва',
  email: '<<EMAIL>>',
  phone: '<<ТЕЛЕФОН>>',
  website: '<<ССЫЛКА>>',
  lookingFor: 'Стажировка / Junior Product, full-time, Москва.',
  socials: [
    { label: 'LinkedIn', href: '<<ССЫЛКА>>' },
    { label: 'GitHub', href: '<<ССЫЛКА>>' },
    { label: 'Telegram', href: 'https://t.me/frolov_dre' }
  ],
  cta: {
    label: 'Скачать CV',
    href: '/CV.pdf'
  },
  projects: [
    {
      title: 'AI assistant for product research',
      description:
        'Problem: slow synthesis of research evidence. What I did: defined KPI (Time-to-Report, Evidence Coverage, Adoption, LLM-cost/report), Lean Canvas, benchmarked Wokelo AI, built 12-month roadmap and data plan (open sources + internal base). Result: clear MVP scope and validation path. Tools: Weaviate, multi-LLM stack.',
      tags: ['Product Research', 'AI', 'Weaviate', 'LLM'],
      link: '<<ССЫЛКА>>'
    },
    {
      title: 'IVI mini-dramas for Gen Z',
      description:
        'Problem: define growth angle for a new Gen Z format. What I did: market sizing, insights, promo strategy, forecasted metrics and costs. Result: structured GTM hypothesis for testing. Tools: market research, KPI modeling.',
      tags: ['Go-to-Market', 'Analytics', 'Strategy'],
      link: '<<ССЫЛКА>>'
    },
    {
      title: 'Aviasales loyalty mechanics',
      description:
        'Problem: boost retention via loyalty. What I did: benchmarked 25+ programs, segmentation, mechanics selection, impact on LTV/Retention. Result: prioritized mechanics and KPI model. Tools: benchmarking, segmentation, metrics tree.',
      tags: ['Retention', 'Benchmarking', 'Metrics'],
      link: '<<ССЫЛКА>>'
    },
    {
      title: 'MVP movie подборщик',
      description:
        'Problem: reduce choice overload. What I did: JTBD, metrics tree, Figma prototype, MVP plan. Result: ready MVP scope for discovery. Tools: JTBD, Figma, roadmap.',
      tags: ['MVP', 'JTBD', 'Figma'],
      link: '<<ССЫЛКА>>'
    },
    {
      title: 'Островок: монетизация',
      description:
        'Problem: expand monetization opportunities. What I did: CJM, 3 monetization mechanics, metrics tree, promo plan. Result: mapped experiments pipeline. Tools: CJM, unit economics.',
      tags: ['Monetization', 'CJM', 'Growth'],
      link: '<<ССЫЛКА>>'
    }
  ],
  experience: [
    {
      role: 'Руководитель проектов',
      company: 'IBS',
      period: '09.2024–н.в.',
      bullets: [
        'Планирование, таймшиты, управление рисками и поручениями.',
        'Jira/Confluence/MS Project/SharePoint, PMO, протоколы и статус-презентации.',
        'RAG AI-ассистент, автоматизация Confluence, интеграция Confluence–Jira + Scroll.',
        'Перевод апдейтов в async, ускорение онбординга, отчеты/дашборды.',
        'Снижение просрочек поручений.'
      ]
    },
    {
      role: 'Руководитель проектов / Event-менеджер',
      company: 'Туристский комплекс “Клязьминское водохранилище”',
      period: '05.2023–08.2024',
      bullets: [
        'Договоры, координация подразделений, бюджетирование.',
        'Рекрутинг 20+ кандидатов.',
        'Организация 2 крупных мероприятий.'
      ]
    },
    {
      role: 'Ассистент рекрутера',
      company: 'Get Experts',
      period: '07.2023–08.2023',
      bullets: ['Скрининг кандидатов, обзвоны, приглашения.']
    },
    {
      role: 'Практикант HR',
      company: 'Норникель',
      period: '06.2022',
      bullets: [
        'Тест по культуре, образовательная программа, задачи.',
        'База ССУЗов.'
      ]
    }
  ],
  skills: {
    product: [
      'Discovery',
      'Benchmarking',
      'JTBD',
      'Roadmap',
      'Metrics tree',
      'Unit economics',
      'Go-to-market'
    ],
    process: [
      'Agile / Kanban',
      'Planning',
      'Risks',
      'Stakeholder comms',
      'Documentation'
    ],
    analytics: [
      'Market research',
      'Customer insights',
      'CJM',
      'KPI modeling',
      'Basic SQL'
    ],
    tools: [
      'Jira',
      'Confluence',
      'MS Project',
      'SharePoint',
      'Figma',
      'Miro',
      'Visiology',
      'GitHub'
    ]
  },
  education: [
    {
      title: 'МГУ',
      detail: 'Управление персоналом',
      period: '2024'
    },
    {
      title: 'НИУ ВШЭ',
      detail: 'Бизнес-информатика (магистратура)',
      period: '2026'
    },
    {
      title: 'Курсы IBS',
      detail:
        'Управление ИТ-проектами, коммуникации, риски/изменения, требования, Confluence/Jira, промптинг и др.',
      period: '2024–2025'
    },
    {
      title: 'Электронные сертификаты',
      detail:
        'Process Communication Model; “Управление проектами в современной компании”.',
      period: ''
    }
  ],
  languages: ['Русский (родной)', 'Английский B2'],
  otherStudies: [
    'ArchiMate enterprise architecture',
    'Edtech startup Lean Canvas + финмодель',
    'Tesla strategic roadmap',
    'Магнит WACC/DuPont',
    'AI-gift service backlog + BI'
  ]
};
