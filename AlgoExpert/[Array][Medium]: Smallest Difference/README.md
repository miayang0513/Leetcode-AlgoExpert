# [Smallest Difference](https://www.algoexpert.io/questions/smallest-difference)

`Medium` `Array`

### Question
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

**Sample Input**

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

**Sample Output**

[28, 26]

### My Solution
```js
/**
 * 
 * @param {number[]} arrayOne 
 * @param {number[]} arrayTwo 
 * @return {number[]}
 */

// 1. two non-empty input array (not sorted)
// 2. return a pair of numbers(one from each array) whose absolute difference is closest to zero.
// 3. return format [x, y], where x is from arrayOne and y is from arrayTwo.
// 4. only one answer.


function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  const answer = []
  let indexOne = 0
  let indexTwo = 0
  let smallest = Infinity

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    const one = arrayOne[indexOne]
    const two = arrayTwo[indexTwo]
    const difference = Math.abs(two - one)

    if (difference < smallest) {
      answer[0] = one
      answer[1] = two
      smallest = difference
    }

    if (one < two) {
      indexOne++
    } else if (two < one) {
      indexTwo++
    } else {
      return [one, two]
    }
  }

  return answer
}

// O(nlog(n) + mlong(m)) time | O(1) space, where n is the length of arrayOne and m is the length of arrayTwo.
```
