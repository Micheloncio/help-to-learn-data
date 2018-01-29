const Word = require('./UserWordModel')

class UserWordData {

    listWords(){
        return new Promise((resolve, reject) => {
            Word.find({})
                .then(resolve)
                .catch(reject)
        })  
    }
    addWord(english, spanish, type){
        return new Promise((resolve, reject) => {
            if (!english)
                throw new Error('no english word provided')

            if (!spanish)
                throw new Error('no spanish word provided')

            if (!type)
                throw new Error('no type word provided')

            const word = new Word({ english, spanish, type })

            word.save()
                .then(resolve)
                .catch(reject)
        })  
    }
}

module.exports = UserWordData