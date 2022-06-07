
/**
 * 
 * @param {number[]} array
 * @returns {number}
 */

function longestPeak (array) {
  let currentLongestPeak = 0

  if (array.length < 3) {
    return currentLongestPeak
  }

  let currentDirection = 0
  let currentStartIndex = undefined
  let currentEndIndex = undefined

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) {
      if (currentDirection !== 1) {
        if (currentStartIndex !== undefined && currentDirection === -1) {
          currentLongestPeak = Math.max(currentLongestPeak, currentEndIndex - currentStartIndex + 1)
        }
        currentStartIndex = i
        currentEndIndex = undefined
        currentDirection = 1
      }
    } else if (array[i + 1] === array[i]) {
      if (currentStartIndex !== undefined && currentDirection === -1) {
        currentLongestPeak = Math.max(currentLongestPeak, currentEndIndex - currentStartIndex + 1)
      }
      currentDirection = 0
      currentStartIndex = undefined
      currentEndIndex = undefined
    } else {
      currentEndIndex = i + 1
      currentDirection = -1
    }
  }

  if (currentStartIndex !== undefined && currentEndIndex !== undefined) {
    currentLongestPeak = Math.max(currentLongestPeak, currentEndIndex - currentStartIndex + 1)
  }

  return currentLongestPeak
}

console.log(longestPeak([1, 3, 2])) // 3
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])) // 6