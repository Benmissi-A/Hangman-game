const fs = require('fs')
const readlineSync = require('readline-sync')
const {guess,randomWord,secretword} = require('./functions')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')


// une partie
const game = () => {

 // let word = randomWord(words) // on recupere le mot
  let word = randomWord(words)
  let secret = secretword(word)
  let question = ''
  console.log(`Le mot a deviner est:`)
  console.log(secret.split('').join(' ').trim())
  while(word !== secret){

    question = readlineSync.question('choisissez une lettre:  ')
    let [tmp,isSuccess] = guess(word , secret , question.toUpperCase() )
    secret = tmp
    console.log(secret.split('').join(' ').trim())
    
  }
}

// let continuer = ['Continuer']
// let index = readlineSync.keyInSelect(continuer, 'Voulez vous continuer')
// switch(index) {
//   case 0 :
//     //console.log('commencer la partie')
//     game()
//     break
// }
exports.game = game