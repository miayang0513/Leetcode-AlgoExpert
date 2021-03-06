# [Three Number Sum](https://www.algoexpert.io/questions/three-number-sum)

`Medium` `Array`

### Question
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.



**Sample Input**

array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

**Sample Output**

[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

### My Solution
```js

/**
 * 
 * @param {number[]} array
 * @param {number} targetSum
 * @returns {number[][]}
 */

function threeNumberSum (array, targetSum) {
  array.sort((a, b) => a - b)
  const results = []
  for (let i = 0; i < array.length - 2; i++) {
    const currentTargetSum = targetSum - array[i]
    let leftIndex = i + 1
    let rightIndex = array.length - 1
    while (leftIndex < rightIndex) {
      const sum = array[leftIndex] + array[rightIndex]
      if (currentTargetSum === sum) {
        results.push([array[i], array[leftIndex], array[rightIndex]])
        leftIndex++
        rightIndex--
      } else if (currentTargetSum > sum) {
        leftIndex++
      } else {
        rightIndex--
      }
    }
  }
  return results
}

```
