// Comprehensive Scientific Dataset for Ions (الأيونات الموجبة والسالبة)
// Aligned with Saudi Ministry of Education Chemistry 1 Curriculum (مسارات - كيمياء 1)

export const ionsConcepts = {
  neutralAtom: {
    title: "الذرة المتعادلة (Neutral Atom)",
    definition: "ذرة غير مشحونة كهربائياً، ويكون فيها عدد الإلكترونات السالبة مساوياً تماماً لعدد البروتونات الموجبة داخل النواة (العدد الذري Z).",
    rule: "عدد الإلكترونات = العدد الذري (Z)",
    charge: 0,
    badgeColor: "slate",
    icon: "Atom"
  },
  positiveIon: {
    title: "الأيون الموجب (الكاتيون - Cation)",
    definition: "ذرة فقدت إلكتروناً أو أكثر من إلكترونات التكافؤ للوصول إلى التوزيع الإلكتروني المستقر الشبيه بالغاز النبيل (قاعدة الثمانيات). تتكون غالباً من الفلزات.",
    rule: "عدد الإلكترونات = العدد الذري (Z) − قيمة الشحنة الموجبة",
    lossRule: "قاعدة ذهبية: يتم فقد الإلكترونات أولاً من أعلى مستوى طاقة رئيسي (n الأكبر)، ثم الأقل طاقة.",
    charge: "+",
    badgeColor: "emerald",
    icon: "PlusCircle"
  },
  negativeIon: {
    title: "الأيون السالب (الأنيون - Anion)",
    definition: "ذرة اكتسبت إلكتروناً أو أكثر في مستواها الخارجي لتحقيق التركيب الثماني المستقر المشابه لأقرب غاز نبيل يليها في الجدول الدوري. تتكون غالباً من اللافلزات.",
    rule: "عدد الإلكترونات = العدد الذري (Z) + قيمة الشحنة السالبة",
    gainRule: "تدخل الإلكترونات المكتسبة في المجالات الفرعية الشاغرة ذات الطاقة الأدنى المتاحة وفق مبدأ أوفباو.",
    charge: "−",
    badgeColor: "blue",
    icon: "MinusCircle"
  }
};

