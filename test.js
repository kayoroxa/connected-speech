const fs = require('fs')
const txt = fs.readFileSync('./export.txt', {
  encoding: 'utf-8',
})

const data = txt.split('\n\n').map(v => v.split('\n'))

// const s = data.filter(([cts, origin]) => cts.match(/[\S]{15,}/g))

function getBiggerWord(sentence) {
  return sentence
    .split(' ')
    .reduce((acc, cur) => (cur.length > acc.length ? cur : acc), '')
}

// const sorted = s.sort((a, b) => {
//   const biggerA = getBiggerWord(a[0])
//   const biggerB = getBiggerWord(b[0])
//   return biggerB.length - biggerA.length
// })

// fs.writeFileSync('./CTS-sorted.json', JSON.stringify(sorted, null, 2))

const wordsUsed = require('./words most used.json')
const sorted = require('./CTS-sorted.json')

console.log(
  sorted
    .filter(([_, rawSentence]) =>
      rawSentence
        .match(/[a-zA-Z][’'a-zA-Z]*/gi)
        .every(w => wordsUsed.slice(0, 500).includes(w.toLowerCase()))
    )
    .map(v => v.join('\n'))
    .join('\n\n')
)
