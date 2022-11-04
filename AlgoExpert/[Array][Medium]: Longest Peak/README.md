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
  let i = 1

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]

    if (!isPeak) {
      i++
      continue
    }

    let left = i - 1
    while (left - 1 >= 0 && array[left - 1] < array[left]) {
      left--
    }

    let right = i + 1
    while (right + 1 < array.length && array[right] > array[right + 1]) {
      right++
    }


    currentLongestPeak = Math.max(currentLongestPeak, right - left + 1)
    i = right
  }

  return currentLongestPeak
}
```
