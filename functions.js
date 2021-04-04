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
const secretword = (word)=> {
  return secret = '_'.repeat(word.length)
}
//on devine les lettres
const guess = (word,secret,char) => {
  tmp =''
  if(word.includes(char)){
    for(let i = 0 ; i < word.length;++i){
      if( char ===  word[i] && char !== secret[i]){   
        tmp += char
       // console.log('Tmp: '+tmp)
        //word[i]=== char ? tmp += char+' ' : tmp +='_ '
      }else if(word[i] === secret[i]) {
        tmp += word[i]
      }else{
        tmp +='_'
      }
    }
    return [tmp,true]
  }else{
    tmp = secret
  return [tmp,false]
  } 
}

exports.randomWord = randomWord
exports.secretword = secretword
exports.guess = guess