export const ionsExamples = [
  {
    id: "ion-al",
    type: "positive",
    elementSymbol: "Al",
    ionSymbol: "Al³⁺",
    nameAr: "الألمنيوم",
    ionNameAr: "أيون الألمنيوم الموجب (كاتيون)",
    z: 13,
    chargeNumber: 3,
    neutralElectrons: 13,
    ionElectrons: 10,
    neutralConfig: "1s² 2s² 2p⁶ 3s² 3p¹",
    neutralNoble: "[Ne] 3s² 3p¹",
    ionConfig: "1s² 2s² 2p⁶",
    ionNoble: "[Ne]",
    similarNobleGas: "النيون (Ne)",
    electronsLost: 3,
    lostFrom: "إلكترون واحد من 3p¹ وإلكترونان من 3s² (المستوى الرئيس الثالث n=3 كاملاً)",
    explanation: "ذرة الألمنيوم تحتوي على 13 إلكتروناً. عند تكوين أيون Al³⁺، تفقد الذرة إلكترونات المستوى الخارجي (n=3) بأكملها: إلكترون المجال 3p أولاً، ثم إلكتروني 3s، فيتبقى 10 إلكترونات مطابقة للتوزيع الإلكتروني المستقر لغاز النيون [Ne].",
    category: "فلز رئيسي - فقد إلكترونات p و s",
    orbitalsNeutral: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, 0], "3py": [0, 0], "3pz": [0, 0]
    },
    orbitalsIon: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [0, 0],
      "3px": [0, 0], "3py": [0, 0], "3pz": [0, 0]
    }
  },
  {
    id: "ion-na",
    type: "positive",
    elementSymbol: "Na",
    ionSymbol: "Na⁺",
    nameAr: "الصوديوم",
    ionNameAr: "أيون الصوديوم الموجب (كاتيون)",
    z: 11,
    chargeNumber: 1,
    neutralElectrons: 11,
    ionElectrons: 10,
    neutralConfig: "1s² 2s² 2p⁶ 3s¹",
    neutralNoble: "[Ne] 3s¹",
    ionConfig: "1s² 2s² 2p⁶",
    ionNoble: "[Ne]",
    similarNobleGas: "النيون (Ne)",
    electronsLost: 1,
    lostFrom: "إلكترون التكافؤ الوحيد في المجال 3s",
    explanation: "تحتوي ذرة الصوديوم على إلكترون تكافؤ وحيد في المجال 3s. عند التأين تفقد هذا الإلكترون لتصبح Na⁺ بشحنة +1، ويكون التوزيع الناتج 1s² 2s² 2p⁶ مماثلاً لغاز النيون الخامل والمستقر ثمانياً.",
    category: "فلز قلوي - المجموعة 1",
    orbitalsNeutral: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, 0]
    },
    orbitalsIon: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [0, 0]
    }
  },
  {
    id: "ion-mg",
    type: "positive",
    elementSymbol: "Mg",
    ionSymbol: "Mg²⁺",
    nameAr: "المغنيسيوم",
    ionNameAr: "أيون المغنيسيوم الموجب (كاتيون)",
    z: 12,
    chargeNumber: 2,
    neutralElectrons: 12,
    ionElectrons: 10,
    neutralConfig: "1s² 2s² 2p⁶ 3s²",
    neutralNoble: "[Ne] 3s²",
    ionConfig: "1s² 2s² 2p⁶",
    ionNoble: "[Ne]",
    similarNobleGas: "النيون (Ne)",
    electronsLost: 2,
    lostFrom: "إلكترونا التكافؤ من المجال 3s",
    explanation: "تفقد ذرة المغنيسيوم إلكتروني المجال 3s بالكامل لتكوين أيون Mg²⁺ (عدد الإلكترونات = 12 - 2 = 10)، ويصبح مستواها الخارجي هو n=2 وهو ممتلئ بثمانية إلكترونات ومستقر جداً كغاز النيون.",
    category: "فلز قلوي أرضي - المجموعة 2",
    orbitalsNeutral: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1]
    },
    orbitalsIon: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [0, 0]
    }
  },
  {
    id: "ion-cl",
    type: "negative",
    elementSymbol: "Cl",
    ionSymbol: "Cl⁻",
    nameAr: "الكلور",
    ionNameAr: "أيون الكلوريد السالب (أنيون)",
    z: 17,
    chargeNumber: 1,
    neutralElectrons: 17,
    ionElectrons: 18,
    neutralConfig: "1s² 2s² 2p⁶ 3s² 3p⁵",
    neutralNoble: "[Ne] 3s² 3p⁵",
    ionConfig: "1s² 2s² 2p⁶ 3s² 3p⁶",
    ionNoble: "[Ar]",
    similarNobleGas: "الآرجون (Ar)",
    electronsGained: 1,
    gainedInto: "المجال الفرعي 3p ليكتمل بـ 6 إلكترونات (3p⁶)",
    explanation: "تحتوي ذرة الكلور على 7 إلكترونات تكافؤ في المستوى الثالث (3s² 3p⁵). لا ينقصها سوى إلكترون واحد لتحقيق التركيب الثماني، فتكتسب إلكتروناً في مدار 3pz ليصبح 3p⁶، مما يمنحها استقراراً تاماً مطابقاً لتوزيع غاز الآرجون [Ar].",
    category: "هالوجين - المجموعة 17",
    orbitalsNeutral: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, -1], "3py": [1, -1], "3pz": [1, 0]
    },
    orbitalsIon: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, -1], "3py": [1, -1], "3pz": [1, -1]
    }
  },
  {
    id: "ion-o",
    type: "negative",
    elementSymbol: "O",
    ionSymbol: "O²⁻",
    nameAr: "الأكسجين",
    ionNameAr: "أيون الأكسيد السالب (أنيون)",
    z: 8,
    chargeNumber: 2,
    neutralElectrons: 8,
    ionElectrons: 10,
    neutralConfig: "1s² 2s² 2p⁴",
    neutralNoble: "[He] 2s² 2p⁴",
    ionConfig: "1s² 2s² 2p⁶",
    ionNoble: "[Ne]",
    similarNobleGas: "النيون (Ne)",
    electronsGained: 2,
    gainedInto: "المجال الفرعي 2p ليكتمل من 4 إلكترونات إلى 6 إلكترونات (2p⁶)",
    explanation: "تمتلك ذرة الأكسجين 6 إلكترونات تكافؤ (2s² 2p⁴). تكتسب إلكترونين في المدارين غير المزدوجين في 2p ليكتمل المستوى الثاني تماماً بثمانية إلكترونات (2s² 2p⁶)، محققةً توزيع غاز النيون الخامل المستقر.",
    category: "لافلز - المجموعة 16",
    orbitalsNeutral: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, 0], "2pz": [1, 0]
    },
    orbitalsIon: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1]
    }
  },
  {
    id: "ion-fe2",
    type: "positive",
    elementSymbol: "Fe",
    ionSymbol: "Fe²⁺ / Fe³⁺",
    nameAr: "الحديد (عنصر انتقالي)",
    ionNameAr: "أيون الحديدوز Fe²⁺ وأيون الحديديك Fe³⁺",
    z: 26,
    chargeNumber: 2,
    neutralElectrons: 26,
    ionElectrons: 24,
    neutralConfig: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
    neutralNoble: "[Ar] 4s² 3d⁶",
    ionConfig: "[Ar] 3d⁶ (في Fe²⁺) و [Ar] 3d⁵ (في Fe³⁺)",
    ionNoble: "[Ar] 3d⁶",
    similarNobleGas: "نواة الآرجون [Ar]",
    electronsLost: 2,
    lostFrom: "تُفقد إلكترونات 4s أولاً لأن n=4 أعلى مستوى رئيسي، ثم تُفقد من 3d",
    explanation: "تطبيق متقدم ومهم جداً: عند تكوين Fe²⁺، تفقد ذرة الحديد إلكتروني 4s أولاً على الرغم من ملء 4s قبل 3d، لأن الفقد يتم دائماً من المستوى الخارجي ذي رقم الكم الرئيس الأكبر (n=4). وعند تكوين Fe³⁺ يُفقد إلكترون إضافي من 3d ليصبح [Ar] 3d⁵، وهو توزيع مستقر جداً لأن المجال d يكون نصف ممتلئ متماثل الغزل.",
    category: "فلز انتقالي - قاعدة الفقد من n الأكبر",
    orbitalsNeutral: null,
    orbitalsIon: null
  }
];

