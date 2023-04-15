import pin from "../assets/pin.png";
import { PlantPlacemark } from "../types";

export const BetonPriceList: { [key: string]: number } = {
  B15P3W2F50: 4250,
  B15P3W2F75: 4250,
  B15P3W4F50: 4250,
  B15P3W4F75: 4250,
  B15P4W2F50: 4305,
  B15P4W2F75: 4305,
  B15P4W4F50: 4305,
  B15P4W4F75: 4305,
  B15P5W2F50: 4305,
  B15P5W2F75: 4305,
  B15P5W4F50: 4305,
  B15P5W4F75: 4305,
  B20P3W2F100: 4480,
  B20P3W2F50: 4480,
  B20P3W2F75: 4480,
  B20P3W4F100: 4480,
  B20P3W4F50: 4480,
  B20P3W4F75: 4480,
  B20P4W2F100: 4545,
  B20P4W2F50: 4545,
  B20P4W2F75: 4545,
  B20P4W4F100: 4545,
  B20P4W4F50: 4545,
  B20P4W4F75: 4545,
  B20P5W2F100: 4545,
  B20P5W2F50: 4545,
  B20P5W2F75: 4545,
  B20P5W4F100: 4545,
  B20P5W4F50: 4545,
  B20P5W4F75: 4545,
  B225P3W2F10: 4605,
  B225P3W2F150: 4605,
  B225P3W2F75: 4605,
  B225P3W4F100: 4605,
  B225P3W4F150: 4605,
  B225P3W4F75: 4605,
  B225P3W6F100: 4605,
  B225P3W6F150: 4605,
  B225P3W6F75: 4605,
  B225P4W2F100: 4670,
  B225P4W2F150: 4670,
  B225P4W2F75: 4670,
  B225P4W4F100: 4670,
  B225P4W4F150: 4670,
  B225P4W4F75: 4670,
  B225P4W6F100: 4670,
  B225P4W6F150: 4670,
  B225P4W6F75: 4670,
  B225P5W2F100: 4670,
  B225P5W2F150: 4670,
  B225P5W2F75: 4670,
  B225P5W4F100: 4670,
  B225P5W4F150: 4670,
  B225P5W4F75: 4670,
  B225P5W6F100: 4670,
  B225P5W6F150: 4670,
  B225P5W6F75: 4670,
  B25P3W2F100: 4790,
  B25P3W2F150: 4790,
  B25P3W2F75: 4790,
  B25P3W4F100: 4790,
  B25P3W4F150: 4790,
  B25P3W4F75: 4790,
  B25P3W6F100: 4790,
  B25P3W6F150: 4790,
  B25P3W6F75: 4790,
  B25P4W2F100: 4850,
  B25P4W2F150: 4850,
  B25P4W2F75: 4850,
  B25P4W4F100: 4850,
  B25P4W4F150: 4850,
  B25P4W4F75: 4850,
  B25P4W6F100: 4850,
  B25P4W6F150: 4850,
  B25P4W6F75: 4850,
  B25P5W2F100: 4850,
  B25P5W2F150: 4850,
  B25P5W2F75: 4850,
  B25P5W4F100: 4850,
  B25P5W4F150: 4850,
  B25P5W4F75: 4850,
  B25P5W6F100: 4850,
  B25P5W6F150: 4850,
  B25P5W6F75: 4850,
  B30P3W2F100: 4925,
  B30P3W2F150: 4925,
  B30P3W2F75: 4925,
  B30P3W4F100: 4925,
  B30P3W4F150: 4925,
  B30P3W4F75: 4925,
  B30P3W6F100: 4925,
  B30P3W6F150: 4925,
  B30P3W6F75: 4925,
  B30P4W2F100: 4995,
  B30P4W2F150: 4995,
  B30P4W2F75: 4995,
  B30P4W4F100: 4995,
  B30P4W4F150: 4995,
  B30P4W4F75: 4995,
  B30P4W6F100: 4995,
  B30P4W6F150: 4995,
  B30P4W6F75: 4995,
  B30P5W2F100: 4995,
  B30P5W2F150: 4995,
  B30P5W2F75: 4995,
  B30P5W4F100: 4995,
  B30P5W4F150: 4995,
  B30P5W4F75: 4995,
  B30P5W6F100: 4995,
  B30P5W6F150: 4995,
  B30P5W6F75: 4995,
  B30P3W8F150: 5068,
  B30P3W10F200: 5171,
  B30P3W12F200: 5325,
  B35P3W8F200: 5433,
  B35P4W8F200: 5433,
  B35P5W8F200: 5433,
  B35P3W10F200: 5433,
  B35P4W10F200: 5485,
  B35P5W10F200: 5485,
  B35P3W12F200: 5485,
};

