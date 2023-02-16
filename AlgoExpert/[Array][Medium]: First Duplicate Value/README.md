# [First Duplicate Value](https://www.algoexpert.io/questions/first-duplicate-value)

`Medium` `Array`

### Question
Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.

If no integer appears more than once, your function should return -1.

Note that you're allowed to mutate the input array.

**Sample Input**

array = [2, 1, 5, 2, 3, 3, 4]

**Sample Output**

2 // 2 is the first integer that appears more than once.
// 3 also appears more than once, but the second 3 appears after the second 2.

### My Solution
```js
/**
 * 
 * @param {number[]} array 
 * @returns {number}
 */

// 1. non-empty array.
// 2. return first duplicate number which has the minimum index.
// 3. return -1 if there is no any duplicate number.

function firstDuplicateValue(array) {
  const map = {}

  for (const value of array) {
    if (value in map) {
      return value
    }

    map[value] = true
  }

  return -1
}

// O(n) time | O(n) space, where n is the length of the input array.
```
