# [Two Number Sum](https://www.algoexpert.io/questions/two-number-sum)

`Easy` `Array`

### Question
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

**Sample Input**

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

**Sample Output**

[-1, 11] // the numbers could be in reverse order

### My Solution

```js
// 1. Non-empty array.
// 2. can't use single integer twice.
// 3. no two numbers sum up to the target sum, then return empty array.
// 4. the numbers could be in any order [x1, x2] or [x2, x1]

/**
 * 
 * @param {number[]} array 
 * @param {number} targetSum 
 * @returns {number[]}
 */
function twoNumberSum(array, targetSum) {
  const map = {}

  for (const current of array) {
    if (current in map) {
      return [current, map[current]]
    }

    map[targetSum - current] = current
  }

  return []
}

// O(n) time | O(n) space
```

