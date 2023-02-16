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

// 1. non-empty string of lowercase.
// 2. non-negative key.
// 3. ASCII: a - z => 97 - 122

function caesarCipherEncryptor(string, key) {
  let answer = ''

  for (const s of string) {
    const oldPosition = s.charCodeAt(0) - 97
    const newPosition = (oldPosition + key) % 26
    answer += String.fromCharCode(97 + newPosition)
  }

  return answer
}

// O(n) time | O(n) space, where n is the length of string.
```
