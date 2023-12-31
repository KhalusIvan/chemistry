export const tableHeight = 736;
export const tableWidth = 1000;
export const tableColumnNumerationWidth = 30;
export const tableRowNumerationHeight = 30;

export const types = {
  alkaliMetal: {
    id: 1,
    name: "Лужні метали",
    color: "#eace5d",
  },
  alkalineEarthMetal: {
    id: 2,
    name: "Лужноземельні метали",
    color: "#f1f165",
  },
  lanthanide: {
    id: 3,
    name: "Лантаноїди",
    color: "#e8d19c",
  },
  actinide: {
    id: 4,
    name: "Актиноїди",
    color: "#f5ccda",
  },
  transitionMetal: {
    id: 5,
    name: "Перехідні метали",
    color: "#fac6b7",
  },
  postTransitionMetal: {
    id: 6,
    name: "Пост-перехідні метали",
    color: "#acdfec",
  },
  metalloid: {
    id: 7,
    name: "Напівметали",
    color: "#9ee5d4",
  },
  nonmetal: { id: 8, name: "Неметали", color: "#8ced8c" },
  nobleGas: { id: 9, name: "Благородні гази", color: "#e5bde5" },
};

export const elements = [
  {
    id: 1,
    name: "Гідроген",
    symbol: "H",
    weight: "1,008",
    electrons: [1],
    row: 1,
    column: 1,
    type: types.nonmetal,
  },
  {
    id: 2,
    name: "Гелій",
    symbol: "He",
    weight: "4,0026",
    electrons: [2],
    row: 1,
    column: 18,
    type: types.nobleGas,
  },
  {
    id: 3,
    name: "Літій",
    symbol: "Li",
    weight: "6,94",
    electrons: [2, 1],
    row: 2,
    column: 1,
    type: types.alkaliMetal,
  },
  {
    id: 4,
    name: "Берилій",
    symbol: "Be",
    weight: "9,0122",
    electrons: [2, 2],
    row: 2,
    column: 2,
    type: types.alkalineEarthMetal,
  },
  {
    id: 5,
    name: "Бор",
    symbol: "B",
    weight: "10,81",
    electrons: [2, 3],
    row: 2,
    column: 13,
    type: types.metalloid,
  },
  {
    id: 6,
    name: "Карбон",
    symbol: "C",
    weight: "12,011",
    electrons: [2, 4],
    row: 2,
    column: 14,
    type: types.nonmetal,
  },
  {
    id: 7,
    name: "Нітроген",
    symbol: "N",
    weight: "14,007",
    electrons: [2, 5],
    row: 2,
    column: 15,
    type: types.nonmetal,
  },
  {
    id: 8,
    name: "Оксиген",
    symbol: "O",
    weight: "15,999",
    electrons: [2, 6],
    row: 2,
    column: 16,
    type: types.nonmetal,
  },
  {
    id: 9,
    name: "Флуор",
    symbol: "F",
    weight: "18,998",
    electrons: [2, 7],
    row: 2,
    column: 17,
    type: types.nonmetal,
  },
  {
    id: 10,
    name: "Неон",
    symbol: "Ne",
    weight: "20,180",
    electrons: [2, 8],
    row: 2,
    column: 18,
    type: types.nobleGas,
  },
  {
    id: 11,
    name: "Натрій",
    symbol: "Na",
    weight: "22,990",
    electrons: [2, 8, 1],
    row: 3,
    column: 1,
    type: types.alkaliMetal,
  },
  {
    id: 12,
    name: "Магній",
    symbol: "Mg",
    weight: "24,305",
    electrons: [2, 8, 2],
    row: 3,
    column: 2,
    type: types.alkalineEarthMetal,
  },
  {
    id: 13,
    name: "Алюміній",
    symbol: "Al",
    weight: "26,982",
    electrons: [2, 8, 3],
    row: 3,
    column: 13,
    type: types.postTransitionMetal,
  },
  {
    id: 14,
    name: "Силіцій",
    symbol: "Si",
    weight: "28,085",
    electrons: [2, 8, 4],
    row: 3,
    column: 14,
    type: types.metalloid,
  },
  {
    id: 15,
    name: "Фосфор",
    symbol: "P",
    weight: "30,974",
    electrons: [2, 8, 5],
    row: 3,
    column: 15,
    type: types.nonmetal,
  },
  {
    id: 16,
    name: "Сульфур",
    symbol: "S",
    weight: "32,06",
    electrons: [2, 8, 6],
    row: 3,
    column: 16,
    type: types.nonmetal,
  },
  {
    id: 17,
    name: "Хлор",
    symbol: "Cl",
    weight: "35,45",
    electrons: [2, 8, 7],
    row: 3,
    column: 17,
    type: types.nonmetal,
  },
  {
    id: 18,
    name: "Аргон",
    symbol: "Ar",
    weight: "39,948",
    electrons: [2, 8, 8],
    row: 3,
    column: 18,
    type: types.nobleGas,
  },
  {
    id: 19,
    name: "Калій",
    symbol: "K",
    weight: "39,098",
    electrons: [2, 8, 8, 1],
    row: 4,
    column: 1,
    type: types.alkaliMetal,
  },
  {
    id: 20,
    name: "Кальцій",
    symbol: "Ca",
    weight: "40,078",
    electrons: [2, 8, 8, 2],
    row: 4,
    column: 2,
    type: types.alkalineEarthMetal,
  },
  {
    id: 21,
    name: "Скандій",
    symbol: "Sc",
    weight: "44,956",
    electrons: [2, 8, 9, 2],
    row: 4,
    column: 3,
    type: types.transitionMetal,
  },
  {
    id: 22,
    name: "Титан",
    symbol: "Ti",
    weight: "47,867",
    electrons: [2, 8, 10, 2],
    row: 4,
    column: 4,
    type: types.transitionMetal,
  },
  {
    id: 23,
    name: "Ванадій",
    symbol: "V",
    weight: "50,942",
    electrons: [2, 8, 11, 2],
    row: 4,
    column: 5,
    type: types.transitionMetal,
  },
  {
    id: 24,
    name: "Хром",
    symbol: "Cr",
    weight: "51,996",
    electrons: [2, 8, 13, 1],
    row: 4,
    column: 6,
    type: types.transitionMetal,
  },
  {
    id: 25,
    name: "Манган",
    symbol: "Mn",
    weight: "54,938",
    electrons: [2, 8, 13, 2],
    row: 4,
    column: 7,
    type: types.transitionMetal,
  },
  {
    id: 26,
    name: "Ферум",
    symbol: "Fe",
    weight: "55,845",
    electrons: [2, 8, 14, 2],
    row: 4,
    column: 8,
    type: types.transitionMetal,
  },
  {
    id: 27,
    name: "Кобальт",
    symbol: "Co",
    weight: "58,933",
    electrons: [2, 8, 15, 2],
    row: 4,
    column: 9,
    type: types.transitionMetal,
  },
  {
    id: 28,
    name: "Нікол",
    symbol: "Ni",
    weight: "58,693",
    electrons: [2, 8, 16, 2],
    row: 4,
    column: 10,
    type: types.transitionMetal,
  },
  {
    id: 29,
    name: "Купрум",
    symbol: "Cu",
    weight: "63,546",
    electrons: [2, 8, 18, 1],
    row: 4,
    column: 11,
    type: types.transitionMetal,
  },
  {
    id: 30,
    name: "Цинк",
    symbol: "Zn",
    weight: "65,38",
    electrons: [2, 8, 18, 2],
    row: 4,
    column: 12,
    type: types.transitionMetal,
  },
  {
    id: 31,
    name: "Галій",
    symbol: "Ga",
    weight: "69,723",
    electrons: [2, 8, 18, 3],
    row: 4,
    column: 13,
    type: types.postTransitionMetal,
  },
  {
    id: 32,
    name: "Германій",
    symbol: "Ge",
    weight: "72,630",
    electrons: [2, 8, 18, 4],
    row: 4,
    column: 14,
    type: types.metalloid,
  },
  {
    id: 33,
    name: "Арсен",
    symbol: "As",
    weight: "74,922",
    electrons: [2, 8, 18, 5],
    row: 4,
    column: 15,
    type: types.metalloid,
  },
  {
    id: 34,
    name: "Селен",
    symbol: "Se",
    weight: "78,971",
    electrons: [2, 8, 18, 6],
    row: 4,
    column: 16,
    type: types.nonmetal,
  },
  {
    id: 35,
    name: "Бром",
    symbol: "Br",
    weight: "79,904",
    electrons: [2, 8, 18, 7],
    row: 4,
    column: 17,
    type: types.nonmetal,
  },
  {
    id: 36,
    name: "Криптон",
    symbol: "Kr",
    weight: "83,798",
    electrons: [2, 8, 18, 8],
    row: 4,
    column: 18,
    type: types.nobleGas,
  },
  {
    id: 37,
    name: "Рубідій",
    symbol: "Rb",
    weight: "85,468",
    electrons: [2, 8, 18, 8, 1],
    row: 5,
    column: 1,
    type: types.alkaliMetal,
  },
  {
    id: 38,
    name: "Стронцій",
    symbol: "Sr",
    weight: "87,62",
    electrons: [2, 8, 18, 8, 2],
    row: 5,
    column: 2,
    type: types.alkalineEarthMetal,
  },
  {
    id: 39,
    name: "Ітрій",
    symbol: "Y",
    weight: "88,906",
    electrons: [2, 8, 18, 9, 2],
    row: 5,
    column: 3,
    type: types.transitionMetal,
  },
  {
    id: 40,
    name: "Цирконій",
    symbol: "Zr",
    weight: "91,224",
    electrons: [2, 8, 18, 10, 2],
    row: 5,
    column: 4,
    type: types.transitionMetal,
  },
  {
    id: 41,
    name: "Ніобій",
    symbol: "Nb",
    weight: "92,906",
    electrons: [2, 8, 18, 12, 1],
    row: 5,
    column: 5,
    type: types.transitionMetal,
  },
  {
    id: 42,
    name: "Молібден",
    symbol: "Mo",
    weight: "95,95",
    electrons: [2, 8, 18, 13, 1],
    row: 5,
    column: 6,
    type: types.transitionMetal,
  },
  {
    id: 43,
    name: "Технецій",
    symbol: "Tc",
    weight: "(98)",
    electrons: [2, 8, 18, 13, 2],
    row: 5,
    column: 7,
    type: types.transitionMetal,
  },
  {
    id: 44,
    name: "Рутеній",
    symbol: "Ru",
    weight: "101,07",
    electrons: [2, 8, 18, 15, 1],
    row: 5,
    column: 8,
    type: types.transitionMetal,
  },
  {
    id: 45,
    name: "Родій",
    symbol: "Rh",
    weight: "102,91",
    electrons: [2, 8, 18, 16, 1],
    row: 5,
    column: 9,
    type: types.transitionMetal,
  },
  {
    id: 46,
    name: "Паладій",
    symbol: "Pd",
    weight: "106,42",
    electrons: [2, 8, 18, 18],
    row: 5,
    column: 10,
    type: types.transitionMetal,
  },
  {
    id: 47,
    name: "Аргентум",
    symbol: "Ag",
    weight: "107,87",
    electrons: [2, 8, 18, 18, 1],
    row: 5,
    column: 11,
    type: types.transitionMetal,
  },
  {
    id: 48,
    name: "Кадмій",
    symbol: "Cd",
    weight: "112,41",
    electrons: [2, 8, 18, 18, 2],
    row: 5,
    column: 12,
    type: types.transitionMetal,
  },
  {
    id: 49,
    name: "Індій",
    symbol: "In",
    weight: "114,82",
    electrons: [2, 8, 18, 18, 3],
    row: 5,
    column: 13,
    type: types.postTransitionMetal,
  },
  {
    id: 50,
    name: "Станум",
    symbol: "Sn",
    weight: "118,71",
    electrons: [2, 8, 18, 18, 4],
    row: 5,
    column: 14,
    type: types.postTransitionMetal,
  },
  {
    id: 51,
    name: "Стибій",
    symbol: "Sb",
    weight: "121,76",
    electrons: [2, 8, 18, 18, 5],
    row: 5,
    column: 15,
    type: types.metalloid,
  },
  {
    id: 52,
    name: "Телур",
    symbol: "Te",
    weight: "127,60",
    electrons: [2, 8, 18, 18, 6],
    row: 5,
    column: 16,
    type: types.metalloid,
  },
  {
    id: 53,
    name: "Іод",
    symbol: "I",
    weight: "126,90",
    electrons: [2, 8, 18, 18, 7],
    row: 5,
    column: 17,
    type: types.nonmetal,
  },
  {
    id: 54,
    name: "Ксенон",
    symbol: "Xe",
    weight: "131,29",
    electrons: [2, 8, 18, 18, 8],
    row: 5,
    column: 18,
    type: types.nobleGas,
  },
  {
    id: 55,
    name: "Цезій",
    symbol: "Cs",
    weight: "132,91",
    electrons: [2, 8, 18, 18, 8, 1],
    row: 6,
    column: 1,
    type: types.alkaliMetal,
  },
  {
    id: 56,
    name: "Барій",
    symbol: "Ba",
    weight: "137,33",
    electrons: [2, 8, 18, 18, 8, 2],
    row: 6,
    column: 2,
    type: types.alkalineEarthMetal,
  },
  {
    id: 57,
    name: "Лантан",
    symbol: "La",
    weight: "138,91",
    electrons: [2, 8, 18, 18, 9, 2],
    row: 9,
    column: 4,
    type: types.lanthanide,
  },
  {
    id: 58,
    name: "Церій",
    symbol: "Ce",
    weight: "140,12",
    electrons: [2, 8, 18, 20, 8, 2],
    row: 9,
    column: 5,
    type: types.lanthanide,
  },
  {
    id: 59,
    name: "Празеодим",
    symbol: "Pr",
    weight: "140,91",
    electrons: [2, 8, 18, 21, 8, 2],
    row: 9,
    column: 6,
    type: types.lanthanide,
  },
  {
    id: 60,
    name: "Неодим",
    symbol: "Nd",
    weight: "144,24",
    electrons: [2, 8, 18, 22, 8, 2],
    row: 9,
    column: 7,
    type: types.lanthanide,
  },
  {
    id: 61,
    name: "Прометій",
    symbol: "Pm",
    weight: "(145)",
    electrons: [2, 8, 18, 23, 8, 2],
    row: 9,
    column: 8,
    type: types.lanthanide,
  },
  {
    id: 62,
    name: "Самарій",
    symbol: "Sm",
    weight: "150,36",
    electrons: [2, 8, 18, 24, 8, 2],
    row: 9,
    column: 9,
    type: types.lanthanide,
  },
  {
    id: 63,
    name: "Європій",
    symbol: "Eu",
    weight: "151,96",
    electrons: [2, 8, 18, 25, 8, 2],
    row: 9,
    column: 10,
    type: types.lanthanide,
  },
  {
    id: 64,
    name: "Гадоліній",
    symbol: "Gd",
    weight: "157,25",
    electrons: [2, 8, 18, 25, 9, 2],
    row: 9,
    column: 11,
    type: types.lanthanide,
  },
  {
    id: 65,
    name: "Тербій",
    symbol: "Tb",
    weight: "158,93",
    electrons: [2, 8, 18, 27, 8, 2],
    row: 9,
    column: 12,
    type: types.lanthanide,
  },
  {
    id: 66,
    name: "Диспозій",
    symbol: "Dy",
    weight: "162,50",
    electrons: [2, 8, 18, 28, 8, 2],
    row: 9,
    column: 13,
    type: types.lanthanide,
  },
  {
    id: 67,
    name: "Гольмій",
    symbol: "Ho",
    weight: "164,93",
    electrons: [2, 8, 18, 29, 8, 2],
    row: 9,
    column: 14,
    type: types.lanthanide,
  },
  {
    id: 68,
    name: "Ербій",
    symbol: "Er",
    weight: "167,26",
    electrons: [2, 8, 18, 30, 8, 2],
    row: 9,
    column: 15,
    type: types.lanthanide,
  },
  {
    id: 69,
    name: "Тулій",
    symbol: "Tm",
    weight: "168,93",
    electrons: [2, 8, 18, 31, 8, 2],
    row: 9,
    column: 16,
    type: types.lanthanide,
  },
  {
    id: 70,
    name: "Ітербій",
    symbol: "Yb",
    weight: "173,05",
    electrons: [2, 8, 18, 32, 8, 2],
    row: 9,
    column: 17,
    type: types.lanthanide,
  },
  {
    id: 71,
    name: "Лютецій",
    symbol: "Lu",
    weight: "174,97",
    electrons: [2, 8, 18, 32, 9, 2],
    row: 9,
    column: 18,
    type: types.lanthanide,
  },
  {
    id: 72,
    name: "Гафній",
    symbol: "Hf",
    weight: "178,49",
    electrons: [2, 8, 18, 32, 10, 2],
    row: 6,
    column: 4,
    type: types.transitionMetal,
  },
  {
    id: 73,
    name: "Тантал",
    symbol: "Ta",
    weight: "180,95",
    electrons: [2, 8, 18, 32, 11, 2],
    row: 6,
    column: 5,
    type: types.transitionMetal,
  },
  {
    id: 74,
    name: "Вольфрам",
    symbol: "W",
    weight: "183,84",
    electrons: [2, 8, 18, 32, 12, 2],
    row: 6,
    column: 6,
    type: types.transitionMetal,
  },
  {
    id: 75,
    name: "Реній",
    symbol: "Re",
    weight: "186,21",
    electrons: [2, 8, 18, 32, 13, 2],
    row: 6,
    column: 7,
    type: types.transitionMetal,
  },
  {
    id: 76,
    name: "Осмій",
    symbol: "Os",
    weight: "190,23",
    electrons: [2, 8, 18, 32, 14, 2],
    row: 6,
    column: 8,
    type: types.transitionMetal,
  },
  {
    id: 77,
    name: "Іридій",
    symbol: "Ir",
    weight: "192,22",
    electrons: [2, 8, 18, 32, 15, 2],
    row: 6,
    column: 9,
    type: types.transitionMetal,
  },
  {
    id: 78,
    name: "Платина",
    symbol: "Pt",
    weight: "195,08",
    electrons: [2, 8, 18, 32, 17, 1],
    row: 6,
    column: 10,
    type: types.transitionMetal,
  },
  {
    id: 79,
    name: "Аурум",
    symbol: "Au",
    weight: "196,97",
    electrons: [2, 8, 18, 32, 18, 1],
    row: 6,
    column: 11,
    type: types.transitionMetal,
  },
  {
    id: 80,
    name: "Меркурій",
    symbol: "Hg",
    weight: "200,59",
    electrons: [2, 8, 18, 32, 18, 2],
    row: 6,
    column: 12,
    type: types.transitionMetal,
  },
  {
    id: 81,
    name: "Талій",
    symbol: "Tl",
    weight: "204,38",
    electrons: [2, 8, 18, 32, 18, 3],
    row: 6,
    column: 13,
    type: types.postTransitionMetal,
  },
  {
    id: 82,
    name: "Плюмбум",
    symbol: "Pb",
    weight: "207,2",
    electrons: [2, 8, 18, 32, 18, 4],
    row: 6,
    column: 14,
    type: types.postTransitionMetal,
  },
  {
    id: 83,
    name: "Бісмут",
    symbol: "Bi",
    weight: "208,98",
    electrons: [2, 8, 18, 32, 18, 5],
    row: 6,
    column: 15,
    type: types.postTransitionMetal,
  },
  {
    id: 84,
    name: "Полоній",
    symbol: "Po",
    weight: "(209)",
    electrons: [2, 8, 18, 32, 18, 6],
    row: 6,
    column: 16,
    type: types.postTransitionMetal,
  },
  {
    id: 85,
    name: "Астат",
    symbol: "At",
    weight: "(210)",
    electrons: [2, 8, 18, 32, 18, 7],
    row: 6,
    column: 17,
    type: types.metalloid,
  },
  {
    id: 86,
    name: "Радон",
    symbol: "Rn",
    weight: "(222)",
    electrons: [2, 8, 18, 32, 18, 8],
    row: 6,
    column: 18,
    type: types.nobleGas,
  },
  {
    id: 87,
    name: "Францій",
    symbol: "Fr",
    weight: "(223)",
    electrons: [2, 8, 18, 32, 18, 8, 1],
    row: 7,
    column: 1,
    type: types.alkaliMetal,
  },
  {
    id: 88,
    name: "Радій",
    symbol: "Ra",
    weight: "(226)",
    electrons: [2, 8, 18, 32, 18, 8, 2],
    row: 7,
    column: 2,
    type: types.alkalineEarthMetal,
  },
  {
    id: 89,
    name: "Актиній",
    symbol: "Ac",
    weight: "(227)",
    electrons: [2, 8, 18, 32, 18, 9, 2],
    row: 10,
    column: 4,
    type: types.actinide,
  },
  {
    id: 90,
    name: "Торій",
    symbol: "Th",
    weight: "232,04",
    electrons: [2, 8, 18, 32, 18, 10, 2],
    row: 10,
    column: 5,
    type: types.actinide,
  },
  {
    id: 91,
    name: "Проактиній",
    symbol: "Pa",
    weight: "231,04",
    electrons: [2, 8, 18, 32, 20, 9, 2],
    row: 10,
    column: 6,
    type: types.actinide,
  },
  {
    id: 92,
    name: "Уран",
    symbol: "U",
    weight: "238,03",
    electrons: [2, 8, 18, 32, 21, 9, 2],
    row: 10,
    column: 7,
    type: types.actinide,
  },
  {
    id: 93,
    name: "Нептуній",
    symbol: "Np",
    weight: "(237)",
    electrons: [2, 8, 18, 32, 22, 9, 2],
    row: 10,
    column: 8,
    type: types.actinide,
  },
  {
    id: 94,
    name: "Плутоній",
    symbol: "Pu",
    weight: "(244)",
    electrons: [2, 8, 18, 32, 24, 8, 2],
    row: 10,
    column: 9,
    type: types.actinide,
  },
  {
    id: 95,
    name: "Америцій",
    symbol: "Am",
    weight: "(243)",
    electrons: [2, 8, 18, 32, 25, 8, 2],
    row: 10,
    column: 10,
    type: types.actinide,
  },
  {
    id: 96,
    name: "Кюрій",
    symbol: "Cm",
    weight: "(247)",
    electrons: [2, 8, 18, 32, 25, 9, 2],
    row: 10,
    column: 11,
    type: types.actinide,
  },
  {
    id: 97,
    name: "Берклій",
    symbol: "Bk",
    weight: "(247)",
    electrons: [2, 8, 18, 32, 27, 8, 2],
    row: 10,
    column: 12,
    type: types.actinide,
  },
  {
    id: 98,
    name: "Каліфорній",
    symbol: "Cf",
    weight: "(251)",
    electrons: [2, 8, 18, 32, 28, 8, 2],
    row: 10,
    column: 13,
    type: types.actinide,
  },
  {
    id: 99,
    name: "Ейнштейній",
    symbol: "Es",
    weight: "(252)",
    electrons: [2, 8, 18, 32, 29, 8, 2],
    row: 10,
    column: 14,
    type: types.actinide,
  },
  {
    id: 100,
    name: "Фермій",
    symbol: "Fm",
    weight: "(257)",
    electrons: [2, 8, 18, 32, 30, 8, 2],
    row: 10,
    column: 15,
    type: types.actinide,
  },
  {
    id: 101,
    name: "Менделевій",
    symbol: "Md",
    weight: "(258)",
    electrons: [2, 8, 18, 32, 31, 8, 2],
    row: 10,
    column: 16,
    type: types.actinide,
  },
  {
    id: 102,
    name: "Нобелій",
    symbol: "No",
    weight: "(259)",
    electrons: [2, 8, 18, 32, 32, 8, 2],
    row: 10,
    column: 17,
    type: types.actinide,
  },
  {
    id: 103,
    name: "Лоуренсій",
    symbol: "Lr",
    weight: "(266)",
    electrons: [2, 8, 18, 32, 32, 9, 2],
    row: 10,
    column: 18,
    type: types.actinide,
  },
  {
    id: 104,
    name: "Резерфордій",
    symbol: "Rf",
    weight: "(267)",
    electrons: [2, 8, 18, 32, 32, 10, 2],
    row: 7,
    column: 4,
    type: types.transitionMetal,
  },
  {
    id: 105,
    name: "Дубній",
    symbol: "Db",
    weight: "(268)",
    electrons: [2, 8, 18, 32, 32, 11, 2],
    row: 7,
    column: 5,
    type: types.transitionMetal,
  },
  {
    id: 106,
    name: "Сиборгій",
    symbol: "Sg",
    weight: "(269)",
    electrons: [2, 8, 18, 32, 32, 12, 2],
    row: 7,
    column: 6,
    type: types.transitionMetal,
  },
  {
    id: 107,
    name: "Борій",
    symbol: "Bh",
    weight: "(270)",
    electrons: [2, 8, 18, 32, 32, 13, 2],
    row: 7,
    column: 7,
    type: types.transitionMetal,
  },
  {
    id: 108,
    name: "Гасій",
    symbol: "Hs",
    weight: "(277)",
    electrons: [2, 8, 18, 32, 32, 14, 2],
    row: 7,
    column: 8,
    type: types.transitionMetal,
  },
  {
    id: 109,
    name: "Майтнерій",
    symbol: "Mt",
    weight: "(278)",
    electrons: [2, 8, 18, 32, 32, 15, 2],
    row: 7,
    column: 9,
  },
  {
    id: 110,
    name: "Дармштадій",
    symbol: "Ds",
    weight: "(281)",
    electrons: [2, 8, 18, 32, 32, 16, 2],
    row: 7,
    column: 10,
  },
  {
    id: 111,
    name: "Рентгеній",
    symbol: "Rg",
    weight: "(282)",
    electrons: [2, 8, 18, 32, 32, 17, 2],
    row: 7,
    column: 11,
  },
  {
    id: 112,
    name: "Коперницій",
    symbol: "Cn",
    weight: "(285)",
    electrons: [2, 8, 18, 32, 32, 18, 2],
    row: 7,
    column: 12,
  },
  {
    id: 113,
    name: "Ніхоній",
    symbol: "Nh",
    weight: "(286)",
    electrons: [2, 8, 18, 32, 32, 18, 3],
    row: 7,
    column: 13,
  },
  {
    id: 114,
    name: "Флеровій",
    symbol: "Fl",
    weight: "(289)",
    electrons: [2, 8, 18, 32, 32, 18, 4],
    row: 7,
    column: 14,
  },
  {
    id: 115,
    name: "Московій",
    symbol: "Mc",
    weight: "(290)",
    electrons: [2, 8, 18, 32, 32, 18, 5],
    row: 7,
    column: 15,
  },
  {
    id: 116,
    name: "Ліверморій",
    symbol: "Lv",
    weight: "(293)",
    electrons: [2, 8, 18, 32, 32, 18, 6],
    row: 7,
    column: 16,
  },
  {
    id: 117,
    name: "Теннесій",
    symbol: "Ts",
    weight: "(294)",
    electrons: [2, 8, 18, 32, 32, 18, 7],
    row: 7,
    column: 17,
  },
  {
    id: 118,
    name: "Оганессій",
    symbol: "Og",
    weight: "(294)",
    electrons: [2, 8, 18, 32, 32, 18, 8],
    row: 7,
    column: 18,
  },
];
