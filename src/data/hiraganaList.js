const hVowels = [
  { id: 0, hiragana: "あ", eng: "a", sound: "ah" },
  { id: 1, hiragana: "い", eng: "i", sound: "ee" },
  { id: 2, hiragana: "う", eng: "u", sound: "uoo" },
  { id: 3, hiragana: "え", eng: "e", sound: "eh" },
  { id: 4, hiragana: "お", eng: "o", sound: "oh" },
];

const hK = [
  { id: 0, hiragana: "か", eng: "ka", sound: "kah" },
  { id: 1, hiragana: "き", eng: "ki", sound: "kee" },
  { id: 2, hiragana: "く", eng: "ku", sound: "kuu" },
  { id: 3, hiragana: "け", eng: "ke", sound: "keh" },
  { id: 4, hiragana: "こ", eng: "ko", sound: "koh" },
];

const hG = [
  { id: 0, hiragana: "が", eng: "ga", sound: "gah" },
  { id: 1, hiragana: "ぎ", eng: "gi", sound: "gee" },
  { id: 2, hiragana: "ぐ", eng: "gu", sound: "guu" },
  { id: 3, hiragana: "げ", eng: "ge", sound: "geh" },
  { id: 4, hiragana: "ご", eng: "go", sound: "goh" },
];

const hS = [
  { id: 0, hiragana: "さ", eng: "sa", sound: "sah" },
  { id: 1, hiragana: "し", eng: "si", sound: "see" },
  { id: 2, hiragana: "す", eng: "su", sound: "suu" },
  { id: 3, hiragana: "せ", eng: "se", sound: "seh" },
  { id: 4, hiragana: "そ", eng: "so", sound: "soh" },
];

const hZ = [
  { id: 0, hiragana: "ざ", eng: "za", sound: "zah" },
  { id: 1, hiragana: "じ", eng: "ji", sound: "jii" },
  { id: 2, hiragana: "ず", eng: "zu", sound: "zuu" },
  { id: 3, hiragana: "ぜ", eng: "ze", sound: "zeh" },
  { id: 4, hiragana: "ぞ", eng: "zo", sound: "zoh" },
];

const hT = [
  { id: 0, hiragana: "た", eng: "ta", sound: "tah" },
  { id: 1, hiragana: "ち", eng: "chi", sound: "chi" },
  { id: 2, hiragana: "つ", eng: "tsu", sound: "suu" },
  { id: 3, hiragana: "て", eng: "tee", sound: "tee" },
  { id: 4, hiragana: "と", eng: "to", sound: "toh" },
];

const hD = [
  { id: 0, hiragana: "だ", eng: "da", sound: "dah" },
  { id: 1, hiragana: "ぢ", eng: "dji", sound: "jee" },
  { id: 2, hiragana: "づ", eng: "dzu", sound: "dzu" },
  { id: 3, hiragana: "で", eng: "de", sound: "dee" },
  { id: 4, hiragana: "ど", eng: "do", sound: "doh" },
];

const hN = [
  { id: 0, hiragana: "な", eng: "na", sound: "nah" },
  { id: 1, hiragana: "に", eng: "ni", sound: "nee" },
  { id: 2, hiragana: "ぬ", eng: "nu", sound: "nuu" },
  { id: 3, hiragana: "ね", eng: "ne", sound: "nee" },
  { id: 4, hiragana: "の", eng: "no", sound: "noh" },
  { id: 5, hiragana: "ん", eng: "n", sound: "nn" },
];

const hH = [
  { id: 0, hiragana: "は", eng: "ha", sound: "hah" },
  { id: 1, hiragana: "ひ", eng: "hi", sound: "nii" },
  { id: 2, hiragana: "ふ", eng: "fu", sound: "fuu" },
  { id: 3, hiragana: "へ", eng: "he", sound: "hee" },
  { id: 4, hiragana: "ほ", eng: "ho", sound: "hoh" },
];

