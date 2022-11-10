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
function longestPalindromicSubstring (string) {
  let longestInterval = [0, 1]
  for (let i = 0; i < string.length - 1; i++) {
    const even = getPalindromicInterval(string, i, i + 1)
    const odd = getPalindromicInterval(string, i, i + 2)
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    longestInterval = longestInterval[1] - longestInterval[0] > longest[1] - longest[0] ? longestInterval : longest
  }

  return string.slice(longestInterval[0], longestInterval[1] + 1)
}

function getPalindromicInterval (string, left, right) {
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break
    left--
    right++
  }
  return [left + 1, right - 1]
}
```
