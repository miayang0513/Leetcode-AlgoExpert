/**
 * 
 * @param {number[]} array 
 * @returns  {number[]}
 */
function arrayOfProducts(array) {
  let total = 1
  let zeroExistTime = 0
  let indexOfOnlyOneZero = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroExistTime++
      if (zeroExistTime === 2) {
        return new Array(array.length).fill(0)
      }
      indexOfOnlyOneZero = i
      continue
    }
    total = total * array[i]
  }

  if (zeroExistTime === 1) {
    const outputs = new Array(array.length).fill(0)
    outputs[indexOfOnlyOneZero] = total
    return outputs
  }
  
  const outputs = []
  for (let i = 0; i < array.length; i++) {
    outputs.push(total / array[i])
  }

  return outputs
}

console.log(arrayOfProducts([5, 1, 4, 2])) // [8, 40, 10, 20]