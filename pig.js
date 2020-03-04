const pigIt = (str) => {
  if (typeof str !== 'string') {
    throw new Error('that is not a string, dude')
  }

  const words = str.split(/\s+/g)

  return words.reduce((accumulator, word) => {
    const firstLetter = word[0]
    const restOfIt = word.slice(1)
    return /\w/.test(word)
      ? [...accumulator, `${restOfIt}${firstLetter}ay`]
      : [...accumulator, word]
  }, [])
    .join(' ')
}
