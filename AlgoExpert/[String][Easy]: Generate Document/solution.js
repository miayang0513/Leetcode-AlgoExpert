/**
 * 
 * @param {string} characters 
 * @param {string} document 
 * @returns {boolean}
 */

// 1. characters & document may be an empty string.
// 2. only be able to generate docs if frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string.
// 3. can always generate the empty string "".


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

// O(n + m) time | O(c) space, where n is the length of characters, m is the length of document
// and c is the number of unique characters in the characters string.

console.log(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")) // true