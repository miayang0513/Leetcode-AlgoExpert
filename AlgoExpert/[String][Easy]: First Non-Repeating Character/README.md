# [First Non-Repeating Character](https://www.algoexpert.io/questions/first-non-repeating-character)

`Easy` `String`

### Question

Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

**Sample Input**
```js
string = "abcdcaf"
```

**Sample Output**
```js
1 // The first non-repeating character is "b" and is found at index 1.
```

### My Solution
```js
/**
 * 
 * @param {string} string 
 * @returns {string}
 */
function firstNonRepeatingCharacter (string) {
  const charMap = {}

  for (const char of string) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (let index = 0; index < string.length; index++) {
    if (charMap[string[index]] === 1) {
      return index
    }
  }

  return -1
}
```
