export interface LessonSection {
  id: string;
  title: string;
  titleBn: string;
  content: string;
  contentBn: string;
  examples: { en: string; bn?: string }[];
  notes?: string[];
  memoryTip?: string;
  memoryTipBn?: string;
}

export interface Lesson {
  id: string;
  chapter: string;
  title: string;
  titleBn: string;
  description: string;
  sections: LessonSection[];
}

export const lessons: Lesson[] = [
  {
    id: 'prep-intro',
    chapter: 'Prepositions',
    title: 'Definition & Types of Prepositions',
    titleBn: 'Preposition-এর সংজ্ঞা ও প্রকারভেদ',
    description: 'Learn what a preposition is and its main types from the textbook.',
    sections: [
      {
        id: 'def',
        title: 'Definition',
        titleBn: 'সংজ্ঞা',
        content: 'A preposition is a word placed before a noun or a noun-equivalent to show its relation to some other word in the sentence.',
        contentBn: 'Preposition হলো এমন একটি শব্দ যা noun বা noun-equivalent-এর আগে বসে বাক্যের অন্য কোনো শব্দের সঙ্গে তার সম্পর্ক প্রকাশ করে।',
        examples: [
          { en: 'He came to me.', bn: 'সে আমার কাছে এসেছিল।' },
          { en: 'Put it on the table.', bn: 'এটি টেবিলের উপর রাখো।' }
        ],
        notes: [
          'Prepositions may also govern other parts of speech used as nouns: From here, before now, for good, in short, about to go.',
          'Prepositions may govern phrases and clauses: It depends on how you do your duty.'
        ]
      },
      {
        id: 'end-position',
        title: 'Prepositions at the End of Sentences',
        titleBn: 'বাক্যের শেষে Preposition',
        content: 'Prepositions sometimes follow the words they govern when the object is an interrogative or relative pronoun. The relative "that" is never governed by a preposition preceding it.',
        contentBn: 'কখনো কখনো preposition তার object-এর পরে বসে, বিশেষ করে interrogative বা relative pronoun-এর ক্ষেত্রে।',
        examples: [
          { en: 'What is this for?' },
          { en: 'Where do you come from?' },
          { en: 'This is the boy that I spoke of.' },
          { en: 'This is the boy (whom) I spoke to.' }
        ]
      },
      {
        id: 'phrase',
        title: 'Phrase Prepositions (Prepositional Phrases)',
        titleBn: 'Phrase Preposition',
        content: 'Groups of words used as a single preposition: on account of, instead of, in spite of, by means of, owing to, by dint of, in accordance with, in front of, in view of, in respect of.',
        contentBn: 'কয়েকটি শব্দের গ্রুপ যা একসাথে preposition-এর মতো কাজ করে।',
        examples: [
          { en: 'He could not come on account of illness.' },
          { en: 'In spite of hard labour he failed in the examination.' },
          { en: 'Instead of coming here, he went home.' },
          { en: 'He stood in front of the door.' }
        ]
      },
      {
        id: 'participial',
        title: 'Participial Prepositions',
        titleBn: 'Participial Preposition',
        content: 'Present or past participles now used as prepositions: concerning, regarding, past, during, pending, etc.',
        contentBn: 'Participle যা এখন preposition হিসেবে ব্যবহৃত হয়।',
        examples: [
          { en: 'Do you know anything concerning the proposal?' },
          { en: 'The river flows past the town.' }
        ]
      },
      {
        id: 'disguised',
        title: 'Disguised Prepositions',
        titleBn: 'Disguised Preposition',
        content: 'In expressions like "Rice sells one kilo a rupee", "He comes twice a week", the word "a" is not the indefinite article but a weakened form of the preposition "on". Also seen in: ahead, asleep, a-hunting.',
        contentBn: '"a" এখানে article নয়, "on"-এর দুর্বল রূপ।',
        examples: [
          { en: 'Potato sells at five rupees a kilo.' },
          { en: 'He goes there thrice a week.' }
        ]
      },
      {
        id: 'than',
        title: 'Than as a Preposition',
        titleBn: 'Than Preposition হিসেবে',
        content: 'Than is normally a conjunction after a comparative. It is also used as a preposition, especially before relative and personal pronouns. "Than whom" is accepted standard English.',
        contentBn: 'Than সাধারণত conjunction, কিন্তু কখনো preposition হিসেবেও ব্যবহৃত হয়।',
        examples: [
          { en: 'We selected your son than whom no better man was available.' },
          { en: 'He is better than me in every respect.' },
          { en: 'No one other than him was present there.' }
        ],
        notes: ['Modern usage accepts "than me", "than him" in informal contexts.']
      },
      {
        id: 'adv-vs-prep',
        title: 'Adverb vs Preposition',
        titleBn: 'Adverb বনাম Preposition',
        content: 'The same word can be an adverb or a preposition depending on whether it has an object or not.',
        contentBn: 'একই শব্দ adverb বা preposition হতে পারে।',
        examples: [
          { en: 'He went on. (Adverb)' },
          { en: 'Sit on the bench. (Preposition)' },
          { en: 'Sit down. (Adverb)' },
          { en: 'The boat goes down the river. (Preposition)' }
        ]
      }
    ]
  },
  {
    id: 'prep-uses',
    chapter: 'Prepositions',
    title: 'Uses of Common Prepositions',
    titleBn: 'সাধারণ Preposition-এর ব্যবহার',
    description: 'Detailed usage of At, By, For, In, On, Of, To, Under from the textbook.',
    sections: [
      {
        id: 'at',
        title: 'Uses of AT',
        titleBn: 'AT-এর ব্যবহার',
        content: 'Used for exact points of time, places, activities, and certain fixed expressions.',
        contentBn: 'নির্দিষ্ট সময়, স্থান, কাজ এবং স্থির প্রকাশে ব্যবহৃত হয়।',
        examples: [
          { en: 'at 8 o\'clock / at dawn / at noon / at night' },
          { en: 'at home / at school / at the door / at play / at work' },
          { en: 'at the age of sixty / at present / at hand' },
          { en: 'good at mathematics / shouted at the boys / look at me' },
          { en: 'at 25, Chowringhee Road / at short notice' }
        ],
        memoryTip: 'AT = Point of time or place',
        memoryTipBn: 'AT = নির্দিষ্ট সময় বা স্থান'
      },
      {
        id: 'by',
        title: 'Uses of BY',
        titleBn: 'BY-এর ব্যবহার',
        content: 'Means of transport (except foot/horseback/cycle), agency, measure, time limit, proximity.',
        contentBn: 'যানবাহন, কর্তা, পরিমাণ, সময়সীমা, নিকটবর্তী হওয়া।',
        examples: [
          { en: 'travel by boat / rail / car (but on foot)' },
          { en: 'destroyed by fire / struck by lightning' },
          { en: 'know by name / by sight / by heart' },
          { en: 'sell by the kilogram / by the dozen' },
          { en: 'pay by cheque / by this time / by next Sunday' },
          { en: 'sit by me / live by the river' }
        ],
        memoryTip: 'BY + transport | BY + agent',
        memoryTipBn: 'BY + যানবাহন | BY + কর্তা'
      },
      {
        id: 'for',
        title: 'Uses of FOR',
        titleBn: 'FOR-এর ব্যবহার',
        content: 'Purpose, duration, benefit, exchange, destination, and many fixed phrases.',
        contentBn: 'উদ্দেশ্য, সময়কাল, সুবিধা, বিনিময়, গন্তব্য।',
        examples: [
          { en: 'a house for sale / time for going out' },
          { en: 'for five weeks / for God\'s sake' },
          { en: 'left for home / train for Kolkata' },
          { en: 'bought a car for Rs. 3 lakh' },
          { en: 'good for health / ask for money / look for something' },
          { en: 'For all his wealth he is unhappy (= in spite of)' }
        ]
      },
      {
        id: 'in',
        title: 'Uses of IN',
        titleBn: 'IN-এর ব্যবহার',
        content: 'Larger places, months, years, periods of the day, states, and many fixed expressions.',
        contentBn: 'বড় স্থান, মাস, বছর, দিনের অংশ, অবস্থা।',
        examples: [
          { en: 'in India / in 1986 / in February / in the morning' },
          { en: 'in the park / in the shade / in bed (but on the bed)' },
          { en: 'in danger / in trouble / in power / in debt' },
          { en: 'in time (not late) / in a hurry / in secret' },
          { en: 'written in ink / dressed in white / in his thirties' },
          { en: 'a lecturer in Chemistry' }
        ],
        memoryTip: 'IN = Period / larger area / state',
        memoryTipBn: 'IN = সময়কাল / বড় এলাকা / অবস্থা'
      },
      {
        id: 'on',
        title: 'Uses of ON',
        titleBn: 'ON-এর ব্যবহার',
        content: 'Days, dates, surfaces, topics, and specific fixed phrases. Note difference: on time vs in time.',
        contentBn: 'দিন, তারিখ, পৃষ্ঠ, বিষয়। on time vs in time-এর পার্থক্য মনে রাখো।',
        examples: [
          { en: 'on Sunday / on 4th May / on Christmas Day' },
          { en: 'on the wall / on the road / on the table' },
          { en: 'a speech on the subject / live on rice' },
          { en: 'on foot / on horseback / on duty / on oath' },
          { en: 'on time (punctual) / in time (early enough)' },
          { en: 'Kolkata is on the Hooghly / house on the main road' }
        ],
        memoryTip: 'ON TIME = punctual | IN TIME = early enough',
        memoryTipBn: 'ON TIME = নির্দিষ্ট সময়ে | IN TIME = দেরি হওয়ার আগে'
      },
      {
        id: 'of',
        title: 'Uses of OF',
        titleBn: 'OF-এর ব্যবহার',
        content: 'Belonging, origin, material, quantity, and fixed expressions.',
        contentBn: 'অধিকার, উৎস, উপাদান, পরিমাণ।',
        examples: [
          { en: 'knowledge of English / made of wood' },
          { en: 'comes of a good family / born of rich parents' },
          { en: 'died of cholera / cured of illness' },
          { en: 'the city of Kolkata / professor of English' },
          { en: 'It was good of you to help me.' }
        ]
      },
      {
        id: 'to',
        title: 'Uses of TO',
        titleBn: 'TO-এর ব্যবহার',
        content: 'Direction, destination, purpose, comparison, and fixed phrases.',
        contentBn: 'দিক, গন্তব্য, উদ্দেশ্য, তুলনা।',
        examples: [
          { en: 'Go to bed / Add this to that' },
          { en: 'They fought to the last man' },
          { en: 'beaten to death / five minutes to six' },
          { en: 'What is he to you?' }
        ]
      },
      {
        id: 'under',
        title: 'Uses of UNDER',
        titleBn: 'UNDER-এর ব্যবহার',
        content: 'Position below, subordination, process, and fixed expressions.',
        contentBn: 'নীচে, অধীন, প্রক্রিয়াধীন।',
        examples: [
          { en: 'under water / under a tree' },
          { en: 'He works under me.' },
          { en: 'under trial / under consideration / under repair' },
          { en: 'under sentence of death / under arms' },
          { en: 'under Rs. 100' }
        ]
      }
    ]
  },
  {
    id: 'conj-intro',
    chapter: 'Conjunctions',
    title: 'Conjunctions – Definition & Classification',
    titleBn: 'Conjunction – সংজ্ঞা ও শ্রেণিবিভাগ',
    description: 'Learn coordinating and subordinating conjunctions with their subtypes.',
    sections: [
      {
        id: 'def-conj',
        title: 'Definition & Distinction',
        titleBn: 'সংজ্ঞা ও পার্থক্য',
        content: 'The same word may be an adverb, a preposition or a conjunction depending on its function in the sentence.',
        contentBn: 'একই শব্দ adverb, preposition বা conjunction হতে পারে।',
        examples: [
          { en: 'I saw him before. (Adverb)' },
          { en: 'He stood before me. (Preposition)' },
          { en: 'He shall do it before I return. (Conjunction)' }
        ]
      },
      {
        id: 'compound',
        title: 'Compound Conjunctions',
        titleBn: 'Compound Conjunction',
        content: 'Groups of words that do the work of single conjunctions: as well as, as if, as though, in case, even if, so that, etc.',
        contentBn: 'কয়েকটি শব্দের গ্রুপ যা একক conjunction-এর কাজ করে।',
        examples: [
          { en: 'Ram as well as Karim went there.' },
          { en: 'He acted as if he were mad.' },
          { en: 'I shall help you in case you fail.' }
        ]
      },
      {
        id: 'correlative',
        title: 'Correlative Conjunctions',
        titleBn: 'Correlative Conjunction',
        content: 'Conjunctions used in pairs: either…or, neither…nor, both…and, not only…but also.',
        contentBn: 'জোড়ায় ব্যবহৃত conjunction।',
        examples: [
          { en: 'Either he or his brother is guilty.' },
          { en: 'Neither he nor his brother is guilty.' },
          { en: 'Both he and his brother are guilty.' },
          { en: 'Not only he but his brother also will go.' }
        ],
        memoryTip: 'EITHER…OR | NEITHER…NOR | BOTH…AND | NOT ONLY…BUT ALSO',
        memoryTipBn: 'পছন্দ → Either…or | নেতিবাচক → Neither…nor'
      },
      {
        id: 'coordinating',
        title: 'Co-ordinating Conjunctions',
        titleBn: 'Co-ordinating Conjunction',
        content: 'Join words, phrases or clauses of equal rank. Four kinds: Cumulative, Alternative, Adversative, Illative.',
        contentBn: 'সমান মর্যাদার শব্দ বা clause যুক্ত করে। চার প্রকার।',
        examples: [
          { en: 'Cumulative: and, both…and, as well as, not only…but also' },
          { en: 'Alternative: or, either…or, neither…nor, otherwise' },
          { en: 'Adversative: but, yet, still, however, nevertheless, while, whereas' },
          { en: 'Illative: therefore, so, consequently, for' }
        ],
        memoryTip: 'FANBOYS (For And Nor But Or Yet So) – common coordinating conjunctions',
        memoryTipBn: 'FANBOYS মনে রাখো'
      },
      {
        id: 'subordinating',
        title: 'Subordinating Conjunctions',
        titleBn: 'Subordinating Conjunction',
        content: 'Join a subordinate clause to a principal clause. Indicate Time, Cause, Purpose, Condition, Effect, Comparison, Manner, Concession.',
        contentBn: 'নির্ভরশীল clause-কে প্রধান clause-এর সঙ্গে যুক্ত করে।',
        examples: [
          { en: 'Time: when, while, before, after, till, until, since' },
          { en: 'Cause: because, as, since' },
          { en: 'Purpose: that, so that, in order that, lest' },
          { en: 'Condition: if, unless, provided, whether' },
          { en: 'Effect: so…that, such…that' },
          { en: 'Comparison: as…as, than, so…as' },
          { en: 'Manner: as, as if, as though' },
          { en: 'Concession: though, although, even if, however' }
        ]
      }
    ]
  },
  {
    id: 'connectors',
    chapter: 'Sentence Connectors',
    title: 'Sentence Connectors / Linkers',
    titleBn: 'Sentence Connector / Linker',
    description: 'How sentence linkers differ from conjunctions and common uses.',
    sections: [
      {
        id: 'def-conn',
        title: 'What are Sentence Connectors?',
        titleBn: 'Sentence Connector কী?',
        content: 'Sentence linkers establish links between two sentences (or passages). They help maintain the sequence of expression. Unlike conjunctions, they do not necessarily join sentences into one grammatical sentence.',
        contentBn: 'Sentence linker দুই বা ততোধিক বাক্যের মধ্যে সংযোগ স্থাপন করে। Conjunction-এর মতো তারা সবসময় এক বাক্যে যুক্ত করে না।',
        examples: [
          { en: 'He is very poor. Naturally, I often give him some money.' },
          { en: 'It rained heavily. As a result, the streets are waterlogged.' },
          { en: 'He worked hard. Finally he became successful.' }
        ]
      },
      {
        id: 'diff',
        title: 'Conjunction vs Sentence Connector',
        titleBn: 'Conjunction বনাম Sentence Connector',
        content: 'Conjunctions join two or more sentences into one sentence. Sentence connectors keep sentences independent but create logical flow.',
        contentBn: 'Conjunction বাক্যগুলোকে এক করে। Connector বাক্যগুলোকে আলাদা রেখে সংযোগ তৈরি করে।',
        examples: [
          { en: 'Conjunction: Neither he nor his brother lives here.' },
          { en: 'Connector: Ram is not here. His brother is not here. Both of them, however, will come next month.' }
        ]
      },
      {
        id: 'common',
        title: 'Common Sentence Connectors',
        titleBn: 'সাধারণ Sentence Connector',
        content: 'Addition: moreover, furthermore, also, besides, in addition\nContrast: however, still, yet, nevertheless, on the contrary\nCause/Effect: therefore, consequently, as a result, thus\nEmphasis: indeed, in fact, actually, basically\nSequence: finally, then, next, afterwards',
        contentBn: 'যোগ: moreover, furthermore\nবৈপরীত্য: however, still\nকারণ/ফল: therefore, as a result\nজোর: indeed, in fact',
        examples: [
          { en: 'He is strong. Actually he broke a slab of stone.' },
          { en: 'I allowed him to stay. Furthermore, I helped him with money.' },
          { en: 'It is late. Besides, it is raining.' },
          { en: 'He insulted me. Still I love him.' }
        ]
      }
    ]
  }
];

