/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const letterMap = {}
  for (const letter of s) {
    if (letter in letterMap) {
      letterMap[letter]++
    } else {
      letterMap[letter] = 1
    }
  }

  let length = 0
  let needAddOne = false
  for (letter of Object.keys(letterMap)) {
    if (letterMap[letter] % 2 === 0) {
      length += letterMap[letter]
    } else {
      length += letterMap[letter] - 1
      if (letterMap[letter] % 2 === 1) {
        needAddOne = true
      }
    }
  }
  return needAddOne ? length + 1 : length
}

console.log(longestPalindrome('ccc')) // 7