/**
 * 
 * @param {number[]} array
 * @returns {number}
 */

function longestPeak (array) {
  let currentLongestPeak = 0
  let i = 1

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]

    if (!isPeak) {
      i++
      continue
    }

    let left = i - 1
    while (left - 1 >= 0 && array[left - 1] < array[left]) {
      left--
    }

    let right = i + 1
    while (right + 1 < array.length && array[right] > array[right + 1]) {
      right++
    }


    currentLongestPeak = Math.max(currentLongestPeak, right - left + 1)
    i = right
  }

  return currentLongestPeak
}

console.log(longestPeak([1, 3, 2])) // 3
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])) // 6