# [Longest Palindromic Substring](https://www.algoexpert.io/questions/longest-palindromic-substring)

`Medium` `String`

### Question
Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.

**Sample Input**
```js
string = "abaxyzzyxf"
```

**Sample Output**
```js
"xyzzyx"
```

### My Solution
```js
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
```
