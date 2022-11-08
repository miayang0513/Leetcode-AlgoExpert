/**
 * 
 * @param {number[][]} array
 * @returns {number[][]}
 */

function mergeOverlappingIntervals (array) {
  if (array.length <= 1) return array

  array.sort((a , b) => a[0] - b[0])
  
  let index = 0
  const answer = []
  while (index < array.length) {
    let [currentMin, currentMax] = array[index]
    let next = index + 1
    while (next < array.length && currentMax >= array[next][0]) {
      currentMax = Math.max(currentMax, array[next][1])
      next++
    }
    answer.push([currentMin, currentMax])
    index = next
  }

  return answer
}


console.log(mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]])) // [[1, 2], [3, 8], [9, 10]]