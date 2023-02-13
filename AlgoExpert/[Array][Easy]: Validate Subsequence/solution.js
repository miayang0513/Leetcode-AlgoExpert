

/**
 * 
 * @param {number[]} array
 * @param {number[]} sequence
 * @returns {boolean}
 */

// 1. two non-empty array.
// 2. not necessarily adjacent but in the same order.
// 3. single number in an array and the array itself are both valid.

function isValidSubsequence(array, sequence) {
  let indexOfArray = 0
  let indexOfSeq = 0

  while (indexOfArray < array.length && indexOfSeq < sequence.length) {
    if (array[indexOfArray] === sequence[indexOfSeq]) {
      indexOfSeq++
    }

    indexOfArray++
  }

  return indexOfSeq === sequence.length
}

// O(n) time | O(1) space, where n is the length of array
