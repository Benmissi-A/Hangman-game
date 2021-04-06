const fs = require('fs')
const { randomInt } = require('crypto')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')
const readlineSync = require('readline-sync')

//generation de mots aleatoire
const randomWord = () => {
  const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')
  let n = randomInt(0, words.length)
  return words[n]
}

//generation de mot secret
const secretword = (word)=> {
  
  return secret = '_'.repeat(word.length)
}
//on devine les lettres
const guess = (word,secret,char) => {
  let tmp =''
  if(word.includes(char)){
    for(let i = 0 ; i < word.length;++i){
      if( char ===  word[i] && char !== secret[i]){   
        tmp += char
      }
      else if(word[i] === secret[i]) {
        tmp += word[i]
      }
      else{
        tmp +='_'
      }
    }
    return [tmp,true]
  }else{
    tmp = secret
  return [tmp,false]
  } 
}

// les scores

const ranking = () => {
  const scoresData =JSON.parse(fs.readFileSync('score-list.json','utf-8'))
  let ranked = [...scoresData]
  //console.log(ranked)
  ranked = ranked.sort((a,b) => (a.totalScore < b.totalScore) ? 1 : ((b.totalScore < a.totalScore) ? -1 : 0))
  console.log(ranked)
  // on boucle pour les 10 meilleurs
  for(let user of ranked.slice(4)){
    console.log(`${ranked.userName} - ${ranked.userName}`)
  }
}

const addScore = (userName,nbWords,nbFail,totalScore) => {
  const scoresData =JSON.parse(fs.readFileSync('score-list.json','utf-8'))
  let array= [...scoresData]
  let user = { userName: userName, nbWords: nbWords,nbFail:nbFail,totalScore: totalScore }
  array.push(user)
  fs.writeFileSync('score-list.json',JSON.stringify(array))
}

// le pendu
const hangMan = (nb) => {
  const HANGMANPICS = [``,`
    +---+
    |   |
        |
        |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
        |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`, `
     
   
  
    O/    
   /|   
   / \\   
  =========`]
return HANGMANPICS[nb]
}

exports.randomWord = randomWord
exports.secretword = secretword
exports.guess = guess
exports.hangMan = hangMan
exports.ranking = ranking
exports.addScore = addScore