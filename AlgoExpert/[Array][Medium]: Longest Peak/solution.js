/**
 * 
 * @param {number[]} array
 * @returns {number}
 */

function longestPeak(array) {
  let currentLongestPeak = 0
  let i = 1

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]

    if (!isPeak) {
      i++
      continue
    }

    let left = i - 2
    while (left >= 0 && array[left] < array[left + 1]) {
      left--
    }

    let right = i + 2
    while (right < array.length && array[right - 1] > array[right]) {
      right++
    }


    currentLongestPeak = Math.max(currentLongestPeak, right - left - 1)
    i = right
  }

  return currentLongestPeak
}

// O(n) time | O(1) space, where n is the length of the input array

console.log(longestPeak([1, 3, 2])) // 3
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])) // 6