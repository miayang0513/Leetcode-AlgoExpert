# [Valid IP Addresses](https://www.algoexpert.io/questions/valid-ip-addresses)

`Medium` `String`

### Question
You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three .s in the string.

An IP address is a sequence of four positive integers that are separated by .s, where each individual integer is within the range 0 - 255, inclusive.

An IP address isn't valid if any of the individual integers contains leading 0s. For example, "192.168.0.1" is a valid IP address, but "192.168.00.1" and "192.168.0.01" aren't, because they contain "00" and 01, respectively. Another example of a valid IP address is "99.1.1.10"; conversely, "991.1.1.0" isn't valid, because "991" is greater than 255.

Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created from the string, your function should return an empty list.

Note: check out our Systems Design Fundamentals on SystemsExpert to learn more about IP addresses!

**Sample Input**
```js
string = "1921680"
```

**Sample Output**
```js
[
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
// The IP addresses could be ordered differently.
```

### My Solution
```js
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
```
