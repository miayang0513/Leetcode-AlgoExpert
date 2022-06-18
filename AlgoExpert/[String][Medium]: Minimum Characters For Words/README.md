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
function validIPAddresses (string) {
  const ans = []

  if (string.length < 4) {
    return ans
  }

  for (let i = 0; i < 4; i++) {
    const currentIPAddress = ['', '', '', '']

    currentIPAddress[0] = string.slice(0, i)
    if (!checkValid(currentIPAddress[0])) {
      continue
    }

    for (let j = i + 1; j < i + Math.min(string - i, 4); j++) {
      currentIPAddress[1] = string.slice(i, j)
      if (!checkValid(currentIPAddress[1])) {
        continue
      }
      for (let k = j + 1; k < j + Math.min(string - j, 4); k++) {
        currentIPAddress[2] = string.slice(j, k)
        currentIPAddress[3] = string.slice(k)
        if (checkValid(currentIPAddress[2]) && checkValid(currentIPAddress[3])) {
          ans.push(currentIPAddress.join('.'))
        }
      }
    }
  }

  return ans
}

function checkValid (num) {
  const string2Int = parseInt(num)

  if (string2Int > 255) {
    return false
  }
  return num.length === string2Int.toString().length
}

```
