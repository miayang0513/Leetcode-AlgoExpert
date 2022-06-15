/**
 * 
 * @param {string} string 
 * @returns {string}
 */
function firstNonRepeatingCharacter (string) {
  const charMap = {}

  for (const char of string) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (let index = 0; index < string.length; index++) {
    if (charMap[string[index]] === 1) {
      return index
    }
  }

  return -1
}
console.log(firstNonRepeatingCharacter("abcdcaf")) // 1