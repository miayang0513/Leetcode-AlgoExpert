# [Transpose Matrix](https://www.algoexpert.io/questions/transpose-matrix)

`Easy` `Array`

### Question
You're given a 2D array of integers matrix. Write a function that returns the transpose of the `matrix`.

The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.

You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

**Sample Input #1**
matrix = [
  [1, 2],
]
**Sample Output # 1**
[
  [1],
  [2]
]
**Sample Input #2**
matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
]
**Sample Output #2**
[
  [1, 3, 5],
  [2, 4, 6]
]
**Sample Input #3**
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
**Sample Output #3**
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]

### My Solution

```js
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
```
