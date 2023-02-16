/**
 * 
 * @param {string} string 
 * @returns {boolean}
 */

// 1. non-empty string.
// 2. palindrome is string which is written the same forward and backward.
// 3. single-character strings are palindromes.

function isPalindrome(string) {
  let left = 0
  let right = string.length - 1

  while (left < right) {
    if (string[left] !== string[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

// O(n) time | O(1) space, where n is the length of string

console.log(isPalindrome("abcdcba")) // true