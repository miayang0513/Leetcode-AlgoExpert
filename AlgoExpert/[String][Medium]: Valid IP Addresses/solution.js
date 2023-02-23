/**
 * 
 * @param {string} string 
 * @returns {string[]}
 */

// 1. string of length 12 or smaller, only digits.
// 2. leading 0 is invalid. for example x.x.x.00 or x.x.x.01, but x.x.0.x is valid.
// 3. No greater than 255.
// 4. should return string (insert three .) and in no particular order.

function validIPAddresses(string) {
  const validIPList = []

  for (let first = 0; first < string.length - 3; first++) {
    const firstNum = string.slice(0, first + 1)
    if (!isValidNumber(firstNum)) continue

    for (let second = first + 1; second < string.length - 2; second++) {
      const secondNum = string.slice(first + 1, second + 1)

      if (!isValidNumber(secondNum)) continue

      for (let third = second + 1; third < string.length - 1; third++) {
        const thirdNum = string.slice(second + 1, third + 1)
        const fourthNum = string.slice(third + 1, string.length)

        if (!(isValidNumber(thirdNum) && isValidNumber(fourthNum))) continue

        validIPList.push([firstNum, secondNum, thirdNum, fourthNum].join('.'))
      }
    }
  }

  return validIPList
}

const isValidNumber =  (stringNum) => {
  const num = Number(stringNum)
  
  if (num > 255) return false

  return String(num).length === stringNum.length
}


console.log(validIPAddresses("1921680"))
/**
 * [
  "1.9.216.80",
  "1.92.16.80",
  "1.92.168.0",
  "19.2.16.80",
  "19.2.168.0",
  "19.21.6.80",
  "19.21.68.0",
  "19.216.8.0",
  "192.1.6.80",
  "192.1.68.0",
  "192.16.8.0"
]
 */