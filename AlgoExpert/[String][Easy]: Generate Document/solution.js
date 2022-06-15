/**
 * 
 * @param {string} characters 
 * @param {string} document 
 * @returns {boolean}
 */
function generateDocument (characters, document) {
  const charMap = {}

  for (const char of characters) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (const char of document) {
    if (!(char in charMap) || charMap[char] === 0) {
      return false
    }

    charMap[char]--
  }

  return true
}

console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")) // true