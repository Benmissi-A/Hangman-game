const fs = require('fs')
const { randomInt } = require('crypto')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')
const readlineSync = require('readline-sync')

//generation de mots aleatoire
const randomWord = (array) => {
  let n = randomInt(0, array.length)
  return words[n]
}

//generation de mot secret
/* let word = randomWord(words)
let secret = '_ '.repeat(word.length).trim()
 */
//on devine les lettres
const guess = (word,secret,char) => {
  
  if(word.includes(char)){
    tmp =''
    for(let i = 0 ; i < word.length;++i){
     word[i]===char ? tmp += char+' ' : tmp +='_ '
    }
    return [tmp,true]
  }else{
  return [secret,false]
  } 
}

exports.guess = guess
exports.randomWord = randomWord