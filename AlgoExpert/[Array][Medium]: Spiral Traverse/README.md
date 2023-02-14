# [Spiral Traverse](https://www.algoexpert.io/questions/spiral-traverse)

`Medium` `Array`

### Question
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

**Sample Input**

array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7],
]

**Sample Output**

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

### My Solution
```js
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
```