export enum BetonTypes {
  B15 = "B15 M(200)",
  B20 = "B20 M(250)",
  B22 = "B22.5 M(300)",
  B25 = "B25 M(350)",
  B30 = "B30 M(400)",
  B35 = "B35 M(450)",
  P3 = "P3",
  P4 = "P4",
  P5 = "P5",
  W2 = "W2",
  W4 = "W4",
  W6 = "W6",
  F50 = "F50",
  F75 = "F75",
  F100 = "F100",
  F150 = "F150",
}

export type BetonItemType = {
  id: number;
  value: BetonTypes;
}

export const strehgthList = [
  {
    id: 1,
    value: BetonTypes.B15
  },
  {
    id: 2,
    value: BetonTypes.B20
  },
  {
    id: 3,
    value: BetonTypes.B22
  },
  {
    id: 4,
    value: BetonTypes.B25
  },
  {
    id: 5,
    value: BetonTypes.B30
  },
];

export const plasticList = [
  {
    id: 1,
    value: BetonTypes.P3
  },
  {
    id: 2,
    value: BetonTypes.P4
  },
  {
    id: 3,
    value: BetonTypes.P5
  },
];

export const waterResistList = [
  {
    id: 1,
    value: BetonTypes.W2
  },
  {
    id: 2,
    value: BetonTypes.W4
  },
  {
    id: 3,
    value: BetonTypes.W6
  },
];

export const FrostResistList = [
  {
    id: 1,
    value: BetonTypes.F50
  },
  {
    id: 2,
    value: BetonTypes.F75
  },
  {
    id: 3,
    value: BetonTypes.F100
  },
  {
    id: 4,
    value: BetonTypes.F150
  },
];

export const antiFreeze = [
  {
    id: 0,
    label: 0,
    price: 0
  },
  {
    id: 1,
    label: -5,
    price: 154
  },
  {
    id: 2,
    label: -10,
    price: 230
  },
  {
    id: 3,
    label: -15,
    price: 345
  },
  {
    id: 4,
    label: -20,
    price: 460
  }
];

export const BetonList = [
  {
    name: "B15 M(200)",
    description: `Благоустройство участка, заливка площадок.
    Устройство "подбетонки" для фундаментной плиты.
    `,
    waterResist: ["W2", "W4"],
    frostResist: ["F50", "F75"],
    plastocity: ["П3", "П4", "П5"],
    antifreeze: antiFreeze
  },
  {
    name: "B20 M(250)",
    description: `Ленточный фундамент для каркасного дома.
    Хозяйственные постройки.
    Заборы, отмостка.
    `,
    waterResist: ["W2", "W4"],
    frostResist: ["F50", "F75"],
    plastocity: ["П3", "П4", "П5"],
    antifreeze: antiFreeze
  },
  {
    name: "B22.5 M(300)",
    description: `Ленточный фундамент дома из дерева или газобетона. 
    Плитный фундамент одноэтажного дома.
    `,
    waterResist: ["W2", "W4", "W6"],
    frostResist: ["F75", "F100", "F150"],
    plastocity: ["П3", "П4", "П5"],
    antifreeze: antiFreeze
  },
  {
    name: "B25 M(350)",
    description: `Плитный фундамент двухэтажного дома из дерева, газобетона или кирпича.
    Плиты перекрытий, колонны.
    `,
    waterResist: ["W2", "W4", "W6"],
    frostResist: ["F75", "F100", "F150"],
    plastocity: ["П3", "П4", "П5"],
    antifreeze: antiFreeze
  },
  {
    name: "B30 M(400)",
    description: `Плитный фундамент двухэтажного монолитного дома.
    Плиты перекрытий, колонны, несущие стены.
    `,
    waterResist: ["W8", "W10", "W12"],
    frostResist: ["F150", "F200", "F300"],
    plastocity: ["П3", "П4", "П5"],
    antifreeze: antiFreeze
  },
  {
    name: "B35 M(450)",
    description: `Ленточный фундамент для каркасного дома.
    Хозяйственные постройки.
    Заборы, отмостка.
    `,
    waterResist: ["W8", "W10", "W12"],
    frostResist: ["F200", "F300"],
    plastocity: ["П3", "П4", "П5"],
    antifreeze: antiFreeze
  }
];

