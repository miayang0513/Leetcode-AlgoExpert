/**
 * 
 * @param {string} string 
 * @returns {string}
 */
function reverseWordsInString (string) {
  const wordArray = []
  let currentItem = ''

  for (const char of string) {
    if (char === ' ' && currentItem.trim().length === currentItem.length) {
      wordArray.push(currentItem)
      currentItem = char
    } else if (char !== ' ' && currentItem.trim().length !== currentItem.length) {
      wordArray.push(currentItem)
      currentItem = char
    } else {
      currentItem += char
    }
  }
  wordArray.push(currentItem)

  let reverseString = ''
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseString += wordArray[i]
  }

  return reverseString
}

console.log(reverseWordsInString("AlgoExpert is the best!"))
console.log(reverseWordsInString("whitespaces    4"))