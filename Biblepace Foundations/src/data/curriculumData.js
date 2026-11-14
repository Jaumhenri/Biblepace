// BiblePace Foundations — Grade Curricular Oficial (PDF 52 págs.)
export const COURSE_INFO = {
  title: "BiblePace Foundations",
  subtitle: "Formação Bíblica para Jovens Discípulos",
  tagline: "Mais da Palavra. Mais de Cristo. Sempre no ritmo.",
  stats: {
    totalBlocks: 6,
    totalModules: 24,
    totalLessons: 144, // 24 módulos x 6 aulas
    targetAudience: "Jovens entre 15 e 30 anos",
    pillars: [
      {
        title: "BÍBLICO",
        description: "Toda formação parte da Escritura. Não como regra, mas como revelação de quem Deus é."
      },
      {
        title: "PRÁTICO",
        description: "Cada módulo termina com aplicação real. O que você vai fazer diferente essa semana?"
      },
      {
        title: "PASTORAL",
        description: "Feito para uma jornada real, com dúvidas, quedas, recomeços e crescimento."
      }
    ]
  }
};

export const BLOCKS_DATA = [
  {
    id: 1,
    slug: "fundamentos",
    title: "BLOCO 1 — FUNDAMENTOS",
    shortTitle: "Fundamentos",
    color: "#E8461E",
    description: "A base inabalável da fé cristã: Escritura, Evangelho, Salvação e a Pessoa de Jesus Cristo.",
    moduleIds: [1, 2, 3, 4]
  },
  {
    id: 2,
    slug: "identidade-nova-vida",
    title: "BLOCO 2 — IDENTIDADE E NOVA VIDA",
    shortTitle: "Identidade & Nova Vida",
    color: "#18181B",
    description: "Quem somos em Cristo, o poder do Espírito Santo, os dons espirituais e o processo de santificação.",
    moduleIds: [5, 6, 7, 8]
  },
  {
    id: 3,
    slug: "disciplinas-espirituais",
    title: "BLOCO 3 — DISCIPLINAS ESPIRITUAIS",
    shortTitle: "Disciplinas Espirituais",
    color: "#E8461E",
    description: "Práticas diárias que sustentam a intimidade com Deus: Vida Devocional, Oração, Igreja e Serviço.",
    moduleIds: [9, 10, 11, 12]
  },
  {
    id: 4,
    slug: "desafios-juventude",
    title: "BLOCO 4 — DESAFIOS DA JUVENTUDE",
    shortTitle: "Desafios da Juventude",
    color: "#18181B",
    description: "Respostas bíblicas para os maiores dilemas da geração: relacionamentos, sexualidade, ansiedade e chamado.",
    moduleIds: [13, 14, 15, 16]
  },
  {
    id: 5,
    slug: "cosmovisao-crista",
    title: "BLOCO 5 — COSMOVISÃO CRISTÃ",
    shortTitle: "Cosmovisão Cristã",
    color: "#E8461E",
    description: "Enxergando a realidade através do Evangelho: o Reino de Deus, defesa da fé e discernimento contra heresias.",
    moduleIds: [17, 18, 19, 20]
  },
  {
    id: 6,
    slug: "missao-maturidade",
    title: "BLOCO 6 — MISSÃO E MATURIDADE",
    shortTitle: "Missão & Maturidade",
    color: "#18181B",
    description: "O chamado para impactar o mundo: evangelismo, missões globais, perseverança escatológica e legado eterno.",
    moduleIds: [21, 22, 23, 24]
  }
];

