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
  const text = getSelectionText()
  if (e.key.toLowerCase() === 'y' && text) {
    window.open('https://youglish.com/pronounce/' + text, '_blank')
  }
  if (e.key.toLowerCase() === 'f' && text) {
    window.open('https://yarn.co/yarn-find?text=' + text, '_blank')
  }
})
