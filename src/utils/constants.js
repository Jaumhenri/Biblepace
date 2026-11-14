export const APP_NAME = 'BiblePace';
export const COURSE_TITLE = 'FOUNDATIONS';
export const COURSE_SUBTITLE = 'Formação Bíblica para Jovens Discípulos';
export const COURSE_TAGLINE = '24 MÓDULOS · 6 BLOCOS · DISCIPULADO COMPLETO';

export const NAV_LINKS = [
  { name: 'O Curso', href: '#hero' },
  { name: 'Lançamento', href: '#contagem' },
  { name: 'A Plataforma', href: '#plataforma' },
  { name: 'Grade Curricular', href: '#grade' },
  { name: 'Pilares', href: '#pilares' },
  { name: 'FAQ', href: '#faq' },
];

export const HERO_DATA = {
  badge: '🔥 FORMAÇÃO COMPLETA PARA DISCÍPULOS (15 A 30 ANOS)',
  title: 'Construa uma fé inabalável com fundamentos bíblicos sólidos',
  description: 'Uma jornada bíblica transformadora ao longo de 24 módulos práticos e pastorais, desenhada para quem deseja conhecer a Deus profundamente e viver o Evangelho no cotidiano.',
  ctaPrimary: 'Garantir Minha Vaga Agora',
  ctaSecondary: 'Conhecer a Plataforma',
  studentCount: '1.240+ jovens inscritos na última turma',
};

export const PILLARS = [
  {
    icon: 'BookOpen',
    title: 'BÍBLICO',
    subtitle: 'Fundamentação na Escritura',
    description: 'Toda formação parte estritamente da Palavra de Deus. Não como um conjunto de regras rígidas, mas como a revelação viva e transformadora de quem Deus realmente é.',
    color: '#e05326',
  },
  {
    icon: 'Zap',
    title: 'PRÁTICO',
    subtitle: 'Aplicação Real no Cotidiano',
    description: 'Conhecimento sem aplicação gera orgulho. Cada um dos 24 módulos encerra com desafios práticos semanais: "O que você vai fazer diferente essa semana?"',
    color: '#ff6b3d',
  },
  {
    icon: 'Heart',
    title: 'PASTORAL',
    subtitle: 'Jornada Humana e Acolhedora',
    description: 'Feito para a vida real de um jovem cristão, acolhendo dúvidas genuínas, quedas, recomeços, lutas emocionais e encorajamento constante para crescer.',
    color: '#e05326',
  },
];

export const TARGET_AUDIENCE = [
  {
    number: '01',
    title: 'Novos Convertidos',
    description: 'Que deram os primeiros passos na fé e querem entender com clareza a fundamentação bíblica e teológica da mensagem que abraçaram.',
  },
  {
    number: '02',
    title: 'Jovens em Discipulado',
    description: 'Que já caminham com Deus, mas sentem falta de uma estrutura organizada para aprofundar suas disciplinas espirituais e teologia.',
  },
  {
    number: '03',
    title: 'Líderes em Formação',
    description: 'Líderes de células, ministérios de jovens ou voluntários que precisam de vocabulário e preparo para ensinar e guiar outros.',
  },
  {
    number: '04',
    title: 'Buscadores com Sede de Deus',
    description: 'Pessoas sem conhecimento teológico prévio, mas com um desejo ardente de entender as grandes perguntas da vida pela lente bíblica.',
  },
];

export const DELIVERABLES = [
  {
    icon: 'Video',
    title: '24 Módulos de Ensino Sólido',
    description: 'Aulas estruturadas com didática jovem, profunda e de fácil assimilação.',
  },
  {
    icon: 'FileText',
    title: 'Apostilas Digitais Exclusivas',
    description: 'Material complementar em PDF diagramado para acompanhamento de cada aula.',
  },
  {
    icon: 'Tv',
    title: 'Aulas ao Vivo + Gravações',
    description: 'Encontros ao vivo para tirar dúvidas e acesso ilimitado às gravações na plataforma.',
  },
  {
    icon: 'MessageSquare',
    title: 'Perguntas para Reflexão',
    description: 'Perguntas profundas preparadas para estudo individual ou discussões em grupo.',
  },
  {
    icon: 'CheckCircle2',
    title: 'Desafios Práticos Semanais',
    description: 'Atividades práticas para colocar em ação os aprendizados no seu dia a dia.',
  },
  {
    icon: 'Users',
    title: 'Comunidade VIP de Alunos',
    description: 'Ambiente para troca de experiências, pedidos de oração e encorajamento mútuo.',
  },
  {
    icon: 'Award',
    title: 'Certificado de Conclusão',
    description: 'Certificado oficial do BiblePace Foundations reconhecendo sua jornada completa.',
  },
];