export const distancePrice: { [key: number]: number } = {
  1: 494,
  2: 515,
  3: 536,
  4: 557,
  5: 578,
  6: 599,
  7: 620,
  8: 641,
  9: 662,
  10: 683,
  11: 704,
  12: 725,
  13: 746,
  14: 767,
  15: 788,
  16: 803,
  17: 819,
  18: 835,
  19: 851,
  20: 866,
  21: 882,
  22: 898,
  23: 914,
  24: 929,
  25: 945,
  26: 961,
  27: 977,
  28: 992,
  29: 1008,
  30: 1024,
  31: 1040,
  32: 1055,
  33: 1071,
  34: 1087,
  35: 1103,
  36: 1118,
  37: 1134,
  38: 1150,
  39: 1166,
  40: 1181,
  41: 1197,
  42: 1213,
  43: 1229,
  44: 1244,
  45: 1260,
  46: 1276,
  47: 1292,
  48: 1307,
  49: 1323,
  50: 1339,
  51: 1355,
  52: 1370,
  53: 1386,
  54: 1402,
  55: 1418,
  56: 1433,
  57: 1449,
  58: 1465,
  59: 1481,
  60: 1496,
  61: 1512,
  62: 1528,
  63: 1544,
  64: 1559,
  65: 1575,
  66: 1591,
  67: 1607,
  68: 1622,
  69: 1638,
  70: 1654,
  71: 1670,
  72: 1685,
  73: 1701,
  74: 1717,
  75: 1733,
  76: 1748,
  77: 1764,
  78: 1780,
  79: 1796,
  80: 1811,
  81: 1827,
  82: 1843,
  83: 1859,
  84: 1874,
  85: 1890,
  86: 1906,
  87: 1922,
  88: 1937,
  89: 1953,
  90: 1969,
  91: 1985,
  92: 2000,
  93: 2016,
  94: 2032,
  95: 2048,
  96: 2063,
  97: 2079,
  98: 2095,
  99: 2111,
  100: 2126,
  101: 2142,
  102: 2158,
  103: 2174,
  104: 2189,
  105: 2205,
  106: 2221,
  107: 2237,
  108: 2252,
  109: 2268,
  110: 2284,
  111: 2300,
  112: 2315,
  113: 2331,
  114: 2347,
  115: 2363,
  116: 2378,
  117: 2394,
  118: 2410,
  119: 2426,
  120: 2441,
  121: 2457,
  122: 2473,
  123: 2489,
  124: 2504,
  125: 2520,
  126: 2536,
  127: 2552,
  128: 2567,
  129: 2583,
  130: 2599,
  131: 2615,
  132: 2630,
  133: 2646,
  134: 2662,
  135: 2678,
  136: 2693,
  137: 2709,
  138: 2725,
  139: 2741,
  140: 2756,
  141: 2772,
  142: 2788,
  143: 2804,
  144: 2819,
  145: 2835,
  146: 2851,
  147: 2867,
  148: 2882,
  149: 2898,
  150: 2914,
  151: 2930,
  152: 2945,
  153: 2961,
  154: 2977,
  155: 2993,
  156: 3008,
  157: 3024,
  158: 3040,
  159: 3056,
  160: 3071,
  161: 3087,
  162: 3103,
  163: 3119,
  164: 3134,
  165: 3150,
  166: 3166,
  167: 3182,
  168: 3197,
  169: 3213,
  170: 3229,
  171: 3245,
  172: 3260,
  173: 3276,
  174: 3292,
  175: 3308,
  176: 3323,
  177: 3339,
  178: 3355,
  179: 3371,
  180: 3386,
  181: 3402,
  182: 3418,
  183: 3434,
  184: 3449,
  185: 3465,
  186: 3481,
  187: 3497,
  188: 3512,
  189: 3528,
  190: 3544,
  191: 3560,
  192: 3575,
  193: 3591,
  194: 3607,
  195: 3623,
  196: 3638,
  197: 3654,
  198: 3670,
  199: 3686,
  200: 3701,
};

