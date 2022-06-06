# [Longest Peak](https://www.algoexpert.io/questions/longest-peak)

`Medium` `Array`

### Question
Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.

For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.

**Sample Input**
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

**Sample Output**
6 // 0, 10, 6, 5, -1, -3

### My Solution
```js
/**
 * 
 * @param {number[]} array
 * @returns {number}
 */

function longestPeak (array) {
  let currentLongestPeak = 0

  if (array.length < 3) {
    return currentLongestPeak
  }

  let currentDirection = 0
  let currentStartIndex = undefined
  let currentEndIndex = undefined

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) {
      if (currentDirection !== 1) {
        if (currentStartIndex !== undefined && currentDirection === -1) {
          currentLongestPeak = Math.max(currentLongestPeak, currentEndIndex - currentStartIndex + 1)
        }
        currentStartIndex = i
        currentEndIndex = undefined
        currentDirection = 1
      }
    } else if (array[i + 1] === array[i]) {
      if (currentStartIndex !== undefined && currentDirection === -1) {
        currentLongestPeak = Math.max(currentLongestPeak, currentEndIndex - currentStartIndex + 1)
      }
      currentDirection = 0
      currentStartIndex = undefined
      currentEndIndex = undefined
    } else {
      currentEndIndex = i + 1
      currentDirection = -1
    }
  }

  if (currentStartIndex !== undefined && currentEndIndex !== undefined) {
    currentLongestPeak = Math.max(currentLongestPeak, currentEndIndex - currentStartIndex + 1)
  }

  return currentLongestPeak
}
```
