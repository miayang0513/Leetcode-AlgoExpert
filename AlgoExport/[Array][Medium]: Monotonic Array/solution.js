
/**
 * 
 * @param {number[]} array
 * @return {boolean}
 */

 function isMonotonic (array) {
  if (array.length <= 2) {
    return true
  }

  let direction = 0
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] !== 0) {
      if (direction === 0) {
        direction = Math.sign(array[i + 1] - array[i])
        continue
      } else if (Math.sign(array[i + 1] - array[i]) !== direction) {
        return false
      }
    }
  }

  return true
}

console.log(isMonotonic([-1, -5, -10, -1100, -1101, -1101, -1102, -9001])) // true
console.log(isMonotonic([-1, -5, -10, -1100, -1101, -1109, -1102, -9001])) // false
console.log(isMonotonic([-1,-2, -1, -5, -10, -1100, -1101, -1101, -1102, -9001])) // false