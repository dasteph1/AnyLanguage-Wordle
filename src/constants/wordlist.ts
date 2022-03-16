import { CONFIG } from './config'

export const WORDS = [
  'ELITE',
  'RAZOR',
  'ROMAN',
  'MATCH',
  'STEEL',
  'TITLE',
  'CHAMP',
  'DOLPH',
  'STEVE',
  "KENNY",
  'OMEGA',
  "BUCKS",
  "HARDY",
  'WORLD',
  'ORDER',
  'MANIA',
  'RHODE',
  'GAMES',
  'KROSS',
  "ROMAN",
  "EVENT",
  "SMACK",
  'MANDY',
  'LUMIS',
  'PAIGE',
  "SAMOA",
  'MIZTV',
  "ROODE",
  "WOMEN",
  'BROCK',
  "GABLE",
  "OWENS",
  "BUDDY",
  'BECKY',
  "SASHA",
  "ORTON",
  'HOGAN',
  'QUEEN',
  'SAUDI',
  "GIANT",
  'ORTIZ',
  'CHRIS',
  'BRITT',
  'HAGER',
  "LERAE",
  "HENRY",
  'NIKKI',
  "SNAKE",
  "SHAWN",
  "SWEET",
  "MUSIC",
  'BRAUN',
  'FIEND',
  "DUSTY",
  'BRUNO',
  'BELLA',
  "TWINS",
  "VADER",
  "KHALI",
  'LIGER',
  'IVORY',
  "SNOOP",
  'MACHO',
  'RANDY',
  'VINCE',
  'TRISH',
  'TYSON',
  "SUNNY",
  "YOUNG",
  'CHIEF',
  'TABLE',
  "BRAIN",
  "SNUKA",
  "THROW",
  "ROPES",
  'DREAM',
  'LIGHT',
  "MOVES",
  "HOLDS",
  'TWIST',
  'ELBOW',
  "BLOCK",
  "STOMP",
  "PRESS",
  'THESZ',
  'SCREW',
  'SUPER',
  "BREAK",
  'POWER',
  'COMBO',
  'DEATH',
  "CROSS",
  "TIGER",
 
 ]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
