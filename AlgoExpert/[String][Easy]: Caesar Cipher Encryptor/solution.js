/**
 * 
 * @param {string} string
 * @param {number} key
 * @returns {string}
 */

function caesarCipherEncryptor (string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newString = ''

  for (const letter of string) {
    newString += alphabet[(alphabet.indexOf(letter) + key) % 26]
  }
  return newString
}


console.log(caesarCipherEncryptor("xyz", 2)) // "zab"