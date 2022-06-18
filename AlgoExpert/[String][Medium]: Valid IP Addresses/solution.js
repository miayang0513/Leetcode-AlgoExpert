/**
 * 
 * @param {string} string 
 * @returns {string[]}
 */
function validIPAddresses (string) {
  const ans = []

  if (string.length < 4) {
    return ans
  }

  for (let i = 0; i < 4; i++) {
    const currentIPAddress = ['', '', '', '']

    currentIPAddress[0] = string.slice(0, i)
    if (!checkValid(currentIPAddress[0])) {
      continue
    }

    for (let j = i + 1; j < i + Math.min(string - i, 4); j++) {
      currentIPAddress[1] = string.slice(i, j)
      if (!checkValid(currentIPAddress[1])) {
        continue
      }
      for (let k = j + 1; k < j + Math.min(string - j, 4); k++) {
        currentIPAddress[2] = string.slice(j, k)
        currentIPAddress[3] = string.slice(k)
        if (checkValid(currentIPAddress[2]) && checkValid(currentIPAddress[3])) {
          ans.push(currentIPAddress.join('.'))
        }
      }
    }
  }

  return ans
}

function checkValid (num) {
  const string2Int = parseInt(num)

  if (string2Int > 255) {
    return false
  }
  return num.length === string2Int.toString().length
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