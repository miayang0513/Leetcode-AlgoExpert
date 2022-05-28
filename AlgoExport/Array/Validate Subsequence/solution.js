/*
Constraints
- same order
- non-empty array
*/

/**
 * 
 * @param {number[]} array
 * @param {number[]} sequence
 * @returns {boolean}
 */
function isValidSubsequence(array, sequence) {
  if (sequence.length > array.length) {
    return false
  }
  let lastIndex = -1
  for (let i = 0; i < sequence.length; i++) {
    const currentIndex = array.indexOf(sequence[i], lastIndex + 1)
    if (currentIndex === -1) {
      return false
    }
    if (currentIndex > lastIndex) {
      lastIndex = currentIndex
    } else {
      return false
    }
  }
  return true
}
