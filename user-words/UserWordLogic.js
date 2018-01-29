const userWordData = new(require('./UserWordData'))

class UserWordLogic {
    listWords(){
        return userWordData.listWords()
    }
	addWord(english, spanish, type){
		const _english = english.toLowerCase()
        const _spanish = spanish.toLowerCase()
        const _type = type.toLowerCase()
		return userWordData.addWord(_english, _spanish, _type)
    }
}

module.exports = UserWordLogic
