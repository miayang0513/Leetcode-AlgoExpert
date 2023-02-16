
/**
 * 
 * @param {number[]} nums
 * @returns {boolean}
 */

// 1. returns a boolean representing whether there exists a zero-sum subarray of nums.
// 2. subarray can be one element or the original array.

function zeroSumSubarray(nums) {
  const map = new Set([0])
  let sum = 0
  
  for (const num of nums) {
    sum += num
    if (map.has(sum)) {
      return true
    } else {
      map.add(sum)
    }
  }

  return false
}

// O(n) time | O(n) space, where n is the length of nums