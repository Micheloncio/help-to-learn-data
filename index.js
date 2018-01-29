require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const userWordRouter = require('./server/user-words/UserWordRouter')

const mongoose = require('mongoose')


app.use(bodyParser.json())

app.use('/user-words', userWordRouter)

console.log(`Connecting help-to-learn API db on url ${process.env.DB_URL}`)

mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL)

console.log(`Starting help-to-learn API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('help-to-learn API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping help-to-learn API...')

    process.exit()
})