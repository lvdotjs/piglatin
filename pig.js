const pigIt = (str) => {
  if (typeof str !== 'string') {
    throw new Error('that is not a string, dude')
  }

  let newString = ''

  const words = str.split(/\s+/g)


  words.forEach((word, index) => {
    const firstLetter = word[0]
    const restOfIt = word.slice(1)

    // If this is a _real_ word...
    const isRealWord = /\w/.test(word)
    if (isRealWord) {
      newString += `${restOfIt}${firstLetter}`
      newString += 'ay'
    } else {
      newString += `${word}`
    }

    // If NOT the last item, add some space.
    const isLastItem = index === words.length - 1
    if (!isLastItem) {
      newString += ' '
    }
  })


  return newString
}
