// Chemistry elements dataset (Z = 1 to 36) aligned with Saudi MoE Chemistry 1 (مسارات)
export const elementsData = [
  {
    z: 1,
    symbol: "H",
    nameAr: "الهيدروجين",
    nameEn: "Hydrogen",
    config: "1s¹",
    nobleConfig: "1s¹",
    valenceElectrons: 1,
    period: 1,
    group: 1,
    block: "s",
    orbitals: {
      "1s": [1, 0]
    },
    funFact: "أبسط ذرة في الكون، وتحتوي على إلكترون وحيد يدور حول بروتون واحد."
  },
  {
    z: 2,
    symbol: "He",
    nameAr: "الهيليوم",
    nameEn: "Helium",
    config: "1s²",
    nobleConfig: "[He]",
    valenceElectrons: 2,
    period: 1,
    group: 18,
    block: "s",
    orbitals: {
      "1s": [1, -1]
    },
    funFact: "غاز نبيل ذو مستوى طاقة أول مكتمل ومستقر جداً."
  },
  {
    z: 3,
    symbol: "Li",
    nameAr: "الليثيوم",
    nameEn: "Lithium",
    config: "1s² 2s¹",
    nobleConfig: "[He] 2s¹",
    valenceElectrons: 1,
    period: 2,
    group: 1,
    block: "s",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, 0]
    },
    funFact: "فلز قلوي خفيف، يبدأ بملء المستوى الرئيس الثاني n=2."
  },
  {
    z: 4,
    symbol: "Be",
    nameAr: "البريليوم",
    nameEn: "Beryllium",
    config: "1s² 2s²",
    nobleConfig: "[He] 2s²",
    valenceElectrons: 2,
    period: 2,
    group: 2,
    block: "s",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1]
    },
    funFact: "يمتلك مجال 2s ممتلئاً تماماً بإلكترونين متعاكسي الغزل وفق مبدأ باولي."
  },
  {
    z: 5,
    symbol: "B",
    nameAr: "البورون",
    nameEn: "Boron",
    config: "1s² 2s² 2p¹",
    nobleConfig: "[He] 2s² 2p¹",
    valenceElectrons: 3,
    period: 2,
    group: 13,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, 0],
      "2py": [0, 0],
      "2pz": [0, 0]
    },
    funFact: "أول عنصر يبدأ بشغل المجال الفرعي p ذي الشكل فصي (فصين متقابلين)."
  },
  {
    z: 6,
    symbol: "C",
    nameAr: "الكربون",
    nameEn: "Carbon",
    config: "1s² 2s² 2p²",
    nobleConfig: "[He] 2s² 2p²",
    valenceElectrons: 4,
    period: 2,
    group: 14,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, 0],
      "2py": [1, 0],
      "2pz": [0, 0]
    },
    funFact: "مثال كلاسيكي على قاعدة هوند: يدخل الإلكترونان مدارين منفصلين بنفس اتجاه الغزل."
  },
  {
    z: 7,
    symbol: "N",
    nameAr: "النيتروجين",
    nameEn: "Nitrogen",
    config: "1s² 2s² 2p³",
    nobleConfig: "[He] 2s² 2p³",
    valenceElectrons: 5,
    period: 2,
    group: 15,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, 0],
      "2py": [1, 0],
      "2pz": [1, 0]
    },
    funFact: "المجال 2p نصف ممتلئ (3 إلكترونات مفردة بنفس اتجاه الغزل ↑ ↑ ↑) مما يمنحه ثباتاً نسبياً."
  },
  {
    z: 8,
    symbol: "O",
    nameAr: "الأكسجين",
    nameEn: "Oxygen",
    config: "1s² 2s² 2p⁴",
    nobleConfig: "[He] 2s² 2p⁴",
    valenceElectrons: 6,
    period: 2,
    group: 16,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1],
      "2py": [1, 0],
      "2pz": [1, 0]
    },
    funFact: "يبدأ الازدواج في المجال الفرعي 2p باتجاه غزل معاكس في المدار الأول وفق هوند وباولي."
  },
  {
    z: 9,
    symbol: "F",
    nameAr: "الفلور",
    nameEn: "Fluorine",
    config: "1s² 2s² 2p⁵",
    nobleConfig: "[He] 2s² 2p⁵",
    valenceElectrons: 7,
    period: 2,
    group: 17,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1],
      "2py": [1, -1],
      "2pz": [1, 0]
    },
    funFact: "أعلى العناصر كهروسالبية، يحتاج إلكتروناً واحداً فقط للوصول لتوزيع الغاز النبيل."
  },
  {
    z: 10,
    symbol: "Ne",
    nameAr: "النيون",
    nameEn: "Neon",
    config: "1s² 2s² 2p⁶",
    nobleConfig: "[Ne]",
    valenceElectrons: 8,
    period: 2,
    group: 18,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1],
      "2py": [1, -1],
      "2pz": [1, -1]
    },
    funFact: "مستوى طاقة رئيس ثانٍ مكتمل بثمانية إلكترونات (قاعدة الثمانيات المستقرة)."
  },
  {
    z: 11,
    symbol: "Na",
    nameAr: "الصوديوم",
    nameEn: "Sodium",
    config: "1s² 2s² 2p⁶ 3s¹",
    nobleConfig: "[Ne] 3s¹",
    valenceElectrons: 1,
    period: 3,
    group: 1,
    block: "s",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, 0]
    },
    funFact: "فلز نشط، يعبر عنه بالاختصار النبيل [Ne] 3s¹ لتسهيل دراسة إلكترونات التكافؤ."
  },
  {
    z: 12,
    symbol: "Mg",
    nameAr: "المغنيسيوم",
    nameEn: "Magnesium",
    config: "1s² 2s² 2p⁶ 3s²",
    nobleConfig: "[Ne] 3s²",
    valenceElectrons: 2,
    period: 3,
    group: 2,
    block: "s",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1]
    },
    funFact: "فلز قلوي أرضي يحتوي على إلكتروني تكافؤ في المجال 3s."
  },
  {
    z: 13,
    symbol: "Al",
    nameAr: "الألمنيوم",
    nameEn: "Aluminium",
    config: "1s² 2s² 2p⁶ 3s² 3p¹",
    nobleConfig: "[Ne] 3s² 3p¹",
    valenceElectrons: 3,
    period: 3,
    group: 13,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, 0], "3py": [0, 0], "3pz": [0, 0]
    },
    funFact: "فلز خفيف يدخل أول إلكترون له في المجال 3p."
  },
  {
    z: 14,
    symbol: "Si",
    nameAr: "السيليكون",
    nameEn: "Silicon",
    config: "1s² 2s² 2p⁶ 3s² 3p²",
    nobleConfig: "[Ne] 3s² 3p²",
    valenceElectrons: 4,
    period: 3,
    group: 14,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, 0], "3py": [1, 0], "3pz": [0, 0]
    },
    funFact: "شبه فلز أساسي في صناعة الرقائق الإلكترونية، تنطبق عليه قاعدة هوند في 3p."
  },
  {
    z: 15,
    symbol: "P",
    nameAr: "الفوسفور",
    nameEn: "Phosphorus",
    config: "1s² 2s² 2p⁶ 3s² 3p³",
    nobleConfig: "[Ne] 3s² 3p³",
    valenceElectrons: 5,
    period: 3,
    group: 15,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, 0], "3py": [1, 0], "3pz": [1, 0]
    },
    funFact: "المجال الفرعي 3p نصف ممتلئ، مما يمنحه استقراراً إضافياً."
  },
  {
    z: 16,
    symbol: "S",
    nameAr: "الكبريت",
    nameEn: "Sulfur",
    config: "1s² 2s² 2p⁶ 3s² 3p⁴",
    nobleConfig: "[Ne] 3s² 3p⁴",
    valenceElectrons: 6,
    period: 3,
    group: 16,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, -1], "3py": [1, 0], "3pz": [1, 0]
    },
    funFact: "ازدواج إلكتروني في أول مدار من 3p مع بقاء مدارين بإلكترون مفرد."
  },
  {
    z: 17,
    symbol: "Cl",
    nameAr: "الكلور",
    nameEn: "Chlorine",
    config: "1s² 2s² 2p⁶ 3s² 3p⁵",
    nobleConfig: "[Ne] 3s² 3p⁵",
    valenceElectrons: 7,
    period: 3,
    group: 17,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, -1], "3py": [1, -1], "3pz": [1, 0]
    },
    funFact: "هالوجين نشط، تكافؤه 7 إلكترونات في المستوى الرئيس الثالث."
  },
  {
    z: 18,
    symbol: "Ar",
    nameAr: "الأرجون",
    nameEn: "Argon",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶",
    nobleConfig: "[Ar]",
    valenceElectrons: 8,
    period: 3,
    group: 18,
    block: "p",
    orbitals: {
      "1s": [1, -1],
      "2s": [1, -1],
      "2px": [1, -1], "2py": [1, -1], "2pz": [1, -1],
      "3s": [1, -1],
      "3px": [1, -1], "3py": [1, -1], "3pz": [1, -1]
    },
    funFact: "غاز خامل يمثل نقطة الأساس لتوزيع العناصر الانتقالية في الدورة الرابعة."
  },
  {
    z: 19,
    symbol: "K",
    nameAr: "البوتاسيوم",
    nameEn: "Potassium",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
    nobleConfig: "[Ar] 4s¹",
    valenceElectrons: 1,
    period: 4,
    group: 1,
    block: "s",
    orbitals: {
      "4s": [1, 0]
    },
    funFact: "وفق مبدأ أوفباو، طاقة 4s أقل من 3d لذلك يملأ 4s أولاً بالإلكترون التاسع عشر."
  },
  {
    z: 20,
    symbol: "Ca",
    nameAr: "الكالسيوم",
    nameEn: "Calcium",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    nobleConfig: "[Ar] 4s²",
    valenceElectrons: 2,
    period: 4,
    group: 2,
    block: "s",
    orbitals: {
      "4s": [1, -1]
    },
    funFact: "يكتمل المجال 4s بإلكترونين قبل البدء بملء مجالات 3d."
  },
  {
    z: 21,
    symbol: "Sc",
    nameAr: "السكانديوم",
    nameEn: "Scandium",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹",
    nobleConfig: "[Ar] 4s² 3d¹",
    valenceElectrons: 2,
    period: 4,
    group: 3,
    block: "d",
    orbitals: {
      "4s": [1, -1],
      "3d1": [1, 0], "3d2": [0, 0], "3d3": [0, 0], "3d4": [0, 0], "3d5": [0, 0]
    },
    funFact: "أول عنصر انتقالي رئيسي، يبدأ بإضافة الإلكترونات للمجال الفرعي 3d."
  },
  {
    z: 24,
    symbol: "Cr",
    nameAr: "الكروم",
    nameEn: "Chromium",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵",
    nobleConfig: "[Ar] 4s¹ 3d⁵",
    valenceElectrons: 1,
    period: 4,
    group: 6,
    block: "d",
    isException: true,
    exceptionReason: "استثناء كيميائي هام: ينتقل إلكترون من 4s إلى 3d ليصبح كلا المجالين نصف ممتلئين (4s¹ و 3d⁵)، مما يوفر حالة استقرار طاقي أعلى وذرة أقل طاقة.",
    orbitals: {
      "4s": [1, 0],
      "3d1": [1, 0], "3d2": [1, 0], "3d3": [1, 0], "3d4": [1, 0], "3d5": [1, 0]
    },
    funFact: "من أهم الأسئلة في اختبارات الكيمياء والتحصيلي بسبب استثناء الاستقرارية لنصف الامتلاء!"
  },
  {
    z: 26,
    symbol: "Fe",
    nameAr: "الحديد",
    nameEn: "Iron",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
    nobleConfig: "[Ar] 4s² 3d⁶",
    valenceElectrons: 2,
    period: 4,
    group: 8,
    block: "d",
    orbitals: {
      "4s": [1, -1],
      "3d1": [1, -1], "3d2": [1, 0], "3d3": [1, 0], "3d4": [1, 0], "3d5": [1, 0]
    },
    funFact: "عنصر مغناطيسي بارز، يمتلك 4 إلكترونات مفردة في المجال 3d تعلل خواصه البارامغناطيسية."
  },
  {
    z: 29,
    symbol: "Cu",
    nameAr: "النحاس",
    nameEn: "Copper",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰",
    nobleConfig: "[Ar] 4s¹ 3d¹⁰",
    valenceElectrons: 1,
    period: 4,
    group: 11,
    block: "d",
    isException: true,
    exceptionReason: "استثناء كيميائي هام: ينتقل إلكترون من 4s إلى 3d ليكتمل المجال الفرعي 3d تماماً بـ 10 إلكترونات (3d¹⁰) ويبقى 4s نصف ممتلئ (4s¹)، مما يحقق استقراراً فائقاً.",
    orbitals: {
      "4s": [1, 0],
      "3d1": [1, -1], "3d2": [1, -1], "3d3": [1, -1], "3d4": [1, -1], "3d5": [1, -1]
    },
    funFact: "استثناء ذهبي في الكيمياء: الامتلاء التام للمجال 3d¹⁰ يعطي استقراراً هائلاً!"
  },
  {
    z: 30,
    symbol: "Zn",
    nameAr: "الخارصين (الزنك)",
    nameEn: "Zinc",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰",
    nobleConfig: "[Ar] 4s² 3d¹⁰",
    valenceElectrons: 2,
    period: 4,
    group: 12,
    block: "d",
    orbitals: {
      "4s": [1, -1],
      "3d1": [1, -1], "3d2": [1, -1], "3d3": [1, -1], "3d4": [1, -1], "3d5": [1, -1]
    },
    funFact: "مجالات 4s و 3d ممتلئة تماماً بالإلكترونات."
  },
  {
    z: 35,
    symbol: "Br",
    nameAr: "البروم",
    nameEn: "Bromine",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵",
    nobleConfig: "[Ar] 4s² 3d¹⁰ 4p⁵",
    valenceElectrons: 7,
    period: 4,
    group: 17,
    block: "p",
    funFact: "هالوجين سائل، يملأ المجال 4p بعد اكتمال 3d."
  },
  {
    z: 36,
    symbol: "Kr",
    nameAr: "الكريبتون",
    nameEn: "Krypton",
    config: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶",
    nobleConfig: "[Kr]",
    valenceElectrons: 8,
    period: 4,
    group: 18,
    block: "p",
    funFact: "الغاز النبيل الذي تنتهي به الدورة الرابعة باكتمال المجال 4p بـ 6 إلكترونات."
  }
];

// Sublevels capacity reference
export const sublevelsInfo = {
  s: { orbitals: 1, maxElectrons: 2, shape: "كروي متماثل حول النواة" },
  p: { orbitals: 3, maxElectrons: 6, shape: "فصي (يتكون كل مدار من فصين متقابلين px, py, pz)" },
  d: { orbitals: 5, maxElectrons: 10, shape: "معقد ومزدوج الفصوص (5 أشكال فراغية)" },
  f: { orbitals: 7, maxElectrons: 14, shape: "شديد التعقيد وفائق الفصوص (7 أشكال فراغية)" }
};

// Aufbau energy order
export const aufbauOrder = [
  "1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"
];
