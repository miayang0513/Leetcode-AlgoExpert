# [Generate Document](https://www.algoexpert.io/questions/generate-document)

`Easy` `String`

### Question

You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

**Sample Input**
```js
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"
```

**Sample Output**
```js
true
```

### My Solution
```js
/**
 * 
 * @param {string} characters 
 * @param {string} document 
 * @returns {boolean}
 */

// 1. characters & document may be an empty string.
// 2. only be able to generate docs if frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string.
// 3. can always generate the empty string "".


function generateDocument (characters, document) {
  const charMap = {}

  for (const char of characters) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (const char of document) {
    if (!(char in charMap) || charMap[char] === 0) {
      return false
    }

    charMap[char]--
  }

  return true
}

// O(n + m) time | O(c) space, where n is the length of characters, m is the length of document
// and c is the number of unique characters in the characters string.
```
