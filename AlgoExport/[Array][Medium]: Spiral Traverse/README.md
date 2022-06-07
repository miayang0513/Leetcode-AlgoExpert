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

function spiralTraverse (array) {
  const results = []
  let x = 0
  let y = 0
  let maxX = array[0].length
  let minX = -1
  let maxY = array.length
  let minY = 0
  let direction = 1 // 1 left to right, 2 top to bottom, 3 right to left, 4, bottom to top
  while (results.length < array[0].length * array.length) {
    console.log(maxY, maxX, y, x)
    results.push(array[y][x])

    switch (direction) {
      case 1:
        if (x + 1 < maxX) {
          x++
        } else {
          maxX--
          y++
          direction = 2
        }
        break
      case 2:
        if (y + 1 < maxY) {
          y++
        } else {
          maxY--
          x--
          direction = 3
        }
        break
      case 3:
        if (x - 1 > minX) {
          x--
        } else {
          minX++
          y--
          direction = 4
        }
        break
      case 4:
        if (y - 1 > minY) {
          y--
        } else {
          minY++
          x++
          direction = 1
        }
        break
    }
  }

  return results
}
```
