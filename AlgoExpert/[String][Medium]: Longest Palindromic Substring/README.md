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
  let longestLeft = 0
  let longestRight = 0
  for (let mid = 0.5; mid < string.length - 1; mid += 0.5) {
    let left = Math.floor(mid) - mid !== 0 ? Math.floor(mid) : mid - 1
    let right = Math.ceil(mid) - mid !== 0 ? Math.ceil(mid) : mid + 1

    while (left >= 0 && right <= string.length - 1) {
      if (string[left] !== string[right]) {
        break
      }

      if ((longestRight - longestLeft) < (right - left)) {
        longestLeft = left
        longestRight = right
      }
      left--
      right++
    }
  }
  return string.slice(longestLeft, longestRight + 1)
}
```
