const fs = require('fs')
const readlineSync = require('readline-sync')
const {guess,randomWord} = require('./functions')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')


// une partie
const game = () => {

  let word = randomWord(words) // on recupere le mot
  let secret = '_ '.repeat(word.length)
  let question = ''
  while(word !== secret){
    console.log(secret)
    question = readlineSync.question('choisissez une lettre:  ')
    let [tmp,isSuccess] = guess('ABC',secret,question.toUpperCase())
    secret=tmp
    console.log('secret '+secret)
    
  }
 
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