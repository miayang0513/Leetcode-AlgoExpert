/**
 * 
 * @param {[][]} competitions 
 * @param {number[]} results 
 * @returns {string}
 */
function tournamentWinner (competitions, results) {
  let champion = ''
  const leaderBoard = { [champion]: 0 }
  for (let i = 0; i < competitions.length; i++) {
    const winner = competitions[i][results[i] === 1 ? 0 : 1]
    if (winner in leaderBoard) {
      leaderBoard[winner] += 3
    } else {
      leaderBoard[winner] = 3
    }
    if (leaderBoard[winner] > leaderBoard[champion]) {
      champion = winner
    }
  }
  return champion
}
console.log(tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
], [0, 0, 1]))

