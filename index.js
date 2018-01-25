require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const wordLogic = new(require('./word/WordLogic'))

const wordRouter = express.Router()

wordRouter.route('/')
    .get((req,res)=>{
        wordLogic.listWords()
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
        wordLogic.addWord(english, spanish, type)
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

app.use('/word', wordRouter)

console.log(`Connecting help-to-learn API db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log(`Starting help-to-learn API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('help-to-learn API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping help-to-learn API...')

    process.exit()
})