/**
 * 
 * @param {string} string 
 * @returns {string}
 */

// 1. string of lowercase alphabet.
// 2. the input string may be an empty string.
// 3. if the input string doesn't have any non-repeating char, then return -1.

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

// O(n) time | O(1) space, where n is the length of the input string
// The constant space is because the input string only has lowercase English-alphabet letters
// Thus, the hash table will never have more than 26 character.
console.log(firstNonRepeatingCharacter("abcdcaf")) // 1