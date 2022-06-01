/**
 * 
 * @param {number[]} array
 * @param {number} toMove
 */

function moveElementToEnd (array, toMove) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex < rightIndex) {
    if (array[leftIndex] === toMove && array[rightIndex] !== toMove) {
      const temp = array[leftIndex]
      array[leftIndex] = array[rightIndex]
      array[rightIndex] = temp
      leftIndex++
      rightIndex--
    } else {
      if (array[leftIndex] !== toMove) {
        leftIndex++
      }
      if (array[rightIndex] === toMove) {
        rightIndex--
      }
    }
  }
  return array
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))