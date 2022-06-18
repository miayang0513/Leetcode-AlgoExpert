# [Reverse Words In String](https://www.algoexpert.io/questions/reverse-words-in-string)

`Medium` `String`

### Question
Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order. For example, given the string "tim is great", your function should return "great is tim".

For this problem, a word can contain special characters, punctuation, and numbers. The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string. For example, given the string "whitespaces    4" you would be expected to return "4    whitespaces".

Note that you're not allowed to to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/function.

Also note that the input string isn't guaranteed to always contain words.

**Sample Input**
```js
string = "AlgoExpert is the best!"
```

**Sample Output**
```js
"best! the is AlgoExpert"
```

### My Solution
```js
/**
 * 
 * @param {string} string 
 * @returns {string}
 */
function reverseWordsInString (string) {
  const wordArray = []
  let currentItem = ''

  for (const char of string) {
    if (char === ' ' && currentItem.trim().length === currentItem.length) {
      wordArray.push(currentItem)
      currentItem = char
    } else if (char !== ' ' && currentItem.trim().length !== currentItem.length) {
      wordArray.push(currentItem)
      currentItem = char
    } else {
      currentItem += char
    }
  }
  wordArray.push(currentItem)

  let reverseString = ''
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseString += wordArray[i]
  }

  return reverseString
}
```
