
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

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))