export const CURRICULUM_BLOCKS = [
  {
    id: 1,
    badge: 'BLOCO 1',
    title: 'FUNDAMENTOS',
    description: 'Bases essenciais para entender a confiabilidade da Bíblia, a mensagem do Evangelho e quem é Cristo.',
    modules: [
      { code: 'MÓDULO 01', title: 'Por que confiar na Bíblia?', keyText: '2Tm 3:16', topic: 'Natureza, inspiração e evidências históricas das Escrituras' },
      { code: 'MÓDULO 02', title: 'O Evangelho', keyText: 'Jo 3:16', topic: 'A má notícia, a boa notícia e as implicações para a vida toda' },
      { code: 'MÓDULO 03', title: 'O Plano de Salvação', keyText: 'Ef 2:8', topic: 'Eleição, Justificação, Adoção, Santificação e Glorificação' },
      { code: 'MÓDULO 04', title: 'Quem é Jesus?', keyText: 'Jo 1:1', topic: 'A união hipostática: plenamente Deus e plenamente homem' },
    ],
  },
  {
    id: 2,
    badge: 'BLOCO 2',
    title: 'IDENTIDADE E NOVA VIDA',
    description: 'Desconstruindo a busca por validação externa e descobrindo a ação do Espírito Santo e seus dons.',
    modules: [
      { code: 'MÓDULO 05', title: 'Identidade em Cristo', keyText: '1Co 15:22', topic: 'Sua identidade é dada, não conquistada por desempenho' },
      { code: 'MÓDULO 06', title: 'Espírito Santo', keyText: 'Jo 14:16', topic: 'Uma Pessoa da Trindade que habita e guia o cristão' },
      { code: 'MÓDULO 07', title: 'Dons Espirituais', keyText: '1Co 12:4', topic: 'Capacitações dadas para a edificação do Corpo de Cristo' },
      { code: 'MÓDULO 08', title: 'Santificação', keyText: '1Pe 1:15', topic: 'Transformação progressiva de dentro para fora, sem legalismo' },
    ],
  },
  {
    id: 3,
    badge: 'BLOCO 3',
    title: 'DISCIPLINAS ESPIRITUAIS',
    description: 'Práticas diárias para manter um relacionamento vivo com Deus e comunhão com a igreja.',
    modules: [
      { code: 'MÓDULO 09', title: 'Vida Devocional', keyText: 'Sl 5:3', topic: 'Consistência no hábito devocional (métodos SOAP, Lectio Divina)' },
      { code: 'MÓDULO 10', title: 'Oração e Jejum', keyText: 'Mt 26:41', topic: 'Oração como conversa sincera e jejum como dependência espiritual' },
      { code: 'MÓDULO 11', title: 'Igreja e Comunhão', keyText: 'Hb 10:25', topic: 'A igreja como família e a importância dos mandamentos "um ao outro"' },
      { code: 'MÓDULO 12', title: 'Serviço e Discipulado', keyText: 'Mt 20:28', topic: 'Vida na vida: o modelo de Jesus para transformar o mundo' },
    ],
  },
  {
    id: 4,
    badge: 'BLOCO 4',
    title: 'DESAFIOS DA JUVENTUDE',
    description: 'Enfrentando as dilemas da cultura jovem com discernimento, sabedoria e graça.',
    modules: [
      { code: 'MÓDULO 13', title: 'Namoro e Relacionamentos', keyText: '1Pe 4:8', topic: 'Namorar com intenção, limites emocionais e respeito mútuo' },
      { code: 'MÓDULO 14', title: 'Sexualidade Bíblica', keyText: '1Co 6:18', topic: 'Pureza como liberdade, superando a pornografia e restauração' },
      { code: 'MÓDULO 15', title: 'Ansiedade, Comparação e Redes Sociais', keyText: 'Fp 4:6', topic: 'Descanso na presença de Deus e detox do vício em validação' },
      { code: 'MÓDULO 16', title: 'Propósito e Chamado', keyText: 'Ef 2:10', topic: 'Fidelidade no pequeno e discernimento vocacional sem ansiedade' },
    ],
  },
  {
    id: 5,
    badge: 'BLOCO 5',
    title: 'COSMOVISÃO CRISTÃ',
    description: 'Aprenda a analisar cultura, filosofia, ciência e seitas sob a luz da narrativa bíblica.',
    modules: [
      { code: 'MÓDULO 17', title: 'Reino de Deus', keyText: 'Mt 4:17', topic: 'O "Já e Ainda Não": trazendo a soberania de Deus para o dia a dia' },
      { code: 'MÓDULO 18', title: 'Cosmovisão Cristã', keyText: 'Rm 12:2', topic: 'Criação, Queda, Redenção e Restauração na interpretação do mundo' },
      { code: 'MÓDULO 19', title: 'Apologética Básica', keyText: '1Pe 3:15', topic: 'Razões sólidas para crer e respostas às principais objeções' },
      { code: 'MÓDULO 20', title: 'Seitas e Falsas Doutrinas', keyText: '1Jo 4:1', topic: 'Discernimento bíblico contra o relativismo e o sincretismo' },
    ],
  },
  {
    id: 6,
    badge: 'BLOCO 6',
    title: 'MISSÃO E MATURIDADE',
    description: 'Comissionamento para viver intencionalmente para a eternidade e discipular as nações.',
    modules: [
      { code: 'MÓDULO 21', title: 'Evangelismo', keyText: 'Mc 16:15', topic: 'Evangelismo relacional e a força do seu testemunho pessoal' },
      { code: 'MÓDULO 22', title: 'Missões', keyText: 'Mt 24:14', topic: 'O coração missionário de Deus da sua rua aos povos não-alcançados' },
      { code: 'MÓDULO 23', title: 'Perseverança e Escatologia', keyText: '2Tm 4:7', topic: 'Mantendo a fé no sofrimento à luz da ressurreição final' },
      { code: 'MÓDULO 24', title: 'Vivendo para a Eternidade', keyText: '1Co 15:58', topic: 'Uma vida integrada: no Senhor o seu trabalho nunca é em vão' },
    ],
  },
];