const hB = [
  { id: 0, hiragana: "ば", eng: "ba", sound: "bah" },
  { id: 1, hiragana: "び", eng: "bi", sound: "bii" },
  { id: 2, hiragana: "ぶ", eng: "bu", sound: "buu" },
  { id: 3, hiragana: "べ", eng: "be", sound: "bee" },
  { id: 4, hiragana: "ぼ", eng: "bo", sound: "boh" },
];

const hp = [
  { id: 0, hiragana: "ぱ", eng: "Pa", sound: "Pah" },
  { id: 1, hiragana: "ぴ", eng: "Pi", sound: "Pii" },
  { id: 2, hiragana: "ぷ", eng: "Pu", sound: "Puu" },
  { id: 3, hiragana: "ぺ", eng: "Pe", sound: "Pee" },
  { id: 4, hiragana: "ぽ", eng: "Po", sound: "Poh" },
];

const hM = [
  { id: 0, hiragana: "ま", eng: "ma", sound: "mah" },
  { id: 1, hiragana: "み", eng: "mi", sound: "mii" },
  { id: 2, hiragana: "む", eng: "mu", sound: "muu" },
  { id: 3, hiragana: "め", eng: "me", sound: "mee" },
  { id: 4, hiragana: "も", eng: "mo", sound: "moh" },
];

const hY = [
  { id: 0, hiragana: "や", eng: "ya", sound: "yah" },
  { id: 1, hiragana: "ゆ", eng: "yu", sound: "yuu" },
  { id: 2, hiragana: "よ", eng: "yo", sound: "yoh" },
];

const hR = [
  { id: 0, hiragana: "ら", eng: "ra", sound: "rah" },
  { id: 1, hiragana: "り", eng: "ri", sound: "rii" },
  { id: 2, hiragana: "る", eng: "ru", sound: "ruu" },
  { id: 3, hiragana: "れ", eng: "re", sound: "ree" },
  { id: 4, hiragana: "ろ", eng: "ro", sound: "roh" },
];

const hW = [
  { id: 0, hiragana: "わ", eng: "wa", sound: "wah" },
  { id: 2, hiragana: "を", eng: "wo", sound: "woh" },
];

