const fs = require('fs')
const readlineSync = require('readline-sync')
const {guess,randomWord} = require('./functions')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')


// une partie
const game = () => {

  let word = randomWord(words)
  let secret = '_ '.repeat(word.length).trim()
  let question = ''
  console.log(secret)
  while(word !== secret){
    question = readlineSync.question('choisissez une lettre:  ')
    console.log([secret,isSuccess] = guess(word,secret,question.toUpperCase()))
    
  }

  // guess = (word,secret,question.toUpperCase())
}
game()

// let continuer = ['Continuer']
// let index = readlineSync.keyInSelect(continuer, 'Voulez vous continuer')
// switch(index) {
//   case 0 :
//     //console.log('commencer la partie')
//     game()
//     break
// }
//exports.game = game