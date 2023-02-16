# [Zero Sum Subarray](https://www.algoexpert.io/questions/zero-sum-subarray)

`Medium` `Array`

### Question
You're given a list of integers nums. Write a function that returns a boolean representing whether there exists a zero-sum subarray of nums.

A zero-sum subarray is any subarray where all of the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.



**Sample Input**

nums = [-5, -5, 2, 3, -2]

**Sample Output**

True // The subarray [-5, 2, 3] has a sum of 0

### My Solution
```js

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
```
