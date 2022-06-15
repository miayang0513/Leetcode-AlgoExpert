/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return check(s, left + 1, right) || check(s, left, right - 1)
    }
    left++
    right--
  }

  return true
}

const check = (s, left, right) => {
  while(left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(validPalindrome('acxcybycxcxa')) // true
console.log(validPalindrome('tcaac')) // true
console.log(validPalindrome('aba')) // true
console.log(validPalindrome('abca')) // true
console.log(validPalindrome('abc')) // false
console.log(validPalindrome('aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga')) // true