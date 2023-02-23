# [One Edit](https://www.algoexpert.io/questions/one-edit)

`Medium` `String`

### Question
You're given two strings stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

There are 3 possible edits:

Replace: One character in one string is swapped for a different character.
Add: One character is added at any index in one string.
Remove: One character is removed at any index in one string.
Note that both strings will contain at least one character. If the strings are the same, your function should return true.

**Sample Input**
```js
stringOne = "hello"
stringTwo = "hollo"
```

**Sample Output**
```js
True // A single replace at index 1 of either string can make the strings equal
```

### My Solution
```js
/**
 * 
 * @param {string} stringOne 
 * @param {string} stringTwo 
 * @returns {boolean}
 */

function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length 
  const lengthTwo = stringTwo.length 

  if (Math.abs(lengthOne - lengthTwo) > 1) return false
  
  let madeEdit = false
  let indexOne = 0
  let indexTwo = 0
  
  while (indexOne < lengthOne && indexTwo < lengthTwo) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (madeEdit) return false // 不只一次
      madeEdit = true

      if (lengthOne > lengthTwo) {
        indexOne++
      } else if (lengthOne < lengthTwo) {
        indexTwo++
      } else {
        indexOne++
        indexTwo++
      }
      
    } else {
      indexOne++
      indexTwo++
    }
  }

  return true
}

// O(n) time | O(1) space, where n is the length of the shorter string.
```
