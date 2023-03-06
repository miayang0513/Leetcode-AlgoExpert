/**
 * @param {number[]} array
 * @param {number} depth 
 * @returns {number}
 */

function productSum(array,depth = 1) {
  let sum = 0

  for (const value of array) {
    if (!Array.isArray(value)) {
      sum += value
    } else
      sum += productSum(value, depth + 1)
  }

  return sum * depth
}

// O(n) time | O(d) space
// where n is the total number of elements in the array, including sub-elements,
// and d is the greatest depth of "special" arrays in the array