export const MODULES_DATA = [
  // BLOCO 1
  {
    id: 1,
    blockId: 1,
    number: 1,
    title: "Por que confiar na Bíblia?",
    cardTheme: "orange", // orange or dark for alternate rhythm
    verse: {
      text: "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça.",
      ref: "2Tm 3:16"
    },
    objective: "Apresentar a natureza, autoridade e confiabilidade da Bíblia, equipando o jovem a responder com convicção à pergunta: 'Por que a Bíblia é diferente de qualquer outro livro?'",
    context: "A Bíblia foi escrita por ~40 autores em 3 continentes, 3 idiomas e ao longo de 1.500 anos — e ainda assim conta uma única história coesa. Não é apenas um livro antigo: é um livro vivo que continua transformando vidas. A palavra 'inspirada' em grego é theopneustos — literalmente 'soprada por Deus'.",
    mainIdea: "A Bíblia não é uma coleção de regras antigas. É a revelação de um Deus que quis ser conhecido, e que se comunicou com linguagem humana.",
    themes: ["Inspiração", "Autoridade", "Revelação", "Palavra de Deus", "Confiabilidade"],
    lessons: [
      { id: "1-1", order: 1, title: "O que é a Bíblia? — Natureza e origem", duration: "14:20" },
      { id: "1-2", order: 2, title: "Como a Bíblia foi escrita? — Inspiração e autoria humana", duration: "16:45" },
      { id: "1-3", order: 3, title: "Podemos confiar nos manuscritos? — Evidências históricas", duration: "18:10" },
      { id: "1-4", order: 4, title: "O cânon bíblico — Como esses livros foram escolhidos?", duration: "15:30" },
      { id: "1-5", order: 5, title: "A Bíblia e a ciência — Conflito ou complemento?", duration: "17:40" },
      { id: "1-6", order: 6, title: "Como ler a Bíblia — Ferramentas básicas de interpretação", duration: "19:15" }
    ],
    application: "Muitos jovens carregam a Bíblia mas nunca pararam para perguntar: 'por que eu confio nesse livro?' Antes de mergulhar no conteúdo das Escrituras, é preciso ter convicção sobre sua origem. Um discípulo que não confia na Bíblia será facilmente balançado.",
    reflectionQuestions: [
      "O que você mais questiona sobre a Bíblia? Onde está a sua maior dúvida?",
      "Como você responderia a alguém que diz: 'A Bíblia foi escrita por homens, então não é confiável'?",
      "Qual é a diferença entre ler a Bíblia como literatura e lê-la como revelação de Deus?"
    ],
    weeklyChallenge: "Escolha um livro da Bíblia que nunca leu. Leia 1 capítulo por dia durante 7 dias. Ao final, escreva 3 coisas que você aprendeu sobre Deus com essa leitura.",
    material: { title: "Apostila — Módulo 1 (Confiabilidade Bíblica)", size: "2.1 MB", pages: 14 }
  },
  {
    id: 2,
    blockId: 1,
    number: 2,
    title: "O Evangelho",
    cardTheme: "dark",
    verse: {
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      ref: "Jo 3:16"
    },
    objective: "Apresentar o Evangelho em sua forma mais completa e clara, indo além do 'convite ao altar' para entender o que realmente significa a morte e ressurreição de Jesus e suas implicações para toda a vida.",
    context: "A palavra 'Evangelho' em grego é euangelion, que significa 'boa notícia'. Mas boa notícia pressupõe uma má notícia: todos pecamos e estamos destituídos da glória de Deus (Rm 3:23). A boa notícia: Jesus tomou sobre si a penalidade do nosso pecado.",
    mainIdea: "O Evangelho não é a entrada para a vida cristã. O Evangelho É a vida cristã, do começo ao fim.",
    themes: ["Graça", "Redenção", "Cruz", "Ressurreição", "Reconciliação", "Nova Criação"],
    lessons: [
      { id: "2-1", order: 1, title: "A má notícia — o problema do pecado", duration: "13:50" },
      { id: "2-2", order: 2, title: "A boa notícia — o que Deus fez", duration: "15:20" },
      { id: "2-3", order: 3, title: "A Cruz — o que aconteceu lá?", duration: "19:05" },
      { id: "2-4", order: 4, title: "A Ressurreição — por que ela muda tudo?", duration: "17:15" },
      { id: "2-5", order: 5, title: "Fé e arrependimento — o que significa crer?", duration: "14:40" },
      { id: "2-6", order: 6, title: "Implicações — o Evangelho e a vida inteira", duration: "18:00" }
    ],
    application: "Muitos jovens reduziram o Evangelho a um evento passado ('eu me converti'). Mas o Evangelho deve permear durante toda a vida, seja nas decisões, nos relacionamentos, nas lutas.",
    reflectionQuestions: [
      "Você consegue explicar o Evangelho em 2 minutos para alguém que nunca ouviu?",
      "Como o Evangelho muda sua forma de lidar com o fracasso e com a culpa?",
      "Qual parte do Evangelho você ainda tem dificuldade de receber pessoalmente?"
    ],
    weeklyChallenge: "Escreva em uma folha a explicação do Evangelho com suas próprias palavras. Compartilhe com alguém essa semana, pode ser um amigo, familiar ou colega.",
    material: { title: "Apostila — Módulo 2 (O Evangelho Integral)", size: "1.8 MB", pages: 12 }
  },
  {
    id: 3,
    blockId: 1,
    number: 3,
    title: "O Plano de Salvação",
    cardTheme: "orange",
    verse: {
      text: "Porque pela graça sois salvos, por meio da fé; e isso não vem de vós, é dom de Deus.",
      ref: "Ef 2:8"
    },
    objective: "Compreender o plano de salvação em sua totalidade, da eleição à glorificação, e entender por que a salvação é completamente obra de Deus, recebida pela fé e não conquistada pelo mérito.",
    context: "A salvação tem dimensões que vão além de um único momento. Teólogos identificam etapas: Eleição (Ef 1:4), Regeneração (Jo 3:3), Justificação (Rm 5:1), Adoção (Gl 4:5), Santificação (Rm 8:29) e Glorificação (Rm 8:30).",
    mainIdea: "A salvação não é algo que você conquistou nem algo que pode perder por acidente. É uma obra de Deus, do início ao fim.",
    themes: ["Graça", "Fé", "Justificação", "Santificação", "Eleição", "Segurança"],
    lessons: [
      { id: "3-1", order: 1, title: "O problema que a salvação resolve — pecado e separação", duration: "14:10" },
      { id: "3-2", order: 2, title: "Eleição e graça — Deus tomou a iniciativa", duration: "16:30" },
      { id: "3-3", order: 3, title: "Justificação — declarado justo", duration: "15:45" },
      { id: "3-4", order: 4, title: "Regeneração — o novo nascimento", duration: "13:20" },
      { id: "3-5", order: 5, title: "Adoção — tornados filhos", duration: "16:00" },
      { id: "3-6", order: 6, title: "Santificação e Glorificação — o processo e o destino", duration: "18:30" }
    ],
    application: "Muitos jovens vivem com insegurança espiritual, sem saber se são 'salvos de verdade'. Entender que a salvação é obra de Deus e não performance liberta da ansiedade religiosa.",
    reflectionQuestions: [
      "Você tem certeza da sua salvação? Em que você baseia essa certeza?",
      "Qual é a diferença entre salvação pela fé e salvação pelas obras?",
      "Como a segurança da salvação muda a forma como você se relaciona com Deus?"
    ],
    weeklyChallenge: "Memorize Efésios 2:8-9 esta semana. Reflita: o que muda na minha vida quando entendo que a salvação é dom e não conquista?",
    material: { title: "Apostila — Módulo 3 (Plano de Salvação)", size: "2.4 MB", pages: 16 }
  },
  {
    id: 4,
    blockId: 1,
    number: 4,
    title: "Quem é Jesus?",
    cardTheme: "dark",
    verse: {
      text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.",
      ref: "Jo 1:1"
    },
    objective: "Apresentar Jesus Cristo em sua plenitude, plenamente Deus e plenamente humano, e mostrar por que a identidade de Jesus é o centro de toda a fé cristã.",
    context: "A ortodoxia afirma: Jesus é plenamente Deus (Jo 1:1; Cl 2:9) e plenamente humano (Jo 1:14; Hb 2:17). Isso é a união hipostática. Os 7 'EU SOU' de João revelam sua autoidentificação com o Deus de Moisés.",
    mainIdea: "Jesus não é uma opção religiosa entre outras. Ele é o Verbo eterno que se fez carne, Deus que veio nos encontrar.",
    themes: ["Divindade", "Humanidade", "Encarnação", "EU SOU", "Messias", "Senhor"],
    lessons: [
      { id: "4-1", order: 1, title: "Jesus na História — evidências extra-bíblicas", duration: "15:10" },
      { id: "4-2", order: 2, title: "Jesus é plenamente Deus — as evidências bíblicas", duration: "17:40" },
      { id: "4-3", order: 3, title: "Jesus é plenamente humano — a encarnação", duration: "16:20" },
      { id: "4-4", order: 4, title: "Os títulos de Jesus — Cristo, Senhor, Filho de Deus", duration: "14:50" },
      { id: "4-5", order: 5, title: "Os 7 EU SOU — a autoidentificação de Jesus", duration: "18:00" },
      { id: "4-6", order: 6, title: "Jesus único — o que o diferencia de todos os outros", duration: "19:30" }
    ],
    application: "A pergunta de Jesus ainda ecoa: 'E vocês, quem dizem que eu sou?' (Mt 16:15). Um Jesus que é Deus encarnado exige resposta: submissão, adoração e seguimento.",
    reflectionQuestions: [
      "Quem é Jesus para você, além do que você aprendeu na Igreja?",
      "Por que a divindade de Jesus é indispensável para o Evangelho?",
      "Como a humanidade de Jesus te encoraja nas suas lutas?"
    ],
    weeklyChallenge: "Leia o Evangelho de João esta semana, um capítulo por dia. Anote cada vez que Jesus faz uma afirmação sobre sua identidade.",
    material: { title: "Apostila — Módulo 4 (Cristologia Prática)", size: "2.3 MB", pages: 15 }
  },

  // BLOCO 2
  {
    id: 5,
    blockId: 2,
    number: 5,
    title: "Identidade em Cristo",
    cardTheme: "orange",
    verse: {
      text: "Assim como em Adão todos morrem, também em Cristo todos serão vivificados.",
      ref: "1Co 15:22"
    },
    objective: "Ajudar o jovem a entender quem ele é em Cristo, não com base em desempenho, aparência ou aprovação alheia, mas no que Deus declarou sobre ele.",
    context: "Vivemos numa cultura de performance e validação. A Bíblia propõe o oposto: em Cristo você é amado (Jo 3:16), aceito (Ef 1:6), perdoado (Cl 1:14), filho de Deus (Jo 1:12) e herdeiro (Rm 8:17).",
    mainIdea: "Você não precisa construir uma identidade. Você precisa descobrir quem Deus já declarou que você é.",
    themes: ["Nova Criação", "Filhos de Deus", "Aceitação", "Performance", "Vergonha", "Herança"],
    lessons: [
      { id: "5-1", order: 1, title: "O problema da identidade — quem sou eu?", duration: "13:40" },
      { id: "5-2", order: 2, title: "Identidade baseada em performance vs graça", duration: "16:15" },
      { id: "5-3", order: 3, title: "Quem a Bíblia diz que você é em Cristo", duration: "17:50" },
      { id: "5-4", order: 4, title: "Nova criação — o que mudou no novo nascimento?", duration: "15:10" },
      { id: "5-5", order: 5, title: "Vergonha, comparação e a voz de Deus", duration: "18:25" },
      { id: "5-6", order: 6, title: "Vivendo a partir da identidade — não em direção a ela", duration: "16:40" }
    ],
    application: "Entender quem você é em Cristo é construir sobre a rocha — não porque a vida fica fácil, mas porque você sabe quem é mesmo quando tudo desmorona.",
    reflectionQuestions: [
      "Em que coisas (fora de Cristo) você costuma buscar identidade e validação?",
      "Como a vergonha impacta sua vida espiritual? Você se esconde de Deus quando erra?",
      "O que muda quando você age a partir de 'sou amado' em vez de 'preciso ser amado'?"
    ],
    weeklyChallenge: "Escreva 5 verdades bíblicas sobre quem você é em Cristo. Coloque em lugar visível. Leia em voz alta todos os dias desta semana.",
    material: { title: "Apostila — Módulo 5 (Identidade em Cristo)", size: "1.9 MB", pages: 13 }
  },
  {
    id: 6,
    blockId: 2,
    number: 6,
    title: "Espírito Santo",
    cardTheme: "dark",
    verse: {
      text: "E eu rogarei ao Pai, e ele vos dará outro Consolador, para que esteja convosco para sempre.",
      ref: "Jo 14:16"
    },
    objective: "Apresentar o Espírito Santo como pessoa da Trindade, não força mística, e mostrar seu papel central na vida do discípulo.",
    context: "A Bíblia apresenta o Espírito como Pessoa real: ele pensa (Rm 8:27), sente (Ef 4:30), decide (1Co 12:11), intercede (Rm 8:26) e guia (Jo 16:13).",
    mainIdea: "O Espírito Santo não é a cereja do bolo da vida cristã. Ele é a vida cristã, sem ele, não há nada.",
    themes: ["Trindade", "Consolador", "Habitação", "Fruto do Espírito", "Presença", "Guia"],
    lessons: [
      { id: "6-1", order: 1, title: "Quem é o Espírito Santo? — Uma Pessoa, não uma força", duration: "15:20" },
      { id: "6-2", order: 2, title: "O Espírito Santo no AT e no NT", duration: "17:00" },
      { id: "6-3", order: 3, title: "O que o Espírito faz na vida do cristão", duration: "16:35" },
      { id: "6-4", order: 4, title: "Batismo no Espírito Santo — o que diz a Bíblia?", duration: "18:40" },
      { id: "6-5", order: 5, title: "O fruto do Espírito — evidência de vida transformada", duration: "19:10" },
      { id: "6-6", order: 6, title: "Sensibilidade ao Espírito — como andar no Espírito", duration: "15:55" }
    ],
    application: "Viver a vida cristã na força própria é exaustivo. Você não foi chamado a viver como Jesus na força própria, mas a deixar o Espírito de Jesus viver através de você.",
    reflectionQuestions: [
      "Como você descreveria o papel do Espírito Santo na sua vida até agora?",
      "Qual fruto do Espírito (Gl 5:22-23) você mais precisa crescer? O que impede esse crescimento?",
      "O que significa 'caminhar no Espírito' no seu cotidiano?"
    ],
    weeklyChallenge: "Leia Gálatas 5:22-23 e escolha um fruto do Espírito. Observe situações desta semana onde foi 'testado' nessa área e traga para oração diária.",
    material: { title: "Apostila — Módulo 6 (Vida no Espírito)", size: "2.2 MB", pages: 14 }
  },
  {
    id: 7,
    blockId: 2,
    number: 7,
    title: "Dons Espirituais",
    cardTheme: "orange",
    verse: {
      text: "Ora, há diversidade de dons, mas o Espírito é o mesmo.",
      ref: "1Co 12:4"
    },
    objective: "Ajudar o jovem a descobrir, compreender e usar seus dons espirituais para edificar a Igreja e avançar o Reino.",
    context: "Dons são capacitações dadas pelo Espírito para o bem comum (1Co 12:7). Não são talentos naturais nem troféus. Listas em Rm 12, 1Co 12 e Ef 4.",
    mainIdea: "Seus dons não são para você. São para o Corpo. Você foi equipado para servir, não para ser servido.",
    themes: ["Dons", "Corpo de Cristo", "Edificação", "Serviço", "Espírito", "Diversidade"],
    lessons: [
      { id: "7-1", order: 1, title: "O que são os dons espirituais?", duration: "14:15" },
      { id: "7-2", order: 2, title: "As listas de dons — Rm 12, 1Co 12, Ef 4", duration: "18:30" },
      { id: "7-3", order: 3, title: "Como descobrir meus dons?", duration: "16:40" },
      { id: "7-4", order: 4, title: "Dons de fala, serviço e sinal", duration: "17:10" },
      { id: "7-5", order: 5, title: "Amor — o contexto de todos os dons (1Co 13)", duration: "15:20" },
      { id: "7-6", order: 6, title: "Usando meus dons na Igreja local", duration: "16:50" }
    ],
    application: "Descobrir seus dons é um chamado para o serviço ativo. Você não é consumidor da Igreja, mas membro vivo do corpo.",
    reflectionQuestions: [
      "Você já identificou algum dom espiritual em sua vida? Como foi essa descoberta?",
      "Como você distingue um dom espiritual de um talento natural?",
      "Por que Paulo coloca o amor acima de todos os dons em 1 Coríntios 13?"
    ],
    weeklyChallenge: "Converse com 2 ou 3 pessoas que te conhecem bem. Pergunte: 'Você vê algum dom especial em mim?' Compare com sua autopercepção.",
    material: { title: "Apostila — Módulo 7 (Dons & Ministério)", size: "2.0 MB", pages: 14 }
  },
  {
    id: 8,
    blockId: 2,
    number: 8,
    title: "Santificação",
    cardTheme: "dark",
    verse: {
      text: "Assim como aquele que vos chamou é santo, sede vós também santos em todo o vosso procedimento.",
      ref: "1Pe 1:15"
    },
    objective: "Entender a santificação como processo de transformação progressiva e aprender a cooperar com a obra do Espírito na prática.",
    context: "Três aspectos: Posicional (já somos santos em Cristo — 1Co 1:2), Progressiva (sendo transformados — 2Co 3:18) e Final (seremos como ele — 1Jo 3:2).",
    mainIdea: "Santidade não é ausência de defeitos. É um processo de se tornar cada vez mais parecido com Jesus, de dentro para fora.",
    themes: ["Santidade", "Transformação", "Graça", "Mortificação", "Processo", "Semelhança"],
    lessons: [
      { id: "8-1", order: 1, title: "O que é santificação — e o que não é", duration: "15:00" },
      { id: "8-2", order: 2, title: "Santificação posicional, progressiva e final", duration: "17:25" },
      { id: "8-3", order: 3, title: "O papel do Espírito Santo na santificação", duration: "16:10" },
      { id: "8-4", order: 4, title: "Mortificação — como lidar com o pecado?", duration: "18:40" },
      { id: "8-5", order: 5, title: "Disciplina espiritual vs legalismo", duration: "14:50" },
      { id: "8-6", order: 6, title: "Santidade no cotidiano — prática e realidade", duration: "17:30" }
    ],
    application: "Santidade não é para quem já chegou lá, mas para quem está no caminho e continua andando mesmo após cair.",
    reflectionQuestions: [
      "Você confunde santidade com perfeição? Como isso afeta sua relação com Deus?",
      "Qual área da sua vida você mais resiste em entregar ao processo de transformação?",
      "Como você responde quando cai em pecado? Isso revela algo sobre sua teologia da graça?"
    ],
    weeklyChallenge: "Identifique uma área onde quer crescer em santidade. Defina o que vai deixar de fazer, o que vai começar e com quem vai prestar contas.",
    material: { title: "Apostila — Módulo 8 (Caminho da Santidade)", size: "2.5 MB", pages: 15 }
  },

  // BLOCO 3
  {
    id: 9,
    blockId: 3,
    number: 9,
    title: "Vida Devocional",
    cardTheme: "orange",
    verse: {
      text: "De manhã, Senhor, ouves a minha voz; de manhã te apresento a minha oração e fico esperando.",
      ref: "Sl 5:3"
    },
    objective: "Ajudar o jovem a construir uma vida devocional consistente e genuína, não como obrigação, mas como relacionamento vivo.",
    context: "Jesus tinha a prática de se retirar de madrugada para orar (Mc 1:35). A Bíblia é Deus falando; a oração é você sendo transformado.",
    mainIdea: "Devocional consistente não é sobre disciplina. É sobre querer estar perto de alguém que você ama.",
    themes: ["Palavra", "Oração", "Consistência", "Relacionamento", "Silêncio", "Encontro"],
    lessons: [
      { id: "9-1", order: 1, title: "Por que a vida devocional importa?", duration: "13:30" },
      { id: "9-2", order: 2, title: "Como ler a Bíblia para transformação — não apenas informação", duration: "16:50" },
      { id: "9-3", order: 3, title: "Métodos devocionais — SOAP, Lectio Divina, Estudo Temático", duration: "18:20" },
      { id: "9-4", order: 4, title: "Criando um ritmo sustentável", duration: "15:40" },
      { id: "9-5", order: 5, title: "O que fazer quando não sentir nada", duration: "17:10" },
      { id: "9-6", order: 6, title: "Diário espiritual como ferramenta de crescimento", duration: "14:30" }
    ],
    application: "A proposta não é perfeição, mas consistência imperfeita. Conversa curta diária transforma mais que uma hora rara por semana.",
    reflectionQuestions: [
      "Qual é sua maior dificuldade para manter uma vida devocional consistente?",
      "Como você se sente quando passa um tempo sem ler a Bíblia ou orar? O que isso revela?",
      "O que você acha que Deus quer dizer para você nesta temporada?"
    ],
    weeklyChallenge: "Comprometa-se com 10 minutos diários por 7 dias: 5 min lendo 1 trecho bíblico e 5 min conversando com Deus sobre o que leu.",
    material: { title: "Apostila — Módulo 9 (Guia Devocional Prático)", size: "2.4 MB", pages: 16 }
  },
  {
    id: 10,
    blockId: 3,
    number: 10,
    title: "Oração e Jejum",
    cardTheme: "dark",
    verse: {
      text: "Vigiai e orai, para que não entreis em tentação. O espírito, na verdade, está pronto, mas a carne é fraca.",
      ref: "Mt 26:41"
    },
    objective: "Apresentar a oração como conversa real e o jejum como disciplina espiritual que aguça o coração para Deus.",
    context: "Jesus pressupôs: 'QUANDO orardes' e 'QUANDO jejuardes'. O jejum é declarar que Deus é mais necessário do que o próprio alimento.",
    mainIdea: "Oração não é técnica, é conversa. Jejum não é punição, é declarar que você precisa mais de Deus do que de qualquer coisa.",
    themes: ["Oração", "Jejum", "Intercessão", "Adoração", "Súplica", "Dependência"],
    lessons: [
      { id: "10-1", order: 1, title: "O que é oração? — Além da lista de pedidos", duration: "14:40" },
      { id: "10-2", order: 2, title: "O Pai Nosso — modelo ou roteiro?", duration: "16:20" },
      { id: "10-3", order: 3, title: "Tipos de oração — adoração, confissão, gratidão, súplica", duration: "18:10" },
      { id: "10-4", order: 4, title: "Intercessão — orando pelos outros", duration: "15:30" },
      { id: "10-5", order: 5, title: "O que é jejum e por que fazer?", duration: "17:45" },
      { id: "10-6", order: 6, title: "Criando uma vida de oração — prático e sustentável", duration: "16:00" }
    ],
    application: "Construir uma vida onde a oração seja o ar que você respira, e não apenas o resgate de emergência nos momentos de crise.",
    reflectionQuestions: [
      "Sua oração é mais uma lista de pedidos ou uma conversa real? Como mudar isso?",
      "Você já experimentou o jejum bíblico? Qual foi a maior dificuldade?",
      "O que você pediria a Deus se tivesse plena convicção de que ele vai responder?"
    ],
    weeklyChallenge: "Faça um jejum de 1 refeição essa semana. Use esse tempo para oração focada e intencional.",
    material: { title: "Apostila — Módulo 10 (Oração & Jejum)", size: "1.9 MB", pages: 13 }
  },
  {
    id: 11,
    blockId: 3,
    number: 11,
    title: "Igreja e Comunhão",
    cardTheme: "orange",
    verse: {
      text: "E não deixemos de nos reunir, como é costume de alguns; pelo contrário, encorajemo-nos mutuamente.",
      ref: "Hb 10:25"
    },
    objective: "Entender a Igreja como família, e a comunhão mútua como parte indispensável do crescimento espiritual.",
    context: "Ekklesia: os chamados para fora. O Novo Testamento não conhece o conceito de cristão solitário. 'Um ao outro' aparece mais de 50 vezes.",
    mainIdea: "Igreja não é onde você vai. É quem você é, junto aos outros que também foram chamados.",
    themes: ["Ekklesia", "Comunhão", "Compromisso", "Um ao outro", "Corpo", "Família"],
    lessons: [
      { id: "11-1", order: 1, title: "O que é a Igreja? — Além do culto dominical", duration: "15:10" },
      { id: "11-2", order: 2, title: "Por que a Igreja importa para o crescimento espiritual?", duration: "16:40" },
      { id: "11-3", order: 3, title: "Os 'um ao outro' do NT — a vida comunitária", duration: "18:15" },
      { id: "11-4", order: 4, title: "Membros comprometidos vs. consumidores", duration: "17:00" },
      { id: "11-5", order: 5, title: "Como lidar com o desencantamento com a Igreja?", duration: "19:20" },
      { id: "11-6", order: 6, title: "Pequenos grupos — o coração da comunidade", duration: "16:05" }
    ],
    application: "A resposta ao desencantamento com a instituição não é o isolamento, mas a busca por comunidade autêntica.",
    reflectionQuestions: [
      "O que você mais valoriza e o que mais te frustra na sua experiência com a Igreja?",
      "Você tem amizades na Igreja onde pode ser honesto sobre suas lutas?",
      "Qual é a diferença entre frequentar a Igreja e pertencer a ela?"
    ],
    weeklyChallenge: "Tome a iniciativa de se conectar com alguém da sua comunidade que normalmente não busca: uma conversa, um café, uma mensagem genuína.",
    material: { title: "Apostila — Módulo 11 (Comunidade & Família)", size: "2.1 MB", pages: 14 }
  },
  {
    id: 12,
    blockId: 3,
    number: 12,
    title: "Serviço e Discipulado",
    cardTheme: "dark",
    verse: {
      text: "Assim como o Filho do Homem não veio para ser servido, mas para servir e dar a sua vida em resgate de muitos.",
      ref: "Mt 20:28"
    },
    objective: "Mostrar que servir é a expressão natural da graça, e que o discipulado 'vida na vida' é o método de Jesus para mudar o mundo.",
    context: "Jesus passou 3 anos com doze homens, comendo, caminhando e ensinando. A Grande Comissão é 'fazei discípulos'.",
    mainIdea: "Você foi salvo para servir, e chamado para fazer discípulos. Não para assistir à Igreja, mas para ser a Igreja.",
    themes: ["Serviço", "Discipulado", "Missão", "Humildade", "Multiplicação", "Chamado"],
    lessons: [
      { id: "12-1", order: 1, title: "O modelo de Jesus — vida com vida", duration: "14:50" },
      { id: "12-2", order: 2, title: "Servir como forma de vida — não como programa", duration: "16:20" },
      { id: "12-3", order: 3, title: "A Grande Comissão — o chamado de todos", duration: "17:40" },
      { id: "12-4", order: 4, title: "Quem está me discipulando? Quem estou discipulando?", duration: "18:10" },
      { id: "12-5", order: 5, title: "Como começar a discipular alguém", duration: "15:30" },
      { id: "12-6", order: 6, title: "Serviço, dons e propósito — tudo conectado", duration: "17:15" }
    ],
    application: "Discipulado começa com a pergunta: 'Com quem estou caminhando?' e 'Quem está caminhando comigo?' Exige amor genuíno e disponibilidade.",
    reflectionQuestions: [
      "Você tem alguém que está te discipulando intencionalmente? Se não, o que impede?",
      "Há alguém ao seu redor em quem você poderia investir tempo e comunhão?",
      "O que o exemplo de Jesus (que escolheu pessoas, não projetos) diz sobre suas prioridades?"
    ],
    weeklyChallenge: "Identifique uma pessoa ao seu redor que está começando na fé. Convide-a para ler 1 capítulo da Bíblia juntos e conversar.",
    material: { title: "Apostila — Módulo 12 (Discipulado Vida na Vida)", size: "2.3 MB", pages: 15 }
  },

  // BLOCO 4
  {
    id: 13,
    blockId: 4,
    number: 13,
    title: "Namoro e Relacionamentos",
    cardTheme: "orange",
    verse: {
      text: "Acima de tudo, conservai entre vós um amor intenso, porque o amor cobre uma multidão de pecados.",
      ref: "1Pe 4:8"
    },
    objective: "Oferecer perspectiva bíblica madura sobre namoro e relacionamentos — sem legalismo e sem ingenuidade.",
    context: "A cultura atual trata relacionamentos como experimentos descartáveis. A perspectiva bíblica propõe pacto, respeito, intenção e honra.",
    mainIdea: "A questão não é 'posso namorar?', e sim 'como me relaciono de forma que honre a Deus e a outra pessoa?'",
    themes: ["Amor", "Respeito", "Pureza", "Intenção", "Caráter", "Compromisso"],
    lessons: [
      { id: "13-1", order: 1, title: "Por que os relacionamentos importam tanto na juventude?", duration: "15:40" },
      { id: "13-2", order: 2, title: "O que a Bíblia diz sobre amor — mais do que sentimento", duration: "17:10" },
      { id: "13-3", order: 3, title: "Namorar com intenção — o que isso significa?", duration: "18:30" },
      { id: "13-4", order: 4, title: "Limites físicos e emocionais — por quê e como?", duration: "19:00" },
      { id: "13-5", order: 5, title: "Quando terminar um relacionamento — sabedoria e graça", duration: "16:20" },
      { id: "13-6", order: 6, title: "Preparando-se para o casamento — antes do namoro", duration: "17:50" }
    ],
    application: "A forma como você se relaciona revela e forma o seu caráter. Trate as pessoas como fins, não como meios.",
    reflectionQuestions: [
      "O que você aprendeu sobre relacionamentos com sua família? Esses padrões te ajudam ou prejudicam?",
      "Como você distingue amor bíblico de carência ou paixão passageira?",
      "O que significa 'namorar com intenção' na prática?"
    ],
    weeklyChallenge: "Faça uma lista de 5 características que busca em alguém e 5 que quer desenvolver em si mesmo. Compare as duas listas.",
    material: { title: "Apostila — Módulo 13 (Relacionamentos com Propósito)", size: "2.2 MB", pages: 15 }
  },
  {
    id: 14,
    blockId: 4,
    number: 14,
    title: "Sexualidade Bíblica",
    cardTheme: "dark",
    verse: {
      text: "Fugi da fornicação. Todo o pecado que o homem comete é fora do corpo; mas o que fornica peca contra o seu próprio corpo.",
      ref: "1Co 6:18"
    },
    objective: "Apresentar a visão bíblica da sexualidade com honestidade e compaixão, mostrando que a pureza é liberdade e proteção.",
    context: "O sexo é bênção criada por Deus para a aliança do casamento (Gn 2:24). A cultura hipersexualizada ignora suas consequências profundas.",
    mainIdea: "Deus não é contra o sexo, até porque ele o inventou. Mas ele sabe o contexto onde ele floresce melhor.",
    themes: ["Pureza", "Casamento", "Pornografia", "Liberdade", "Criação", "Santidade"],
    lessons: [
      { id: "14-1", order: 1, title: "Sexualidade — criação de Deus, não tabu", duration: "16:10" },
      { id: "14-2", order: 2, title: "O plano original — sexo, aliança e proteção", duration: "17:40" },
      { id: "14-3", order: 3, title: "A realidade da pornografia — impacto e saída", duration: "19:50" },
      { id: "14-4", order: 4, title: "Impureza sexual — como lidar com o fracasso com graça", duration: "18:20" },
      { id: "14-5", order: 5, title: "Identidade sexual — o que a Bíblia diz?", duration: "17:05" },
      { id: "14-6", order: 6, title: "Restauração — há esperança para quem caiu", duration: "16:30" }
    ],
    application: "O padrão bíblico é elevado, mas a graça de Deus é maior. Ninguém está além da restauração e ninguém precisa lutar sozinho.",
    reflectionQuestions: [
      "Você sente que pode ser honesto na Igreja sobre suas lutas na sexualidade?",
      "Como a pornografia (ou impulsos desordenados) impacta sua saúde espiritual?",
      "O que significa 'pureza sexual' além do aspecto estritamente físico?"
    ],
    weeklyChallenge: "Se você tem lutado com impureza ou pornografia, dê um passo de vulnerabilidade com um líder ou amigo de confiança. A luz dissipa o poder do segredo.",
    material: { title: "Apostila — Módulo 14 (Graça & Pureza Sexual)", size: "2.4 MB", pages: 16 }
  },
  {
    id: 15,
    blockId: 4,
    number: 15,
    title: "Ansiedade, Comparação e Redes Sociais",
    cardTheme: "orange",
    verse: {
      text: "Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições.",
      ref: "Fp 4:6"
    },
    objective: "Oferecer ferramentas bíblicas e práticas para lidar com ansiedade, comparação e o impacto do ecossistema digital.",
    context: "Paulo escreveu Filipenses de uma prisão. A diferença hoje: o jovem acorda com uma vitrine do mundo inteiro na palma da mão.",
    mainIdea: "A ansiedade não é fraqueza de fé, é sinal de que você está carregando sozinho o que foi feito para ser carregado por Deus.",
    themes: ["Ansiedade", "Comparação", "Presença", "Redes Sociais", "Paz", "Identidade"],
    lessons: [
      { id: "15-1", order: 1, title: "O que a Bíblia diz sobre ansiedade?", duration: "15:00" },
      { id: "15-2", order: 2, title: "Ansiedade vs preocupação legítima — onde está a linha?", duration: "16:30" },
      { id: "15-3", order: 3, title: "O problema da comparação — e sua raiz espiritual", duration: "17:15" },
      { id: "15-4", order: 4, title: "Redes sociais — ferramenta ou vício?", duration: "18:40" },
      { id: "15-5", order: 5, title: "Práticas de saúde mental e espiritualidade", duration: "19:10" },
      { id: "15-6", order: 6, title: "A paz que excede todo entendimento — como receber", duration: "16:50" }
    ],
    application: "Praticar a presença de Deus, oração intencional, renovação da mente e acompanhamento profissional quando necessário.",
    reflectionQuestions: [
      "Em que situações você sente mais ansiedade? O que acontece com sua fé nessas horas?",
      "Como o uso das redes sociais afeta seu humor e senso de valor próprio?",
      "O que precisaria mudar na sua rotina para experimentar mais paz e descanso?"
    ],
    weeklyChallenge: "Faça um detox digital de 24 horas esta semana sem redes sociais. Use esse tempo para orar, caminhar e refletir.",
    material: { title: "Apostila — Módulo 15 (Paz em Tempos Hiperconectados)", size: "2.1 MB", pages: 14 }
  },
  {
    id: 16,
    blockId: 4,
    number: 16,
    title: "Propósito e Chamado",
    cardTheme: "dark",
    verse: {
      text: "Porque somos feitura sua, criados em Cristo Jesus para boas obras, as quais Deus de antemão preparou.",
      ref: "Ef 2:10"
    },
    objective: "Compreender que propósito não é um destino secreto a descobrir, mas uma vida a construir orientada por Deus.",
    context: "A obsessão por encontrar 'o chamado perfeito' muitas vezes paralisa o jovem. O propósito bíblico é amar a Deus, ao próximo e servir com fidelidade.",
    mainIdea: "Propósito não é algo que você encontra. É algo que você vive, à medida que se aproxima de Deus e serve as pessoas ao seu redor.",
    themes: ["Propósito", "Vocação", "Dons", "Serviço", "Imago Dei", "Chamado"],
    lessons: [
      { id: "16-1", order: 1, title: "A obsessão com propósito — e onde ela nos leva", duration: "14:30" },
      { id: "16-2", order: 2, title: "Imago Dei — criados com dignidade e missão", duration: "16:00" },
      { id: "16-3", order: 3, title: "O chamado geral vs o chamado específico", duration: "17:20" },
      { id: "16-4", order: 4, title: "Como descobrir meu chamado — pistas práticas", duration: "18:15" },
      { id: "16-5", order: 5, title: "Propósito, profissão e vocação — como se relacionam?", duration: "17:40" },
      { id: "16-6", order: 6, title: "Dando o próximo passo — fidelidade no pequeno", duration: "15:50" }
    ],
    application: "O maior obstáculo é a falta de movimento. Jesus disse: 'Quem é fiel no pouco, também é fiel no muito'. O chamado clareia no movimento.",
    reflectionQuestions: [
      "O que você sente que foi feito para fazer? Que atividades te enchem de energia?",
      "O que tem te impedido de dar o próximo passo prático em direção ao seu chamado?",
      "Como você distingue a voz de Deus da pressão cultural ou das expectativas familiares?"
    ],
    weeklyChallenge: "Escreva 3 coisas que faz bem, 3 que ama fazer e 3 que te deixam inconformado no mundo. Veja onde esses três círculos se cruzam.",
    material: { title: "Apostila — Módulo 16 (Vocação & Boas Obras)", size: "2.3 MB", pages: 15 }
  },

  // BLOCO 5
  {
    id: 17,
    blockId: 5,
    number: 17,
    title: "Reino de Deus",
    cardTheme: "orange",
    verse: {
      text: "Arrependei-vos, porque está próximo o Reino dos Céus.",
      ref: "Mt 4:17"
    },
    objective: "Apresentar o conceito do Reino de Deus como eixo central da pregação de Jesus, transformando o modo como o jovem vê o trabalho e o mundo.",
    context: "O Reino é 'já e ainda não': já presente em Cristo, mas com plenitude futura (Ap 21). Tudo — trabalho, arte, justiça — pode manifestar o Reino.",
    mainIdea: "O Reino de Deus não é um lugar para onde você vai. É uma realidade que você traz em cada decisão, relacionamento e dia.",
    themes: ["Reino", "Soberania", "Já e Não Ainda", "Missão", "Transformação", "Shalom"],
    lessons: [
      { id: "17-1", order: 1, title: "O que é o Reino de Deus? — O grande tema de Jesus", duration: "15:20" },
      { id: "17-2", order: 2, title: "“Já e não ainda” — a tensão do Reino", duration: "17:10" },
      { id: "17-3", order: 3, title: "Reino e Igreja — qual é a diferença?", duration: "16:40" },
      { id: "17-4", order: 4, title: "O Reino e o trabalho — toda área da vida", duration: "18:30" },
      { id: "17-5", order: 5, title: "O Reino e a justiça — shalom como missão", duration: "17:50" },
      { id: "17-6", order: 6, title: "Como viver o Reino hoje?", duration: "16:15" }
    ],
    application: "A missão não é só o que você faz no domingo, é quem você é na segunda-feira na faculdade ou no trabalho.",
    reflectionQuestions: [
      "Como o conceito de 'já e não ainda' do Reino altera sua expectativa sobre a vida cristã?",
      "Você enxerga sua profissão e seus estudos como território de avanço do Reino de Deus?",
      "O que seria diferente na sua rotina se vivesse com constante consciência do Reino?"
    ],
    weeklyChallenge: "Escolha uma área do seu dia (escola, trabalho, família) e liste 3 atitudes práticas para manifestar a justiça e a paz do Reino ali.",
    material: { title: "Apostila — Módulo 17 (A Cultura do Reino)", size: "2.2 MB", pages: 14 }
  },
  {
    id: 18,
    blockId: 5,
    number: 18,
    title: "Cosmovisão Cristã",
    cardTheme: "dark",
    verse: {
      text: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente...",
      ref: "Rm 12:2"
    },
    objective: "Ajudar o jovem a interpretar toda a realidade sob as lentes da Criação, Queda, Redenção e Consumação.",
    context: "Cosmovisão é a lente através da qual interpretamos a existência. Uma mente renovada não foge do mundo, mas tem discernimento sobre a cultura.",
    mainIdea: "Uma mente renovada não é uma mente que evita o mundo. É uma mente que sabe discernir o mundo através das lentes do Evangelho.",
    themes: ["Cosmovisão", "Criação", "Queda", "Redenção", "Discernimento", "Renovação"],
    lessons: [
      { id: "18-1", order: 1, title: "O que é cosmovisão — e por que importa?", duration: "15:00" },
      { id: "18-2", order: 2, title: "Criação, Queda, Redenção, Restauração — a narrativa bíblica", duration: "18:40" },
      { id: "18-3", order: 3, title: "Cosmovisão cristã vs pós-modernismo", duration: "17:30" },
      { id: "18-4", order: 4, title: "Como avaliar filmes, músicas e cultura com discernimento", duration: "19:15" },
      { id: "18-5", order: 5, title: "Fé e ciência — conflito ou complemento?", duration: "18:00" },
      { id: "18-6", order: 6, title: "Vivendo a cosmovisão no cotidiano", duration: "16:20" }
    ],
    application: "A cosmovisão cristã não te isola da cultura, mas te dá os óculos corretos para reconhecer o belo e diagnosticar o que está quebrado.",
    reflectionQuestions: [
      "Que cosmovisão secular moldava sua mente antes de um discipulado sério?",
      "Como você analisa as mensagens dos filmes, séries ou músicas que mais consome?",
      "Onde você enxerga a maior tensão entre a visão cristã e os valores da sociedade atual?"
    ],
    weeklyChallenge: "Escolha uma música ou filme popular que consome e analise: qual visão de mundo ele comunica? O que há de verdadeiro e o que contradiz a Bíblia?",
    material: { title: "Apostila — Módulo 18 (Pensamento Cristão)", size: "2.4 MB", pages: 15 }
  },
  {
    id: 19,
    blockId: 5,
    number: 19,
    title: "Apologética Básica",
    cardTheme: "orange",
    verse: {
      text: "Estai sempre preparados para responder a todo aquele que vos pedir razão da esperança que há em vós.",
      ref: "1Pe 3:15"
    },
    objective: "Equipar o jovem a responder com mansidão e clareza sobre as razões históricas e lógicas da sua esperança.",
    context: "Apologia: defesa racional e respeitosa. Lidar com dúvidas sobre a existência de Deus, sofrimento, historicidade da ressurreição e exclusividade de Cristo.",
    mainIdea: "Você não precisa ter todas as respostas. Mas precisa ser capaz de dizer: 'Essa é uma boa pergunta, e há razões sólidas para crer.'",
    themes: ["Apologética", "Evidências", "Sofrimento", "Exclusividade", "Razão", "Fé"],
    lessons: [
      { id: "19-1", order: 1, title: "O que é apologética — e para que serve?", duration: "14:40" },
      { id: "19-2", order: 2, title: "Deus existe? — Argumentos clássicos e modernos", duration: "18:20" },
      { id: "19-3", order: 3, title: "A ressurreição de Jesus — fato histórico ou mito?", duration: "19:30" },
      { id: "19-4", order: 4, title: "Se Deus é bom, por que há sofrimento?", duration: "18:50" },
      { id: "19-5", order: 5, title: "A Bíblia é confiável? — Manuscritos e evidências", duration: "17:10" },
      { id: "19-6", order: 6, title: "“Todas as religiões são iguais?” — O que dizer", duration: "16:45" }
    ],
    application: "A melhor apologética começa com saber ouvir genuinamente antes de despejar argumentos. Seja tardio para falar e pronto para ouvir (Tg 1:19).",
    reflectionQuestions: [
      "Qual objeção ao Cristianismo você mais escuta de colegas — ou que você mesmo já teve?",
      "Você conseguiria expor com convicção por que crê na ressurreição de Cristo?",
      "Como defender a fé sem ser arrogante, agressivo ou defensivo?"
    ],
    weeklyChallenge: "Identifique 2 amigos com dúvidas sobre o cristianismo e pergunte com carinho sobre a perspectiva deles, apenas escutando com respeito.",
    material: { title: "Apostila — Módulo 19 (Razões da Fé)", size: "2.6 MB", pages: 16 }
  },
  {
    id: 20,
    blockId: 5,
    number: 20,
    title: "Seitas e Falsas Doutrinas",
    cardTheme: "dark",
    verse: {
      text: "Amados, não creiam em qualquer espírito, mas examinem os espíritos para ver se eles procedem de Deus, porque muitos falsos profetas têm saído pelo mundo.",
      ref: "1Jo 4:1"
    },
    objective: "Equipar o jovem a identificar desvios doutrinários com discernimento bíblico, maturidade e amor pela verdade.",
    context: "Ortodoxia (opinião correta). Alerta contra distorções clássicas e contemporâneas: Testemunhas de Jeová, Mórmons, Teologia da Prosperidade e Nova Era.",
    mainIdea: "A melhor defesa contra o erro é o conhecimento profundo da verdade. Você não precisa saber tudo sobre cada heresia — precisa conhecer bem o Evangelho.",
    themes: ["Heresia", "Discernimento", "Ortodoxia", "Seitas", "Evangelho", "Teste"],
    lessons: [
      { id: "20-1", order: 1, title: "Como reconhecer uma doutrina falsa?", duration: "15:10" },
      { id: "20-2", order: 2, title: "Testemunhas de Jeová — o que creem e como responder", duration: "17:50" },
      { id: "20-3", order: 3, title: "Mórmons — o que creem e como responder", duration: "17:20" },
      { id: "20-4", order: 4, title: "Evangelhos da Prosperidade — prosperidade bíblica vs distorção", duration: "18:40" },
      { id: "20-5", order: 5, title: "New Age e sincretismo — o desafio do relativismo", duration: "16:30" },
      { id: "20-6", order: 6, title: "Como conversar com alguém em uma seita?", duration: "17:00" }
    ],
    application: "Muitos em seitas foram atraídos por acolhimento e comunidade, não apenas por dogmas errados. A resposta cristã é verdade sólida com amor autêntico.",
    reflectionQuestions: [
      "Você já se deparou com algum ensinamento online que parecia bíblico mas depois se provou falso?",
      "Como você avalia um ministério ou teologia antes de consumir seus conteúdos?",
      "Como dialogar com alguém preso a uma heresia com firmeza e mansidão?"
    ],
    weeklyChallenge: "Assista ou leia sobre uma doutrina questionável e liste onde exatamente ela diverge das Escrituras e quais versículos a corrigem.",
    material: { title: "Apostila — Módulo 20 (Discernimento Teológico)", size: "2.3 MB", pages: 15 }
  },

  // BLOCO 6
  {
    id: 21,
    blockId: 6,
    number: 21,
    title: "Evangelismo",
    cardTheme: "orange",
    verse: {
      text: "Ide por todo o mundo, pregai o Evangelho a toda criatura.",
      ref: "Mc 16:15"
    },
    objective: "Desmistificar o evangelismo e apresentá-lo como o transbordar natural de quem foi resgatado pela graça.",
    context: "Evangelismo não é técnica de vendas. Jesus abordava cada um com sensibilidade única: teologia com Nicodemos, vulnerabilidade com a samaritana, mesa com Zaqueu.",
    mainIdea: "Evangelismo não é empurrar uma religião. É contar a história de quem te salvou para quem ainda não o conhece.",
    themes: ["Evangelho", "Testemunho", "Relacionamento", "Amor", "Método", "Missão"],
    lessons: [
      { id: "21-1", order: 1, title: "Por que o evangelismo assusta tanto?", duration: "14:20" },
      { id: "21-2", order: 2, title: "O evangelismo de Jesus — cada pessoa de um jeito", duration: "17:15" },
      { id: "21-3", order: 3, title: "Seu testemunho — a história que só você pode contar", duration: "16:40" },
      { id: "21-4", order: 4, title: "Como iniciar uma conversa espiritual", duration: "18:00" },
      { id: "21-5", order: 5, title: "Evangelismo relacional — presença antes de proclamação", duration: "17:30" },
      { id: "21-6", order: 6, title: "O papel do Espírito Santo no evangelismo", duration: "15:45" }
    ],
    application: "Ninguém pode contestar o que Deus fez em você. Seu testemunho simples em 2 a 3 minutos é uma das ferramentas mais eficazes que existem.",
    reflectionQuestions: [
      "O que te trava na hora de falar sobre sua fé com amigos ou conhecidos?",
      "O que a variedade de métodos de Jesus te ensina sobre discipulado pessoal?",
      "Como você resumiria sua história de conversão em 2 minutos?"
    ],
    weeklyChallenge: "Escreva seu testemunho em 3 tópicos: (1) antes de Cristo, (2) o encontro com Ele, (3) o que mudou. Pratique e compartilhe com alguém.",
    material: { title: "Apostila — Módulo 21 (Evangelismo no Cotidiano)", size: "2.0 MB", pages: 13 }
  },
  {
    id: 22,
    blockId: 6,
    number: 22,
    title: "Missões",
    cardTheme: "dark",
    verse: {
      text: "E este Evangelho do Reino será pregado em todo o mundo, em testemunho a todas as nações.",
      ref: "Mt 24:14"
    },
    objective: "Despertar visão global da missão de Deus — mostrando que missões começa onde seus pés estão pisando agora.",
    context: "Missio Dei: Deus é o Deus missionário desde Gn 12 ('em ti serão benditas todas as nações'). Existem povos não-alcançados e campos em nossas cidades.",
    mainIdea: "Missões não começa no aeroporto. Começa na sua rua, no seu trabalho, na sua escola, com as pessoas que Deus colocou ao seu redor.",
    themes: ["Missio Dei", "Nações", "Povos", "Envio", "Local e Global", "Testemunho"],
    lessons: [
      { id: "22-1", order: 1, title: "O coração missionário de Deus — desde Gênesis", duration: "15:30" },
      { id: "22-2", order: 2, title: "A Grande Comissão — o que Jesus realmente pediu", duration: "17:10" },
      { id: "22-3", order: 3, title: "Povos não-alcançados — quem são e onde estão", duration: "19:00" },
      { id: "22-4", order: 4, title: "Missões local — onde você está agora", duration: "16:20" },
      { id: "22-5", order: 5, title: "Missões global — como se envolver?", duration: "17:45" },
      { id: "22-6", order: 6, title: "Orando pelas nações — intercessão como missão", duration: "15:15" }
    ],
    application: "Você pode orar, sustentar missionários, ir a viagens curtas e viver como enviado no seu próprio bairro e escola.",
    reflectionQuestions: [
      "Você já considerou como missões faz parte da sua vocação pessoal?",
      "Quais são os grupos ou pessoas marginalizadas na sua cidade que precisam do Evangelho?",
      "O que impede sua comunidade local de ser mais apaixonada por missões?"
    ],
    weeklyChallenge: "Adote um povo não-alcançado no site joshuaproject.net e ore por ele todos os dias desta semana com sua família ou amigos.",
    material: { title: "Apostila — Módulo 22 (Missões Locais e Globais)", size: "2.4 MB", pages: 15 }
  },
  {
    id: 23,
    blockId: 6,
    number: 23,
    title: "Perseverança e Escatologia",
    cardTheme: "orange",
    verse: {
      text: "Combati o bom combate, terminei a carreira, guardei a fé.",
      ref: "2Tm 4:7"
    },
    objective: "Apresentar a perseverança fiel e a certeza da volta de Cristo como o maior combustível para viver bem no presente.",
    context: "Escatologia bíblica não é sobre especulação apocalíptica, mas sobre o destino final da história: Nova Criação, ressurreição corpórea e juízo justo.",
    mainIdea: "A esperança cristã não é fuga do presente. É a certeza de que o presente tem peso eterno, porque o futuro já foi garantido.",
    themes: ["Perseverança", "Esperança", "Escatologia", "Ressurreição", "Eternidade", "Fidelidade"],
    lessons: [
      { id: "23-1", order: 1, title: "O que é escatologia — e por que importa para a vida hoje?", duration: "15:40" },
      { id: "23-2", order: 2, title: "A volta de Cristo — o que a Bíblia ensina", duration: "17:50" },
      { id: "23-3", order: 3, title: "Ressurreição — por que nosso destino é corporal", duration: "18:10" },
      { id: "23-4", order: 4, title: "Nova Criação — o que nos espera?", duration: "19:20" },
      { id: "23-5", order: 5, title: "Perseverança — como manter a fé a longo prazo", duration: "16:30" },
      { id: "23-6", order: 6, title: "Vivendo à luz da eternidade — o peso do presente", duration: "17:00" }
    ],
    application: "Quando você sabe para onde a história caminha, o sofrimento temporário ganha propósito e a fidelidade persevera até o fim.",
    reflectionQuestions: [
      "O que mais te sustenta e te ajuda a permanecer firme nas épocas difíceis?",
      "Como a esperança da ressurreição molda o jeito como lida com o luto e o tempo?",
      "O que significa praticamente 'viver com os olhos na eternidade' no trabalho e estudo?"
    ],
    weeklyChallenge: "Escreva uma carta para você mesmo daqui a 10 anos expressando quem você quer ser em Cristo e o que deseja ter guardado na fé.",
    material: { title: "Apostila — Módulo 23 (Esperança & Perseverança)", size: "2.3 MB", pages: 15 }
  },
  {
    id: 24,
    blockId: 6,
    number: 24,
    title: "Vivendo para a Eternidade",
    cardTheme: "dark",
    verse: {
      text: "Portanto, meus amados irmãos, mantenham-se firmes e inabaláveis. Sejam sempre dedicados à obra do Senhor, pois vocês sabem que, no Senhor, o trabalho de vocês não é inútil.",
      ref: "1Co 15:58"
    },
    objective: "Encerrar a formação com uma visão integrada da vida cristã, onde cada escolha é orientada pelo amor eterno de Deus.",
    context: "Este é o módulo de chegada e de partida. Discipulado dura a vida inteira. Tudo o que é feito no Senhor tem eco na eternidade.",
    mainIdea: "Você não vai morrer. Vai mudar de endereço. E o que você fizer com amor, neste endereço temporário, tem peso para sempre.",
    themes: ["Eternidade", "Integração", "Legado", "Amor", "Fidelidade", "Partida"],
    lessons: [
      { id: "24-1", order: 1, title: "Uma vida integrada — fé que conecta tudo", duration: "16:00" },
      { id: "24-2", order: 2, title: "Legado — o que você vai deixar?", duration: "17:30" },
      { id: "24-3", order: 3, title: "O maior mandamento — amor como estrutura de tudo", duration: "18:40" },
      { id: "24-4", order: 4, title: "Recapitulação — o que você aprendeu nesses 24 módulos", duration: "21:00" },
      { id: "24-5", order: 5, title: "Os próximos passos — continuando a jornada", duration: "15:50" },
      { id: "24-6", order: 6, title: "Enviados — a formação era para isso", duration: "19:15" }
    ],
    application: "O objetivo não foi apenas completar aulas, mas ser formado como discípulo maduro capaz de formar outros.",
    reflectionQuestions: [
      "O que mais mudou em sua maturidade espiritual ao longo desta formação?",
      "Qual é o seu próximo compromisso concreto de serviço e discipulado?",
      "A quem você se sente desafiado a discipular a partir de agora?"
    ],
    weeklyChallenge: "Envie uma mensagem de sincera gratidão para alguém que foi decisivo na sua caminhada cristã e convide-o a continuar perto de você.",
    material: { title: "Apostila — Módulo 24 & Certificado Final", size: "3.1 MB", pages: 18 }
  }
];

// Materiais Recentes em destaque (usados no widget lateral e biblioteca)
export const RECENT_MATERIALS = [
  {
    id: "mat-3",
    moduleId: 3,
    title: "Apostila — Módulo 3 (Plano de Salvação)",
    type: "PDF",
    size: "2,4 MB",
    date: "Baixado em 28 set 2026",
    downloadUrl: "#"
  },
  {
    id: "mat-complete",
    moduleId: null,
    title: "Apostila Completa — BiblePace Foundations",
    type: "PDF",
    size: "8,7 MB",
    date: "Baixado em 20 set 2026",
    downloadUrl: "#"
  },
  {
    id: "mat-2",
    moduleId: 2,
    title: "Módulo 2 — Identidade e Nova Vida",
    type: "PDF",
    size: "1,8 MB",
    date: "Baixado em 15 set 2026",
    downloadUrl: "#"
  },
  {
    id: "mat-1",
    moduleId: 1,
    title: "Apostila — Módulo 1 (Confiabilidade da Bíblia)",
    type: "PDF",
    size: "2,1 MB",
    date: "Baixado em 10 set 2026",
    downloadUrl: "#"
  }
];