export const SAMPLE_MODULE_PREVIEW = {
  code: 'MÓDULO 01',
  block: 'BLOCO 1 — FUNDAMENTOS',
  title: 'Por que confiar na Bíblia?',
  verse: 'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça. — 2Tm 3:16',
  objective: 'Apresentar a natureza, autoridade e confiabilidade da Bíblia, equipando o jovem a responder com convicção à pergunta: "Por que a Bíblia é diferente de qualquer outro livro?"',
  centralIdea: 'A Bíblia não é uma coleção de regras antigas. É a revelação de um Deus que quis ser conhecido, e que se comunicou com linguagem humana.',
  topics: ['Inspiração (Theopneustos)', 'Autoridade', 'Revelação', 'Palavra de Deus', 'Confiabilidade Histórica'],
  reflections: [
    'O que você mais questiona sobre a Bíblia? Onde está a sua maior dúvida?',
    'Como você responderia a alguém que diz: "A Bíblia foi escrita por homens, então não é confiável"?',
    'Qual é a diferença entre ler a Bíblia como literatura e lê-la como revelação viva de Deus?'
  ],
  weeklyChallenge: 'Escolha um livro da Bíblia que nunca leu. Leia 1 capítulo por dia durante 7 dias. Ao final, anote 3 descobertas sobre o caráter de Deus.',
};

export const FAQ_ITEMS = [
  {
    question: 'Para quem é o BiblePace Foundations?',
    answer: 'O curso foi planejado especialmente para jovens de 15 a 30 anos (novos convertidos, jovens em discipulado, líderes de células ou pessoas com sede de aprender a Palavra de Deus).',
  },
  {
    question: 'Preciso ter conhecimento prévio em teologia?',
    answer: 'Não! Toda a linguagem foi desenvolvida de forma extremamente didática, acessível, jovem e pastoral. Você vai aprender desde o básico até conceitos teológicos profundos de forma clara.',
  },
  {
    question: 'Como funciona o acesso às aulas e materiais?',
    answer: 'Assim que a sua inscrição for confirmada, você receberá acesso imediato à nossa plataforma online onde poderá assistir às videoaulas, baixar as apostilas em PDF e participar da comunidade.',
  },
  {
    question: 'As aulas são ao vivo ou gravadas?',
    answer: 'O curso conta com videoaulas gravadas em altíssima qualidade para você assistir no seu ritmo, além de encontros ao vivo periódicos para tirar dúvidas e mentoria.',
  },
  {
    question: 'E se eu não gostar ou achar que não é para mim?',
    answer: 'Você tem 7 dias de garantia incondicional. Se dentro desse período você achar que o curso não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento sem complicações.',
  },
  {
    question: 'Por quanto tempo terei acesso à plataforma?',
    answer: 'Você terá 1 ano inteiro de acesso ilimitado a todos os 24 módulos, atualizações, apostilas e gravações das aulas ao vivo.',
  },
];

export const PRICING_DATA = {
  originalPrice: 'R$ 99,90',
  currentPrice: 'R$ 39,90',
  installments: 'em até 12x de R$ 3,90',
  guaranteeDays: 7,
  ctaText: 'Quero Garantir Minha Vaga com Desconto',
  benefits: [
    'Acesso completo aos 24 Módulos (6 Blocos)',
    '24 Apostilas em PDF exclusivas para estudo',
    'Aulas ao vivo + gravações na plataforma',
    'Exercícios práticos e desafios semanais',
    'Comunidade VIP de alunos e líderes',
    'Certificado Oficial BiblePace Foundations',
    'Garantia incondicional de 7 dias',
  ],
};
