/**
 * 
 * @param {number[][]} array
 * @returns {number[][]}
 */

function mergeOverlappingIntervals (array) {
  array.sort((a, b) => a[0] - b[0])
  let index = 0
  while (index < array.length - 1) {
    const [start, end] = array[index]
    const [nextStart, nextEnd] = array[index + 1]

    if (nextStart > end) {
      index++
      continue
    }

    array[index][0] = start
    array[index][1] = Math.max(end, nextEnd)
    array.splice(index + 1, 1)
  }
  return array
}


console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]])) // [[1, 2], [3, 8], [9, 10]]