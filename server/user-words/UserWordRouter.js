const express = require('express')
const userWordRouter = express.Router()

const userWordLogic = new(require('./UserWordLogic'))


userWordRouter.route('/')
    .get((req,res)=>{
        userWordLogic.listWords()
            .then(words=>{
                res.json({
                    status: 'OK',
                    message: 'Words listed successfully',
                    data: words
                })
            })
            .catch(err=>{
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    .post((req,res)=>{
        const {english, spanish, type} = req.body 
        userWordLogic.addWord(english, spanish, type)
            .then(word=>{
                res.json({
                    status: 'OK',
                    message: 'Word created successfully',
                    data: word
                })
            })
            .catch(err=>{
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

module.exports = userWordRouter