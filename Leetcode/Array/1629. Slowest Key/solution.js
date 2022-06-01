/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */

var slowestKey = function (releaseTimes, keysPressed) {
  let maxLetter = keysPressed[0]
  let maxTime = releaseTimes[0]
  for (let i = 1; i < releaseTimes.length; i++) {
    const difference = releaseTimes[i] - releaseTimes[i - 1]
    if (difference > maxTime) {
      maxLetter = keysPressed[i]
      maxTime = difference
    } else if (difference === maxTime) {
      maxLetter = keysPressed[i] > maxLetter ? keysPressed[i] : maxLetter
    }
  }
  return maxLetter
}

console.log(slowestKey([9, 29, 49, 50], 'cbcd'))