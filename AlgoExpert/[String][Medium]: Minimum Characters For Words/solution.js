/**
 * 
 * @param {string[]} words 
 * @returns {string[]}
 */

function minimumCharactersForWords(words) {
  const charMap = {}

  for (const word of words) {
    const currentCharMap = {}

    for (const char of word) {
      if (char in currentCharMap) {
        currentCharMap[char]++
      } else {
        currentCharMap[char] = 1
      }
    }

    for (const key of Object.keys(currentCharMap)) {
      if (key in charMap) {
        charMap[key] = Math.max(charMap[key], currentCharMap[key])
      } else {
        charMap[key] = currentCharMap[key]
      }
    }
  }

  const answer = []

  for (const key of Object.keys(charMap)) {
    answer.push(...new Array(charMap[key]).fill(key))
  }

  return answer
}

// O(w*n) time | O(c) space, where w is the length of the words, n is the length of the longest word and c is the number of unique characters.

console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]))
/**
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.
 */