// Error Challenge Dataset - "خطأ نودّعه"
// Aligned with Saudi High School Chemistry Curriculum (مسارات - كيمياء 1)
// Focuses on: الأيونات الموجبة والسالبة، مبدأ أوفباو، قاعدة هوند، مبدأ باولي، واستثناءات الاستقرارية

export const errorChallengeBank = [
  // --- قسم الأيونات الموجبة والسالبة (التحدي الأبرز للطالبات) ---
  {
    id: "err-ion-1",
    category: "ions",
    level: "medium",
    levelAr: "تحدي الأيونات الموجبة",
    badgeColor: "emerald",
    element: {
      symbol: "Al³⁺",
      atomSymbol: "Al",
      nameAr: "أيون الألمنيوم (Al³⁺)",
      nameEn: "Aluminium Ion",
      z: 13,
      isIon: true,
      charge: "+3"
    },
    wrongConfig: "1s² 2s² 2p⁶ 3s²",
    displayNotation: "صيغة إلكترونية خاطئة لأيون Al³⁺",
    errorType: "incomplete_ion_loss",
    errorTypeNameAr: "فقد غير مكتمل لإلكترونات التكافؤ في الأيون الموجب",
    errorLocation: "المستوى الخارجي 3s²",
    questionPrompt: "تأملي التوزيع المعروض لأيون الألمنيوم Al³⁺ (العدد الذري للألمنيوم Z = 13). ما الخطأ العلمي في هذا التوزيع؟",
    identifiedErrorText: "تم فقد إلكترون واحد فقط من 3p وبقي إلكترونا 3s²، بينما أيون Al³⁺ يجب أن يفقد 3 إلكترونات كاملة (13 - 3 = 10 إلكترونات).",
    hint: "شحنة الأيون هي +3، مما يعني أن الذرة فقدت 3 إلكترونات كاملة من أعلى مستوى رئيسي (n=3) لتصل إلى التوزيع المستقر الشبيه بالنيون [Ne].",
    correctConfig: "1s² 2s² 2p⁶",
    options: [
      { text: "1s² 2s² 2p⁶", isCorrect: true },
      { text: "1s² 2s² 2p⁶ 3s²", isCorrect: false },
      { text: "1s² 2s² 2p³ 3s² 3p¹", isCorrect: false },
      { text: "1s² 2s² 2p⁶ 3s² 3p⁴", isCorrect: false }
    ],
    scientificExplanation: "ذرة الألمنيوم Al (Z=13) توزيعها 1s² 2s² 2p⁶ 3s² 3p¹. عند تكوين أيون Al³⁺ تفقد 3 إلكترونات من المستوى الخارجي n=3 (إلكترون 3p¹ وإلكتروني 3s²)، فيصبح عدد الإلكترونات 10 وتوزيعها الصحيح 1s² 2s² 2p⁶ مماثلاً لغاز النيون المستقر ثمانياً.",
    ruleBreached: "قاعدة فقد إلكترونات التكافؤ في الأيون الموجب وصولاً لقاعدة الثمانيات"
  },
  {
    id: "err-ion-2",
    category: "ions",
    level: "easy",
    levelAr: "تحدي الأيونات الموجبة",
    badgeColor: "emerald",
    element: {
      symbol: "Na⁺",
      atomSymbol: "Na",
      nameAr: "أيون الصوديوم (Na⁺)",
      nameEn: "Sodium Ion",
      z: 11,
      isIon: true,
      charge: "+1"
    },
    wrongConfig: "1s² 2s² 2p⁶ 3s¹",
    displayNotation: "صيغة إلكترونية خاطئة لأيون Na⁺",
    errorType: "forgot_positive_charge",
    errorTypeNameAr: "توزيع الذرة المتعادلة بدلاً من الأيون الموجب",
    errorLocation: "المجال الخارجي 3s¹",
    questionPrompt: "كُتب التوزيع الإلكتروني لأيون الصوديوم Na⁺ على أنه 1s² 2s² 2p⁶ 3s¹. أين يكمن الخلل العلمي؟",
    identifiedErrorText: "كُتب التوزيع لذرة الصوديوم المتعادلة (11 إلكتروناً)، ولم يؤخذ في الحسبان فقد إلكترون التكافؤ لتكوين الأيون الموجب Na⁺ (10 إلكترونات).",
    hint: "تذكري أن شحنة +1 تعني فقد إلكترون واحد من المستوى الخارجي.",
    correctConfig: "1s² 2s² 2p⁶",
    options: [
      { text: "1s² 2s² 2p⁶", isCorrect: true },
      { text: "1s² 2s² 2p⁶ 3s¹", isCorrect: false },
      { text: "1s² 2s² 2p⁵ 3s²", isCorrect: false },
      { text: "1s² 2s² 2p⁴ 3s²", isCorrect: false }
    ],
    scientificExplanation: "الذرة المتعادلة للصوديوم Na تحتوي 11 إلكتروناً، أما أيون Na⁺ فيفقد إلكترون التكافؤ الوحيد الموجود في 3s¹، ليصبح عدد إلكتروناته 10 إلكترونات بتوزيع مستقر هو 1s² 2s² 2p⁶.",
    ruleBreached: "مفهوم شحنة الأيون الموجب وفقد الإلكترونات"
  },
  {
    id: "err-ion-3",
    category: "ions",
    level: "medium",
    levelAr: "تحدي الأيونات السالبة",
    badgeColor: "blue",
    element: {
      symbol: "Cl⁻",
      atomSymbol: "Cl",
      nameAr: "أيون الكلوريد (Cl⁻)",
      nameEn: "Chloride Ion",
      z: 17,
      isIon: true,
      charge: "-1"
    },
    wrongConfig: "1s² 2s² 2p⁶ 3s² 3p⁵",
    displayNotation: "صيغة إلكترونية خاطئة لأيون الكلوريد Cl⁻",
    errorType: "forgot_negative_charge",
    errorTypeNameAr: "إغفال إلكترون الاكتساب في الأيون السالب",
    errorLocation: "المجال الفرعي 3p⁵",
    questionPrompt: "تأملي توزيع أيون الكلوريد Cl⁻ (العدد الذري Z=17). ما الخلل الذي وقعت فيه الطالبة؟",
    identifiedErrorText: "تجاهلت الطالبة اكتساب الإلكترون الإضافي الذي يمنح الأيون شحنته السالبة، فكتبت 3p⁵ (17 إلكتروناً) بدلاً من 3p⁶ (18 إلكتروناً).",
    hint: "الشحنة السالبة (-1) تعني أن الذرة اكتسبت إلكتروناً ليصبح المجموع 17 + 1 = 18 إلكتروناً.",
    correctConfig: "1s² 2s² 2p⁶ 3s² 3p⁶",
    options: [
      { text: "1s² 2s² 2p⁶ 3s² 3p⁶", isCorrect: true },
      { text: "1s² 2s² 2p⁶ 3s² 3p⁵", isCorrect: false },
      { text: "1s² 2s² 2p⁶ 3s² 3p⁴ 4s¹", isCorrect: false },
      { text: "1s² 2s² 2p⁶ 3s¹ 3p⁶", isCorrect: false }
    ],
    scientificExplanation: "ذرة الكلور لديها 17 إلكتروناً. الشحنة السالبة (-1) تعني اكتساب إلكترون إضافي في المجال الفرعي 3p ليكتمل من 5 إلكترونات إلى 6 إلكترونات (3p⁶)، محققاً التركيب الثماني المستقر لغاز الآرجون [Ar].",
    ruleBreached: "اكتساب الإلكترونات في الأيونات السالبة"
  },
  {
    id: "err-ion-4",
    category: "ions",
    level: "medium",
    levelAr: "تحدي الأيونات السالبة",
    badgeColor: "blue",
    element: {
      symbol: "O²⁻",
      atomSymbol: "O",
      nameAr: "أيون الأكسيد (O²⁻)",
      nameEn: "Oxide Ion",
      z: 8,
      isIon: true,
      charge: "-2"
    },
    wrongConfig: "1s² 2s² 2p⁴ 3s²",
    displayNotation: "صيغة إلكترونية خاطئة لأيون الأكسيد O²⁻",
    errorType: "aufbau_in_anion",
    errorTypeNameAr: "وضع إلكترونات الاكتساب في مستوى أعلى قبل ملء المستوى الحالي",
    errorLocation: "المجالين 2p⁴ و 3s²",
    questionPrompt: "في توزيع أيون الأكسيد O²⁻ (العدد الذري Z=8)، تم وضع إلكتروني الاكتساب في 3s² بدلاً من 2p. ما الخطأ العلمي هنا؟",
    identifiedErrorText: "المجال الفرعي 2p يتسع لـ 6 إلكترونات ويحتوي 4 فقط، لذا يجب وضع إلكتروني الاكتساب في 2p ليكتمل بـ 6 إلكترونات قبل فتح المستوى 3s.",
    hint: "وفق مبدأ أوفباو، يجب ملء المجال 2p تماماً قبل الانتقال إلى 3s.",
    correctConfig: "1s² 2s² 2p⁶",
    options: [
      { text: "1s² 2s² 2p⁶", isCorrect: true },
      { text: "1s² 2s² 2p⁴ 3s²", isCorrect: false },
      { text: "1s² 2s² 2p⁵ 3s¹", isCorrect: false },
      { text: "1s² 2s⁴ 2p⁴", isCorrect: false }
    ],
    scientificExplanation: "الأكسجين (Z=8) يكتسب إلكترونين ليصبح O²⁻ (10 إلكترونات). بما أن المجال 2p لديه مداران شاغران، فإن الإلكترونين المكتسبين يدخلان في 2p ليصبح 2p⁶ ليكتمل المستوى الرئيس الثاني بـ 8 إلكترونات، ولا يجوز فتح المجال 3s الأعلى طاقة.",
    ruleBreached: "مبدأ أوفباو في إضافة إلكترونات الأيون السالب"
  },
  {
    id: "err-ion-5",
    category: "ions",
    level: "hard",
    levelAr: "تحدي الأيونات المتقدم (عناصر انتقالية)",
    badgeColor: "purple",
    element: {
      symbol: "Fe²⁺",
      atomSymbol: "Fe",
      nameAr: "أيون الحديدوز (Fe²⁺)",
      nameEn: "Iron(II) Ion",
      z: 26,
      isIon: true,
      charge: "+2"
    },
    wrongConfig: "[Ar] 4s² 3d⁴",
    displayNotation: "صيغة إلكترونية خاطئة لأيون الحديد Fe²⁺",
    errorType: "wrong_sublevel_loss",
    errorTypeNameAr: "فقد الإلكترونات من المستوى الخطأ (3d بدلاً من 4s)",
    errorLocation: "المجالين 4s² و 3d⁴",
    questionPrompt: "وزعت طالبة أيون الحديدوز Fe²⁺ (Z=26) بحذف إلكترونين من 3d فكتبت [Ar] 4s² 3d⁴. ما هو التفسير العلمي لخطئها؟",
    identifiedErrorText: "قاعدة فقد الإلكترونات في الأيونات الموجبة تنص على الفقد من أعلى مستوى رئيسي (n الأكبر وهو 4s) أولاً، وليس من 3d.",
    hint: "تذكري: على الرغم من ملء 4s قبل 3d في أوفباو، إلا أن الفقد عند التأين يحدث من المستوى الأبعد عن النواة (4s أولاً).",
    correctConfig: "[Ar] 3d⁶",
    options: [
      { text: "[Ar] 3d⁶", isCorrect: true },
      { text: "[Ar] 4s² 3d⁴", isCorrect: false },
      { text: "[Ar] 4s¹ 3d⁵", isCorrect: false },
      { text: "[Ar] 4s² 3d⁶", isCorrect: false }
    ],
    scientificExplanation: "في الفلزات الانتقالية، عند تكوين الأيون الموجب تفقد الذرة إلكترونات المستوى الخارجي الرئيسي (n=4 وهو 4s) أولاً قبل فقد إلكترونات المستوى الداخلي (n=3 وهو 3d). لذا عند تكوين Fe²⁺ يُحذف إلكترونا 4s ليصبح التوزيع [Ar] 3d⁶.",
    ruleBreached: "قاعدة الفقد من أعلى مستوى رئيسي (Highest Principal Quantum Number n)"
  },
  {
    id: "err-ion-6",
    category: "ions",
    level: "easy",
    levelAr: "تحدي الأيونات الموجبة",
    badgeColor: "emerald",
    element: {
      symbol: "Mg²⁺",
      atomSymbol: "Mg",
      nameAr: "أيون المغنيسيوم (Mg²⁺)",
      nameEn: "Magnesium Ion",
      z: 12,
      isIon: true,
      charge: "+2"
    },
    wrongConfig: "1s² 2s² 2p⁶ 3s¹",
    displayNotation: "صيغة إلكترونية خاطئة لأيون Mg²⁺",
    errorType: "partial_loss_mg",
    errorTypeNameAr: "فقد إلكترون واحد فقط بدلاً من إلكترونين",
    errorLocation: "المجال 3s¹",
    questionPrompt: "تأملي توزيع أيون المغنيسيوم Mg²⁺ (العدد الذري 12). ما سبب الخطأ في بقاء إلكترون في 3s؟",
    identifiedErrorText: "المغنيسيوم في المجموعة 2 ويفقد إلكتروني تكافؤ كاملين لتكوين Mg²⁺ (12 - 2 = 10 إلكترونات)، وبقاء إلكترون في 3s خطأ.",
    hint: "احسبي: 12 - 2 = 10 إلكترونات.",
    correctConfig: "1s² 2s² 2p⁶",
    options: [
      { text: "1s² 2s² 2p⁶", isCorrect: true },
      { text: "1s² 2s² 2p⁶ 3s¹", isCorrect: false },
      { text: "1s² 2s² 2p⁵ 3s²", isCorrect: false },
      { text: "1s² 2s² 2p⁴", isCorrect: false }
    ],
    scientificExplanation: "شحنة +2 تعني فقد إلكتروني التكافؤ من 3s تماماً. فيتبقى 10 إلكترونات موزعة في المستويين الأول والثاني 1s² 2s² 2p⁶، وهو التوزيع الثماني المستقر للغاز النبيل النيون.",
    ruleBreached: "فقد إلكترونات التكافؤ كاملة في فلزات المجموعة 2"
  },

  // --- قسم الذرات المتعادلة وقواعد التوزيع الأساسية ---
  {
    id: "err-neutral-1",
    category: "neutral",
    level: "easy",
    levelAr: "مستوى تأسيسي",
    badgeColor: "emerald",
    element: {
      symbol: "Na",
      atomSymbol: "Na",
      nameAr: "ذرة الصوديوم المتعادلة",
      nameEn: "Sodium",
      z: 11,
      isIon: false,
      charge: "0"
    },
    wrongConfig: "1s² 2s² 2p⁵ 3s²",
    displayNotation: "صيغة إلكترونية خاطئة",
    errorType: "aufbau_sublevel",
    errorTypeNameAr: "خرق مبدأ أوفباو وسعة المجال p",
    errorLocation: "المجالين 2p⁵ و 3s²",
    questionPrompt: "تأملي التوزيع الإلكتروني لذرة الصوديوم المتعادلة (العدد الذري 11). ما الخطأ العلمي في هذا التوزيع؟",
    identifiedErrorText: "انتقل إلكترون إلى المجال 3s قبل اكتمال المجال 2p الذي يتسع لـ 6 إلكترونات.",
    hint: "المجال الفرعي p يتسع لـ 6 إلكترونات، ومبدأ أوفباو يوجب ملء المستويات الأقل طاقة أولاً.",
    correctConfig: "1s² 2s² 2p⁶ 3s¹",
    options: [
      { text: "1s² 2s² 2p⁶ 3s¹", isCorrect: true },
      { text: "1s² 2s² 2p⁵ 3s²", isCorrect: false },
      { text: "1s² 2s³ 2p⁶", isCorrect: false },
      { text: "1s² 2s² 2p⁶ 3p¹", isCorrect: false }
    ],
    scientificExplanation: "وفق مبدأ أوفباو (البناء التصاعدي)، تملأ المجالات ذات الطاقة الأدنى أولاً. المجال 2p أدنى طاقة من 3s ويتسع لـ 6 إلكترونات. لذا يجب ملء 2p كاملاً بـ 6 إلكترونات (2p⁶) أولاً، ثم يوضع الإلكترون الحادي عشر والأخير في المجال 3s لتصبح 3s¹.",
    ruleBreached: "مبدأ أوفباو (Aufbau Principle)"
  },
  {
    id: "err-neutral-2",
    category: "neutral",
    level: "easy",
    levelAr: "مستوى تأسيسي",
    badgeColor: "emerald",
    element: {
      symbol: "B",
      atomSymbol: "B",
      nameAr: "ذرة البورون المتعادلة",
      nameEn: "Boron",
      z: 5,
      isIon: false,
      charge: "0"
    },
    wrongConfig: "1s² 2s³",
    displayNotation: "صيغة إلكترونية خاطئة",
    errorType: "capacity_exceeded",
    errorTypeNameAr: "تجاوز السعة القصوى للمجال الفرعي s",
    errorLocation: "المجال 2s³",
    questionPrompt: "تأملي توزيع ذرة البورون (العدد الذري 5). أين يكمن الخلل؟",
    identifiedErrorText: "المجال الفرعي s يتسع لإلكترونين فقط كحد أقصى، ولا يمكن أن يحتوي على 3 إلكترونات.",
    hint: "المجال الفرعي من نوع s يتكون من مدار واحد كروي، ومبدأ باولي يحدد سعته بـ 2 إلكترون.",
    correctConfig: "1s² 2s² 2p¹",
    options: [
      { text: "1s² 2s² 2p¹", isCorrect: true },
      { text: "1s³ 2s²", isCorrect: false },
      { text: "1s² 2s³", isCorrect: false },
      { text: "1s¹ 2s² 2p²", isCorrect: false }
    ],
    scientificExplanation: "ينص مبدأ باولي للاستبعاد على أن المدار الواحد يتسع لإلكترونين فقط بحد أقصى ذوي غزلين متعاكسين. بما أن المجال s يحتوي مداراً واحداً فقط، فإن أقصى سعة له هي 2 إلكترون. الإلكترون الخامس يدخل في 2p¹.",
    ruleBreached: "سعة المجالات ومبدأ باولي"
  },
  {
    id: "err-neutral-3",
    category: "neutral",
    level: "hard",
    levelAr: "استثناءات الاستقرارية",
    badgeColor: "purple",
    element: {
      symbol: "Cr",
      atomSymbol: "Cr",
      nameAr: "ذرة الكروم (استثناء الكيمياء الشهير)",
      nameEn: "Chromium",
      z: 24,
      isIon: false,
      charge: "0"
    },
    wrongConfig: "[Ar] 4s² 3d⁴",
    displayNotation: "صيغة غير مستقرة للكروم",
    errorType: "half_filled_exception",
    errorTypeNameAr: "إغفال حالة الاستقرار الفائق لنصف الامتلاء (d⁵)",
    errorLocation: "المجالين 4s² و 3d⁴",
    questionPrompt: "كُتب توزيع الكروم Cr (Z=24) وفق الترتيب الحسابي البحت [Ar] 4s² 3d⁴. ما الخطأ الكيميائي في هذا التوزيع؟",
    identifiedErrorText: "ذرة الكروم تستقر أكثر عندما ينتقل إلكترون من 4s إلى 3d ليكون كلاهما نصف ممتلئ (4s¹ 3d⁵).",
    hint: "المجال d ذو 5 مدارات يكون في قمة التماثل والاستقرار عندما يحتوي 5 إلكترونات منفردة متوازية الغزل.",
    correctConfig: "[Ar] 4s¹ 3d⁵",
    options: [
      { text: "[Ar] 4s¹ 3d⁵", isCorrect: true },
      { text: "[Ar] 4s² 3d⁴", isCorrect: false },
      { text: "[Ar] 4s⁰ 3d⁶", isCorrect: false },
      { text: "[Ar] 3d⁶", isCorrect: false }
    ],
    scientificExplanation: "توزيع الكروم يمثل استثناءً مقرراً في كيمياء 1: ينتقل إلكترون من 4s إلى 3d ليصبح [Ar] 4s¹ 3d⁵. هذه الحالة (نصف ممتلئ لكل من 4s و 3d) تمنح الذرة تماثلاً فراغياً أعلى وطاقة وضع دنيا تجعلها أكثر استقراراً في الطبيعة من 4s² 3d⁴.",
    ruleBreached: "استثناء استقرار نصف الامتلاء في المستوى الفرعي d"
  },
  {
    id: "err-neutral-4",
    category: "neutral",
    level: "hard",
    levelAr: "استثناءات الاستقرارية",
    badgeColor: "purple",
    element: {
      symbol: "Cu",
      atomSymbol: "Cu",
      nameAr: "ذرة النحاس (استثناء الامتلاء التام)",
      nameEn: "Copper",
      z: 29,
      isIon: false,
      charge: "0"
    },
    wrongConfig: "[Ar] 4s² 3d⁹",
    displayNotation: "صيغة غير مستقرة للنحاس",
    errorType: "full_filled_exception",
    errorTypeNameAr: "إغفال استقرار الامتلاء التام للمجال d (3d¹⁰)",
    errorLocation: "المجالين 4s² و 3d⁹",
    questionPrompt: "في ذرة النحاس Cu (Z=29)، كُتب التوزيع [Ar] 4s² 3d⁹. ما التصحيح العلمي الواجب تطبيقه؟",
    identifiedErrorText: "الامتلاء التام للمجال 3d بعشرة إلكترونات (3d¹⁰) أكثر ثباتاً من بقاء 4s² ممتلئاً و3d ناقصاً.",
    hint: "ينتقل إلكترون من 4s إلى 3d ليكتمل المجال d بـ 10 إلكترونات.",
    correctConfig: "[Ar] 4s¹ 3d¹⁰",
    options: [
      { text: "[Ar] 4s¹ 3d¹⁰", isCorrect: true },
      { text: "[Ar] 4s² 3d⁹", isCorrect: false },
      { text: "[Ar] 3d¹⁰ 4p¹", isCorrect: false },
      { text: "[Ar] 4s² 3d¹⁰", isCorrect: false }
    ],
    scientificExplanation: "ذرة النحاس تفضل الامتلاء التام للمجال 3d بـ 10 إلكترونات (3d¹⁰)، مما يعطي استقراراً هائلاً بسبب انخفاض طاقة التنافر والتماثل التام. لذلك ينتقل إلكترون من 4s ليصبح التوزيع الصحيح [Ar] 4s¹ 3d¹⁰.",
    ruleBreached: "استثناء استقرار الامتلاء التام في المستوى الفرعي d"
  }
];
