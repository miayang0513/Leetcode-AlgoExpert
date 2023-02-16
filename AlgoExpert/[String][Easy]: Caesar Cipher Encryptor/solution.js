/**
 * 
 * @param {string} string
 * @param {number} key
 * @returns {string}
 */

// 1. non-empty string of lowercase.
// 2. non-negative key.
// 3. ASCII: a - z => 97 - 122

function caesarCipherEncryptor(string, key) {
  let answer = ''

  for (const s of string) {
    const oldPosition = s.charCodeAt(0) - 97
    const newPosition = (oldPosition + key) % 26
    answer += String.fromCharCode(97 + newPosition)
  }

  return answer
}

// O(n) time | O(n) space, where n is the length of string.


console.log(caesarCipherEncryptor("xyz", 2)) // "zab"