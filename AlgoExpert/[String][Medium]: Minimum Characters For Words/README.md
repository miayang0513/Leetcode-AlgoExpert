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
function minimumCharactersForWords (words) {
  const charMap = {}

  for (const word of words) {
    const currentCharMap = {}
    for (const char of word) {
      if (char in currentCharMap) {
        currentCharMap[char]++
        if (char in charMap) {
          charMap[char] = Math.max(currentCharMap[char], charMap[char])
        }
      } else {
        currentCharMap[char] = 1
        if (!(char in charMap)) {
          charMap[char] = 1
        }
      }
    }
  }

  const answer = []

  for (const char in charMap) {
    const arr = new Array(charMap[char]).fill(char)
    answer.push(...arr)
  }

  return answer
}

```
