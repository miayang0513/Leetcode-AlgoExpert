# [Monotonic Array](https://www.algoexpert.io/questions/monotonic-array)

`Medium` `Array`

### Question
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

**Sample Input**

array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

**Sample Output**

true

### My Solution
```js
/**
 * 
 * @param {number[]} array
 * @return {boolean}
 */

// 1. empty array or arrays of one element are monotonic.

function isMonotonic(array) {
  if (array.length < 2) {
    return true
  }

  let direction = Math.sign(array[1] - array[0])
  for (let i = 2; i < array.length; i++) {
    let currentDirection = Math.sign(array[i] - array[i - 1])

    if (currentDirection === 0) {
      continue
    }

    if (direction === 0) {
      direction = currentDirection 
      continue
    } else if (currentDirection !== direction) {
      return false
    }
  }

  return true
}

// O(n) time | O(1) space, where n is the length of array
```
