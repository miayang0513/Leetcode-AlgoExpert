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

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([0]))
console.log(sortedSquaredArray([0, -1, -2, 2]))

