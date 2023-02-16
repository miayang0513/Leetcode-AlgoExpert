/**
 * 
 * @param {number[][]} array
 * @returns {number[][]}
 */

function mergeOverlappingIntervals(array) {
  if (array.length === 1) {
    return array
  }
  
  array.sort((a, b) => a[0] - b[0])

  const answer = []
  let index = 1
  let [left, right] = array[0]
  
  while (index < array.length) {
    const [currentLeft, currentRight] = array[index]

    if (right < currentLeft) {
      answer.push([left, right])
      left = currentLeft
      right = currentRight
    } else {
      left = Math.min(left, currentLeft)
      right = Math.max(right, currentRight)
    }

    index++
  }

  answer.push([left, right])

  return answer
}

// O(nlogn) time | O(n) space, where n is the length of the input array.

console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]])) // [[1, 2], [3, 8], [9, 10]]