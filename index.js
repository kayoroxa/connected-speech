let myDict = [
  ['what do you', 'wha-r-yah'],
  ["i'm going to", 'ahmma'],
  ["i'm gonna", 'ahmma'],
  ['k who', '-ko'],

  ['can', 'ken'],
  ['gonna', 'gon'],
  ['t do\\b', 'tchú'],
  ['going to', 'gonna'],
  ['re it\\b', 'ri'],
  ['m to\\b', 'm(d)â'],
  ['when are you', 'whenriu'],
  ['because', "'cause"],
  ['with us', 'wi-THÂs'],
  ['being', 'bing'],
  ["and i'm", 'eenãm'],
  ['pe h(im|er)', '-p$1'],
  ['ing h(im|er)', 'ing$1'],
  ['\\bis\\b', 'iz'],
  // ['the ', 'dâh '],
  // ['you', 'yah'],
  ['what you', 'wha-tch-yah'],
  ['about it', 'abou-rêt'],
  ['saw it', 'sóêt'],
  ['But I', 'bâârai'],
  ['nt(a|e|i|o|u)', 'n$1'],
  ["what's", 'watts'],
  ['with the', 'ui-thee'],
  ["it's a", 'tsuh'],
  ['i am', 'aiem'],
  ["i'm", 'amm'],
  ['what do you', 'whatcha'],
  ['what have you', 'whatcha'],
  ['what are you', 'whatcha'],
  ['some more', "s'more"],
  ['used to', 'usta'],
  ['each of you', 'etchâviu'],
  ['did you', 'djəh'],
  ['d your', '-dyour'],
  ['your', 'yər'],
  ["you're", 'yər'],
  ['t you', '-tchiu'],
  ['you', 'yə'],
  ['\\bi\\b', 'ai'],
  ['me ', '-M'],
  ['m ', '-M'],
  ['ve i', 'vi', false],
  ["isn't it", 'innit'],
  ['out of', 'outta'],
  ['need to', 'niddâ', 'nidu'],
  ['thinking about', 'thinkêrêbou'],
  ['we always', 'we.ouss'],
  ['think you should', 'i thinkushould'],
  ['ask this ', 'aSsis'],
  ['to his', 'tuuzzs'],
  ['is there', 'isde:'],
  ['got to', 'garâh'],
  ['get to', 'ge.to'],
  ['something ', 'sãm-thên-g'],
  ['i will', 'auh'],
  ["i'll", 'auh'],
  ['t you', 'tchyah'],
  ['lot of s', 'loras'],
  ['a lot of', 'alotta'],
  ['what', 'wha'],
  ["should've", 'shulrah'],
  ['should have', 'shulrah'],
  ["we'd have", 'we.rave'],
  ['we would have', 'we.rave'],
  ['could have', 'kurah'],
  ["could've", 'kurah'],
  ['want to', 'wanna'],
  ['to the', 'dârah'],
  ['which is', 'wichis'],
  ['that he', 'thaddi'],
  ["would've", 'wurah'],
  ['would have', 'wurah'],
  ['must have', 'mustah'],
  ["must've", 'mustah'],
  ["can't it", 'cannê'],
  ["can't even", 'canddiven'],
  ['ought to', 'oughrah'],
  ['do you', "d'you"],
  ["it's the", "it'sâh"],
  ['it is the', "it'sâh"],
  ['let just', 'letjust'],
  ['and also', 'enolsol'],
  ['and i also', 'enaolsol'],
  ['does this have', 'dâzês.ave'],
  ['does that', 'zat'],
  ['nd that', 'n.nat'],
  ['does this', 'dâzes'],
  ['as him', 'asim'],
  ['asked (him|her|if)', 'esT.$1'],
  ['ve h(er|him)', '-v$1'],
  ['s of y', 'səy'],
  ['of what', 'ovuat'],
  ['of\\b', 'ov'],
  ['as well as', 'as wellas'],
  ['if all goes well', 'ifal goesuell'],
  ['in our', 'inour'],
  ['trying to', 'truiaida '],
  ['taking to', 'teikinda'],
  ['get to', 'getâ'],
  ['it has', 'idas'],
  ['s have', '.sêv'],
  ['s ha', 'sa'],
  ['to that', 'râ that'],
  ['can i', 'canai'],
  ['i want you to', 'iuan tchê rê'],
  ["think i'm", 'thinkM'],
  ['heard anything', 'heardything'],
  ["there's a", 'deza'],
  ['cause', 'kêz'],
  ['z th', 'z'],
  ["'s", "'z"],
  ['de (of\\b)', '-ddə'],
  ['de o', '-ddo'],
  ['With an accident', 'withanAccident'],
  ['why would they', 'ua rdey'],
  ['how would i', 'rauurai'],
  ['would he', 'uâri'],
  ['would (a|e|i|o|u)', `u-r$1`],
  ["and I'd always", 'anai-rolways'],
  ["and it'll", "anir'll"],
  ['and this', 'anis'],
  ['and w', 'anw'],
  ['t to\\b', '.râh'],
  ['t do\\b', 'tchâh'],
  ["why he's so", 'whaiSS so'],
  ['an example', 'anexample'],
  ["and that's", 'anets'],
  ['on that', 'onet'],
  ['getting that', 'geinat'],
  ['saying that', 'sayinat'],

  ['try to', 'tryrâ'],
  ['there is', 'theris'],
  ['watching a', 'watchina'],
  ['wish i', 'wishai'],
  ['with all', 'withou'],
  ['did i ever tell you', 'dirai ever tellyou'],
  ["How'd you", 'howdju'],

  ['about anything', 'abouranything'],
  ["l'm actually", "i'machually"],
  ['go together', 'gorogether'],
  // ['if he', 'ife'],
  ['build her', 'builder'],
  ['Maybe he', 'maybe i '],
  ["don't", 'ron'],
  ['died in there', 'dairiner'],
  ['them all', 'themou'],
  ['something in the', 'sometinina'],
  ['that in', 'tharin'],
  ['was', 'waz'],
  ['that is', 'thadis'],
  ['for the', 'fôthê'],
  ["didn't", 'rin'],
  ["doesn't", 'doesn'],
  // ['n you', 'nyou'],
  ['with this', 'withis'],
  ['should we', 'shou-we'],
  ['and i', 'enai'],
  ["'ve", 'V'],
  ['How do', 'how-ddə'],
  ['ing\\b', 'in'],
  ['(v|p|t|k)ed\\b', '$1t'],
  ['t h', "-t'h"],
  ['ve th', '-Vth'],
  ['ve\\b', '-v'],
  ['n these', 'niz'],
  ['n the\\b', 'nnah'],
  ['have to', 'hafta'],
  ['t are you', 'tcha'],
  ['cause s', 'causs'],
  ['out in', 'a··in'],
  [' will', "'ll"],
  ['r (o|a|e|i|u)', '-r$1'],
  ['r h', '-rr'],
  ['t h', '.dd'],
  ['s w', '.su'],
  ['o w', 'oW'],
  ['y i', 'y-i'],
  ['t p', 'p'], //get pregnant
  // ['where are you', 'whereya'],
  ['nt o', '-no'],
  ['v the', '-Vthe'],
  ['\\bthem\\b', "'em"],
  ['\\bhim\\b', 'im'],
  ['\\bhis\\b', 'is'],
  ['\\bher\\b', 'er'],
  ['d l', 'dl'],
  ['t as', 'ttás'],
  ['t a', 'ttê'],
  ['n th', 'n'],
  ['d to', '-dâh'],

  ['t i\\b', 'ddai'],
  ['t i\\b', 'ddi'],
  ['d i\\b', 'rai'],
  ['n one', 'nuone'],
  // ['d ', ''],
  ['t t', '.t'],
  // ['t ', ''],
  ['how to', 'rawdə'],
  // ["(n|v|p|g|s|m|k|(?<!f)f|th|r|l) (h(?!as)|')?(a|e|i|o|w|u|y)", '-$1$3'],
  ['(y|i) s', '.$1s'],
  ['d a', 'da'],
  ['e (ea|i|y)', 'y'],
  ['have a', 'ha:va'],
  ['ch o', "ch'o"],
  ['ne o', 'no'],
  ['t l ', 'tl'],
  ['ate a', 'eira'],
  ['v it', '-vit'],
  ['te a', 'ra'],
  ['e a', 'eya.'],
  ['m i', 'mi'],
  [' to\\b', ' râ'],
  ['he i', 'hei'],
  ['re o', 'ro'],
  ['z (a|e|i|u)', 'z$1'],
  ['n m', '.m'],
  ['if we', 'ife', false],
  ['on râ', 'on to'],
  ['(?<!h)e e', 'e'],
  ['s s', '-s'],
]

