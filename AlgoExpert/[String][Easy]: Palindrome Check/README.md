# [Palindrome Check](https://www.algoexpert.io/questions/palindrome-check)

`Easy` `String`

### Question

Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

**Sample Input**
```js
string = "abcdcba"
```

**Sample Output**
```js
true // it's written the same forward and backward
```

### My Solution
```js
/**
 * 
 * @param {string} string 
 * @returns {boolean}
 */

function isPalindrome (string) {
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
```