export const memoryFormulas = [
  {
    id: 'f1',
    title: 'Preposition = Relation',
    titleBn: 'Preposition = সম্পর্ক',
    formula: 'PREPOSITION → RELATION → Place | Time | Direction | Method | Reason | Purpose',
    tip: 'Ask: Where? When? Where to? How? Why?',
    tipBn: 'কোথায়? কখন? কোথায় যাচ্ছে? কীভাবে? কিসের জন্য?'
  },
  {
    id: 'f2',
    title: 'AT – ON – IN (Time)',
    titleBn: 'AT – ON – IN (সময়)',
    formula: 'AT = Exact point | ON = Day / Date | IN = Month / Year / Period',
    tip: 'at 6 o\'clock | on Sunday | in July / in 2026 / in the morning',
    tipBn: 'AT = নির্দিষ্ট সময় | ON = দিন/তারিখ | IN = সময়কাল'
  },
  {
    id: 'f3',
    title: 'IN TIME vs ON TIME',
    titleBn: 'IN TIME বনাম ON TIME',
    formula: 'ON TIME = Punctual (at the appointed time)\nIN TIME = Early enough / not late',
    tip: 'The train arrived on time. We reached in time to catch it.',
    tipBn: 'On time = নির্দিষ্ট সময়ে | In time = দেরি হওয়ার আগে'
  },
  {
    id: 'f4',
    title: 'Transport',
    titleBn: 'যানবাহন',
    formula: 'BY + train/bus/car/plane\nON + foot / horseback / bicycle (textbook preference)',
    tip: 'by train | on foot',
    tipBn: 'BY + যান | ON + পায়ে / ঘোড়ায়'
  },
  {
    id: 'f5',
    title: 'FANBOYS',
    titleBn: 'FANBOYS',
    formula: 'For | And | Nor | But | Or | Yet | So',
    tip: 'Memory aid for common coordinating conjunctions (not a complete list)',
    tipBn: 'সাধারণ coordinating conjunction মনে রাখার সহজ উপায়'
  },
  {
    id: 'f6',
    title: 'Correlatives',
    titleBn: 'Correlative',
    formula: 'Either…or | Neither…nor | Both…and | Not only…but also',
    tip: 'Watch subject-verb agreement carefully',
    tipBn: 'Subject-verb agreement খেয়াল রাখো'
  },
  {
    id: 'f7',
    title: 'Cause & Effect',
    titleBn: 'কারণ ও ফল',
    formula: 'Because / Since / As → Reason\nSo / Therefore / Consequently → Result',
    tip: 'He was ill, so he could not come. / Because he was ill…',
    tipBn: 'কারণ → Because/As | ফল → so/therefore'
  },
  {
    id: 'f8',
    title: 'Purpose',
    titleBn: 'উদ্দেশ্য',
    formula: 'so that / in order that + may/might\nlest + should',
    tip: 'He works hard so that he may pass. He worked hard lest he should fail.',
    tipBn: 'lest-এর পর should ব্যবহার হয়, negative নয়'
  },
  {
    id: 'f9',
    title: 'Contrast',
    titleBn: 'বৈপরীত্য',
    formula: 'but / yet / although / though / however / nevertheless',
    tip: 'He is poor, but he is honest. Although he is poor, he is honest.',
    tipBn: 'Although → subordinate clause | but → co-ordinate'
  },
  {
    id: 'f10',
    title: 'Time Conjunctions',
    titleBn: 'সময়বাচক Conjunction',
    formula: 'when | while | before | after | till | until | since',
    tip: 'Wait till I return. He came after I had left.',
    tipBn: 'till/until = পর্যন্ত | since = থেকে'
  }
];
