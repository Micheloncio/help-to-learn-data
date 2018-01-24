const wordData = new(require('./WordData'))

class WordLogic {
    listWords(){
        return wordData.listWords()
    }
	addWord(english, spanish, type){
		const _english = english.toLowerCase()
        const _spanish = spanish.toLowerCase()
        const _type = type.toLowerCase()
		return wordData.addWord(_english, _spanish, _type)
    }
}

module.exports = WordLogic
