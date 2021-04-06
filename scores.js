const fs = require('fs')
const { join } = require('path')


// on affiche les scores
const getScores = () => {
  const scoresData =JSON.parse(fs.readFileSync('score-list.json','utf-8'))
  console.log(scoresData)
}

// enregistre les scores
const addScore = (userName,nbWords,nbFail,totalScore) => {
  const scoresData =JSON.parse(fs.readFileSync('score-list.json','utf-8'))
  let array= [...scoresData]
  let user = { userName: userName, nbWords: nbWords,nbFail:nbFail,totalScore: totalScore }
  array.push(user)
  fs.writeFileSync('score-list.json',JSON.stringify(array))

}
//addScore('AAA',3,6,0)
getScores()