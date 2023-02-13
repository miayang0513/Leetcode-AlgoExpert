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

// 1. non-empty array which is ascending order
// 2. return squares of the input array also sorted in ascending order.
// 3. it could have negative number.

function sortedSquaredArray(array) {
  const squaredArray = new Array(array.length).fill(0)
  let left = 0
  let right = array.length - 1

  for (let index = right; index >= 0; index--) {
    const leftNum = array[left]
    const rightNum = array[right]
    
    if (Math.abs(leftNum) <= Math.abs(rightNum)) {
      squaredArray[index] = rightNum * rightNum
      right--
    } else {
      squaredArray[index] = leftNum * leftNum 
      left++
    }
  }

  return squaredArray
}

// O(n) time | O(n) space, where n is the length of the input array.
```
