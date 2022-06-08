# [Caesar Cipher Encryptor](https://www.algoexpert.io/questions/caesar-cipher-encryptor)

`Easy` `String`

### Question

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

**Sample Input**
```js
string = "xyz"
key = 2
```

**Sample Output**
```js
"zab"
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
