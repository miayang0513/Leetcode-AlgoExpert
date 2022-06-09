/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let newS = ''
  let newT = ''

  for (const c of s) {
    if (c !== '#') {
      newS += c
    } else {
      newS = newS.slice(0, -1)
    }
  }
  for (const c of t) {
    if (c !== '#') {
      newT += c
    } else {
      newT = newT.slice(0, -1)
    }
  }

  return newS === newT
}

console.log(backspaceCompare('ab#c', 'ad#c')) // true
console.log(backspaceCompare('ab##', 'c#d#')) // true
console.log(backspaceCompare('a#c', 'b')) // false