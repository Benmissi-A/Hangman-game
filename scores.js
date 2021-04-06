const fs = require('fs')
const { join } = require('path')
const scoresData =fs.readFileSync('score-list.json','utf-8')

// on affiche les scores
const getScores = () => {
  //let score=scoresData.split(`\n`).join(',')
  console.log(JSON.parse(scoresData))
}




/* let obj = JSON.parse(`{"name":'${name}', "nbWords":${nbwords}, "nbFail":${nbfail}, "totalScore":${totalScore}}`)
console.log(obj) */
// enregistre les scores
const addScore = (userName,nbWords,nbFail,scoreData) => {
  totalScore = 0
  user = JSON.stringify({ userName: userName, nbWords: nbWords,nbFail:nbFail,totalScore: totalScore })
  scoresData.push(user)
  //console.log(JSON.stringify({ userName: userName, nbWords: nbWords,nbFail:nbFail,totalScore: totalScore }));
  fs.writeFileSync('score-list.json',scoresData)
  console.log('ok')
}
addScore('AAA',3,6)
getScores()