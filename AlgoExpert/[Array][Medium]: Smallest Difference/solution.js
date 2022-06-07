/**
 * 
 * @param {number[]} arrayOne 
 * @param {number[]} arrayTwo 
 * @return {number[]}
 */

function smallestDifference (arrayOne, arrayTwo) {
  // solution 1
  // const mergeArray = []

  // arrayOne.forEach(value => mergeArray.push([0, value]))
  // arrayTwo.forEach(value => mergeArray.push([1, value]))

  // mergeArray.sort((a, b) => a[1] - b[1])

  // let index = 0
  // let currentSmallestDifference = mergeArray[mergeArray.length - 1][1] - mergeArray[0][1]
  // const currentSmallestValue = []
  // while (index < mergeArray.length - 1) {
  //   if (mergeArray[index][0] !== mergeArray[index + 1][0] && (mergeArray[index + 1][1] - mergeArray[index][1]) < currentSmallestDifference) {
  //     currentSmallestDifference = mergeArray[index + 1][1] - mergeArray[index][1]
  //     currentSmallestValue[mergeArray[index][0]] = mergeArray[index][1]
  //     currentSmallestValue[mergeArray[index + 1][0]] = mergeArray[index + 1][1]
  //   }
  //   index++
  // }
  // return currentSmallestValue

  // solution 2
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let indexOne = 0
  let indexTwo = 0
  let smallestDifference = Infinity
  const smallestValue = []

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let currentDifference
    let firstNum = arrayOne[indexOne]
    let secondNum = arrayTwo[indexTwo]

    if (firstNum === secondNum) {
      return [firstNum, secondNum]
    } else if (firstNum > secondNum) {
      currentDifference = firstNum - secondNum
      indexTwo++
    } else {
      currentDifference = secondNum - firstNum
      indexOne++
    }

    if (smallestDifference > currentDifference) {
      smallestDifference = currentDifference
      smallestValue[0] = firstNum
      smallestValue[1] = secondNum
    }
  }
  return smallestValue
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])) // [26, 28]
