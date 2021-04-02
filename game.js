const fs = require('fs')
const readlineSync = require('readline-sync')
const {guess,randomWord} = require('./functions')


// une partie
let word = randomWord(words)
let secret = '_ '.repeat(word.length).trim()
console.log(word)
console.log(secret)

/* const game = () =>{
  console.log(secret)
  //let question = readlineSync.question('choisissez une lettre')
  [secret,isSuccess] = guess(word,secret,'A')

}
 */


// let continuer = ['Continuer']
// let index = readlineSync.keyInSelect(continuer, 'Voulez vous continuer')
// switch(index) {
//   case 0 :
//     //console.log('commencer la partie')
//     game()
//     break
// }
//exports.game = game