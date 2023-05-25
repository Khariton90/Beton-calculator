import { BetonSelect, PlantPlacemark, PumpArrow } from './../types/types';
import pin from '../assets/pin.png';

export const BetonPriceList: { [key: string]: number } = {
  B15P3W2F50: 4244,
  B15P3W2F75: 4244,
  B15P3W4F50: 4244,
  B15P3W4F75: 4244,
  B15P4W2F50: 4305,
  B15P4W2F75: 4305,
  B15P4W4F50: 4305,
  B15P4W4F75: 4305,
  B15P5W2F50: 4305,
  B15P5W2F75: 4305,
  B15P5W4F50: 4305,
  B15P5W4F75: 4305,
  B20P3W2F100: 4481,
  B20P3W2F50: 4481,
  B20P3W2F75: 4481,
  B20P3W4F100: 4481,
  B20P3W4F50: 4481,
  B20P3W4F75: 4481,
  B20P4W2F100: 4542,
  B20P4W2F50: 4542,
  B20P4W2F75: 4542,
  B20P4W4F100: 4542,
  B20P4W4F50: 4542,
  B20P4W4F75: 4542,
  B20P5W2F100: 4542,
  B20P5W2F50: 4542,
  B20P5W2F75: 4542,
  B20P5W4F100: 4542,
  B20P5W4F50: 4542,
  B20P5W4F75: 4542,
  B225P3W2F100: 4604,
  B225P3W2F150: 4604,
  B225P3W2F75: 4604,
  B225P3W4F100: 4604,
  B225P3W4F150: 4604,
  B225P3W4F75: 4604,
  B225P3W6F100: 4604,
  B225P3W6F150: 4604,
  B225P3W6F75: 4604,
  B225P4W2F100: 4666,
  B225P4W2F150: 4666,
  B225P4W2F75: 4666,
  B225P4W4F100: 4666,
  B225P4W4F150: 4666,
  B225P4W4F75: 4666,
  B225P4W6F100: 4666,
  B225P4W6F150: 4666,
  B225P4W6F75: 4666,
  B225P5W2F100: 4666,
  B225P5W2F150: 4666,
  B225P5W2F75: 4666,
  B225P5W4F100: 4666,
  B225P5W4F150: 4666,
  B225P5W4F75: 4666,
  B225P5W6F100: 4666,
  B225P5W6F150: 4666,
  B225P5W6F75: 4666,
  B25P3W2F100: 4790,
  B25P3W2F150: 4790,
  B25P3W2F75: 4790,
  B25P3W4F100: 4790,
  B25P3W4F150: 4790,
  B25P3W4F75: 4790,
  B25P3W6F100: 4790,
  B25P3W6F150: 4790,
  B25P3W6F75: 4790,
  B25P4W2F100: 4851,
  B25P4W2F150: 4851,
  B25P4W2F75: 4851,
  B25P4W4F100: 4851,
  B25P4W4F150: 4851,
  B25P4W4F75: 4851,
  B25P4W6F100: 4851,
  B25P4W6F150: 4851,
  B25P4W6F75: 4851,
  B25P5W2F100: 4851,
  B25P5W2F150: 4851,
  B25P5W2F75: 4851,
  B25P5W4F100: 4851,
  B25P5W4F150: 4851,
  B25P5W4F75: 4851,
  B25P5W6F100: 4851,
  B25P5W6F150: 4851,
  B25P5W6F75: 4851,
  B30P3W10F200: 5171,
  B30P3W10F300: 5171,
  B30P3W12F200: 5325,
  B30P3W12F300: 5325,
  B30P3W2F100: 4923,
  B30P3W2F150: 4923,
  B30P3W2F75: 4923,
  B30P3W4F100: 4923,
  B30P3W4F150: 4923,
  B30P3W4F75: 4923,
  B30P3W6F100: 4923,
  B30P3W6F150: 4923,
  B30P3W6F75: 4923,
  B30P3W8F150: 5068,
  B30P3W8F200: 5068,
  B30P4W10F200: 5274,
  B30P4W10F300: 5274,
  B30P4W12F200: 5408,
  B30P4W12F300: 5408,
  B30P4W2F100: 5016,
  B30P4W2F150: 5016,
  B30P4W2F75: 5016,
  B30P4W4F100: 5016,
  B30P4W4F150: 5016,
  B30P4W4F75: 5016,
  B30P4W6F100: 5016,
  B30P4W6F150: 5016,
  B30P4W6F75: 5016,
  B30P4W8F150: 5119,
  B30P4W8F200: 5119,
  B30P5W10F200: 5274,
  B30P5W10F300: 5274,
  B30P5W12F200: 5408,
  B30P5W12F300: 5408,
  B30P5W2F100: 5016,
  B30P5W2F150: 5016,
  B30P5W2F75: 5016,
  B30P5W4F100: 5016,
  B30P5W4F150: 5016,
  B30P5W4F75: 5016,
  B30P5W6F100: 5016,
  B30P5W6F150: 5016,
  B30P5W6F75: 5016,
  B30P5W8F150: 5119,
  B30P5W8F200: 5119,
  B35P3W10F200: 5433,
  B35P3W10F300: 5433,
  B35P3W12F200: 5485,
  B35P3W12F300: 5485,
  B35P3W8F200: 5433,
  B35P4W10F200: 5485,
  B35P4W10F300: 5485,
  B35P4W12F200: 5588,
  B35P4W12F300: 5588,
  B35P4W8F200: 5433,
  B35P5W10F200: 5485,
  B35P5W10F300: 5485,
  B35P5W12F200: 5588,
  B35P5W12F300: 5588,
  B35P5W8F200: 5433,
}

