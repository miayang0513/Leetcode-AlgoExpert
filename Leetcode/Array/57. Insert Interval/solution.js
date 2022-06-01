/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval)
    return intervals
  }
  const [newStart] = newInterval
  for (let i = 0; i < intervals.length; i++) {
    const [start] = intervals[i]
    if (newStart < start) {
      intervals.splice(i, 0, newInterval)
      break
    }
  }

  if (intervals[intervals.length - 1][0] <= newStart) {
    intervals.push(newInterval)
  }


  let index = 0
  while (index < intervals.length -1) {
    const [start, end] = intervals[index]
    const [nextStart, nextEnd] = intervals[index + 1]
    if (nextStart <= end) {
      intervals.splice(index, 2, [start, Math.max(nextEnd, end)])
    } else {
      index++
    }
  }

  return intervals
}

console.log(insert([[1,5]], [1,7]))