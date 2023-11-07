function getSelectionText() {
  var text = ''
  if (window.getSelection) {
    text = window.getSelection().toString()
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  return text
}

document.addEventListener('keydown', e => {
  if (!e.ctrlKey) return
  const text = getSelectionText()
  if (e.key.toLowerCase() === 'y' && text) {
    e.preventDefault()
    window.open('https://youglish.com/pronounce/' + text, '_blank')
  }
  if (e.key.toLowerCase() === 'f' && text) {
    e.preventDefault()
    window.open('https://yarn.co/yarn-find?text=' + text, '_blank')
  }
})