export const betonIdList: { [key: string]: number } = {
  B15P3W2F50: 812334,
  B15P3W2F75: 812337,
  B15P3W4F50: 812340,
  B15P3W4F75: 812343,
  B15P4W2F50: 812335,
  B15P4W2F75: 812338,
  B15P4W4F50: 812341,
  B15P4W4F75: 812344,
  B15P5W2F50: 812336,
  B15P5W2F75: 812339,
  B15P5W4F50: 812342,
  B15P5W4F75: 812345,
  B20P3W2F100: 812352,
  B20P3W2F50: 812346,
  B20P3W2F75: 812349,
  B20P3W4F100: 812361,
  B20P3W4F50: 812355,
  B20P3W4F75: 812358,
  B20P4W2F100: 812353,
  B20P4W2F50: 812347,
  B20P4W2F75: 812350,
  B20P4W4F100: 812362,
  B20P4W4F50: 812356,
  B20P4W4F75: 812359,
  B20P5W2F100: 812354,
  B20P5W2F50: 812348,
  B20P5W2F75: 812351,
  B20P5W4F100: 812363,
  B20P5W4F50: 812357,
  B20P5W4F75: 812360,
  B225P3W2F100: 812367,
  B225P3W2F150: 812370,
  B225P3W2F75: 812364,
  B225P3W4F100: 812376,
  B225P3W4F150: 812379,
  B225P3W4F75: 812373,
  B225P3W6F100: 812385,
  B225P3W6F150: 812388,
  B225P3W6F75: 812382,
  B225P4W2F100: 812368,
  B225P4W2F150: 812371,
  B225P4W2F75: 812365,
  B225P4W4F100: 812377,
  B225P4W4F150: 812380,
  B225P4W4F75: 812374,
  B225P4W6F100: 812386,
  B225P4W6F150: 812389,
  B225P4W6F75: 812383,
  B225P5W2F100: 812369,
  B225P5W2F150: 812372,
  B225P5W2F75: 812366,
  B225P5W4F100: 812378,
  B225P5W4F150: 812381,
  B225P5W4F75: 812375,
  B225P5W6F100: 812387,
  B225P5W6F150: 812390,
  B225P5W6F75: 812384,
  B25P3W2F100: 812394,
  B25P3W2F150: 812397,
  B25P3W2F75: 812391,
  B25P3W4F100: 812403,
  B25P3W4F150: 812406,
  B25P3W4F75: 812400,
  B25P3W6F100: 812412,
  B25P3W6F150: 812415,
  B25P3W6F75: 812409,
  B25P4W2F100: 812395,
  B25P4W2F150: 812398,
  B25P4W2F75: 812392,
  B25P4W4F100: 812404,
  B25P4W4F150: 812407,
  B25P4W4F75: 812401,
  B25P4W6F100: 812413,
  B25P4W6F150: 812416,
  B25P4W6F75: 812410,
  B25P5W2F100: 812396,
  B25P5W2F150: 812399,
  B25P5W2F75: 812393,
  B25P5W4F100: 812405,
  B25P5W4F150: 812408,
  B25P5W4F75: 812402,
  B25P5W6F100: 812414,
  B25P5W6F150: 812417,
  B25P5W6F75: 812411,
  B30P3W10F200: 960972,
  B30P3W10F300: 960977,
  B30P3W12F200: 960978,
  B30P3W12F300: 960979,
  B30P3W2F100: 866392,
  B30P3W2F150: 866395,
  B30P3W2F75: 866389,
  B30P3W4F100: 866401,
  B30P3W4F150: 866404,
  B30P3W4F75: 866398,
  B30P3W6F100: 866410,
  B30P3W6F150: 866413,
  B30P3W6F75: 866407,
  B30P3W8F150: 960966,
  B30P3W8F200: 960969,
  B30P4W10F200: 960973,
  B30P4W10F300: 960975,
  B30P4W12F200: 960980,
  B30P4W12F300: 960982,
  B30P4W2F100: 866393,
  B30P4W2F150: 866396,
  B30P4W2F75: 866390,
  B30P4W4F100: 866402,
  B30P4W4F150: 866405,
  B30P4W4F75: 866399,
  B30P4W6F100: 866411,
  B30P4W6F150: 866414,
  B30P4W6F75: 866408,
  B30P4W8F150: 960967,
  B30P4W8F200: 960970,
  B30P5W10F200: 960974,
  B30P5W10F300: 960976,
  B30P5W12F200: 960981,
  B30P5W12F300: 960983,
  B30P5W2F100: 866394,
  B30P5W2F150: 866397,
  B30P5W2F75: 866391,
  B30P5W4F100: 866403,
  B30P5W4F150: 866406,
  B30P5W4F75: 866400,
  B30P5W6F100: 866412,
  B30P5W6F150: 866415,
  B30P5W6F75: 866409,
  B30P5W8F150: 960968,
  B30P5W8F200: 960971,
  B35P3W10F200: 960987,
  B35P3W10F300: 960992,
  B35P3W12F200: 960993,
  B35P3W12F300: 960994,
  B35P3W8F200: 960984,
  B35P4W10F200: 960988,
  B35P4W10F300: 960990,
  B35P4W12F200: 960995,
  B35P4W12F300: 960997,
  B35P4W8F200: 960985,
  B35P5W10F200: 960989,
  B35P5W10F300: 960991,
  B35P5W12F200: 960996,
  B35P5W12F300: 960998,
  B35P5W8F200: 960986
};