// dict.slice(90, 100).forEach(v => {
//   console.log(v[0], '👉', v[1])
// })

function generateConnected(frase) {
  console.log(frase)
  const steps = []

  const sentenceConnected = myDict.reduce((acc, curr) => {
    const replaced = curr
      ? acc.replace(new RegExp(curr[0], 'gi'), curr[1])
      : acc
    if (acc !== replaced) console.log('       R:', curr[0])
    if (acc !== replaced) {
      steps.push(replaced.replace('\n', ''))
      console.log(replaced.replace('\n', ''))
    }
    return replaced
  }, frase)

  return {
    sentenceConnected,
    steps,
  }
}

// const readlineSync = require('readline-sync')
// async function app() {
//   const fraseInput = readlineSync.question('frase: ')

//   generateConnected(fraseInput)

//   console.log('\n------------------\n')

//   // console.log(frase.replace(/\.|\n/g, ''))
//   // console.log('\n------------------\n\n\n')
//   // app()
// }

// app()

//But I click on every video and i'm being open about it
//the women will go to the store because they want to buy shoes
// but we hadn't heard from Meg all day
// I tried to get to my kids, whose rooms were on opposite floors.
// i'd like each of you to pick a name
// so i want you to pay attention to this one
// We'll never know if we don't try to help her
// Thought I was supposed to stay in my room for the rest of my life
// The truth is, this technology is in its infancy,
// I don't want you to get the impression
// by then and I went on the
