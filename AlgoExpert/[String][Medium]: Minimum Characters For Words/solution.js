/**
 * 
 * @param {string[]} words 
 * @returns {string[]}
 */
function minimumCharactersForWords (words) {
  const minimumMap = {}

  for (const word of words) {
    const currentMinimumMap = {}
    for (const char of word) {
      currentMinimumMap[char] = currentMinimumMap[char] + 1 || 1
    }
    for (const char of Object.keys(currentMinimumMap)) {
      if (char in minimumMap) {
        minimumMap[char] = Math.max(minimumMap[char], currentMinimumMap[char])
      } else {
        minimumMap[char] = currentMinimumMap[char]
      }
    } 
  }

  const ans = []
  for (const char of Object.keys(minimumMap)) {
    for (let i = 0; i < minimumMap[char]; i++) {
      ans.push(char) 
    }
  }

  return ans
}


console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]))
/**
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.
 */