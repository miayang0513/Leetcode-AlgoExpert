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

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])) // [26, 28]
