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

/*
Constraints
- non-empty arrays of integers
- not necessarily adjacent but same order
*/

function isValidSubsequence(array, sequence) {
  let index = 0
  let seqIndex = 0

  while (seqIndex < sequence.length && index < array.length) {
    if (sequence[seqIndex] === array[index]) {
      seqIndex++
    }
    index++
  }

  return seqIndex === sequence.length
}
```
