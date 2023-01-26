let myDict = [
  ['what do you', 'wha-r-yah'],
  ["i'm going to", 'ahmma'],
  ["i'm gonna", 'ahmma'],
  ['k who', '-ko'],
  ['this is the', 'thi-si-zdə'],
  ['this is', 'thi-siz'],
  ['you were to', 'you ədə'],
  ['can', 'ken'],
  ['his', 'hiz'],
  ['\\bus\\b', 'as'],
  ['came', 'keim'],
  ['ne tod', 'n-rəd'],
  ['\\bout\\b', 'aut'],
  ['at h(is|er|im|iz)', 'e-r$1'],
  ['\\bat\\b', 'et'],
  ['me in', 'mi-en'],
  ['nd him', 'n-dêm'],
  ['nd her', 'n-dêr'],
  ['what it is', 'wha-ri-riz'],
  ['what (a|e|i|o|u|á|é|í|ó|ú|y|ə)', 'wha-r$1'],
  ['see', 'sii'],
  ["that i'm", 'tha-raimm'],
  ["that all", "tha-róll"],
  ["that a", "tha-re"],
  ["isn't it", 'innit'],
  ["t it w", "tê-w"],
  ['these', 'thiz'],
  ['because it', "b'kazə"],
  ['out of', 'outta'],
  ['need to', 'niddâ', 'nidu'],
  ['which one of', 'whə-tchu-on-nəv'],
  ['thinking about', 'thin-kə-rə-bau'],
  ['we always', 'we.ouss'],
  ['think you should', 'i thin-kyu-shuud'],
  ['ask this ', 'aSsis'],
  ['to his', 'tuuzzs'],
  ['is there', 'isde:'],
  ["they're", 'ther'],
  ['got to', 'garə'],
  ['get to', 'ge.to'],
  ['something ', 'sãm-thên-g'],
  ['i will', 'auh'],
  ["i'll", 'auh'],
  ['t you', 'tchyah'],
  ['lot of s', 'loras'],
  ['a lot of', 'alora'],
  ['\\bwhat\\b', 'wha'],
  ["should've", 'shulrah'],
  ['should have', 'shulrah'],
  ["we'd have", 'we.rave'],
  ['we would have', 'we.rave'],
  ['could have', 'kurah'],
  ["could've", 'kurah'],
  ['want to get', 'wan-rə-get'],
  ['wants to', 'wan-stə'],
  ['want to', 'wanna'],
  ['to the', 'dârah'],
  ['which is', 'wichis'],

  ['that he', 'tha-ri'],
  ["would've", 'wurə'],
  ['would have', 'wurə'],
  ['must have', 'mustə'],
  ["must've", 'mustə'],
  ["can't it", 'ke-nnê'],
  ["can't even", 'ken-riven'],
  ['even', 'iven'],
  ['ought to', 'ough-rə'],
  ['do you', "d'yə"],
  ["it's the", "it'sâh"],
  ['it is the', "it'sâh"],
  ['let just', 'le-tjust'],
  ['and also', 'ə-nol-sôl'],
  ['and i also', 'ə-na-also'],
  ['does this have', 'dâzês.ave'],
  ['does that', 'zat'],
  ['nd that', 'n.nat'],
  ["'?t th", '-th'],
  ['does this', 'dâzes'],
  ['as him', 'asim'],
  ['asked (him|her|if)', 'esT.$1'],
  ['that i\\b', 'tha-rai'],
  ['Read h(im|er|is|iz)', 'ri-d$1'],
  ['(ɹi|ɹe|re|a)d him', '-dêm'],
  ['(ɹi|ɹe|re|a)d him', '-dêr'],
  ['m h(im|er|is|iz)', '-M$1'],
  ['(k)e? h(im|er|is|iz)', '-$1$2'],
  ['gonna', 'gon'],
  ['t do\\b', 'tchú'],
  ['\\bthrough the\\b', 'thruu-di'],
  ['\\bthrough\\b', 'thruu'],
  ['going to', 'gonna'],
  ['re it\\b', 'ri'],
  ['st of\\b', 's-təv'],
  ['t of\\b', '-rəv'],
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
  ['\\bhere\\b', 'hiə'],
  ['what you', 'wha-tch-yah'],
  ['ing my', '-imə'],
  ['thought of', 'thórov'],
  ['about it', 'abou-rêt'],
  ['saw it', 'sóêt'],
  ['But I', 'bâârai'],
  ['nt(a|e|i|o|u|á|é|í|ó|ú|ə)', 'n$1'],
  ['p (a|e|i|o|u|á|é|í|ó|ú|ə)', '-p$1'],
  ['how (do|to)', 'haw-rə'],
  ["what's", 'watts'],
  ['with the', 'ui-thee'],
  ["it's a", 'tsuh'],
  ['i am', 'aiem'],
  ["i'm", 'amm'],
  ['et (a|e|i|o|u|á|é|í|ó|ú|ə)', 'e-r$1'],
  ['what do you', 'whatcha'],
  ['what have you', 'whatcha'],
  ['what are you', 'whatcha'],
  ['some more', "s'more"],
  ['used to', 'usta'],
  ['each of you', 'etchâviu'],
  ['did you', 'djəh'],
  ['when he', 'whe-ni'],
  ['d your', '-dyour'],
  ['your', 'yər'],
  ["you're", 'yər'],
  ['t you', '-tchiu'],
  ['you', 'yə'],
  ['\\bi\\b', 'ai'],
  ['\\bThe a', 'Thi-a'],
  ['\\bface\\b', 'feiss'],
  ['(w)me? (a|e|i|o|u|á|é|í|ó|ú|ə)', '$1-M$2'],
  ['ve i', 'vi', false],

  ['ve h(er|him)', '-v$1'],
  ['s of y', 'səy'],
  ['of what', 'ovuat'],
  ['of\\b', 'əv'],
  ['as well as', 'as wellas'],
  ['if all goes well', 'ifal goesuell'],
  ['in our', 'inour'],
  ['trying to', 'truiaida '],
  ['taking to', 'teikinda'],
  ['to get', 'râget'],
  ['get to', 'getâ'],
  ['it has', 'idas'],
  ['s have', '.sêv'],
  ['s ha', 'sa'],
  ['to that', 'râ that'],
  ['can i', 'canai'],
  ['i want you to', 'iuan-tchê-rê'],
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
  ['would', 'wəd'],
  ['would (a|e|i|o|u|á|é|í|ó|ú|ə)', `u-r$1`],
  ['would (a|e|i|o|u|á|é|í|ó|ú|y|ə)', 'u-d$1'],
  ["and I'd always", 'anai-rolways'],
  ["and it'll", "anir'll"],
  ['and this', 'anis'],
  ['and w', 'anw'],
  ['t to\\b', '-râh'],
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
  ['with all', 'wi-thól'],
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
  ['\\bwas\\b', 'waz'],
  ['\\ball\\b', 'óll'],
  ['\\bour\\b', 'aɹ'],
  ['that is', 'thadis'],
  ['for the', 'fôthê'],
  ["didn't", 'rin'],
  ["doesn't", 'doesn'],
  // ['n you', 'nyou'],
  ['with this', 'withis'],
  ['should we', 'shou-we'],
  ['and i', 'enai'],
  ["'ve", 'V'],

  ['\\bask th(em|ese|at)', 'es-t$1'],
  ['d them', '-dem'],
  ['ss them', '-ssəm'],
  // ['ing\\b', 'in'],
  ['(v|p|t|k)ed\\b (a|e|i|o|u|ə)', '$1-t$2'],
  ['ned\\b (a|e|i|o|u|ə)', 'n-d$1'],
  ['(k|p|f|g)ed the', '$1t-thi'],
  ['(?<!r)(v|p|t|k|n)ed\\b', '$1t'],
  ['t h', "-t'h"],
  ['ve th', '-Vth'],
  ['m to\\b', 'm:rə'],
  ['n these', 'niz'],
  ['n the\\b', 'nnah'],
  ['have to', 'hafta'],
  ['t are you', 'tcha'],
  ['cause s', 'causs'],
  ['out in', 'a··in'],
  [' will', "'ll"],
  ['re? (a|e|i|o|u|á|é|í|ó|ú|ə)', 'r-ɹ$1'],
  ['r h', '-rr'],
  ['ble', 'bl'],
  ['t h', '.dd'],
  ['s w', '.s(u)w'],
  ['o w', '-oW'],
  ['y i', '-yi'],
  ['t p', 'p'], //get pregnant
  // ['where are you', 'whereya'],
  ['nt o', '-no'],
  ['v the', '-Vthe'],

  ['d l', 'dl'],
  ['t as', '-ttás'],
  // ['t a', 'ttê'],
  ['ot a', 'o-ra'],

  ['n th(?!r)', 'n'],
  ['ne th(?!r)', 'n-th'],
  ['d to', '-dâh'],

  ['t (s)', '-t$1'],
  ['t i\\b', 'ddai'],
  ['t i\\b', 'ddi'],
  ['d i\\b', 'rai'],
  ['n one', 'nuone'],
  ['l?l (a|e|i|o|u|á|é|í|ó|ú|ə)', '-l$1'],
  // ['d ', ''],

  // ['t ', ''],

  // ["(n|v|p|g|s|m|k|(?<!f)f|th|r|l) (h(?!as)|')?(a|e|i|o|w|u|y)", '-$1$3'],
  ['(y|i) s', '.$1s'],
  ['\\bthem\\b', "'em"],
  ['\\bhim\\b', 'im'],
  ['\\bhis\\b', 'is'],
  ['\\bher\\b', 'er'],
  ['d a', '-da'],

  ['have a', 'ha-va'],
  ['ch o', "ch'o"],
  ['ne o', 'no'],
  ['t l ', 'tl'],
  ['ate a', 'eira'],
  ['v it', '-vit'],
  ['te a', 'ra'],
  ['e a', 'eya.'],
  ['m i', 'mi'],
  ['ee', 'i'],
  ['gs to\\b', 'g-stchə'],
  ['(!?gs) to\\b', ' râ'],
  ['he i', 'hei'],
  ['re o', 'ro'],
  ['ing the', 'inə'],
  ["isn't the", 'izn-thii'],

  ['and', 'an'],
  ['ide (you|yə)', 'i-dju'],
  ['(?<=\\w)(m|k|r|f)e\\b', '$1'],
  ['m (a|e|i|o|u|á|é|í|ó|ú|y|w|ə)', '-m$1'],
  ['z (a|e|i|o|u|á|é|í|ó|ú|y|ə)', '-z$1'],
  ['ce (a|i|o|u|á|í|ó|ú|y|ə)', '-ç$1'],
  ['n (a|e|i|o|u|á|é|í|ó|ú|y|ə)', '-n$1'],
  ['(?<!s)s (a|e|i|o|u|á|é|í|ó|ú|y|ə)', '-z$1'],
  ['ss (a|e|i|o|u|á|é|í|ó|ú|y|ə)', 's-s$1'],
  ['(?<=a|e|i|o|u|r|ə)(t|d)+e?\\s?(a|e|i|o|u|á|é|í|ó|ú|y|ə)(?!a|k|y)', '-r$2'],
  ['t (a|e|i|o|u|á|é|í|ó|ú|y|ə)', '-t$1'],
  ['(v|u|w) (a|e|i|o|u|á|é|í|ó|ú|y|ə)', '-$1$2'],

  ['(k|p|f|g|bly|ch) (a|e|i|o|u|á|é|í|ó|ú|y|ea|w|ə)', '-$1$2'],
  ['n m', '.m'],
  ['if we', 'ife', false],
  ['go to', 'go-rə'],
  ['on râ', 'on to'],
  ['(?<!h)e e', 'e'],
  ['s s', '-s'],
  ['s th', '-z'],
  ['t t', '.t'],

  ['(s|z) r', '-$1ur'],
  // ['(e|a)r\\b', '$1ɹ'], // terminando com ɹ
  ['mw', 'mu'],
  ['b-', '-b-'],
  ['i i', 'i'],
  ['r r', '-r'],
  ['d d', '-d'],
  ['(r|ɹ) th', 'ɹ-th'],
  ['fwith', 'fwth'],
  ['th d', '-d'],
  ['s h', '-s-h'],
  ['zar', 'zəɹ'],
  // ['ve\\b', 'v'],
]

// dict.slice(90, 100).forEach(v => {
//   console.log(v[0], '👉', v[1])
// })

function generateConnected(frase) {
  console.log(frase)
  const steps = []
  const stepsHtml = []

  const sentenceConnected = myDict.reduce((acc, curr) => {
    const replaceSrt = curr[1].replace(/\./g, '-')
    const queryStr = curr[0]
    const replacedSentence = curr
      ? acc.replace(new RegExp(queryStr, 'gi'), replaceSrt)
      : acc
    const replacedSentenceHtml = curr
      ? acc.replace(
          new RegExp(`${queryStr}(?<rest>[^ ]*)`, 'gi'),
          `<span>${replaceSrt}$<rest></span>`
        )
      : acc
    if (acc !== replacedSentence) console.log('       R:', curr.join(' = '))
    if (acc !== replacedSentence) {
      steps.push(replacedSentence.replace('\n', ''))
      stepsHtml.push(replacedSentenceHtml.replace('\n', ''))
      console.log(replacedSentence.replace('\n', ''))
    }
    return replacedSentence
  }, frase)

  return {
    sentenceConnected,
    steps,
    stepsHtml,
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
