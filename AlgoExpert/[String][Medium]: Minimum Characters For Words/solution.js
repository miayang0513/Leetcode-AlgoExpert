/**
 * 
 * @param {string[]} words 
 * @returns {string[]}
 */
function minimumCharactersForWords (words) {
  const charMap = {}

  for (const word of words) {
    const currentCharMap = {}
    for (const char of word) {
      if (char in currentCharMap) {
        currentCharMap[char]++
        if (char in charMap) {
          charMap[char] = Math.max(currentCharMap[char], charMap[char])
        }
      } else {
        currentCharMap[char] = 1
        if (!(char in charMap)) {
          charMap[char] = 1
        }
      }
    }
  }

  const answer = []

  for (const char in charMap) {
    const arr = new Array(charMap[char]).fill(char)
    answer.push(...arr)
  }

  return answer
}

console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]))
/**
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.
 */