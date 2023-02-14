
/**
 * 
 * @param {number[][]} array
 * @returns {number[]}
 */

function spiralTraverse(array) {
  const results = []
  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      results.push(array[startRow][col])
    }


    for (let row = startRow + 1; row <= endRow; row++) {
      results.push(array[row][endCol])
    }


    if (startRow === endRow) break
    for (let col = endCol - 1; col >= startCol; col--) {
      results.push(array[endRow][col])
    }

    if (startCol === endCol) break
    for (let row = endRow - 1; row > startRow; row--) {
      results.push(array[row][startCol])
    }

    startCol++
    endCol--
    startRow++
    endRow--
  }

  return results
}

// O(n) time | O(n) space, where n is the total number of elements in the array.

console.log(spiralTraverse([
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]))