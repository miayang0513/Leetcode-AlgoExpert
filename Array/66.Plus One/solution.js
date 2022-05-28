/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const currentDigitSum = digits[i] + 1
    if (currentDigitSum >= 10) {
      digits[i] = currentDigitSum % 10
      if (i === 0) {
        digits.unshift(1)
      }
    } else {
      digits[i] = currentDigitSum
      break
    }
  }
  return digits
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))