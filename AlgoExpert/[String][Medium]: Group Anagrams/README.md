# [Group Anagrams](https://www.algoexpert.io/questions/group-anagrams)

`Medium` `String`

### Question
Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

Your function should return a list of anagram groups in no particular order.

**Sample Input**
```js
words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
```

**Sample Output**
```js
[["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
```

### My Solution
```js
/**
 * 
 * @param {string[]} words 
 * @returns {string[][]}
 */
function groupAnagrams (words) {
  const anagramMap = {}
  for (let i = 0; i < words.length; i++) {
    const keyArray = new Array(26).fill(0)
    for (const char of words[i]) {
      keyArray[char.charCodeAt() - 97]++
    }
    const key = keyArray.join('')
    if (key in anagramMap) {
      anagramMap[key].push(words[i])
    } else {
      anagramMap[key] = [words[i]]
    }
  }

  return Object.values(anagramMap)
}
```