const hComplete = [
    { id: 0, hiragana: "あ", eng: "a", sound: "ah" },
    { id: 1, hiragana: "い", eng: "i", sound: "ee" },
    { id: 2, hiragana: "う", eng: "u", sound: "uoo" },
    { id: 3, hiragana: "え", eng: "e", sound: "eh" },
    { id: 4, hiragana: "お", eng: "o", sound: "oh" },
    { id: 5, hiragana: "か", eng: "ka", sound: "kah" },
    { id: 6, hiragana: "き", eng: "ki", sound: "kee" },
    { id: 7, hiragana: "く", eng: "ku", sound: "kuu" },
    { id: 8, hiragana: "け", eng: "ke", sound: "keh" },
    { id: 9, hiragana: "こ", eng: "ko", sound: "koh" },
    { id: 10, hiragana: "が", eng: "ga", sound: "gah" },
    { id: 11, hiragana: "ぎ", eng: "gi", sound: "gee" },
    { id: 12, hiragana: "ぐ", eng: "gu", sound: "guu" },
    { id: 13, hiragana: "げ", eng: "ge", sound: "geh" },
    { id: 14, hiragana: "ご", eng: "go", sound: "goh" },
    { id: 15, hiragana: "さ", eng: "sa", sound: "sah" },
    { id: 16, hiragana: "し", eng: "si", sound: "see" },
    { id: 17, hiragana: "す", eng: "su", sound: "suu" },
    { id: 18, hiragana: "せ", eng: "se", sound: "seh" },
    { id: 19, hiragana: "そ", eng: "so", sound: "soh" },
    { id: 20, hiragana: "ざ", eng: "za", sound: "zah" },
    { id: 21, hiragana: "じ", eng: "ji", sound: "jii" },
    { id: 22, hiragana: "ず", eng: "zu", sound: "zuu" },
    { id: 23, hiragana: "ぜ", eng: "ze", sound: "zeh" },
    { id: 24, hiragana: "ぞ", eng: "zo", sound: "zoh" },
    { id: 25, hiragana: "た", eng: "ta", sound: "tah" },
    { id: 26, hiragana: "ち", eng: "chi", sound: "chi" },
    { id: 27, hiragana: "つ", eng: "tsu", sound: "suu" },
    { id: 28, hiragana: "て", eng: "tee", sound: "tee" },
    { id: 29, hiragana: "と", eng: "to", sound: "toh" },
    { id: 30, hiragana: "だ", eng: "da", sound: "dah" },
    { id: 31, hiragana: "ぢ", eng: "dji", sound: "jee" },
    { id: 32, hiragana: "づ", eng: "dzu", sound: "dzu" },
    { id: 33, hiragana: "で", eng: "de", sound: "dee" },
    { id: 34, hiragana: "ど", eng: "do", sound: "doh" },
    { id: 35, hiragana: "な", eng: "na", sound: "nah" },
    { id: 36, hiragana: "に", eng: "ni", sound: "nee" },
    { id: 37, hiragana: "ぬ", eng: "nu", sound: "nuu" },
    { id: 38, hiragana: "ね", eng: "ne", sound: "nee" },
    { id: 39, hiragana: "の", eng: "no", sound: "noh" },
    { id: 40, hiragana: "ん", eng: "n", sound: "nn" },
    { id: 41, hiragana: "は", eng: "ha", sound: "hah" },
    { id: 42, hiragana: "ひ", eng: "hi", sound: "nii" },
    { id: 43, hiragana: "ふ", eng: "fu", sound: "fuu" },
    { id: 44, hiragana: "へ", eng: "he", sound: "hee" },
    { id: 45, hiragana: "ほ", eng: "ho", sound: "hoh" },
    { id: 46, hiragana: "ば", eng: "ba", sound: "bah" },
    { id: 47, hiragana: "び", eng: "bi", sound: "bii" },
    { id: 48, hiragana: "ぶ", eng: "bu", sound: "buu" },
    { id: 49, hiragana: "べ", eng: "be", sound: "bee" },
    { id: 50, hiragana: "ぼ", eng: "bo", sound: "boh" },
    { id: 51, hiragana: "ぱ", eng: "Pa", sound: "Pah" },
    { id: 52, hiragana: "ぴ", eng: "Pi", sound: "Pii" },
    { id: 53, hiragana: "ぷ", eng: "Pu", sound: "Puu" },
    { id: 54, hiragana: "ぺ", eng: "Pe", sound: "Pee" },
    { id: 55, hiragana: "ぽ", eng: "Po", sound: "Poh" },
    { id: 56, hiragana: "ま", eng: "ma", sound: "mah" },
    { id: 57, hiragana: "み", eng: "mi", sound: "mii" },
    { id: 58, hiragana: "む", eng: "mu", sound: "muu" },
    { id: 59, hiragana: "め", eng: "me", sound: "mee" },
    { id: 60, hiragana: "も", eng: "mo", sound: "moh" },
    { id: 61, hiragana: "や", eng: "ya", sound: "yah" },
    { id: 62, hiragana: "ゆ", eng: "yu", sound: "yuu" },
    { id: 63, hiragana: "よ", eng: "yo", sound: "yoh" },
    { id: 64, hiragana: "ら", eng: "ra", sound: "rah" },
    { id: 65, hiragana: "り", eng: "ri", sound: "rii" },
    { id: 66, hiragana: "る", eng: "ru", sound: "ruu" },
    { id: 67, hiragana: "れ", eng: "re", sound: "ree" },
    { id: 68, hiragana: "ろ", eng: "ro", sound: "roh" },
    { id: 69, hiragana: "わ", eng: "wa", sound: "wah" },
    { id: 70, hiragana: "を", eng: "wo", sound: "woh" },
]