export const defaultPlacemarkOptions = {
  iconLayout: "default#image",
  iconImageHref: pin,
  iconImageSize: [36, 36],
  iconImageOffset: [-18, -18],
  openHintOnHover: true,
  openEmptyBalloon: true,
  openEmptyHint: true,
  hasHint: true,
  zIndexHover: 10000,
  hideIconOnBalloonOpen: false
};

export const plants: PlantPlacemark[] = [
  {
    id: 1,
    title: "Volkhonskoye",
    description: "СПб, Волхонское шоссе, д.2",
    location: [59.762650, 30.266057],
    properties: {
      hintContent: "СПб, Волхонское шоссе, д.2",
      balloonContent: "СПб, Волхонское шоссе, д.2"
    },
  },
  {
    id: 2,
    title: "Sofia",
    description: "СПб, ул. Софийская, дом 96",
    location: [59.826691, 30.447777],
    properties: {
      hintContent: "СПб, ул. Софийская, дом 96",
      balloonContent: "СПб, ул. Софийская, дом 96"
    },
  },
  {
    id: 3,
    title: "Parnas",
    description: "СПб, Промзона «Парнас», 2-ой Верхний пер., дом 8",
    location: [60.063738, 30.375732],
    properties: {
      hintContent: "СПб, Промзона «Парнас», 2-ой Верхний пер., дом 8",
      balloonContent: "СПб, Промзона «Парнас», 2-ой Верхний пер., дом 8"
    },
  },
  {
    id: 4,
    title: "Lahta",
    description: "СПб, 3-я Конная Лахта, дом 48",
    location: [60.019464, 30.090472],
    properties: {
      hintContent: "СПб, 3-я Конная Лахта, дом 48",
      balloonContent: "СПб, 3-я Конная Лахта, дом 48"
    },
  },
  {
    id: 5,
    title: "Beloostrov",
    description: "СПб, п. Белоостров, Новое шоссе, д. 47",
    location: [60.139992, 30.019101],
    properties: {
      hintContent: "СПб, п. Белоостров, Новое шоссе, д. 47",
      balloonContent: "СПб, п. Белоостров, Новое шоссе, д. 47"
    },
  },
  {
    id: 6,
    title: "Sertolovo",
    description: "ЛО, Сертолово, ул. Песочная, д. 22",
    location: [60.134373, 30.183870],
    properties: {
      hintContent: "ЛО, Сертолово, ул. Песочная, д. 22",
      balloonContent: "ЛО, Сертолово, ул. Песочная, д. 22"
    },
  },
  {
    id: 7,
    title: "Voyskovicy",
    description: "ЛО, п. Войсковицы, ул. Манина, д. 2",
    location: [59.529285, 29.969415],
    properties: {
      hintContent: "ЛО, п. Войсковицы, ул. Манина, д. 2",
      balloonContent: "ЛО, п. Войсковицы, ул. Манина, д. 2"
    },
  },
  {
    id: 8,
    title: "Scotnoe",
    description: "ЛО, Всеволожский р-н, Скотное, Вартемяги.",
    location: [60.179712, 30.368440],
    properties: {
      hintContent: "ЛО, Всеволожский р-н, Скотное, Вартемяги.",
      balloonContent: "ЛО, Всеволожский р-н, Скотное, Вартемяги."
    },
  }
];

export const defaultMapCoords = {
  center: [59.938955, 30.315644],
  zoom: 10,
};

export const defaultRoutePanel = {
  autofocus: false,
  showHeader: true,
  title: 'Расчет доставки',
  maxWidth: "300",
  position: {
    right: 1
  }
};