export enum BetonTypes {
  B15 = "B15",
  B20 = "B20",
  B22 = "B22.5",
  B25 = "B25",
  B30 = "B30",
  B35 = "B35",
  P3 = "P3",
  P4 = "P4",
  P5 = "P5",
  W2 = "W2",
  W4 = "W4",
  W6 = "W6",
  W8 = "W8",
  W10 = "W10",
  W12 = "W12",
  F50 = "F50",
  F75 = "F75",
  F100 = "F100",
  F150 = "F150",
  F200 = "F200",
  F250 = "F250",
  F300 = "F300",
  Pump = "1",
  WithoutPump = "0",
  UnknownPump = "-1"
}

export enum MixerTypes {
  Nine = '9',
  Ten = '10',
}

export type MixerItemType = {
  id: number,
  value: MixerTypes,
};

export type BetonItemType = {
  id: number;
  value: BetonTypes | MixerTypes | PumpArrow;
}

export const mixerTypes: MixerItemType[] = [
  {
    id: 1,
    value: MixerTypes.Nine
  },
  {
    id: 1,
    value: MixerTypes.Ten
  },
]

export const typeConcrete: BetonItemType[] = [
  {
    id: 1,
    value: BetonTypes.Pump,
  },
  {
    id: 2,
    value: BetonTypes.WithoutPump,
  },
]

export const strehgthList: BetonItemType[] = [
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
  {
    id: 6,
    value: BetonTypes.B35
  },
];

export const strehgthPumpList: BetonItemType[] = [
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
  {
    id: 6,
    value: BetonTypes.B35
  },
];

