/**
 * 
 * @param {string} string 
 * @returns {string}
 */

function reverseWordsInString(string) {
  const words = []
  let currentWord = ''
  for (let i = 0; i < string.length; i++) {
    const current = string[i]

    if (current === ' ') {
      words.push(currentWord)
      words.push(' ')
      currentWord = ''
    } else {
      currentWord += current
    }
  }

  words.push(currentWord)

  const answer = new Array(words.length).fill('')
  for (let i = 0; i < words.length; i++) {
    answer[i] = words[words.length - 1 - i]
  }
  return answer.join('')
}

// O(n) time | O(n) space, where n is the length of string

console.log(reverseWordsInString("AlgoExpert is the best!"))
console.log(reverseWordsInString("whitespaces    4"))