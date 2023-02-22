# [Minimum Characters For Words](https://www.algoexpert.io/questions/minimum-characters-for-words)

`Medium` `String`

### Question
Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.

For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you", "or", "yo"].

Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.

**Sample Input**
```js
words = ["this", "that", "did", "deed", "them!", "a"]
```

**Sample Output**
```js
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.
```

### My Solution
```js
/**
 * 
 * @param {string} string 
 * @returns {string[]}
 */

function minimumCharactersForWords(words) {
  const charMap = {}

  for (const word of words) {
    const currentCharMap = {}

    for (const char of word) {
      if (char in currentCharMap) {
        currentCharMap[char]++
      } else {
        currentCharMap[char] = 1
      }
    }

    for (const key of Object.keys(currentCharMap)) {
      if (key in charMap) {
        charMap[key] = Math.max(charMap[key], currentCharMap[key])
      } else {
        charMap[key] = currentCharMap[key]
      }
    }
  }

  const answer = []

  for (const key of Object.keys(charMap)) {
    answer.push(...new Array(charMap[key]).fill(key))
  }

  return answer
}

// O(w*n) time | O(c) space, where w is the length of the words, n is the length of the longest word and c is the number of unique characters.

```