export const plasticList: BetonItemType[] = [
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

export const pumpPlasticList: BetonItemType[] = [
  {
    id: 1,
    value: BetonTypes.P4
  },
  {
    id: 2,
    value: BetonTypes.P5
  },
];

export const waterResistList: BetonItemType[] = [
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
  {
    id: 4,
    value: BetonTypes.W8
  },
  {
    id: 5,
    value: BetonTypes.W10
  },
  {
    id: 6,
    value: BetonTypes.W12
  },
];

export const FrostResistList: BetonItemType[] = [
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
  {
    id: 5,
    value: BetonTypes.F200
  },
  {
    id: 6,
    value: BetonTypes.F250
  },
  {
    id: 7,
    value: BetonTypes.F300
  },
];

export const frostPumpResistList: BetonItemType[] = [
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
  {
    id: 5,
    value: BetonTypes.F200
  },
  {
    id: 6,
    value: BetonTypes.F250
  },
  {
    id: 7,
    value: BetonTypes.F300
  },
];

export const antiFreeze = [
  {
    id: 961000,
    label: -5,
    price: 154
  },
  {
    id: 961001,
    label: -10,
    price: 227
  },
  {
    id: 961002,
    label: -15,
    price: 340
  },
  {
    id: 961003,
    label: -20,
    price: 453
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
    title: "Volhonskoe",
    description: "«Беатон» Горелово, Волхонское шоссе, 4 (БСУ-2)",
    location: [59.781437, 30.191829],
    properties: {
      hintContent: "«Беатон» Горелово, Волхонское шоссе, 4 (БСУ-2)",
      balloonContent: "«Беатон» Горелово, Волхонское шоссе, 4 (БСУ-2)"
    },
  },
  {
    id: 2,
    title: "Parnas",
    description: "«Беатон» Парнас, 2-й Верхний переулок, 8 (БСУ-7)",
    location: [60.063738, 30.375732],
    properties: {
      hintContent: "«Беатон» Парнас, 2-й Верхний переулок, 8 (БСУ-7)",
      balloonContent: "«Беатон» Парнас, 2-й Верхний переулок, 8 (БСУ-7)"
    },
  },
  {
    id: 3,
    title: "Sofiyskaya",
    description: "«Беатон» Санкт-Петербург, Софийская улица, 96 (БСУ-4)",
    location: [59.826691, 30.447777],
    properties: {
      hintContent: "«Беатон» Санкт-Петербург, Софийская улица, 96 (БСУ-4)",
      balloonContent: "«Беатон» Санкт-Петербург, Софийская улица, 96 (БСУ-4)"
    },
  },
  {
    id: 4,
    title: "Lahta",
    description: "«Беатон» Санкт-Петербург, 3-я Конная Лахта, 48 (БСУ-5)",
    location: [60.019464, 30.090472],
    properties: {
      hintContent: "«Беатон» Санкт-Петербург, 3-я Конная Лахта, 48 (БСУ-5)",
      balloonContent: "«Беатон» Санкт-Петербург, 3-я Конная Лахта, 48 (БСУ-5)"
    },
  },
  {
    id: 5,
    title: "Kirovsk",
    description: "«АльфаЦем» Ленинградская область, г.Кировск, ул. Песочная, д.15",
    location: [59.858616, 30.984538],
    properties: {
      hintContent: "«АльфаЦем» Ленинградская область, г.Кировск, ул. Песочная, д.15",
      balloonContent: "«АльфаЦем» Ленинградская область, г.Кировск, ул. Песочная, д.15"
    },
  },
  {
    id: 6,
    title: "Lesnoe",
    description: "посёлок Лесное, Куйвозовское сельское поселение, Всеволожский район ",
    location: [60.391236, 30.193299],
    properties: {
      hintContent: "«АльфаЦем»  посёлок Лесное, Куйвозовское сельское поселение, Всеволожский район",
      balloonContent: "«АльфаЦем» посёлок Лесное, Куйвозовское сельское поселение, Всеволожский район"
    },
  },
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

export type FillingHours = { [key: number]: number };

export const filingHours: FillingHours = {
  10: 2,
  20: 3,
  30: 3,
  40: 3,
  50: 3,
  60: 4,
  70: 4,
  80: 5,
  90: 5,
  100: 5,
  110: 6,
  120: 6,
  130: 7,
  140: 7,
  150: 8,
  160: 8,
  170: 9,
  180: 9,
  190: 9,
  200: 10
};


export const lengthPumpArrow: BetonSelect = {
  id: 1,
  title: "Выберите длину стрелы",
  options: [
    {
      id: 1,
      value: PumpArrow.TwentyFour
    },
    {
      id: 2,
      value: PumpArrow.ThirtyTwo
    },
    {
      id: 3,
      value: PumpArrow.Fourty
    },
    {
      id: 4,
      value: PumpArrow.FortyFour
    },
    {
      id: 5,
      value: PumpArrow.FortyEight
    },
    {
      id: 6,
      value: PumpArrow.FiftyTwo
    },
    {
      id: 7,
      value: PumpArrow.FiftyFive
    },
    {
      id: 8,
      value: PumpArrow.FiftyEight
    },
  ],
};

export const arrowPrice = {
  [PumpArrow.TwentyFour]: 3100,
  [PumpArrow.ThirtyTwo]: 3330,
  [PumpArrow.Fourty]: 3600,
  [PumpArrow.FortyFour]: 3650,
  [PumpArrow.FortyEight]: 4200,
  [PumpArrow.FiftyTwo]: 4850,
  [PumpArrow.FiftyFive]: 5000,
  [PumpArrow.FiftyEight]: 5600,
};

export const arrowNewPrice: {[key: number]: number} = {
  992271: 3100,
  992272: 3330,
  992273: 3600,
  992274: 3650,
  992275: 4200,
  992276: 4850,
  992277: 5000,
  992278: 5600,
};

export const arrowPriceMoreThanLimit: {[key: number]: number} = {
  992271: 310,
  992272: 333,
  992273: 360,
  992274: 365,
  992275: 420,
  992276: 485,
  992277: 500,
  992278: 560,
};

export const DEFAULT_FILING_HOURS = 6;

export const typesBetonSelect: BetonSelect[] = [
  {
    id: 1,
    title: "Класс",
    options: strehgthList,
  },
  {
    id: 3,
    title: "Водонепронецаемость",
    options: waterResistList,
  },
  {
    id: 4,
    title: "Морозостойкость",
    options: FrostResistList,
  },
  {
    id: 2,
    title: "Пластичность",
    options: plasticList,
  },
];

export const typesPumpBetonSelect: BetonSelect[] = [
  {
    id: 1,
    title: "Класс",
    options: strehgthPumpList,
  },
  {
    id: 3,
    title: "Водонепронецаемость",
    options: waterResistList,
  },
  {
    id: 4,
    title: "Морозостойкость",
    options: frostPumpResistList,
  },
  {
    id: 2,
    title: "Пластичность",
    options: pumpPlasticList,
  },
];

export const concreteType: BetonSelect = {
  id: 0,
  title: "Вид",
  options: typeConcrete,
};

export const DEFAULT_MAX_ID_VALUE = 1000000;
export const MIXER_LAUNCH = 9;
export const THIRTY_HOSES = 30;
export const TECH_WASHING_PRICE = 11500;
export const pdfSvgLine = '<svg viewBox="0 0 136 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5325 9.11599C24.6971 9.93424 24.8896 10.5635 25.1151 11.0061C25.3377 11.4421 25.7173 11.6607 26.2512 11.6607L24.8353 15.125C24.2776 16.4797 23.6865 18.5378 23.0467 21.2844C22.4172 24.0428 22.2171 26.0029 22.4487 27.1774C22.6771 28.3366 23.2139 29.0946 24.0508 29.4581C24.884 29.8128 25.6835 29.9932 26.4569 29.9932C27.6357 29.9932 28.9936 29.8612 30.5291 29.583C32.0602 29.3119 33.2142 29.0277 33.9908 28.7332C34.3553 28.5977 34.5823 28.3801 34.6921 28.0937C34.7927 27.8105 34.7561 27.2198 34.5799 26.326C34.4853 25.8529 34.2754 25.6162 33.9325 25.6162C33.4604 25.6162 32.9181 25.721 32.3124 25.9335C31.7045 26.1404 31.0888 26.3093 30.4664 26.4329C29.8413 26.5667 28.8571 26.628 27.5099 26.628C27.1678 26.628 26.941 26.5881 26.8263 26.5075C26.715 26.4329 26.6373 26.292 26.5965 26.0898C26.4889 25.5471 26.5965 24.6014 26.9156 23.2452C27.2285 21.8854 27.5518 20.7663 27.8726 19.8774L30.6131 19.8086C31.7759 19.7802 32.5507 19.7489 32.943 19.7014C33.3358 19.6567 33.5861 19.561 33.6915 19.4144C33.7962 19.2616 33.8343 18.99 33.7925 18.593C33.7617 18.2251 33.7575 17.9527 33.7713 17.772C33.7754 17.7265 33.7855 17.6619 33.8013 17.5874C33.8144 17.4993 33.8208 17.4277 33.8079 17.3632C33.7049 16.8454 33.0153 16.5838 31.7434 16.5838C30.76 16.5838 29.6721 16.651 28.4758 16.7936C28.8117 15.6849 29.2854 14.3588 29.8998 12.8174C30.1995 12.0408 30.4451 11.522 30.6298 11.2533C30.8138 10.9806 31.0735 10.8166 31.4095 10.7448C31.7458 10.6756 32.3925 10.6428 33.3607 10.6428C33.6249 10.6428 34.4777 10.6993 35.9295 10.8166C35.9829 10.8166 36.083 10.8249 36.2309 10.8356C36.3742 10.8467 36.4855 10.8526 36.5519 10.8526C36.9757 10.8526 37.1583 10.7167 37.1027 10.4409C37.0656 10.2572 36.8842 9.89508 36.5585 9.35956C35.9778 8.39899 35.4893 7.79295 35.0828 7.53044C34.6771 7.26889 34.0919 7.13867 33.3291 7.13867C31.6343 7.13867 29.7069 7.26889 27.5462 7.53044C25.3796 7.79311 24.3772 8.31796 24.5325 9.11599Z" fill="#ED1C24"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M105.196 27.9081C105.556 27.3567 105.857 26.9259 106.096 26.6187C106.346 26.3025 106.82 25.7052 107.506 24.8203C108.198 23.9391 108.88 23.0687 109.552 22.2199C110.22 21.3719 110.862 20.5831 111.465 19.845C112.079 19.1116 112.757 18.3146 113.507 17.4565L112.599 21.4015C112.271 22.8807 112.058 23.8634 111.965 24.3479C111.876 24.8309 111.814 25.3238 111.78 25.8194C111.747 26.3216 111.766 26.7656 111.842 27.1553C111.94 27.6574 112.225 28.1235 112.678 28.5463C113.137 28.9779 113.633 29.3162 114.176 29.5728C114.722 29.8289 115.136 29.9564 115.427 29.9564C115.818 29.9564 116.069 29.6301 116.17 28.9717C116.269 28.315 116.386 26.9523 116.507 24.8828C116.641 22.8207 116.851 20.8034 117.149 18.8399C117.443 16.8721 117.933 14.831 118.625 12.7169C120.076 11.4735 120.741 10.5529 120.624 9.94937C120.548 9.56412 120.29 9.09737 119.854 8.54577C119.41 7.99529 118.984 7.72052 118.571 7.72052C118.177 7.72052 117.38 8.29839 116.17 9.45906C114.959 10.6218 113.628 12.0055 112.168 13.6186C110.715 15.2345 109.382 16.7516 108.171 18.178C106.955 19.5978 106.222 20.4947 105.957 20.8527C106.372 18.9085 106.746 17.3102 107.076 16.0631C107.415 14.8194 107.764 13.617 108.122 12.445C108.485 11.2764 108.706 10.5129 108.801 10.1552C108.889 9.79431 108.911 9.50204 108.868 9.27996C108.832 9.09721 108.616 8.82579 108.231 8.46761C107.848 8.108 107.431 7.78324 106.984 7.49145C106.542 7.2006 106.232 7.05176 106.053 7.05176C105.739 7.05176 105.454 7.3539 105.195 7.95231C104.936 8.5523 104.662 9.43661 104.388 10.6054C104.109 11.7694 103.96 12.3799 103.946 12.4294C102.447 18.1124 101.518 21.9387 101.154 23.9046C100.793 25.8682 100.645 27.0345 100.717 27.4151C100.777 27.6918 101.154 28.0869 101.868 28.5804C102.572 29.0732 103.152 29.3205 103.608 29.3205C103.904 29.3205 104.15 29.2248 104.352 29.0296C104.549 28.8344 104.83 28.4621 105.196 27.9081Z" fill="#ED1C24"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M135.345 9.60153C134.954 9.25688 134.543 8.94025 134.103 8.65355C133.661 8.36636 133.387 8.22293 133.273 8.22293C132.923 8.22293 132.507 8.76466 132.038 9.83363C131.568 10.909 131.137 12.0703 130.751 13.3212C130.361 14.5726 130.09 15.4856 129.946 16.0485L128.863 16.3683C128.512 16.4871 127.999 16.5996 127.328 16.7249C126.666 16.8513 126.181 16.914 125.889 16.914C125.471 16.914 125.212 16.6531 125.113 16.1478C125.049 15.8216 125.141 15.2114 125.375 14.3177C125.618 13.4196 125.874 12.6322 126.139 11.9475C126.351 11.4587 126.53 11.0309 126.694 10.688C126.846 10.3364 126.96 10.0678 127.02 9.87248C127.085 9.67763 127.1 9.49503 127.069 9.3403C127.039 9.18763 126.845 8.92051 126.477 8.54163C126.117 8.16642 125.732 7.81922 125.321 7.5123C124.915 7.20681 124.623 7.05176 124.451 7.05176C124.159 7.05176 123.711 7.72052 123.106 9.05073C122.496 10.3808 121.975 11.8167 121.545 13.369C121.107 14.9146 120.966 16.0372 121.099 16.7187C121.243 17.4521 121.673 18.2278 122.382 19.0629C123.097 19.8973 123.791 20.3135 124.463 20.3135C124.824 20.3135 125.58 20.1612 126.734 19.8613C127.885 19.5649 128.763 19.3116 129.377 19.1056C129.269 19.4561 129.066 20.2952 128.77 21.6095C128.47 22.9243 128.218 24.1599 128.018 25.3082C127.812 26.4588 127.743 27.2121 127.812 27.5615C127.913 28.0698 128.383 28.5135 129.214 28.8981C129.635 29.0938 130.043 29.3189 130.426 29.5709C130.817 29.8178 131.064 29.9453 131.173 29.9453C131.499 29.9453 131.732 29.7237 131.856 29.2875C131.979 28.84 132.07 28.1289 132.131 27.1542C132.189 26.1774 132.221 25.65 132.232 25.5556C132.508 23.3587 132.761 21.6254 132.986 20.3494C133.211 19.076 133.46 17.9653 133.742 17.0036C134.022 16.0485 134.452 14.7418 135.027 13.0945C135.226 12.5108 135.449 11.9539 135.677 11.4287C135.91 10.9088 136.015 10.5928 135.997 10.4847C135.947 10.2485 135.73 9.95159 135.345 9.60153Z" fill="#ED1C24"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.0651 5.39268C23.0872 5.34158 23.111 5.26755 23.1308 5.23126C23.6138 3.8595 24.3763 4.79682 24.7921 4.72534C25.4475 4.52269 25.8225 3.93925 25.9607 3.11448C26.0461 2.62067 26.0965 1.60726 25.8316 1.18588C25.6722 0.931487 25.1101 0.505808 24.1209 0.316529C21.9429 -0.104374 18.0991 -0.0988022 14.7741 0.293287C12.3042 0.590498 9.06487 1.28919 4.76574 2.86901C3.29651 3.40899 0.999495 3.6984 0.319171 5.45635C-0.231933 6.87602 -0.0227504 7.64094 0.590725 8.00055C1.9429 8.79062 5.26103 7.61706 6.76018 7.14331C6.8016 7.17658 6.84542 7.20985 6.90827 7.2584C6.35812 10.3558 5.14269 14.0801 4.77102 17.5091C4.0085 19.7479 2.5399 25.3041 3.76557 27.5017C6.29447 29.0347 7.83776 24.6886 7.64681 24.5422C8.28715 22.6277 10.2918 14.2407 10.5288 11.9718C10.5854 11.4006 10.6337 10.9424 10.7225 10.3497C10.8935 9.19736 10.9147 8.0507 11.11 6.96804C11.1636 6.66621 11.3376 6.41691 11.5859 6.21554C12.6867 5.31706 15.2695 5.30353 15.7091 5.30353C16.0512 5.22107 17.0029 5.07604 17.7613 4.83407C18.0963 4.72837 18.0992 5.2104 18.0086 5.76932C17.9177 6.32458 17.7357 6.95737 17.6946 7.15334C17.5988 7.61865 17.5057 8.01711 17.3954 8.50774C17.2575 9.12238 16.9724 10.3765 16.3188 13.1749C14.838 19.9288 13.6931 25.9361 14.9537 29.1965C15.2565 29.6376 16.2833 30.1091 16.5803 29.9774C17.3402 29.8375 17.8867 29.5082 18.2812 29.061C18.9715 28.2789 19.1869 27.1324 19.2445 25.9997C19.3484 23.9255 19.643 20.7488 20.1194 17.6141C20.4356 15.5338 21.4345 10.9045 22.2533 7.89278C22.565 6.74915 22.8615 5.85433 23.0651 5.39268Z" fill="#ED1C24"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.5008 29.9929C43.7781 29.9929 43.9632 29.7851 44.0526 29.3712C44.136 28.9575 44.3289 27.7446 44.6228 25.738C44.9177 23.7381 45.3184 21.5833 45.8261 19.2699C46.3336 16.9613 47.0739 14.2248 48.0532 11.0524C48.4241 10.9508 49.1279 10.8778 50.1542 10.8211C51.1816 10.7676 51.9391 10.6688 52.4264 10.529C52.9115 10.3805 53.1053 10.074 53.0098 9.60408C52.9459 9.27121 52.7496 8.89695 52.4231 8.50199C52.0952 8.09988 51.6501 7.75841 51.0808 7.47871C50.5167 7.19344 49.8807 7.05176 49.1778 7.05176C48.9954 7.05176 48.7158 7.07293 48.3414 7.11814C47.9272 7.16256 47.2938 7.20538 46.4476 7.25425C45.5922 7.29803 44.9564 7.34212 44.5354 7.37953C42.1163 7.56038 40.4219 7.76207 39.4425 7.98637C38.4657 8.20606 38.0256 8.58175 38.1303 9.11568C38.447 10.7135 39.1116 11.5096 40.135 11.5096C40.2943 11.5096 41.4349 11.4216 43.5549 11.2466C43.306 12.1887 42.9503 13.5906 42.4862 15.4606C42.029 17.3378 41.6172 19.0867 41.2561 20.7141C40.8841 22.3397 40.5804 23.8501 40.3359 25.2397C40.0838 26.6363 40 27.5181 40.0747 27.8954C40.146 28.2524 40.405 28.5843 40.8542 28.9136C41.3071 29.2327 41.803 29.4922 42.3492 29.693C42.8966 29.8942 43.2843 29.9929 43.5008 29.9929Z" fill="#ED1C24"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.7778 18.0301C79.5173 19.5501 79.0868 20.9638 78.4938 22.2921C77.8931 23.6204 77.2357 24.6857 76.5197 25.493C75.8006 26.3057 75.1481 26.7124 74.5647 26.7124C74.3161 26.7124 74.0535 26.5308 73.7704 26.1642C73.4923 25.798 73.289 25.3004 73.162 24.6775C72.8722 23.2 72.8555 21.6495 73.1133 20.0526C73.3693 18.4496 73.7949 16.9848 74.384 15.6438C74.9802 14.3127 75.6342 13.2362 76.347 12.4157C77.0604 11.5959 77.686 11.1876 78.2298 11.1876C78.9162 11.1876 79.4298 12.0598 79.7775 13.8088C80.0334 15.1092 80.0339 16.516 79.7778 18.0301ZM82.8999 11.139C82.5153 10.269 82.1214 9.59978 81.7328 9.12937C81.3429 8.66501 81.0396 8.42988 80.8415 8.42988C80.728 8.42988 80.4877 8.52046 80.1289 8.71245C79.7697 8.89711 79.509 9.04532 79.3601 9.14959C78.9242 8.64224 78.4138 8.16594 77.829 7.71766C77.2499 7.2724 76.7746 7.05176 76.4213 7.05176C75.8777 7.05176 75.0965 7.52169 74.0922 8.46602C73.088 9.41114 72.1204 10.6861 71.1844 12.2817C70.2523 13.886 69.5639 15.7212 69.1172 17.7937C68.668 19.8692 68.6627 21.9935 69.0932 24.1599C69.3464 25.4551 69.83 26.5426 70.5269 27.4218C71.2261 28.3032 72.0051 28.9476 72.8556 29.3634C73.7064 29.7851 74.4901 29.993 75.2051 29.993C76.8896 29.993 78.5083 29.2425 80.0603 27.7443C81.6077 26.2415 82.7512 24.2601 83.488 21.8045C84.2262 19.3546 84.3396 16.8067 83.818 14.1724C83.5906 13.0259 83.2866 12.0123 82.8999 11.139ZM96.2444 13.7875C95.7549 14.4392 95.0888 15.0446 94.2431 15.6094C93.4011 16.1806 92.5174 16.6276 91.5904 16.9479C92.0952 14.1574 92.2914 12.453 92.1714 11.8422C92.1028 11.4991 91.8706 11.1607 91.4804 10.8264C92.272 10.585 93.1559 10.4669 94.1329 10.4669C94.9054 10.4669 95.5248 10.6103 95.9927 10.9141C96.4547 11.2129 96.7282 11.5862 96.8155 12.0343C96.9211 12.558 96.728 13.1421 96.2444 13.7875ZM94.5862 23.3832C94.0498 24.1332 93.2912 24.7486 92.3165 25.2286C91.339 25.7183 90.3157 25.9555 89.2493 25.9555C89.7017 24.4301 90.0523 23.253 90.3069 22.4399C90.5535 21.62 90.7719 20.8145 90.9463 19.9963C91.6173 19.8008 92.2344 19.701 92.8006 19.701C94.1959 19.701 94.9897 20.198 95.1843 21.1722C95.3245 21.8924 95.1283 22.632 94.5862 23.3832ZM99.6571 15.5381C100.402 14.3739 100.653 13.1584 100.402 11.9023C100.122 10.4702 99.3019 9.30703 97.9409 8.40696C96.5892 7.50561 94.9223 7.05192 92.9564 7.05192C92.0995 7.05192 90.9277 7.18341 89.4532 7.44512C88.0374 7.68884 86.9876 7.93623 86.2969 8.18218C85.6126 8.43004 85.3218 8.81783 85.4301 9.35049C85.5406 9.91132 85.8157 10.4702 86.262 11.0354C86.7045 11.5945 87.2916 11.9369 88.0273 12.0673C87.7244 14.6794 87.362 16.9 86.9228 18.7339C86.4846 20.5713 86.0687 22.0026 85.6695 23.0352C85.2721 24.0603 84.9415 24.9533 84.6781 25.7008C84.4122 26.4443 84.3319 27.0883 84.4408 27.6341C84.4707 27.7865 84.694 28.0597 85.1125 28.4479C85.5313 28.8298 85.9804 29.1861 86.4565 29.5081C86.934 29.8275 87.2782 29.9932 87.4936 29.9932C87.8112 29.9932 88.0497 29.851 88.2157 29.5694C88.385 29.2832 88.567 28.7733 88.7615 28.0232C89.904 29.3415 91.0121 29.9932 92.0936 29.9932C93.1209 29.9932 94.237 29.5164 95.436 28.5466C96.6319 27.5778 97.5964 26.4193 98.323 25.0786C99.0487 23.7287 99.3115 22.5363 99.1058 21.507C98.9982 20.9613 98.7394 20.3887 98.3324 19.8008C97.9267 19.2065 97.346 18.6885 96.5894 18.2313C97.8854 17.592 98.9075 16.7002 99.6571 15.5381ZM63.7176 14.5569C63.0827 15.3816 62.2498 16.1575 61.2268 16.8904C60.1922 17.616 59.2287 18.1218 58.3222 18.3927C58.4418 17.4524 58.6843 16.1104 59.0551 14.3588C59.2736 13.3167 59.4428 12.6247 59.5658 12.2758C59.6765 11.9227 59.865 11.676 60.114 11.5324C60.3685 11.3851 60.7991 11.292 61.4169 11.2476C61.5772 11.2274 61.823 11.213 62.1524 11.213C63.5527 11.213 64.3321 11.6303 64.4981 12.4675C64.6135 13.0396 64.3527 13.7391 63.7176 14.5569ZM67.2691 9.78142C66.5921 8.99947 65.6805 8.34599 64.5117 7.82686C63.3538 7.30806 62.0267 7.05192 60.5271 7.05192C59.6688 7.05192 58.766 7.14457 57.8117 7.33018C56.8547 7.50927 56.0594 7.78484 55.4196 8.14063C54.7787 8.50072 54.5029 8.91 54.594 9.38137C54.8849 10.8356 55.4167 11.7449 56.2018 12.0975C55.4752 15.1451 54.8918 17.5024 54.4653 19.1655C54.04 20.833 53.5954 22.5094 53.1401 24.2104C52.6823 25.9013 52.4149 26.9614 52.3341 27.3711C52.2609 27.786 52.2442 28.1279 52.2946 28.3893C52.3747 28.79 52.5441 29.0516 52.8116 29.1785C53.0709 29.3064 53.5118 29.4348 54.1224 29.569C54.4314 29.6396 54.7632 29.7267 55.1035 29.835C55.4421 29.9386 55.6772 29.9927 55.8063 29.9927C56.1834 29.9927 56.4679 29.7848 56.651 29.3766C56.8277 28.9682 56.9801 28.3389 57.1045 27.498C57.2259 26.6548 57.3863 25.5239 57.5931 24.1107C57.7988 22.7019 58.0722 21.3301 58.3974 19.9958C59.3908 21.461 60.2095 22.193 60.8524 22.193C61.61 22.193 62.6613 21.5653 63.994 20.3086C65.3322 19.0518 66.4677 17.625 67.4034 16.0259C68.3382 14.4271 68.7095 13.1326 68.5088 12.1295C68.3596 11.3547 67.9429 10.5712 67.2691 9.78142Z" fill="#ED1C24"></path></g></svg>';