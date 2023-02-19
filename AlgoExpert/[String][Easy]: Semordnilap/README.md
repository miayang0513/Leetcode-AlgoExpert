# [Semordnilap](https://www.algoexpert.io/questions/semordnilap)

`Easy` `String`

### Question

Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair does not matter.

**Sample Input**
```js
words = ["diaper", "abc", "test", "cba", "repaid"]
```

**Sample Output**
```js
[["diaper", "repaid"], ["abc", "cba"]]
```

### My Solution
```js
/**
 * 
 * @param {string[]} words 
 * @returns {string[][]}
 */

// 1. words is array of unique string and it may be an empty array.
// 2. The order of the returned pairs and the order of the strings within each pair does not matter.

function semordnilap(words) {
  const semordnilapMap = {}
  const answer = []

  for (const word of words) {
    if (word in semordnilapMap) {
      answer.push([word, semordnilapMap[word]])
    } else {
      const reverseWord = word.split('').reverse().join('')
      semordnilapMap[reverseWord] = word
    }
  }

  return answer
}

// O(n + m) time | O(s), where n is the length of the input array, m is the length of the longest word and s is the number of different string
```
