/**
 * 
 * @param {string} string 
 * @returns {string[]}
 */
function validIPAddresses (string) {
  const answer = []
  const len = string.length
  for (let first = 1; first < 4; first++) {
    const firstNum = string.slice(0, first)

    if (!checkNumberValid(firstNum)) continue

    for (let second = first + 1; second < first + Math.min(len - first, 4); second++) {
      const secondNum = string.slice(first, second)

      if (!checkNumberValid(secondNum)) continue

      for (let third = second + 1; third < second + Math.min(len - second, 4); third++) {
        const thirdNum = string.slice(second, third)
        const fourNum = string.slice(third, string.length)

        if (checkNumberValid(thirdNum) && checkNumberValid(fourNum)) {
          answer.push([firstNum, secondNum, thirdNum, fourNum].join("."))
        }
      }
    }
  }

  return answer
}

function checkNumberValid (string) {
  const number = Number(string)

  if (string !== String(number)) return false

  if (number < 0 || number > 255) return false

  return true
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