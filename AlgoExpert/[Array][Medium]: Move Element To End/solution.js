/**
 *
 * @param {number[]} array
 * @param {number} toMove
 */
function moveElementToEnd (array, toMove) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && array[rightIndex] === toMove) {
      rightIndex--
    }

    if (array[leftIndex] === toMove) {
      const temp = array[rightIndex]
      array[rightIndex] = array[leftIndex] // equal to toMove
      array[leftIndex] = temp

      rightIndex--
    }
    leftIndex++
  }

  return array
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
