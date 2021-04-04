const fs = require('fs')
const readlineSync = require('readline-sync')
const {guess,randomWord,secretword,hangMan} = require('./functions')
const words = fs.readFileSync('dict.txt','utf-8').toUpperCase().split('\n')


// une partie
const game = () => {

 // let word = randomWord(words) // on recupere le mot
  let word = randomWord(words)
  let secret = secretword(word)
  let nbFail = 0
  let question = ''
  while(word !== secret && nbFail < 7){
    //console.clear()
    console.log(`Le mot a deviner est:`)
    console.log(secret.split('').join(' ').trim())
    question = readlineSync.question('choisissez une lettre:  ')
    let [tmp,isSuccess] = guess(word , secret , question.toUpperCase() )
    secret = tmp
    isSuccess === true? 'ok' : nbFail++ 
    console.log(nbFail)
    console.log(secret.split('').join(' ').trim())
    console.log(hangMan(nbFail))
  }
  if(word === secret){
    console.log('gagné !')
  }else{
    console.log('pendu !')
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