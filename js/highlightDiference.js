function getDiference(beforeStr, afterStr) {
  const afterStrWords = afterStr.split(' ')
  const beforeStrWords = beforeStr.split(' ')

  return afterStr.split('').reduce(
    (acc, curWord, index) => {
      let newAcc = [...acc]

      if (newAcc[newAcc.length - 1] === 0) {
        newAcc[newAcc.length - 1].push(curWord)
        return newAcc
      }
      if (beforeStrWords[index] !== afterStrWords[index]) {
        return [...acc, [curWord]]
      } else {
        newAcc[newAcc.length - 1].push(curWord)
        return newAcc
      }
    },
    [[]]
  )
}

console.log(
  getDiference(
    'Show as that there is something inside you that is good.',
    'Show as that there is sãm-thên-ginside you that is good.'
  )
)

function highLightDiference(steps) {
  return steps.reduce((acc, cur) => {
    if (acc.length === 0) return [cur]
    else if (cur !== acc.slice(-1)[0]) {
    }
    return acc
  }, [])
}
