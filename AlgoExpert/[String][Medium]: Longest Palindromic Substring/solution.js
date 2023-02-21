/**
 * 
 * @param {string} string 
 * @returns {string}
 */

// 1. single-character string is palindromes.
// 2. only one longest.

function longestPalindromicSubstring(string) {
  if (string.length < 2) return string

  let longest = ''
  for (let i = 1; i < string.length; i++) {
    const odd = findPalindromicSubstring(string, i-1, i)
    const even = findPalindromicSubstring(string, i - 1, i + 1)
    const current = odd.length > even.length ? odd : even
    longest = longest.length > current.length ? longest : current
  }

  return longest
}

function findPalindromicSubstring (string, left, right) {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) {
      break
    }
    left--
    right++
  }
  return string.slice(left + 1, right)
}


// O(n^2) time | O(n) space

console.log(longestPalindromicSubstring("abaxyzzyxf")) // xyzzyx