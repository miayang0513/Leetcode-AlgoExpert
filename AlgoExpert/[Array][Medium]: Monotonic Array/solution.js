
/**
 * 
 * @param {number[]} array
 * @return {boolean}
 */

// 1. empty array or arrays of one element are monotonic.

function isMonotonic(array) {
  if (array.length < 2) {
    return true
  }

  let direction = Math.sign(array[1] - array[0])
  for (let i = 2; i < array.length; i++) {
    let currentDirection = Math.sign(array[i] - array[i - 1])

    if (currentDirection === 0) {
      continue
    }

    if (direction === 0) {
      direction = currentDirection 
      continue
    } else if (currentDirection !== direction) {
      return false
    }
  }

  return true
}

// O(n) time | O(1) space, where n is the length of array

console.log(isMonotonic([-1, -5, -10, -1100, -1101, -1101, -1102, -9001])) // true
console.log(isMonotonic([-1, -5, -10, -1100, -1101, -1109, -1102, -9001])) // false
console.log(isMonotonic([-1,-2, -1, -5, -10, -1100, -1101, -1101, -1102, -9001])) // false