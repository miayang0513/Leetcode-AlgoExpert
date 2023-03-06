/**
 * @param {string} phoneNumber
 * @returns {string[]}
 */

function phoneNumberMnemonics(phoneNumber) {
  const map = {
    '0': ['0'],
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  const mnemonics = []
  const currentMnemonic = new Array(phoneNumber.length).fill('0')

  const helper = (index, currentMnemonic) => {
    if (index === phoneNumber.length) {
      mnemonics.push(currentMnemonic.join(''))
    } else {
      for (const letter of map[phoneNumber[index]]) {
        currentMnemonic[index] = letter
        helper(index + 1, currentMnemonic)
      }
    }
  }

  helper(0, currentMnemonic)

  return mnemonics
}

// O(4^n * 4) time | O(4^n * 4) space
// n is the length of the phone number 
