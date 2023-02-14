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

// 1. non-empty input array.
// 2. return [[x, y, z], ...], where x + y + z = targetSum and they should be ordered in ascending order
// 3. the triplets themselves should be ordered in ascending order, for example [[x1, y1, z1], [x2, y2, z2]], where x1 < x2
// 4. return empty array if there is no any triplet.


function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
  const results = []
  for (let i = 0; i < array.length - 2; i++) {
    let leftIndex = i + 1
    let rightIndex = array.length - 1
    while (leftIndex < rightIndex) {
      const currentSum = array[i] + array[leftIndex] + array[rightIndex]
      if (currentSum === targetSum) {
        results.push([array[i],  array[leftIndex], array[rightIndex]])
        leftIndex++
        rightIndex--
      } else if (currentSum < targetSum) {
        leftIndex++
      } else {
        rightIndex--
      }
    }
  }
  return results
}

// O(n^2) time | O(n) space, where n is the length of array
```
