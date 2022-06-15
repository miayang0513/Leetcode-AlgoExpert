# [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)
`Easy` `String`

### Question 
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 
**Example 1:**
```
Input: s = "aba"
Output: true
```
**Example 2:**
```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
```
**Example 3:**
```
Input: s = "abc"
Output: false
```

**Constraints:**
* 1 <= s.length <= 10^5
* s consists of lowercase English letters.

### My Solution
```js
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
```