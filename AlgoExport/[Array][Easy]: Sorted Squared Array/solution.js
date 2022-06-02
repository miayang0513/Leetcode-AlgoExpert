/**
 * 
 * @param {number[]} array
 * @returns {number[]}
 */

function sortedSquaredArray (array) {
  /**
   * Notice:
   * - integer can be negative or zero
   */
  // solution 1 - brute force
  // let result = []
  // array.forEach(number => result.push(number * number))
  // result.sort((a, b) => a - b)
  // return result

  // solution 2 - refer to Answer
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

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([0]))
console.log(sortedSquaredArray([0, -1, -2, 2]))

