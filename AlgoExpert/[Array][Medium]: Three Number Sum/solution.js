
/**
 * 
 * @param {number[]} array
 * @param {number} targetSum
 * @returns {number[][]}
 */

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
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))