/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // solution 1
  // if (nums.length === 2) {
  //   return [0, 1]
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }

  // solution 2
  if (nums.length === 2) {
    return [0, 1]
  }
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [i, map[nums[i]]]
    }
    map[target - nums[i]] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 2, 3], 6))
console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5))