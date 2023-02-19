/**
 * 
 * @param {string[]} words 
 * @returns {string[][]}
 */

// 1. words is array of unique string and it may be an empty array.
// 2. The order of the returned pairs and the order of the strings within each pair does not matter.

function semordnilap(words) {
  const semordnilapMap = {}
  const answer = []

  for (const word of words) {
    if (word in semordnilapMap) {
      answer.push([word, semordnilapMap[word]])
    } else {
      const reverseWord = word.split('').reverse().join('')
      semordnilapMap[reverseWord] = word
    }
  }

  return answer
}

// O(n + m) time | O(s), where n is the length of the input array, m is the length of the longest word and s is the number of different string