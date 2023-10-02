/**
 * 
 * @param {number[]} matrix
 * @returns {number[]}
 */

// 2d array of int
// return transpose of array (flip its main disgonal)
// array has at least 1 value, width and height are not necessarily the same.

function transposeMatrix(matrix) {
  const oldHeight = matrix.length
  const oldWidth = matrix[0].length
  const newHeight = oldWidth
  const newWidth = oldHeight
  const result = new Array(newHeight).fill(null).map(arr => new Array(newWidth).fill(0))

  for (let i = 0; i < oldHeight; i++) {
    for (let j = 0; j < oldWidth; j++) {
      result[j][i] = matrix[i][j]
    }
  }
  
  return result
}

// O(w * h) time | O(w * h) space, where w is the width of array and h is the height