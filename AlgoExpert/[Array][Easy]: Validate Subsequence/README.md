# [Validate Subsequence](https://www.algoexpert.io/questions/validate-subsequence)

`Easy` `Array`

### Question
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

**Sample Input**

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

**Sample Output**

true

### My Solution

```js
/**
 * 
 * @param {number[]} array
 * @param {number[]} sequence
 * @returns {boolean}
 */

// 1. two non-empty array.
// 2. not necessarily adjacent but in the same order.
// 3. single number in an array and the array itself are both valid.

function isValidSubsequence(array, sequence) {
  let indexOfArray = 0
  let indexOfSeq = 0

  while (indexOfArray < array.length && indexOfSeq < sequence.length) {
    if (array[indexOfArray] === sequence[indexOfSeq]) {
      indexOfSeq++
    }

    indexOfArray++
  }

  return indexOfSeq === sequence.length
}

// O(n) time | O(1) space, where n is the length of array
```
