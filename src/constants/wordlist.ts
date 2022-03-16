import { CONFIG } from './config'

export const WORDS = [
  'Elite',
  'Razor',
  'Roman',
  'Match',
  'Steel',
  'title',
  'Champ',
  'Dolph',
  'Steve',
  "Kenny",
  'Omega',
  "Bucks",
  'Hardy',
  'World',
  'Order',
  'Mania',
  'Rhode',
  'Games',
  'Kross',
  "Roman",
  "Event",
  "Smack",
  'Mandy',
  'Lumis',
  'Paige',
  "Samoa",
  'MizTV',
  "Roode",
  "Women",
  'Brock',
  "Gable",
  "Owens",
  "Buddy",
  'Becky',
  "Sasha",
  "Orton",
  'Hogan',
  'Queen',
  'Saudi',
  "Giant",
  'Ortiz',
  'Chris',
  'Britt',
  'Hager',
  "Lerae",
  "Henry",
  'Nikki',
  'Isiah',
  "skull",
  'Stage',
  'Regal',
  'Angle',
  'Heels',
  'Lumis',
  'Delta',
  'Mitch',
  'Lochy',
  'Lover',
  'Smash',
  'Chair',
  "Candy",
  "sammy",
  "conti",
  'Aysha',
  'Atlas',
  'Royce',
  "Coyne",
  "Taker",
  'Order',
  'Bryan',
  'Brody',
  'Huber',
  'Darby',
  'Fuego',
  'Griff',
  'Marko',
  "Stunt",
  'Black',
  'House',
  "Wight",
  'Penta',
  'Sting',
  "Flair",
  'Spear',
  'Bunny',
  "Shida",
  "Rebel",
  'rowdy',
  'Roddy',
  'Piper',
  'Japan',
  'Tokyo',
  "Andre",
  "Honky",
  "Snake",
  "Shawn",
  "Sweet",
  "Music",
  'Braun',
  'Fiend',
  "Dusty",
  'Bruno',
  'Bella',
  "Twins",
  "Vader",
  "Khali",
  'Liger',
  'Ivory',
  "Snoop",
  'Macho',
  'Randy',
  'Vince',
  'Trish',
  'Tyson',
  "Sunny",
  "Young",
  'Chief',
  'Table',
  "brain",
  "snuka",
  "Throw",
  "Ropes",
  'Dream',
  'light',
  "Moves",
  "Holds",
  'Twist',
  'Elbow',
  "Block",
  "Stomp",
  "Press",
  'Thesz',
  'screw',
  'super',
  "Break",
  'Power',
  'Combo',
  'Death',
  "Cross",
  "Tiger",
  "Wrist",
  "Lotus",
  'Ankle',
  "Choke",
  "Swing",
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
