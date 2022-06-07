# [Sorted Squared Array](https://www.algoexpert.io/questions/sorted-squared-array)

`Easy` `Array`

### Question
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

**Sample Input**

array = [1, 2, 3, 5, 6, 8, 9]

**Sample Output**

[1, 4, 9, 25, 36, 64, 81]

### My Solution (refer to answer)
```js
/**
 * 
 * @param {number[]} array
 * @returns {number[]}
 */

function sortedSquaredArray (array) {
  const result = new Array(array.length).fill(0)
  let leftSideIndex = 0
  let rightSideIndex = result.length - 1

  for (let i = result.length - 1; i >= 0; i--) {
    if (Math.abs(array[leftSideIndex]) > Math.abs(array[rightSideIndex])) {
      result[i] = array[leftSideIndex] * array[leftSideIndex]
      leftSideIndex++
    } else {
      result[i] = array[rightSideIndex] * array[rightSideIndex]
      rightSideIndex--
    }
  }

  return result
}
```
