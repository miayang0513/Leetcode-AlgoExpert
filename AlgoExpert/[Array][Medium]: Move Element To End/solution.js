/**
 *
 * @param {number[]} array
 * @param {number} toMove
 */

// 1. non-empty input array.
// 2. it should mutate original input array and doesn't need to maintain the order of the other integers.

function moveElementToEnd(array, toMove) {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    while (left < right && array[right] === toMove) {
      right--
    }
    while (left < right && array[left] !== toMove) {
      left++
    }

    if (array[left] === toMove && array[right] !== toMove) {
      array[left] = array[right]
      array[right] = toMove
      left++
      right--
    }
  }

  return array
}

// O(n) time | O(1) space, where n is the length of the array.

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