export const ionsPracticeQuiz = [
  {
    id: "q-ion-1",
    question: "ما هو التوزيع الإلكتروني الصحيح لأيون الألمنيوم Al³⁺ علماً بأن العدد الذري للألمنيوم Z = 13؟",
    options: [
      { text: "1s² 2s² 2p⁶", isCorrect: true, feedback: "إجابة صحيحة ومتقنة! ذرة Al تفقد 3 إلكترونات (إلكترون 3p¹ وإلكتروني 3s²) لتصبح 10 إلكترونات مطابقة لغاز النيون [Ne]." },
      { text: "1s² 2s² 2p⁶ 3s² 3p¹", isCorrect: false, feedback: "هذا توزيع الذرة المتعادلة (13 إلكتروناً)، بينما الأيون Al³⁺ فقد 3 إلكترونات." },
      { text: "1s² 2s² 2p³ 3s² 3p¹", isCorrect: false, feedback: "خطأ علمي، الفقد يحدث من المستوى الخارجي الأعلى طاقة (المستوى الثالث n=3) أولاً وليس من المستوى الثاني 2p." },
      { text: "1s² 2s² 2p⁶ 3s² 3p⁴", isCorrect: false, feedback: "هذا اكتساب لـ 3 إلكترونات، بينما إشارة +3 تعني فقد 3 إلكترونات." }
    ],
    hint: "الأيون موجب (+3) يعني فقد 3 إلكترونات من أعلى مستوى رئيسي (n=3)."
  },
  {
    id: "q-ion-2",
    question: "عند تكوين أيون الصوديوم الموجب Na⁺ من ذرة الصوديوم Na (Z = 11)، من أي مجال فرعي يتم فقد الإلكترون أولاً؟",
    options: [
      { text: "من المجال الفرعي 3s", isCorrect: true, feedback: "صحيح تماماً! 3s هو أعلى مستوى طاقة رئيسي شاغر في الصوديوم ويحتوي إلكترون التكافؤ." },
      { text: "من المجال الفرعي 2p", isCorrect: false, feedback: "خطأ، المستوى 2p داخلي وأقل طاقة، الفقد يبدأ دائماً من المستوى الخارجي n=3." },
      { text: "من المجال الفرعي 1s", isCorrect: false, feedback: "خطأ، 1s هو الأقرب للنواة والأشد ارتباطاً." },
      { text: "من المجال الفرعي 2s", isCorrect: false, feedback: "خطأ، الفقد يكون من الغلاف الخارجي أولاً." }
    ],
    hint: "تذكري أن الفقد يتم دائماً من المستوى الرئيسي الأبعد عن النواة (n الأكبر)."
  },
  {
    id: "q-ion-3",
    question: "ما هو عدد الإلكترونات في أيون الكلوريد Cl⁻ علماً بأن العدد الذري للكلور Z = 17؟",
    options: [
      { text: "18 إلكتروناً", isCorrect: true, feedback: "ممتاز! الشحنة السالبة (-1) تعني اكتساب إلكترون إضافي (17 + 1 = 18) ليماثل توزيع غاز الآرجون [Ar]." },
      { text: "17 إلكتروناً", isCorrect: false, feedback: "17 هو عدد إلكترونات الذرة المتعادلة فقط." },
      { text: "16 إلكتروناً", isCorrect: false, feedback: "16 تعني فقد إلكترون وهذا غير صحيح للأيون السالب." },
      { text: "10 إلكترونات", isCorrect: false, feedback: "10 إلكترونات تمثل أيون فقد 7 إلكترونات، بينما الكلور لافلز يفضل الاكتساب." }
    ],
    hint: "الأيون السالب شحنته سالبة لأنه اكتسب إلكترونات سالبة إضافية."
  },
  {
    id: "q-ion-4",
    question: "أي من الأيونات التالية يمتلك التوزيع الإلكتروني 1s² 2s² 2p⁶؟",
    options: [
      { text: "جميع ما ذكر (Al³⁺ و Mg²⁺ و Na⁺ و O²⁻)", isCorrect: true, feedback: "رائع جداً وبصيرة علمية نافذة! جميع هذه الأيونات متساوية في عدد الإلكترونات (Isoelectronic) وتحتوي على 10 إلكترونات مماثلة للنيون [Ne]." },
      { text: "Na⁺ فقط", isCorrect: false, feedback: "Na⁺ يمتلك هذا التوزيع بالفعل، ولكن هناك أيونات أخرى تماثله أيضاً." },
      { text: "O²⁻ فقط", isCorrect: false, feedback: "O²⁻ يمتلك هذا التوزيع بعد اكتساب إلكترونين، ولكن الأيونات الموجبة المذكورة تمتلكه أيضاً بعد الفقد." },
      { text: "Al³⁺ فقط", isCorrect: false, feedback: "Al³⁺ يمتلكه بعد فقد 3 إلكترونات، لكن الخيارات الأخرى أيضاً تشترك معه في ذلك." }
    ],
    hint: "احسبي عدد إلكترونات كل أيون: Al³⁺ (13-3=10), Na⁺ (11-1=10), Mg²⁺ (12-2=10), O²⁻ (8+2=10)."
  },
  {
    id: "q-ion-5",
    question: "عند تحول ذرة الحديد Fe: [Ar] 4s² 3d⁶ إلى أيون الحديدوز Fe²⁺، ما هو التوزيع الإلكتروني الصحيح للأيون الناتج؟",
    options: [
      { text: "[Ar] 3d⁶", isCorrect: true, feedback: "إتقان فائق! فقد الإلكترونات يحدث من المجال 4s أولاً لأنه ذو رقم الكم الرئيس الأكبر (n=4)، على الرغم من أن 4s ملئ قبل 3d في التوزيع." },
      { text: "[Ar] 4s² 3d⁴", isCorrect: false, feedback: "خطأ شائع! الطالبات يعتقدن أن الفقد يكون من آخر مجال كُتب (3d)، ولكن القاعدة العلمية تنص على الفقد من n الأكبر أولاً (4s)." },
      { text: "[Ar] 4s¹ 3d⁵", isCorrect: false, feedback: "هذا توزيع ذرة الكروم المتعادلة، وليس أيون الحديدوز." },
      { text: "[Ar] 4s² 3d⁶", isCorrect: false, feedback: "هذا توزيع الذرة المتعادلة دون أي فقد." }
    ],
    hint: "القاعدة الذهبية في الفلزات الانتقالية: الفقد يحدث دائماً من 4s قبل 3d لأن n=4 أعلى مستوى رئيسي."
  }
];
