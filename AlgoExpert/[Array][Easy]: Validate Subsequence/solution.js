

/**
 * 
 * @param {number[]} array
 * @param {number[]} sequence
 * @returns {boolean}
 */

/*
Constraints
- non-empty arrays of integers
- not necessarily adjacent but same order
*/

function isValidSubsequence(array, sequence) {
  let index = 0
  let seqIndex = 0

  while (seqIndex < sequence.length && index < array.length) {
    if (sequence[seqIndex] === array[index]) {
      seqIndex++
    }
    index++
  }

  return seqIndex === sequence.length
}

