/**
 * 
 * @param {number[]} array 
 * @returns {number}
 */

// 1. non-empty array.
// 2. return first duplicate number which has the minimum index.
// 3. return -1 if there is no any duplicate number.

function firstDuplicateValue(array) {
  const map = {}

  for (const value of array) {
    if (value in map) {
      return value
    }

    map[value] = true
  }

  return -1
}

// O(n) time | O(n) space, where n is the length of the input array.

console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]))